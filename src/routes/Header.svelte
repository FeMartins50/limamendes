<script>
    import logo from "$lib/assets/logoLM.png";
    import cvk from "$lib/assets/BOLACHA-CAVOK.png";
    import thb from "$lib/assets/BOLACHA-THUNDERBOLT.png";
    import xvt from "$lib/assets/BOLACHA-XAVANTE.png";
    import { fly, fade } from 'svelte/transition';
    import { navigating } from '$app/stores';
    let isNavOpen = false;
    $: {
        isNavOpen = $navigating;
        isNavOpen = false;
    };
</script>

<header>
    <a href="/sobre" class="navItem">Sobre a Competição</a>
    <a href="/saepcar" class="navItem">SAEPCAR</a>

    <h1><a id="titulao" href="/">Lima Mendes</a></h1>

    <a href="/resultados" class="navItem">Resultados</a>
    <a href="/cronograma" class="navItem">Cronograma 2024</a>

    <button on:click={() => {isNavOpen = isNavOpen ? false : true}}>
        <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        >
        <path
            d="M8.01562 6.98193C7.46334 6.98193 7.01562 7.43285 7.01562 7.98513C7.01562 8.53742 7.46334 8.98833 8.01563 8.98833H15.9659C16.5182 8.98833 16.9659 8.53742 16.9659 7.98513C16.9659 7.43285 16.5182 6.98193 15.9659 6.98193H8.01562Z"
            fill="currentColor"
        />
        <path
            d="M7.01562 12C7.01562 11.4477 7.46334 10.9968 8.01562 10.9968H15.9659C16.5182 10.9968 16.9659 11.4477 16.9659 12C16.9659 12.5523 16.5182 13.0032 15.9659 13.0032H8.01563C7.46334 13.0032 7.01562 12.5523 7.01562 12Z"
            fill="currentColor"
        />
        <path
            d="M8.0249 15.0122C7.47262 15.0122 7.0249 15.4631 7.0249 16.0154C7.0249 16.5677 7.47262 17.0186 8.0249 17.0186H15.9752C16.5275 17.0186 16.9752 16.5677 16.9752 16.0154C16.9752 15.4631 16.5275 15.0122 15.9752 15.0122H8.0249Z"
            fill="currentColor"
        />
        <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M3 6C3 4.34315 4.34315 3 6 3H18C19.6569 3 21 4.34315 21 6V18C21 19.6569 19.6569 21 18 21H6C4.34315 21 3 19.6569 3 18V6ZM6 5H18C18.5523 5 19 5.44772 19 6V18C19 18.5523 18.5523 19 18 19H6C5.44772 19 5 18.5523 5 18V6C5 5.44772 5.44772 5 6 5Z"
            fill="currentColor"
        />
        </svg>
    </button>
</header>

{#if isNavOpen}
<div class="menu" in:fly|local={{ y: -800, duration: 300 }}>
    <a href="/sobre">Sobre a Competição</a>
    <a href="/saepcar">SAEPCAR</a>
    <a href="/resultados">Resultados</a>
    <a href="/cronograma">Cronograma 2024</a>
</div>
{/if}

<style>
    @import url("https://fonts.googleapis.com/css?family=Montserrat");
    #titulao {
        font-family: "Montserrat";
        font-weight: 800;
    }
    header {
        z-index: 1;
        height: 65px;
        width: 900px;
        max-width: 100%;

        padding: 0 50px;
        border-radius: 0 0 100px 100px;
        background-color: rgb(40, 160, 210, 1);

        display: flex;
        flex-flow: row;
        justify-content: space-around;
        align-items: center;
    }
    @media(width < 900px) {
        header {
            border-radius: 0;
            padding: 0;
        }
    }
    h1 {
        font-size: 2.2em;
    }
    h1, svg {
        color: rgb(230, 230, 0);
    }
    a {
        text-align: center;
    }
    .menu {
        position: absolute;
        width: 100vw;
        padding: 80px 0 0 0;
        background-color: rgb(8, 140, 210);

        display: flex;
        flex-flow: column;
        font-size: 1.8em;
        text-align: center;
    }
    .navItem {
        border: solid rgba(255, 255, 0, 0.8);
        border-width: 0 2px 0;
        padding: .2em;
        margin: .8em;
        background: rgba(255, 255, 0, 0.15);
        border-radius: 5px;
    }
    button {
        border: none;
        background: none;
    }
    svg {
        transform: scale(1.8);
    }
    .menu a {
        margin: .6em;
        padding: .6em;
        border: solid rgba(255, 255, 0, 0.8);
        border-width: 2px 0;
        background-color: rgba(255, 255, 0, 0.15);
        border-radius: 15px;
    }
    @media(width < 800px) {
        .navItem { display: none; }
        button { display: visible; }
        .menu { display: visible; }
    }
    @media(width >= 800px) {
        .navItem { display: visible; }
        button { display: none; }
        .menu { display: none; }
    }
    .navItem:hover { text-decoration: underline; }
</style>