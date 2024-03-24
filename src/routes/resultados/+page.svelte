<script>
    import atletismo from "$lib/assets/atletismo.jpeg";
    import basquete from "$lib/assets/basquete.jpeg";
    import esgrima from "$lib/assets/esgrima.jpeg";
    import futebol from "$lib/assets/futebol.jpeg";
    import judo from "$lib/assets/judo.jpeg";
    import natacao from "$lib/assets/natacao.jpeg";
    import orientacao from "$lib/assets/orientacao.jpeg";
    import tiro from "$lib/assets/tiro.jpeg";
    import triatlo from "$lib/assets/triatlo.jpeg";
    import volei from "$lib/assets/volei.jpeg";
    import xadrez from "$lib/assets/xadrez.jpeg";
    import biatlo from "$lib/assets/biatlo.jpeg";
    import cabo_de_guerra from "$lib/assets/cabo_de_guerra.jpeg";
    import corrida_rustica from "$lib/assets/corrida_rustica.jpeg";
    let images = {
        atletismo: atletismo,
        basquete: basquete,
        esgrima: esgrima,
        futebol: futebol,
        judo: judo,
        natacao: natacao,
        orientacao: orientacao,
        tiro: tiro,
        triatlo: triatlo,
        volei: volei,
        xadrez: xadrez,
        biatlo: biatlo,
        cabo_de_guerra: cabo_de_guerra,
        corrida_rustica: corrida_rustica
    };

    import cvk from "$lib/assets/BOLACHA-CAVOK.png";
    import thb from "$lib/assets/BOLACHA-THUNDERBOLT.png";
    import xvt from "$lib/assets/BOLACHA-XAVANTE.png";

    //let esportes = ["Natação", "Triatlo", "Atletismo", "Esgrima", "Futebol", "Basquete", "Vôlei", "Judô", "Orientação", "Xadrez", "Tiro", "Biatlo", "Cabo de Guerra", "Corrida Rústica"];
    export let data;
    const resultadoParcial = [
        {
            modalidade: "Natação",
            xvt: '<strong style="color:#cd7f32">Bronze</strong>',
            thb: '<strong style="color:#c0c0c0">Prata</strong>',
            cvk: '<strong style="color:#ffd700">Ouro</strong>' 
        },
        {
            modalidade: "Triatlo",
            xvt: "-",
            thb: "-",
            cvk: "-"
        },
        {
            modalidade: "Atletismo",
            xvt: '<strong style="color:#cd7f32">Bronze</strong>',
            thb: '<strong style="color:#c0c0c0">Prata</strong>',
            cvk: '<strong style="color:#ffd700">Ouro</strong>' 
        },
        {
            modalidade: "Esgrima",
            xvt: '<strong style="color:#cd7f32">Bronze</strong>',
            thb: '<strong style="color:#c0c0c0">Prata</strong>',
            cvk: '<strong style="color:#ffd700">Ouro</strong>' 
        },
        {
            modalidade: "Futebol",
            xvt: "-",
            thb: "-",
            cvk: "-"
        },
        {
            modalidade: "Basquete",
            xvt: "-",
            thb: "-",
            cvk: "-"
        },
        {
            modalidade: "Vôlei",
            xvt: "-",
            thb: "-",
            cvk: "-"
        },
        {
            modalidade: "Judô",
            xvt: "-",
            thb: "-",
            cvk: "-"
        },
        {
            modalidade: "Orientação",
            xvt: "-",
            thb: "-",
            cvk: "-"
        },
        {
            modalidade: "Xadrez",
            xvt: "-",
            thb: "-",
            cvk: "-"
        },
        {
            modalidade: "Tiro",
            xvt: "-",
            thb: "-",
            cvk: "-"
        },
        {
            modalidade: "Biatlo",
            xvt: "-",
            thb: "-",
            cvk: "-"
        },
        {
            modalidade: "Cabo de Guerra",
            xvt: "-",
            thb: "-",
            cvk: "-"
        },
        {
            modalidade: "Corrida Rústica",
            xvt: "-",
            thb: "-",
            cvk: "-"
        }
    ];
</script>

<section>
    <h1>Placar Parcial</h1>
    <div class=bolachas>
        <img alt="Bolacha Xavante" src={xvt}/>
        <img alt="Bolacha Thunderbolt" src={thb}/>
        <img alt="Bolacha Cavok" src={cvk}/>
    </div>
    <div class="placar">
        <div class="titulo row">
            <p class="col1">Modalidade</p>
            <p class="col2">XVT</p>
            <p class="col3">THB</p>
            <p class="col4">CVK</p>
        </div>
        {#each resultadoParcial as result}
        <div class="row">
            <p class="col1">{result.modalidade}</p>
            <p class="col2">{@html result.xvt}</p>
            <p class="col3">{@html result.thb}</p>
            <p class="col4">{@html result.cvk}</p>
        </div>
        {/each}
        <hr>
        <div class="footer row">
            <p class="col1">Total</p>
            <p class="col2" style="color: #cd7f32">3</p>
            <p class="col3" style="color: #c0c0c0">6</p>
            <p class="col4" style="color: #ffd700">12</p>
        </div>
    </div>
</section>

<section>
    <h1>Modalidades</h1>
    <div class="wrapper">
        {#each data.pages as modalidade}
        <a style="background-image: url({images[modalidade.slug]}); background-size: 200%;  background-position: center;" href="/resultados/{modalidade.slug}" class="esporte"><p>{modalidade.name}</p></a>
        {/each}
    </div>
</section>

<style>
    @import url("https://fonts.googleapis.com/css?family=Roboto");
    /* PLACAR PARCIAL */
    .bolachas {
        width: 700px;
        max-width: 90%;
        display: flex;
        flex-flow: row;
        justify-content: space-around;
    }
    .bolachas img {
        height: 100px;
    }
    .placar {
        width: 500px;
        max-width: 100%;
        margin: 1em 0;
        padding: 8px;
        border-radius: 10px;
        background: rgba(150, 150, 150, 0.3);

        display: flex;
        flex-flow: column;
    }
    .titulo {
        text-align: center;
    }
    .row {
        width: 100%;
        display: flex;
        flex-flow: row;
    }
    .placar p {
        padding: 5px;
        margin: 2px;
        text-align: center;
        border-radius: 10px;
    }
    .col1 {
        font-family: "Roboto";
        flex: 2;
        background-color: rgba(238, 255, 0, 0.311);
    }
    .col2 {
        flex: 1;
        background-color: #36464060;
    }
    .col3 {
        flex: 1;
        background-color: #1c3c9b60;
    }
    .col4 {
        flex: 1;
        background-color: #1c9b7160;
    }

    /* MODALIDADES */
    .wrapper {
        display: flex;
        flex-flow: row wrap;
        justify-content: space-around;
        align-items: center;
    }
    .esporte {
        background-color: rgba(150, 0, 0, 0.4);
        border-radius: 40px;
        border: 2px solid black;
        width: 150px;
        padding: 30px 0;
        margin: 20px 5px;
        text-align: center;
        font-size: 20px;


        transition: .2s ease-in-out;
    }
    .esporte p {
        background-color: rgba(255, 255, 255, 0.6);
        line-height: 1.5em;
    }
    .esporte:hover {
        transform: scale(1.1);
    }
    @media (width > 800px) {
        .esporte {
            width: 200px;
            padding: 40px 0;
            margin: 50px 25px;
        }
    }
</style>