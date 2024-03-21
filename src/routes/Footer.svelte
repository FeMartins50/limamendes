<script>
    import logo from "$lib/assets/logoLM2.png";
    import soc from "$lib/assets/LOGO SAEPCAR.png";
    import cvk from "$lib/assets/BOLACHA-CAVOK.png";
    import thb from "$lib/assets/BOLACHA-THUNDERBOLT.png";
    import xvt from "$lib/assets/BOLACHA-XAVANTE.png";
</script>

<footer>
    <div class="logos">
        <div class="doms">
            <img alt="Lima Mendes Logo" src={logo}/>
            <img alt="DOM Sociedade Acadêmica" src={soc}/>
        </div>
    
        <div class="bolachas">
            <img alt="Bolacha Xavante" src={xvt}/>
            <img alt="Bolacha Cavok" src={cvk}/>
            <img alt="Bolacha Thunderbolt" src={thb}/>
        </div>
    </div>
    <div class="wrapper">
        <a href="https://www.instagram.com/epcar.oficial/" target="_blank">
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="18px" height="18px" viewBox="0 0 32 32" fill="#ffffff">
                <path d="M 11.46875 5 C 7.917969 5 5 7.914063 5 11.46875 L 5 20.53125 C 5 24.082031 7.914063 27 11.46875 27 L 20.53125 27 C 24.082031 27 27 24.085938 27 20.53125 L 27 11.46875 C 27 7.917969 24.085938 5 20.53125 5 Z M 11.46875 7 L 20.53125 7 C 23.003906 7 25 8.996094 25 11.46875 L 25 20.53125 C 25 23.003906 23.003906 25 20.53125 25 L 11.46875 25 C 8.996094 25 7 23.003906 7 20.53125 L 7 11.46875 C 7 8.996094 8.996094 7 11.46875 7 Z M 21.90625 9.1875 C 21.402344 9.1875 21 9.589844 21 10.09375 C 21 10.597656 21.402344 11 21.90625 11 C 22.410156 11 22.8125 10.597656 22.8125 10.09375 C 22.8125 9.589844 22.410156 9.1875 21.90625 9.1875 Z M 16 10 C 12.699219 10 10 12.699219 10 16 C 10 19.300781 12.699219 22 16 22 C 19.300781 22 22 19.300781 22 16 C 22 12.699219 19.300781 10 16 10 Z M 16 12 C 18.222656 12 20 13.777344 20 16 C 20 18.222656 18.222656 20 16 20 C 13.777344 20 12 18.222656 12 16 C 12 13.777344 13.777344 12 16 12 Z"></path>
            </svg>
            EPCAR
        </a>
        <a href="https://www.instagram.com/nascentvepcar/" target="_blank">
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="18px" height="18px" viewBox="0 0 32 32" fill="#ffffff">
                <path d="M 11.46875 5 C 7.917969 5 5 7.914063 5 11.46875 L 5 20.53125 C 5 24.082031 7.914063 27 11.46875 27 L 20.53125 27 C 24.082031 27 27 24.085938 27 20.53125 L 27 11.46875 C 27 7.917969 24.085938 5 20.53125 5 Z M 11.46875 7 L 20.53125 7 C 23.003906 7 25 8.996094 25 11.46875 L 25 20.53125 C 25 23.003906 23.003906 25 20.53125 25 L 11.46875 25 C 8.996094 25 7 23.003906 7 20.53125 L 7 11.46875 C 7 8.996094 8.996094 7 11.46875 7 Z M 21.90625 9.1875 C 21.402344 9.1875 21 9.589844 21 10.09375 C 21 10.597656 21.402344 11 21.90625 11 C 22.410156 11 22.8125 10.597656 22.8125 10.09375 C 22.8125 9.589844 22.410156 9.1875 21.90625 9.1875 Z M 16 10 C 12.699219 10 10 12.699219 10 16 C 10 19.300781 12.699219 22 16 22 C 19.300781 22 22 19.300781 22 16 C 22 12.699219 19.300781 10 16 10 Z M 16 12 C 18.222656 12 20 13.777344 20 16 C 20 18.222656 18.222656 20 16 20 C 13.777344 20 12 18.222656 12 16 C 12 13.777344 13.777344 12 16 12 Z"></path>
            </svg>
            NascenTV
        </a>
    </div>
    <p>
        Troféu Tenente Lima Mendes 2024
    </p>
</footer>

<style>
    footer {
        width: 100%;
        padding: 2vh 0;
        color: rgb(238, 238, 238);
        background-color: rgb(53, 55, 75);

        display: flex;
        flex-flow: row wrap;
        align-items: center;
        justify-content: space-evenly;
    }
    .logos {
        width: 90%;
        max-width: 100vw;
        display: flex;
        flex-flow: row;
        justify-content: space-between;

        margin: 20px 0 40px 0;
    }
    .doms {
        display: flex;
        flex-flow: row;
        justify-content: space-between;
        width: 30%;
        max-width: 200px;
    }
    .bolachas {
        display: flex;
        flex-flow: row;
        justify-content: space-between;
        width: 40%;
        max-width: 300px;
    }
    img {
        padding: 3px;
        height: 70px;
    }
    @media (width < 500px) {
        img {
            height: 45px;
        }
    }
    .wrapper {
        width: 100%;

        display: flex;
        flex-flow: row;
        justify-content: space-around;
    }
    .wrapper a {
        display: flex;
        flex-flow: row;
        align-items: center;
    }
    p {
        font-size: 14px;
        margin: 40px 20px;
    }
    a {
        font-size: 12px;
    }
    a:hover {
        text-decoration: underline;
    }
</style>