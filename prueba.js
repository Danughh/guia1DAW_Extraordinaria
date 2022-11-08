
function iniciar(){
    var botonElevar = document.getElementById("base", "exponente");
var elevado = Math.pow(txtbase.value, txtelevador.value);
}

if(botonElevar.addEventListener){
    botonElevar.addEventListener("click", calculaelevacion, false);
    }
    else if(botonElevar.attachEvent){
    botonElevar.attachEvent("onclick", calculaelevacion);
    }

function calculaelevación(){
    var rect = new elevado(parseFloat(document.frmelevar.txtbase.value),
    parseFloat(document.frmelevar.txtbase.value));
    rect.mostrar(rect.carea(), 'resultado');
    return false;
    }
    //Creando una clase rectángulo
    function elevado(base, exponente){
    //Propiedades de la clase
    this.base = base;
    this.exponente = exponente;
    //Métodos de la clase
    //definidos usando el constructor Function()
    this.carea = function(){
    return this.base ** this.exponente;
    };

    this.mostrar = function(valor, tipoc){
        var result = document.getElementById('resultado');
        result.innerHTML = '<p>El ' + tipoc + ' es: ' + Math.pow(valor ,carea) + '</p>';
        };
    }
    //Asociando función que manejará el evento load al cargar la página
    if(window.addEventListener){
    window.addEventListener("load", iniciar, false);
    }
    else if(window.attachEvent){
    window.attachEvent("onload", iniciar);
    }

