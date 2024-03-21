<script>
    export let title = '--';
    export let result = {
        labels: ["Atletas", "-"],
        marks: [
            {
                atleta: "--",
                equipe: "--",
                marca: "0.00"
            },
            {
                atleta: "--",
                equipe: "-",
                marca: "0.00"
            },
            {
                atleta: "--",
                equipe: "--",
                marca: "0.00"
            },
            {
                atleta: "--",
                equipe: "--",
                marca: "0.00"
            },
            {
                atleta: "--",
                equipe: "--",
                marca: "0.00"
            },
            {
                atleta: "--",
                equipe: "--",
                marca: "0.00"
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
            <p class="left">{result.labels[0]}</p>
            <p class="right">{result.labels[1]}</p>
        </div>
        {#each result.marks as item}
        <div class="item">
            <p class="left {item.equipe}">{item.atleta}</p>
            <p class="right {item.equipe}">{item.marca}</p>
        </div>
        {/each}
    </div>
    <!-- Dá pra add um extra no div de baixo, se existir, como detalhes de gols, pontuação de cada set... -->
</div>

<style>
.result {
    margin: 10px 0;
    width: 400px;
    max-width: 48%;
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
    flex: 2;
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