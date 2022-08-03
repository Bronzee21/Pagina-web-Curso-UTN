

let imagen1 = document.querySelector("#imagen1");

let destino1 = document.querySelector("#cajasoltar1");

// traslado de imagen1

imagen1.addEventListener('dragstart',inicioTraslado);


imagen1.addEventListener('dragend',finalTraslado);

// funciones

function inicioTraslado(evento) {
    evento.dataTransfer.setData('Text',"../imageen/rompe1 modif.png");
};

function finalTraslado(evento) {
    let imagen1 = evento.target;
    imagen1.style.visibility="hidden";
};


// En el destino

destino1.addEventListener('dragover',prevenirDefault);

destino1.addEventListener('drop',soltarElemento);


function soltarElemento(evento) {

    let dataimagen1= evento.dataTransfer.getData('Text');

    destino1.innerHTML=`<img id="imagen1" src="${dataimagen1}"/>`
}

function prevenirDefault(evento) {
    evento.preventDefault()
}

// ---------------------------------------------------------------------

let imagen2 = document.querySelector("#imagen2");

let destino2 = document.querySelector("#cajasoltar2");


// traslado de imagen1

imagen2.addEventListener('dragstart',inicioTraslado2);


imagen2.addEventListener('dragend',finalTraslado2);

// funciones

function inicioTraslado2(evento) {
    evento.dataTransfer.setData('Text',"../imageen/rompe2 modif.png");
};

function finalTraslado2(evento) {
    let imagen2 = evento.target;
    imagen2.style.visibility="hidden";
};

// En el destino

destino2.addEventListener('dragover',prevenirDefault);

destino2.addEventListener('drop',soltarElemento2);


function soltarElemento2(evento) {

    let dataimagen2= evento.dataTransfer.getData('Text');

    destino2.innerHTML=`<img id="imagen2" src="${dataimagen2}"/>`
}

function prevenirDefault(evento) {
    evento.preventDefault()
}

// ---------------------------------------------------------------------------

let imagen3 = document.querySelector("#imagen3");

let destino3 = document.querySelector("#cajasoltar3");


// traslado de imagen1

imagen3.addEventListener('dragstart',inicioTraslado3);


imagen3.addEventListener('dragend',finalTraslado3);

// funciones

function inicioTraslado3(evento) {
    evento.dataTransfer.setData('Text',"../imageen/rompe3 modif.png");
};

function finalTraslado3(evento) {
    let imagen3 = evento.target;
    imagen3.style.visibility="hidden";
};

// En el destino

destino3.addEventListener('dragover',prevenirDefault);

destino3.addEventListener('drop',soltarElemento3);


function soltarElemento3(evento) {

    let dataimagen3= evento.dataTransfer.getData('Text');

    destino3.innerHTML=`<img id="imagen3" src="${dataimagen3}"/>`
}

function prevenirDefault(evento) {
    evento.preventDefault()
}
// ----------------------------------------------------------------

function reinicio() {
    location.reload();
}