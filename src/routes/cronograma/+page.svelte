<script>
    const semana = ["Segunda-Feira", "Terça-Feira", "Quarta-Feira", "Quinta-Feira", "Sexta-Feira", "Sábado","Domingo"]
    function getDayText (ISOString) {
        let timeText = "";
        const date = new Date(ISOString);
        if (date.getDate()+1 < 10) {
            timeText += "0";
        }
        timeText += (date.getDate()+1) + "/";
        if (date.getMonth()+1 < 10) {
            timeText += "0";
        }
        timeText += (date.getMonth() + 1) + " - ";
        timeText += "(" + semana[date.getDay()] + ")"
        return timeText;
    }
    export let data;
</script>

<section>
    <h1>Cronograma Lima Mendes 2024</h1>
    <div class="wrapper">
        {#each data.dailySchedule as schedule}
        <h2>{getDayText(schedule.day)}</h2>
        <div class="headerRow">
            <p class="fiColumn">Evento</p>
            <p class="seColumn">Local</p>
            <p class="thColumn">Data / Horário</p>
        </div>
        {#each schedule.events as event}
        <div class="row">
            <p class="fiColumn">{event.name}</p>
            <p class="seColumn">{event.location}</p>
            <p class="thColumn">{event.time}</p>
        </div>
        {/each}
        <br><br>
        {/each}
    </div>
</section>

<style>
    h1 {
        text-align: center;
    }
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
        max-width: 100%;
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
        flex: 3;
    }
    .seColumn {
        flex: 1;
    }
    .thColumn {
        flex: 1;
    }
</style>