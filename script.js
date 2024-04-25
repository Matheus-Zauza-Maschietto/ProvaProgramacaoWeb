
createUFList()

async function createUFList(){
    const ufs = await getUFs()
    let ulList = '<ul>'
    ufs.forEach(uf => {
        ulList+= `
            <li> <a href="./municipios/index.html?UF=${uf.sigla}"> ${uf.nome} </a>  </li>
        `
    });
    ulList += '</ul>'
    insertUFList(ulList)
}


 
function insertUFList(htmlElementString){
    document.querySelector("main").innerHTML = htmlElementString
}

async function getUFs(){
    return await fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
    .then(response => response.json())
}