<script>
    let atletas = ["-","-","-","-","-","-"];
    let marcas = ["-", "-", "-", "-"];
</script>

<input class="titulo" type="text" name="nomeDaProva" placeholder="Nome da Prova">

<div class="table">
    <div class="item">
        <input class="left" type="text" name="label0" placeholder="Nome da Coluna">
        <p class="right"> --- </p>
        {#each marcas as marca, j}
        <input class="right" type="text" name="label{j+1}" placeholder="Nome">
        {/each}
    </div>
    {#each atletas as atleta, i}
    <div class="item">
        <input class="left" type="text" name="atl{i}" placeholder="Atleta">
        <select class="right" name="esq{i}">
            <option value="xvt">XVT</option>
            <option value="thb">THB</option>
            <option value="cvk">CVK</option>
        </select>
        {#each marcas as marca, j}
        <input class="right" type="text" name="mk{i}x{j}">
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
    width: 500px;
    max-width: 100%;
    margin: .3em 0;
    padding: 8px;
    border-radius: 8px;
    background: rgba(150, 150, 150, 0.3);

    display: flex;
    flex-flow: column;
    justify-content: space-around;
}
.item {
    display: flex;
    flex-flow: row;
}
.item input, .item select, .item p {
    font-size: 12px;
    padding: 5px 2px;
    margin: 1px;
}
.left {
    flex: 4;
    text-align: left;
}
.right {
    flex: 1;
    text-align: center;
}
</style>