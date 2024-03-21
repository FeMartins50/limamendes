<script>
    export let title = '-';
    export let result = {
        atletas: [
            {
                name: "-",
                equipe: "-"
            },
            {
                name: "-",
                equipe: "-"
            },
            {
                name: "-",
                equipe: "-"
            },
            {
                name: "-",
                equipe: "-"
            },
            {
                name: "-",
                equipe: "-"
            },
            {
                name: "-",
                equipe: "-"
            },
            {
                name: "-",
                equipe: "-"
            },
            {
                name: "-",
                equipe: "-"
            },
            {
                name: "-",
                equipe: "-"
            }
        ],
        table: [
            ["-", "0", "0", "0", "0", "0", "0", "0", "0"],
            ["0", "-", "0", "0", "0", "0", "0", "0", "0"],
            ["0", "0", "-", "0", "0", "0", "0", "0", "0"],
            ["0", "0", "0", "-", "0", "0", "0", "0", "0"],
            ["0", "0", "0", "0", "-", "0", "0", "0", "0"],
            ["0", "0", "0", "0", "0", "-", "0", "0", "0"],
            ["0", "0", "0", "0", "0", "0", "-", "0", "0"],
            ["0", "0", "0", "0", "0", "0", "0", "-", "0"],
            ["0", "0", "0", "0", "0", "0", "0", "0", "-"]
        ]
    }
</script>

<div class="result">
    <div class="titulo">
        {title}
    </div>
    <div class="table">
        <div class="row">
            <p class="atleta">ATLETAS</p>
            <p class="numAtleta">X</p>
            {#each result.atletas as atleta, i}
            <p class="numAtleta">{i+1}</p>
            {/each}
        </div>
        {#each result.atletas as atleta, i}
        <div class="row">
            <p class="atleta {atleta.equipe}">{atleta.name}</p>
            <p class="numAtleta">{i+1}</p>
            {#each result.table[i] as ponto, j}
            {#if j < result.atletas.length}
            <p class="ponto">{ponto}</p>
            {/if}
            {/each}
        </div>
        {/each}
    </div>
    <!-- Dá pra add um extra no div de baixo, se existir, como detalhes de gols, pontuação de cada set... -->
</div>

<style>
.result {
    margin: 10px 0;
    width: 500px;
    max-width: 98vw;
    display: flex;
    flex-flow: column;
    align-items: center;
}
.titulo {
    text-align: center;
    text-decoration: underline;
    
}
.table {
    width: 100%;
    margin: .3em 0;
    padding: 8px;
    border-radius: 8px;
    background: rgba(150, 150, 150, 0.3);

    display: flex;
    flex-flow: column;
    justify-content: space-around;
}
.row {
    display: flex;
    flex-flow: row;
    align-items: center;
}
.row p {
    font-size: 14px;
    padding: 5px 2px;
    margin: 1px;
}
.atleta {
    flex: 4;
}
.numAtleta {
    background-color: rgba(230, 230, 70, 0.5);
    text-align: center;
    flex: 1;
}
.ponto {
    text-align: center;
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