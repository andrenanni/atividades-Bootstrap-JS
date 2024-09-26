var btn = document.querySelector('.button');

btn.addEventListener("click", function(){
    let welcome = "Olá, bem-vindo ao site";

    let result = document.querySelector('.result')

    result.innerHTML = welcome;
});