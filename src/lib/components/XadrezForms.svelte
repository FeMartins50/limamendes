<script>
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
    <input class="titulo" type="text" name="nomeDaProva" placeholder="Confronto">

    <div class="table">
        <div class="jogo">
            <select class="atleta left" name="equipe0">
                <option value="xvt">XVT</option>
                <option value="thb">THB</option>
                <option value="cvk">CVK</option>
            </select>
            <select class="atleta right" name="equipe1">
                <option value="xvt">XVT</option>
                <option value="thb">THB</option>
                <option value="cvk">CVK</option>
            </select>
        </div>
        {#each result.confronto as jogo, i}
        <div class="jogo">
            <input required class="atleta left" type="text" name="atl{i}x0" placeholder="Atleta">
            <input required class="ponto left" type="text" name="mk{i}x0" placeholder="-">
            <input required class="ponto right" type="text" name="mk{i}x1" placeholder="-">
            <input required class="atleta right" type="text" name="atl{i}x1" placeholder="Atleta">
        </div>
        {/each}
    </div>
</div>

<style>
    .result {
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
    .jogo input, .jogo select {
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
</style>