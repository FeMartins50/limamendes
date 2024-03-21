<script>
    export let data;
    import MarkTable from "$lib/components/MarkTable.svelte";
    import MultiMarkTable from "$lib/components/MultiMarkTable.svelte";
    import FightTable from "$lib/components/FightTable.svelte";
    import MatchTable from "$lib/components/MatchTable.svelte";
    import TournamentTable from "$lib/components/TournamentTable.svelte";
    import XadrezTable from "$lib/components/XadrezTable.svelte";

    // type -> 0: MarkTable, 1: MultiMarkTable, 2: FightTable, 3: MatchTable, 4: TournamentTable, 5: XadrezTable

    let marktables = [];
    let multimarktables = [];
    let fighttables = [];
    let matchtables = [];
    let tournamenttables = [];
    let xadreztables = [];

    marktables = data.provas?.filter(prova => prova.type == 0);
    multimarktables = data.provas?.filter(prova => prova.type == 1);
    fighttables = data.provas?.filter(prova => prova.type == 2);
    matchtables = data.provas?.filter(prova => prova.type == 3);
    tournamenttables = data.provas?.filter(prova => prova.type == 4);
    xadreztables = data.provas?.filter(prova => prova.type == 5);

    // Extra xadrez processing for sorting confrontos by squads
    let xvtXthb = [];
    let thbXcvk = [];
    let xvtXcvk = [];
    if (xadreztables.length > 0) {
        let processedXadrez = xadreztables.map(({nomeDaProva, resultsJSON}) => {return {nomeDaProva:nomeDaProva, result:JSON.parse(resultsJSON)};});
        xvtXthb = processedXadrez.filter(({ result }) => (result.equipes[0] == "xvt" && result.equipes[1] == "thb") || (result.equipes[1] == "xvt" && result.equipes[0] == "thb") );
        thbXcvk = processedXadrez.filter(({ result }) => (result.equipes[0] == "thb" && result.equipes[1] == "cvk") || (result.equipes[1] == "thb" && result.equipes[0] == "cvk") );
        xvtXcvk = processedXadrez.filter(({ result }) => (result.equipes[0] == "xvt" && result.equipes[1] == "cvk") || (result.equipes[1] == "xvt" && result.equipes[0] == "cvk") );
    }
</script>

<section>
    {@html data.page.introHTML}
    <p>Legenda: <strong style="background: #36464060;">Xavante</strong> | <strong style="background: #1c3c9b60;">Thunderbolt</strong> | <strong style="background: #1c9b7160;">Cavok</strong></p>
    <br>
    {#if marktables.length}
    <div class="marks container">
        {#each marktables as prova}
        <MarkTable title={prova.nomeDaProva} result={JSON.parse(prova.resultsJSON)} />
        {/each}
    </div>
    {/if}
    {#if multimarktables.length}
    <div class="multimarks container">
        {#each multimarktables as prova}
        <MultiMarkTable title={prova.nomeDaProva} result={JSON.parse(prova.resultsJSON)} />
        {/each}
    </div>
    {/if}
    {#if fighttables.length}
    <div class="fights container">
        {#each fighttables as prova}
        <FightTable title={prova.nomeDaProva} result={JSON.parse(prova.resultsJSON)} />
        {/each}
    </div>
    {/if}
    {#if matchtables.length}
    <div class="matches container">
        {#each matchtables as prova}
        <MatchTable title={prova.nomeDaProva} result={JSON.parse(prova.resultsJSON)} />
        {/each}
    </div>
    {/if}
    {#if tournamenttables.length}
    <div class="tournaments container">
        {#each tournamenttables as prova}
        <TournamentTable title={prova.nomeDaProva} result={JSON.parse(prova.resultsJSON)} />
        {/each}
    </div>
    {/if}
    {#if xadreztables.length}
    <div class="xadrez container">
        <div class="xadWrapper">
            <h1>Xavante vs Thunderbolt</h1>
            {#each xvtXthb as prova}
            <XadrezTable title={prova.nomeDaProva} result={prova.result} />
            {/each}
        </div>
        <div class="xadWrapper">
            <h1>Thunderbolt vs Cavok</h1>
            {#each thbXcvk as prova}
            <XadrezTable title={prova.nomeDaProva} result={prova.result} />
            {/each}
        </div>
        <div class="xadWrapper">
            <h1>Xavante vs Cavok</h1>
            {#each xvtXcvk as prova}
            <XadrezTable title={prova.nomeDaProva} result={prova.result} />
            {/each}
        </div>
    </div>
    {/if}
</section>

<style>
    .container {
        width: 100%;
        display: flex;
        flex-flow: row wrap;
        justify-content: space-around;
        align-items: baseline;
    }
    .xadrez {
        display: flex;
        flex-flow: column;
        align-items: center;
    }
    .xadWrapper {
        display: flex;
        flex-flow: row wrap;
        align-items: center;
        justify-content: space-around;
    }
</style>