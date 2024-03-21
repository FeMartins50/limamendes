<script>
    export let title = '--';
    export let result = {
        equipes: ["-", "-"],
        confronto: [
            {
                atleta1: "-",
                ponto1: "0",
                atleta2: "-",
                ponto2: "0"
            },
            {
                atleta1: "-",
                ponto1: "0",
                atleta2: "-",
                ponto2: "0"
            },
            {
                atleta1: "-",
                ponto1: "0",
                atleta2: "-",
                ponto2: "0"
            },
            {
                atleta1: "-",
                ponto1: "0",
                atleta2: "-",
                ponto2: "0"
            }
        ]
    };
</script>

<div class="result">
    <div class="titulo">
        {title}
    </div>
    <div class="table">
        {#each result.confronto as jogo}
        <div class="jogo">
            <p class="atleta left {result.equipes[0]}">{jogo.atleta1}</p>
            <p class="ponto left">{jogo.ponto1}</p>
            <p class="ponto right">{jogo.ponto2}</p>
            <p class="atleta right {result.equipes[1]}">{jogo.atleta2}</p>
        </div>
        {/each}
    </div>
</div>

<style>
    .result {
        margin: 10px 0;
        width: 400px;
        max-width: 49%;
        display: flex;
        flex-flow: column;
        align-items: center;
    }
    .titulo {
        text-align: center;
        text-decoration: underline;
        
    }
    .table {
        width: 500px;
        max-width: 100%;
        margin: .3em 0;
        padding: 8px;
        border-radius: 8px;
        background: rgba(150, 150, 150, 0.2);
    
        display: flex;
        flex-flow: column;
        justify-content: space-around;
    }
    .jogo {
        display: flex;
        flex-flow: row;
    }
    .jogo p {
        font-size: 12px;
        padding: 5px 2px;
        margin: 1px;
    }
    .atleta.left {
        text-align: left;
    }
    .atleta.right {
        text-align: right;
    }
    .atleta {
        flex: 5;
    }
    .ponto {
        flex: 2;
        text-align: center;
        background-color: rgba(255, 255, 255, .7);
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