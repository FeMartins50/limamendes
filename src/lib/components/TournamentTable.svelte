<script>
    export let title = "EEITAAAA";
    export let result = {
        oitavas: [
            {
                atletas: ["-", "-"],
                equipes: ["-", "-"],
                pontos: ["-", "-"]
            },
            {
                atletas: ["-", "-"],
                equipes: ["-", "-"],
                pontos: ["-", "-"]
            },
            {
                atletas: ["-", "-"],
                equipes: ["-", "-"],
                pontos: ["-", "-"]
            },
            {
                atletas: ["-", "-"],
                equipes: ["-", "-"],
                pontos: ["-", "-"]
            },
            {
                atletas: ["-", "-"],
                equipes: ["-", "-"],
                pontos: ["-", "-"]
            },
            {
                atletas: ["-", "-"],
                equipes: ["-", "-"],
                pontos: ["-", "-"]
            },
            {
                atletas: ["-", "-"],
                equipes: ["-", "-"],
                pontos: ["-", "-"]
            },
            {
                atletas: ["-", "-"],
                equipes: ["-", "-"],
                pontos: ["-", "-"]
            }
        ],
        quartas: [
            {
                atletas: ["-", "-"],
                equipes: ["-", "-"],
                pontos: ["-", "-"]
            },
            {
                atletas: ["-", "-"],
                equipes: ["-", "-"],
                pontos: ["-", "-"]
            },
            {
                atletas: ["-", "-"],
                equipes: ["-", "-"],
                pontos: ["-", "-"]
            },
            {
                atletas: ["-", "-"],
                equipes: ["-", "-"],
                pontos: ["-", "-"]
            }
        ],
        semi: [
            {
                atletas: ["-", "-"],
                equipes: ["-", "-"],
                pontos: ["-", "-"]
            },
            {
                atletas: ["-", "-"],
                equipes: ["-", "-"],
                pontos: ["-", "-"]
            }
        ],
        finais: [
            {
                atletas: ["-", "-"],
                equipes: ["-", "-"],
                pontos: ["-", "-"]
            },
            {
                atletas: ["-", "-"],
                equipes: ["-", "-"],
                pontos: ["-", "-"]
            }
        ]
    }
</script>

<div class="tournament">
    <div class="titulo">{title}</div>
    <div class="wrapper">
        <div class="container">
            <p class="subtitulo">Oitavas</p>
            <div class="column">
                {#each result.oitavas as jogo}
                <div class="confronto">
                    <div class="oponente {jogo.equipes[0]}">
                        <p class="atleta">{jogo.atletas[0]}</p>
                        <p class="ponto">{jogo.pontos[0]}</p>
                    </div>
                    <div class="oponente {jogo.equipes[1]}">
                        <p class="atleta">{jogo.atletas[1]}</p>
                        <p class="ponto">{jogo.pontos[1]}</p>
                    </div>
                </div>
                {/each}
            </div>
        </div>
        <div class="container">
            <p class="subtitulo">Quartas</p>
            <div class="column">
                {#each result.quartas as jogo}
                <div class="confronto">
                    <div class="oponente {jogo.equipes[0]}">
                        <p class="atleta">{jogo.atletas[0]}</p>
                        <p class="ponto">{jogo.pontos[0]}</p>
                    </div>
                    <div class="oponente {jogo.equipes[1]}">
                        <p class="atleta">{jogo.atletas[1]}</p>
                        <p class="ponto">{jogo.pontos[1]}</p>
                    </div>
                </div>
                {/each}
            </div>
        </div>
        <div class="container">
            <p class="subtitulo">Semi-Finais</p>
            <div class="column">
                {#each result.semi as jogo}
                <div class="confronto">
                    <div class="oponente {jogo.equipes[0]}">
                        <p class="atleta">{jogo.atletas[0]}</p>
                        <p class="ponto">{jogo.pontos[0]}</p>
                    </div>
                    <div class="oponente {jogo.equipes[1]}">
                        <p class="atleta">{jogo.atletas[1]}</p>
                        <p class="ponto">{jogo.pontos[1]}</p>
                    </div>
                </div>
                {/each}
            </div>
        </div>
        <div class="container">
            <p class="subtitulo">Final</p>
            <div class="column">
                <div class="confronto">
                    <p class="finaltitle">Disputa de 1º Lugar</p>
                    <div class="oponente {result.finais[0].equipes[0]}">
                        <p class="atleta">{result.finais[0].atletas[0]}</p>
                        <p class="ponto">{result.finais[0].pontos[0]}</p>
                    </div>
                    <div class="oponente {result.finais[0].equipes[1]}">
                        <p class="atleta">{result.finais[0].atletas[1]}</p>
                        <p class="ponto">{result.finais[0].pontos[1]}</p>
                    </div>
                </div>
                <div class="confronto">
                    <p class="finaltitle">Disputa de 3º Lugar</p>
                    <div class="oponente {result.finais[1].equipes[0]}">
                        <p class="atleta">{result.finais[1].atletas[0]}</p>
                        <p class="ponto">{result.finais[1].pontos[0]}</p>
                    </div>
                    <div class="oponente {result.finais[1].equipes[1]}">
                        <p class="atleta">{result.finais[1].atletas[1]}</p>
                        <p class="ponto">{result.finais[1].pontos[1]}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<style>
    .tournament {
        margin: 10px 0;
        width: 800px;
        max-width: 94vw;

        display: flex;
        flex-flow: column;
        align-items: center;
    }
    .wrapper {
        width: 100%;
        overflow-x: auto;
        display: flex;
        flex-flow: row;
        justify-content: baseline;

        padding: 5px;
        background-color: rgba(150, 150, 150, 0.3);
    }
    .titulo {
        text-decoration: underline;
        margin: 10px;
    }
    .container {
        width: 180px;
        flex-shrink: 0;
        display: flex;
        flex-flow: column;
    }
    .subtitulo {
        text-align: center;
        flex: 1;
    }
    .finaltitle {
        font-size: 13px;
    }
    .column {
        flex: 25;

        display: flex;
        flex-flow: column;
        justify-content: space-around;
    }
    .confronto {
        margin: 12px;
    }
    .oponente {
        display: flex;
        flex-flow: row;
        justify-content: space-between;

        border: 1px solid black;
        border-radius: 8px;
        margin: 2px;
    }
    .atleta {
        margin: 2px;
        flex: 4;
    }
    .ponto {
        margin: 0;
        flex: 1;
    }
    .cvk {
        background-color: #1c9b7160;
    }
    .thb {
        background-color: #1c3c9b60;
    }
    .xvt {
        background-color: #36464060;
    }
</style>