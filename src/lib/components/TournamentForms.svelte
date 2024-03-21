<script>
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
        final: {
            atletas: ["-", "-"],
            equipes: ["-", "-"],
            pontos: ["-", "-"]
        }
    }
</script>

<div class="tournament">
    <input required class="titulo" type="text" name="nomeDaProva" placeholder="Nome da Prova">

    <div class="wrapper">
        <div class="container">
            <p class="subtitulo">Oitavas</p>
            <div class="column">
                {#each result.oitavas as jogo, i}
                <div class="confronto">
                    <div class="oponente">
                        <input class="atleta" type="text" name="8xatl{i}x0" placeholder="Atleta">
                        <select class="ponto" name="8xesq{i}x0">
                            <option value="xvt">XVT</option>
                            <option value="thb">THB</option>
                            <option value="cvk">CVK</option>
                        </select>
                        <input class="ponto" type="text" name="8xmk{i}x0" placeholder="Pontos">
                    </div>
                    <div class="oponente">
                        <input class="atleta" type="text" name="8xatl{i}x1" placeholder="Atleta">
                        <select class="ponto" name="8xesq{i}x1">
                            <option value="xvt">XVT</option>
                            <option value="thb">THB</option>
                            <option value="cvk">CVK</option>
                        </select>
                        <input class="ponto" type="text" name="8xmk{i}x1" placeholder="Pontos">
                    </div>
                </div>
                {/each}
            </div>
        </div>
        <div class="container">
            <p class="subtitulo">Quartas</p>
            <div class="column">
                {#each result.quartas as jogo, i}
                <div class="confronto">
                    <div class="oponente">
                        <input class="atleta" type="text" name="4xatl{i}x0" placeholder="Atleta">
                        <select class="ponto" name="4xesq{i}x0">
                            <option value="xvt">XVT</option>
                            <option value="thb">THB</option>
                            <option value="cvk">CVK</option>
                        </select>
                        <input class="ponto" type="text" name="4xmk{i}x0" placeholder="Pontos">
                    </div>
                    <div class="oponente">
                        <input class="atleta" type="text" name="4xatl{i}x1" placeholder="Atleta">
                        <select class="ponto" name="4xesq{i}x1">
                            <option value="xvt">XVT</option>
                            <option value="thb">THB</option>
                            <option value="cvk">CVK</option>
                        </select>
                        <input class="ponto" type="text" name="4xmk{i}x1" placeholder="Pontos">
                    </div>
                </div>
                {/each}
            </div>
        </div>
        <div class="container">
            <p class="subtitulo">Semi-Finais</p>
            <div class="column">
                {#each result.semi as jogo, i}
                <div class="confronto">
                    <div class="oponente">
                        <input class="atleta" type="text" name="2xatl{i}x0" placeholder="Atleta">
                        <select class="ponto" name="2xesq{i}x0">
                            <option value="xvt">XVT</option>
                            <option value="thb">THB</option>
                            <option value="cvk">CVK</option>
                        </select>
                        <input class="ponto" type="text" name="2xmk{i}x0" placeholder="Pontos">
                    </div>
                    <div class="oponente">
                        <input class="atleta" type="text" name="2xatl{i}x1" placeholder="Atleta">
                        <select class="ponto" name="2xesq{i}x1">
                            <option value="xvt">XVT</option>
                            <option value="thb">THB</option>
                            <option value="cvk">CVK</option>
                        </select>
                        <input class="ponto" type="text" name="2xmk{i}x1" placeholder="Pontos">
                    </div>
                </div>
                {/each}
            </div>
        </div>
        <div class="container">
            <p class="subtitulo">Final</p>
            <div class="column">
                <div class="confronto">
                    <div class="oponente">
                        <input class="atleta" type="text" name="1xatl0" placeholder="Atleta">
                        <select class="ponto" name="1xesq0">
                            <option value="xvt">XVT</option>
                            <option value="thb">THB</option>
                            <option value="cvk">CVK</option>
                        </select>
                        <input class="ponto" type="text" name="1xmk0" placeholder="Pontos">
                    </div>
                    <div class="oponente">
                        <input class="atleta" type="text" name="1xatl1" placeholder="Atleta">
                        <select class="ponto" name="1xesq1">
                            <option value="xvt">XVT</option>
                            <option value="thb">THB</option>
                            <option value="cvk">CVK</option>
                        </select>
                        <input class="ponto" type="text" name="1xmk1" placeholder="Pontos">
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<style>
    .tournament {
        width: 800px;
        max-width: 98%;

        display: flex;
        flex-flow: column;
        align-items: center;
    }
    .titulo {
        text-align: center;
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
        width: 230px;
        flex-shrink: 0;
        display: flex;
        flex-flow: column;
    }
    .subtitulo {
        text-align: center;
        flex: 1;
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
        flex: 2;
    }
    .ponto {
        margin: 0;
        flex: 1;
    }
    .oponente input, .oponente select {
        margin-bottom: 0;
        padding: 0.2em;
        border-radius: .2em;
        border: 2px solid black;
        font-size: 12px;
        width: 100%;
    }
</style>