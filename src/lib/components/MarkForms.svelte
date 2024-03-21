<input class="titulo" type="text" name="nomeDaProva" placeholder="Nome da Prova">

<div class="table">
    <div class="item">
        <input class="left" type="text" name="label0" placeholder="Nome coluna">
        <input class="right" type="text" name="label1" placeholder="Nome coluna"> 
        <p class="deadmass">--</p>
    </div>

    <div class="item">
        <input class="left" type="text" name="atl0" placeholder="Atleta">
        <input class="right" type="text" name="mk0" placeholder="Marca"> 
        <select name="esq0">
            <option value="xvt">XVT</option>
            <option value="thb">THB</option>
            <option value="cvk">CVK</option>
        </select>
    </div>

    <div class="item">
        <input class="left" type="text" name="atl1" placeholder="Atleta">
        <input class="right" type="text" name="mk1" placeholder="Marca"> 
        <select name="esq1">
            <option value="xvt">XVT</option>
            <option value="thb">THB</option>
            <option value="cvk">CVK</option>
        </select>
    </div>

    <div class="item">
        <input class="left" type="text" name="atl2" placeholder="Atleta">
        <input class="right" type="text" name="mk2" placeholder="Marca"> 
        <select name="esq2">
            <option value="xvt">XVT</option>
            <option value="thb">THB</option>
            <option value="cvk">CVK</option>
        </select>
    </div>

    <div class="item">
        <input class="left" type="text" name="atl3" placeholder="Atleta">
        <input class="right" type="text" name="mk3" placeholder="Marca"> 
        <select name="esq3">
            <option value="xvt">XVT</option>
            <option value="thb">THB</option>
            <option value="cvk">CVK</option>
        </select>
    </div>

    <div class="item">
        <input class="left" type="text" name="atl4" placeholder="Atleta"> 
        <input class="right" type="text" name="mk4" placeholder="Marca"> 
        <select name="esq4">
            <option value="xvt">XVT</option>
            <option value="thb">THB</option>
            <option value="cvk">CVK</option>
        </select>
    </div>

    <div class="item">
        <input class="left" type="text" name="atl5" placeholder="Atleta">
        <input class="right" type="text" name="mk5" placeholder="Marca"> 
        <select name="esq5">
            <option value="xvt">XVT</option>
            <option value="thb">THB</option>
            <option value="cvk">CVK</option>
        </select>
    </div>
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
    align-items: center;
}
.item input, .item select {
    font-size: 12px;
    padding: 5px 2px;
    margin: 1px;
}
.left {
    flex: 2;
    text-align: left;
}
.right {
    flex: 1;
    text-align: center;
}
select {
    flex: 1;
}
.deadmass {
    flex: 1;
    padding: 5px 2px;
    margin: 1px;
}
</style>