<script>
    import MarkForms from '$lib/components/MarkForms.svelte';
    import MultiMarkForms from '$lib/components/MultiMarkForms.svelte';
    import FightForms from '$lib/components/FightForms.svelte';
    import MatchForms from '$lib/components/MatchForms.svelte';
    import TournamentForms from '$lib/components/TournamentForms.svelte';
    import XadrezForms from '$lib/components/XadrezForms.svelte';
    let type;
    /*
    nomeDaProva -> como aparece no site
    modalidade -> slug
    resultJSON -> objeto ou array pra TableComponent
    type -> 0: MarkTable, 1: MultiMarkTable, 2: FightTable, 3: MatchTable, 4: TournamentTable, 5: XadrezTable
    */
   export let form;
</script>

<section>
    <h1>ADMIN</h1>
    {#if form?.success}
    <p>Atualizado <strong style="color: red;">{form.nomeDaProva}</strong> com sucesso.</p>
    {/if}
    <br>
    <h2>Adicionar Prova</h2>
    <p>Nome da prova como aparece no site.</p>
    <br>
    <form method="POST" action="?/updateProva" class="result dataForm">
        <select name="modalidade">
            <option value="natacao">Natação</option>
            <option value="triatlo">Triatlo</option>
            <option value="atletismo">Atletismo</option>
            <option value="esgrima">Esgrima</option>
            <option value="futebol">Futebol</option>
            <option value="basquete">Basquete</option>
            <option value="volei">Vôlei</option>
            <option value="judo">Judô</option>
            <option value="orientacao">Orientação</option>
            <option value="xadrez">Xadrez</option>
            <option value="tiro">Tiro</option>
            <option value="biatlo">Biatlo</option>
            <option value="cabo_de_guerra">Cabo de Guerra</option>
            <option value="corrida_rustica">Corrida Rústica</option>
        </select>

        <select bind:value={type} name="type">
            <option value=0>Uma marca</option>
            <option value=1>Várias marcas</option>
            <option value=2>Mata-mata</option>
            <option value=3>Partida entre 2 equipes</option>
            <option value=4>Chaves de Torneio</option>
            <option value=5>Confronto do Xadrez</option>
        </select>

        {#if type == 0}
        <MarkForms />
        {:else if type == 1}
        <MultiMarkForms />
        {:else if type == 2}
        <FightForms />
        {:else if type == 3}
        <MatchForms />
        {:else if type == 4}
        <TournamentForms />
        {:else if type == 5}
        <XadrezForms />
        {/if}
        <br>
        <button type="submit">SUBMIT</button>
    </form>
</section>

<section>
    <h2>Remover Prova</h2>
    <p>Deletar prova do banco de dados.</p>
    <br>
    <form method="POST" action="?/removeProva" class="result dataForm">
        <input class="titulo" type="text" name="nomeDaProva" placeholder="Prova">
        <button type="submit">SUBMIT</button>
    </form>
</section>

<style>
.result {
    width: 700px;
    max-width: 100%;
    display: flex;
    flex-flow: column;
    align-items: center;
}
.titulo {
    text-align: center;
    text-decoration: underline;
    
}
select {
    flex: 1;
}
button {
    padding: 0.3em;
    border-radius: 1em;
    border: 2px solid black;
    font-size: 1.2em;
    font-family: 'Lato';

    background-color: rgb(100, 150, 100, 0.5);
    transition: all 0.1s ease-in-out;
}
button:hover {
    transform: scale(1.2);
}
</style>