<input class="titulo" type="text" name="nomeDaProva" placeholder="Nome da Prova">

<div class="match">
<div class="container">
    <div class="times left">
        <input type="text" name="time0" placeholder="Time 1">
    </div>
    <div class="mid">
        <input type="text" name="placar0">
        <svg fill="#777777af" height="16px" width="16px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
            viewBox="0 0 460.775 460.775" xml:space="preserve">
        <path d="M285.08,230.397L456.218,59.27c6.076-6.077,6.076-15.911,0-21.986L423.511,4.565c-2.913-2.911-6.866-4.55-10.992-4.55
            c-4.127,0-8.08,1.639-10.993,4.55l-171.138,171.14L59.25,4.565c-2.913-2.911-6.866-4.55-10.993-4.55
            c-4.126,0-8.08,1.639-10.992,4.55L4.558,37.284c-6.077,6.075-6.077,15.909,0,21.986l171.138,171.128L4.575,401.505
            c-6.074,6.077-6.074,15.911,0,21.986l32.709,32.719c2.911,2.911,6.865,4.55,10.992,4.55c4.127,0,8.08-1.639,10.994-4.55
            l171.117-171.12l171.118,171.12c2.913,2.911,6.866,4.55,10.993,4.55c4.128,0,8.081-1.639,10.992-4.55l32.709-32.719
            c6.074-6.075,6.074-15.909,0-21.986L285.08,230.397z"/>
        </svg>
        <input type="text" name="placar1">
    </div>
    <div class="times right">
        <input type="text" name="time1" placeholder="Time 2">
    </div>
</div>
</div>

<style>
.match {
    width: 400px;
    display: flex;
    flex-flow: column;
    align-items: center;

    padding: .6em .8em;
    background-color: rgba(150, 150, 30, 0.2);
    border-radius: 1em;
}
.titulo {
    text-align: center;
    text-decoration: underline;
}
.container {
    display: flex;
    flex-flow: row;
    flex-grow: 0;
    flex-shrink: 0;
    align-items: center;
    justify-content: center;
}
.mid {
    max-width: 30%;
    margin: 5px;
    padding: 0;
    display: flex;
    flex-flow: row;
    justify-content: space-between;
    align-items: center;
}
.mid input {
    font-size: 30px;
    margin: 5px;
}
.times {
    width: 130px;
}
.times input {
    margin: 0;
    padding: 4px;
    font-size: 16px;
}
.left input{
    text-align: right;
}
.right input{
    text-align: left;
}
</style>