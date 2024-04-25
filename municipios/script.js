
setTittles()
createUFList()

async function createUFList(){
    const cities = await getCities()
    let ulList = '<ul>'
    cities.forEach(city => {
        ulList+= `
            <li> <span> ${city.nome} </span> <input type="button" value="Favoritar" onclick="favorityCity('${city.nome}')"> </li>
        `
    });
    ulList += '</ul>'
    insertUFList(ulList)
}

function insertUFList(htmlElementString){
    document.querySelector("main").innerHTML = htmlElementString
}

function setTittles(){
    const uF = getUF()
    document.title = `Municípios de ${uF}`
    document.querySelector("h1").textContent = `Municípios de ${uF}`
}

async function getCities(){
    return await fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${getUF()}/municipios`)
    .then(response => response.json())
}

function getUF(){
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get("UF")
}

function favorityCity(city){
    let favority = JSON.parse(localStorage.getItem("favoritos"))
    if(typeof favority != 'object' || favority == null){
        favority = []
    }
    
    if(favority.find(p => p == city) == undefined){
        favority.push(city)
    }

    localStorage.setItem("favoritos", JSON.stringify(favority))
}
