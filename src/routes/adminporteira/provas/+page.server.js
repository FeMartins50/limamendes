import * as modalidadesDB from '$lib/server/modalidades.js';
/*
    nomeDaProva -> como aparece no site
    modalidade -> slug
    resultJSON -> objeto ou array pra TableComponent
    type -> 0: MarkTable, 1: MultiMarkTable, 2: FightTable, 3: MatchTable (chaves), 
*/
export const actions = {
    updateProva: async ({ request }) => {
        const data = await request.formData();
        const nomeDaProva = data.get('nomeDaProva').trim();
        const modalidade = data.get('modalidade').trim();
        const type = data.get('type').trim();

        let result = createResult(data, type);
        let resultsJSON = JSON.stringify(result);
        let successCode = modalidadesDB.addProva(modalidade, nomeDaProva, resultsJSON, type);
        if (successCode < 0) {
            successCode = modalidadesDB.updateProva(nomeDaProva, resultsJSON, type);
        };

        return {
            success: successCode > 0 ? true : false,
            nomeDaProva: nomeDaProva
        };
    },
    removeProva: async ({ request }) => {
        const data = await request.formData();
        const nomeDaProva = data.get('nomeDaProva').trim();

        let successCode = modalidadesDB.removeProva(nomeDaProva);

        return {
            success: successCode > 0 ? true : false,
            nomeDaProva: nomeDaProva
        };
    }
}

function createResult (data, type) {
    let result = {};
    let atleta, equipe, marca;
    switch (type) {
        case "0":
            let label0 = data.get('label0').trim();
            let label1 = data.get('label1').trim();
            result = {
                labels: [label0, label1],
                marks: []
            };
            for (let i = 0; i < 6; i++) {
                atleta = data.get('atl' + i);
                equipe = data.get('esq' + i);
                marca = data.get('mk' + i);
                if (atleta == "" || atleta == "-") {
                    atleta = "-";
                    equipe = "-";
                    marca = "-";
                };
                result.marks.push({
                    atleta: atleta,
                    equipe: equipe,
                    marca: marca
                });
            };
            break;
        case "1":
            let label, marcas = [];
            result = {
               labels: [],
               marks: [] 
            };
            for (let i = 0; i < 5; i++) {
                label = data.get('label'+i);
                if (label == "") break;
                result.labels.push(label);
            }
            for (let i = 0; i < 6; i++) {
                atleta = data.get('atl' + i);
                equipe = data.get('esq' + i);
                marcas = [];
                for (let j = 0; j < result.labels.length - 1; j++) {
                    marca = data.get('mk' + i + 'x' + j)
                    marcas.push((marca == "" ? "-" : marca));
                }
                if (atleta == "" || atleta == "-") {
                    atleta = "-";
                    equipe = "-";
                };
                result.marks.push({
                    atleta: atleta,
                    equipe: equipe,
                    marcas: marcas
                });
            }
            break;
        case "2":
            result = {
                atletas: [],
                table: [[]]
            };
            for (let i = 0; i < 9; i++) {
                atleta = data.get('atl' + i);
                equipe = data.get('esq' + i);
                if (atleta == "" || atleta == "-") {
                    break;
                }
                result.atletas.push({
                    name: atleta,
                    equipe: equipe
                });
            };
            for (let i = 0; i < 9; i++) {
                result.table[i] = [];
                for (let j = 0; j < result.atletas.length; j++) {
                    marca = data.get('mk' + i + 'x' + j);
                    if (i == j) {
                        marca = "-";
                    }
                    result.table[i].push(marca);
                }
            }
            break;
        case "3": 
            result = {
                times: ["--", "--"],
                placar: ["-", "-"]
            };
            result.times[0] = data.get("time0");
            result.times[1] = data.get("time1");
            result.placar[0] = data.get("placar0");
            result.placar[1] = data.get("placar1");
            break;
        case "4":
            result = {
                oitavas: [],
                quartas: [],
                semi: [],
                finais: []
            };
            let atletas = [];
            let equipes = [];
            let pontos = [];
            for (let i = 0; i < 8; i++) {
                atletas = []; equipes = []; pontos = [];
                if (data.get('8xatl'+ i +'x0') == "") {
                    atletas.push("-");
                    equipes.push("-");
                    pontos.push("-");
                } else {
                    atletas.push(data.get('8xatl'+ i +'x0'));
                    equipes.push(data.get('8xesq'+ i +'x0'));
                    pontos.push(data.get('8xmk'+ i +'x0'));
                }

                if (data.get('8xatl'+ i +'x1') == "") {
                    atletas.push("-");
                    equipes.push("-");
                    pontos.push("-");
                } else {
                    atletas.push(data.get('8xatl'+ i +'x1'));
                    equipes.push(data.get('8xesq'+ i +'x1'));
                    pontos.push(data.get('8xmk'+ i +'x1'));
                }

                result.oitavas.push({
                    atletas: atletas,
                    equipes: equipes,
                    pontos: pontos
                });
            };
            for (let i = 0; i < 4; i++) {
                atletas = []; equipes = []; pontos = [];
                if (data.get('4xatl'+ i +'x0') == "") {
                    atletas.push("-");
                    equipes.push("-");
                    pontos.push("-");
                } else {
                    atletas.push(data.get('4xatl'+ i +'x0'));
                    equipes.push(data.get('4xesq'+ i +'x0'));
                    pontos.push(data.get('4xmk'+ i +'x0'));
                }

                if (data.get('4xatl'+ i +'x1') == "") {
                    atletas.push("-");
                    equipes.push("-");
                    pontos.push("-");
                } else {
                    atletas.push(data.get('4xatl'+ i +'x1'));
                    equipes.push(data.get('4xesq'+ i +'x1'));
                    pontos.push(data.get('4xmk'+ i +'x1'));
                }

                result.quartas.push({
                    atletas: atletas,
                    equipes: equipes,
                    pontos: pontos
                });
            };
            for (let i = 0; i < 2; i++) {
                atletas = []; equipes = []; pontos = [];
                if (data.get('2xatl'+ i +'x0') == "") {
                    atletas.push("-");
                    equipes.push("-");
                    pontos.push("-");
                } else {
                    atletas.push(data.get('2xatl'+ i +'x0'));
                    equipes.push(data.get('2xesq'+ i +'x0'));
                    pontos.push(data.get('2xmk'+ i +'x0'));
                }

                if (data.get('2xatl'+ i +'x1') == "") {
                    atletas.push("-");
                    equipes.push("-");
                    pontos.push("-");
                } else {
                    atletas.push(data.get('2xatl'+ i +'x1'));
                    equipes.push(data.get('2xesq'+ i +'x1'));
                    pontos.push(data.get('2xmk'+ i +'x1'));
                }

                result.semi.push({
                    atletas: atletas,
                    equipes: equipes,
                    pontos: pontos
                });
            };
            for (let i = 0; i < 2; i++) {
                atletas = []; equipes = []; pontos = [];
                if (data.get('1xatl'+ i +'x0') == "") {
                    atletas.push("-");
                    equipes.push("-");
                    pontos.push("-");
                } else {
                    atletas.push(data.get('1xatl'+ i +'x0'));
                    equipes.push(data.get('1xesq'+ i +'x0'));
                    pontos.push(data.get('1xmk'+ i +'x0'));
                }

                if (data.get('1xatl'+ i +'x1') == "") {
                    atletas.push("-");
                    equipes.push("-");
                    pontos.push("-");
                } else {
                    atletas.push(data.get('1xatl'+ i +'x1'));
                    equipes.push(data.get('1xesq'+ i +'x1'));
                    pontos.push(data.get('1xmk'+ i +'x1'));
                }

                result.finais.push({
                    atletas: atletas,
                    equipes: equipes,
                    pontos: pontos
                });
            };
            
            break;
        case "5":
            result = {
                equipes: [],
                confronto: []
            }
            result.equipes[0] = data.get('equipe0');
            result.equipes[1] = data.get('equipe1');
            for (let i = 0; i < 4; i++) {
                result.confronto.push({
                    atleta1: data.get('atl'+ i +'x0'),
                    ponto1: data.get('mk'+ i +'x0'),
                    atleta2: data.get('atl'+ i +'x1'),
                    ponto2: data.get('mk'+ i +'x1')
                })
            }
            break;
    }
    return result;
}