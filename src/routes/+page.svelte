<script>
    import logo from "$lib/assets/logoLM2.png";
    import cda from "$lib/assets/DOM CDA.png";
    export let data;
</script>

<section>
    <img alt="Logo da Competição Lima Mendes." id="logo" src={logo}/>
    <img alt="Distintivo da CDA (Comissão de Desportos da Aeronáutica)." id="cda" src={cda}/>
    <h1>67ª Competição Troféu Tenente Lima Mendes</h1>
    <br><br>
</section>

<section>
    {#if data.events.length > 0}
    <h1>Programação do Dia: {data.day}</h1>
    <div class="wrapper">
        <div class="headerRow">
            <p class="fiColumn">Evento</p>
            <p class="seColumn">Local</p>
            <p class="thColumn">Data / Horário</p>
        </div>
        {#each data.events as event}
        <div class="row">
            <p class="fiColumn">{event.name}</p>
            <p class="seColumn">{event.location}</p>
            <p class="thColumn">{event.time}</p>
        </div>
        {/each}
    </div>
    <br><br>
    {:else}
    <h1>Sem eventos para hoje ({data.day})</h1>
    {/if}
</section>

<style>
    /* FIRST */
    #logo {
        margin: 50px 0;
        height: 200px;
    }
    #cda {
        height: 200px;
        margin-bottom: 50px;
    }

    /* SECOND */
    .wrapper {
        display: flex;
        flex-flow: column;

        width: 1000px;
        max-width: 90vw;
        padding: .7em;
        border-radius: .5em;
        border: 2px solid black;
        background: rgba(200, 200, 200, .4);
    }
    .wrapper .row:nth-child(odd) {
        background: rgba(180, 180, 180, .4);
    }
    .wrapper .row:nth-child(even) {
        background: rgba(160, 160, 160, .4);
    }
    .headerRow, .row {
        display: flex;
        flex-flow: row;
        justify-content: space-around;
        align-items: center;
        flex-grow: 0;
    }
    .headerRow {
        padding: 14px 0;
        background-color: rgba(20, 150, 220, 0.5);
    }
    .row {
        margin: 4px 0;
    }
    .headerRow p {
        text-align: center;
    }
    .row p {
        padding: 10px 0;
        text-align: center;
        font-size: 16px;
    }
    .fiColumn {
        width: 35%;
    }
    .seColumn {
        width: 35%;
    }
    .thColumn {
        width: 30%;
    }
    /* END FIRST */
</style>