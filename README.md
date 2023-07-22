<style>
    body {
        font-family: monospace;
        background-color: rgb(31, 31, 31);
        color: rgb(175, 175, 175);
        font-size: larger;
    }

    .slide-template {
        height: 95vh;
        margin-bottom: 2em;

        background-image:
            url(https://2023.pythonnordeste.org/img/assets/FITINHAS_VOANDO.png),
            url(https://2023.pythonnordeste.org/img/assets/LOGO.png);
        background-size: 15%, 15%;
        background-position: top left, top right;
        background-repeat: no-repeat;

        border-bottom-color: rgb(5, 24, 41);
        border-bottom-style: ridge;

        display: grid;
        grid-template-columns: 1fr 2fr 2fr 1fr;
        grid-template-rows: auto auto auto auto;
    }

    .slide1 .title {
        font-size: 3em;
        grid-row-start: 3;
        grid-column-start: 2;
        grid-column-end: 4;

        text-align: center;
    }

    .slide1 h1 {
        grid-row-start: 4;
        grid-column-start: 2;
        grid-column-end: 4;
    }

    h1,
    h2,
    h3,
    h4,
    h5 {
        text-align: center;
    }

    a.next-page:link,
    :visited {
        text-decoration: inherit;
        color: inherit;
        cursor: auto;
    }
</style>

<body>
    <a class="next-page" href="#2" id="1">
        <div class="slide-template slide1">
            <p class="title">Hackeando o aprendizado de lógica de programação com<br><b>TDD e Python</b></p>
            <h1 >Jerson Brito</h1>
        </div>
    </a>
    <a class="next-page" href="#3" id="2">
        <div class="slide-template">
            <h1>2</h1>
        </div>
    </a>
    <a class="next-page" href="#4" id="3">
        <div class="slide-template">
            <h3>3</h3>
        </div>
    </a>
    <a class="next-page" href="#1" id="4">
        <div class="slide-template">
            <h4>4</h4>
        </div>
    </a>

</body>