createUFList()
 
 function createUFList(){
    const favorities = getFavorities()
    let ulList = '<ul>'
    favorities.forEach(favority => {
        ulList+= `
            <li> <span> ${favority} </span></li>
        `
    });
    ulList += '</ul>'
    insertFavorities(ulList)
}

function insertFavorities(favoritiesHtml){
    document.querySelector("main").innerHTML = favoritiesHtml
}

function getFavorities(){
    try{
        return JSON.parse(localStorage.getItem("favoritos"))
    }
    catch{
        return []
    }
}