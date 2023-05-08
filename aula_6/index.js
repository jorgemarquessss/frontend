console.log("Início do JavaScript");

let dados;
const ul = document.querySelector("#lista-links");

async function getData() {

    // fetch('https://api.thecatapi.com/v1/images/search?limit=10')
    // .then(response => {
    //     response.json();
    // }).catch(e => console.log(e))


    dadosJson = await fetch('https://api.thecatapi.com/v1/images/search?limit=10')
    let dados = await dadosJson.json();


    // console.log("DADOSJSON: ", dadosJson);
    // console.log("DADOS: ", dados);
    // console.log("Link: ", dados[0].width);
    // console.log("Tamanho do Array : ", dados.length);

    dados.forEach(item => {
        const li = document.createElement("li");
        li.innerText = item.url;
        
        ul.appendChild(li);
    });
} 