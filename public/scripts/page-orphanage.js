const options = {
    dragging:false,
    touchZoom:false, 
    doubleClickZoom:false,
    scrollWheelZoom:false,
    zoomControl:false
}

///create map
const map = L.map('mapid', options).setView([-23.6245947,-46.70535], 15);

//create and add tilelayer
L.tileLayer(
        'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')
    .addTo(map);


//create icon
const icon = L.icon({
    iconUrl: "./public/images/map-marker.svg",
    iconSize: [58,68],
    iconAnchor: [29,68],
    popupAnchor: [170,2]
})

//create and add marker
L
    .marker([-23.6245947,-46.70535], {icon})
    .addTo(map)
    

/*image galery*/

function selectImage(event){
    const button = event.currentTarget

    //remover todas as classes .active
    const buttons = document.querySelectorAll(".images button")
    buttons.forEach(removeActiveClass)

    function removeActiveClass(button){
        button.classList.remove("active")
    }

    //select image clicada
    const image = button.children[0]
    const imageContainer = document.querySelector(".orphanage-details > img")
    
    //atualizar um container de imagem
    imageContainer.src = image.src

    //adicionar a classe .active para este botao
    button.classList.add('active')
}
    