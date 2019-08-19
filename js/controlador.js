localStorage = window.localStorage;

var campos =[ //este es un arreglo de jsons para validar que los campos no esten vacios, se inicializan en false pero mas adelante se valida si esta correcto o no
    {
        campo:'user',
        valido:false
    },
    {
        campo:'password',
        valido:false
    },
    {
        campo:'nombre',
        valido:false
    },
    {
        campo:'apellido',
        valido:false
    },
    {
        campo:'correo',
        valido:false
    },
    {
        campo:'nombre-emp',
        valido:false
    },
    {
        campo:'direccion',
        valido:false
    },
];

function agregar(){  //IMPOOOOOOOOOOOOOOOOOOOOOOOOOOORTANTE
    for (let i = 0; i < campos.length; i++)
    campos[i].valido = validarCampoVacio(campos[i].campo);//aqui se validan los campos

    for (let i = 0; i < campos.length; i++)//si alguno de los campos no es valido no hace nada
    if (!campos[i].valido) return;

    //si todos los campos son validos entonces hace esto...
let video = { //1.crea el json
    user: document.getElementById('user').value,
    password: document.getElementById('password').value,
    nombre: document.getElementById('nombre').value,
    apellido: document.getElementById('apellido').value,
    correo: document.getElementById('correo').value,
    correo: document.getElementById('nombre-emp').value,
    correo: document.getElementById('direccion').value,
}
//2. lo guarda en el localstorage
let key = localStorage.key(localStorage.length-1)==null?0:parseInt(localStorage.key(localStorage-1))+1;                         //ES LO QUE VA EN EL JSON
localStorage.setItem( key,JSON.stringify(video));
}

function validarCampoVacio(id) {
    let resultado = (document.getElementById(id).value == '') ? false : true;
    marcarInput(id, resultado);
    return resultado;
}

function marcarInput(id, valido) {
    if ($(`#${id}`).length) {
        if (valido) {
            document.getElementById(id).classList.remove('is-invalid');
            document.getElementById(id).classList.add('is-valid');
        } else {
            document.getElementById(id).classList.remove('is-valid');
            document.getElementById(id).classList.add('is-invalid');
        }
    }
}