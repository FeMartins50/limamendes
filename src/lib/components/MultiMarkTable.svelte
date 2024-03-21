<script>
    export let title = '--';
    export let result = {
        labels: ["Atletas", "-", "-"],
        marks: [
            {
                atleta: "--",
                equipe: "--",
                marcas: ["0.00s", "0"]
            },
            {
                atleta: "--",
                equipe: "-",
                marcas: ["0.00s", "0"]
            },
            {
                atleta: "--",
                equipe: "-",
                marcas: ["0.00s", "0"]
            },
            {
                atleta: "--",
                equipe: "--",
                marcas: ["0.00s", "0"]
            },
            {
                atleta: "--",
                equipe: "--",
                marcas: ["0.00s", "0"]
            },
            {
                atleta: "--",
                equipe: "--",
                marcas: ["0.00s", "0"]
            }
        ]
    };
</script>

<div class="result">
    <div class="titulo">
        {title}
    </div>
    <div class="table">
        <div class="item">
            {#each result.labels as label, i}
            {#if i == 0}
            <p class="left">{label}</p>
            {:else}
            <p class="right">{label}</p>
            {/if}
            {/each}
        </div>
        {#each result.marks as item}
        <div class="item">
            <p class="left {item.equipe}">{item.atleta}</p>
            {#each item.marcas as marca}
            <p class="right {item.equipe}">{marca}</p>
            {/each}
        </div>
        {/each}
    </div>
    <!-- Dá pra add um extra no div de baixo, se existir, como detalhes de gols, pontuação de cada set... -->
</div>

<style>
.result {
    margin: 10px 0;
    width: 500px;
    max-width: 96vw;
    display: flex;
    flex-flow: column;
    align-items: center;
}
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
.item p {
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
.cvk {
    background-color: #1c9b7160;
}
.thb {
    background-color: #1c3c9b60;
}
.xvt {
    background-color: #36464060;
}
</style>