<script>
    let outros;
    export let form;
</script>

<section>
    <h1>ADMIN</h1>
    {#if form?.success}
	<p>Atualizado <strong style="color: red;">{form.name}</strong> com sucesso.</p>
    {/if}
    <h2>Adicionar Evento</h2>
    <p>
        As informações inseridas são as mesmas que vão aparecer na página "Cronograma", então coloque no nome do evento os 
        times que irão se enfrentar (se for o caso). Dúvida do padrão, consulte o Cronograma.
    </p>
    <form method="POST" action="?/addEvent" class="dataForm">        
        <label for="name">Nome do evento:</label>
        <input type="text" name="name" required>
        
        <label for="location">Local:</label>
        <select bind:value={outros} name="location">
            <option value="Estádio">Estádio</option>
            <option value="Ginásio">Ginásio</option>
            <option value="Cinema">Cinema</option>
            <option value="Sarmentão">Sarmentão</option>
            <option value="Stand">Stand</option>
            <option value="Campo de Granadas">Campo de Granadas</option>
            <option value="Outro...">Outro...</option>
        </select>

        {#if outros == "Outro..."}
        <label for="outros">Especifique o local:</label>
        <input type="text" name="outros" required>
        {/if}

        <label for="day">Dia:</label>
        <input type="date" name="day" required>

        <label for="time">Horário:</label>
        <input type="time" name="time" required>

        <button type="submit">SUBMIT</button>
    </form>
</section>

<section>
    <h2>Remover Evento</h2>
    <p>
        Mesmo nome que aparece em "Cronograma".
    </p>
    <form method="POST" action="?/removeEvent" class="dataForm">        
        <label for="name">Nome do evento:</label>
        <input type="text" name="name" required>

        <button type="submit">SUBMIT</button>
    </form>
</section>

<style>
    form {
        margin: 1em;
        width: 500px;
        max-width: 90vw;
    }
    form input, form label {
        margin-bottom: 1em;
    }
    button {
        padding: 0.3em;
        border-radius: 1em;
        border: 2px solid black;
        font-size: 1.2em;
        font-family: 'Lato';
        width: 100%;
        background-color: rgb(100, 150, 100, 0.5);
        transition: all 0.1s ease-in-out;
    }
</style>