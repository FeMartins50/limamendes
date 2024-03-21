<script>
    let result = {
        atletas: [
            "Atletas",
            "Atletas",
            "Atletas",
            "Atletas",
            "Atletas",
            "Atletas",
            "Atletas",
            "Atletas",
            "Atletas"
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

<input class="titulo" type="text" name="nomeDaProva" placeholder="Nome da Prova">

<div class="table">
    <div class="row first">
        <p class="atleta">ATLETAS</p>
        <p class="equipe">EQUIPE</p>
        <p class="numAtleta">X</p>
        {#each result.atletas as atleta, i}
        <p class="numAtleta">{i+1}</p>
        {/each}
    </div>
    {#each result.atletas as atleta, i}
    <div class="row">
        <input class="atleta" type="text" name="atl{i}" placeholder={result.atletas[i]}>
        <select class="equipe" name="esq{i}">
            <option value="xvt">XVT</option>
            <option value="thb">THB</option>
            <option value="cvk">CVK</option>
        </select>
        <p class="numAtleta">{i+1}</p>
        {#each result.table[i] as ponto, j}
        {#if j != i}
        <input class="ponto" type="text" name="mk{i}x{j}">
        {:else if j == i}
        <p class="ponto">{ponto}</p>
        {/if}
        {/each}
    </div>
    {/each}
</div>

<style>
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
.row input, .row select, .row p {
    font-size: 12px;
    padding: 5px 2px;
    margin: 3px 2px;
}
.atleta {
    flex: 4;
}
.equipe {
    flex: 3;
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
</style>