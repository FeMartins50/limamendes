<script>
    import "./styles.css";
    import Header from "./Header.svelte";
    import Footer from "./Footer.svelte";
</script>

<svelte:head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <title>67ª Lima Mendes</title>
</svelte:head>

<div class="app">
    <Header />

    <main>
        <slot />
    </main>

    <Footer />
</div>

<style>
.app {
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: space-between;
    min-height: 100vh;
    background: repeating-linear-gradient(60deg, rgba(255,255,255,1) 0%, rgba(230,230,230,1) 6%, rgba(255,255,255,1) 12%);
}

main {
    width: 100%;
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: space-between;
}
</style>