<script>
    import saepcar from "$lib/assets/LOGO SAEPCAR.png";
    const prices = [
        ["Refrigerante Lata", "R$4,50"],
        ["Refrigerante 250ml", "R$3,00"],
        ["Príncipe Negro", "R$5,00"],
        ["Gatorade", "R$5,50"],
        ["H20", "R$5,50"],
        ["Salgados", "R$6,50"],
        ["Trufa", "R$3,50"],
        ["Alfajor", "R$4,00"],
        ["Sacolé Gourmet", "RS7,00"],
        ["Kit Kat", "R$3,50"],
        ["Trento", "R$2,50"],
        ["Snickers", "R$3,50"],
        ["Suflair", "R$4,00"],
        ["Brownie Recheado", "R$5,00"],
        ["Brownie sem Recheio", "R$5,50"],
        ["Barra Recheada", "R$7,00"],
        ["Bolo de Pote AD", "R$8,00"],
        ["Açaí", "R$19,00"]
    ];
</script>

<section>
    <div class="titulo">
        <img alt="Logo Sociedade Acadêmica" src={saepcar}>
        <h1>A Society está na Lima!</h1>
        <img alt="Logo Sociedade Acadêmica" src={saepcar}>
    </div>
    <br>
    <p>
        A Competição Tenente Lima Mendes é com certeza um dos eventos mais vibrantes organizados pela EPCAR, com dias inteiros de jogos
        e disputas. Faça sol ou faça chuva, a torcida não pode parar e deve sempre estar com energia pra fortalecer sua equipe.
    </p>
    <br>
    <p>
        Sabendo disso, a Sociedade Acadêmica da Escola Preparatória de Cadetes do Ar, torcendo junto de todos, tem o prazer de
        anunciar que está vendendo lanches e bebidas aos torcedores mais vibrantes. Você retoma suas energias, ao mesmo que
        contribui para o sustento da Society, tão amada pelos alunos.
    </p>
    <br>
    <h2>Tabela de Preços</h2>
    <div class="priceTable">
        {#each prices as item}
        <div class="item">
            <p>{item[0]}</p>
            <p>{item[1]}</p>
        </div>
        {/each}
    </div>
</section>

<style>
    .titulo {
        display: flex;
        flex-flow: row;
        margin: 20px;
        padding: 5px 10px;
        border-radius: 10px;
        background-color: rgba(154, 172, 81, 0.5);
        align-items: center;
    }
    h1 {
        font-size: 34px;
    }
    img {
        height: 50px;
    }
    p {
        line-height: 1.5em;
        font-size: 1.1em;
        max-width: 900px;
        text-align: justify;
    }
    .priceTable {
        width: 500px;
        max-width: 100%;
        margin: 1em 0;
        padding: 16px;
        border-radius: 20px;
        background: rgba(150, 150, 150, 0.3);

        display: flex;
        flex-flow: column;
        justify-content: space-around;
    }
    .item {
        display: flex;
        flex-flow: row;
    }
    .item p {
        flex: 1;
        padding: 0.5em;
        margin: 0.3em;
        text-align: center;
    }
    .priceTable .item:nth-child(odd) p {
        background: rgb(165, 205, 212);
    }
    .priceTable .item:nth-child(even) p {
        background: rgb(214, 213, 175);
    }
</style>