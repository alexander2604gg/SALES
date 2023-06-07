const filas = document.querySelector(".fila")
const columnas = document.querySelector(".columna");
const btn = document.querySelector(".btn-table");
const tablaContainer = document.querySelector(".container");
const btnCalcular = document.querySelector(".calcular");
const divCalcular = document.querySelector(".respuestas");
var filasI;
var columnI;
var matriz = [];
var datos = [];

btn.addEventListener("click" , function(){

    var tabla = document.createElement("table");

    filasI = parseInt(filas.value)+1;
    columnI = parseInt(columnas. value)+1 ;

    for (var i = 0; i <= filasI; i++) {
        var fila = document.createElement("tr");
  
        for (var j = 0; j < columnI; j++) {

          var columna = document.createElement("td");
          var input = document.createElement("input");
          input.setAttribute("type", "text");
          input.classList.add("input-" + i + "-" + j);
          columna.appendChild(input);
          fila.appendChild(columna);
        }
  
        tabla.appendChild(fila);
      }
  
      tablaContainer.appendChild(tabla);
      btnCalcular.style.display="block";

      function obtenerValoresInputs() {
        var inputs = document.getElementsByTagName("input");
  
        for (var i = 0; i < inputs.length; i++) {
          var valor = inputs[i].value;
          console.log("Input " + inputs[i].classList + ": " + valor);
        }
      }

   
});


btnCalcular.addEventListener("click" , guardarValores);

function guardarValores() {

    
    for (var i = 0; i <= filasI; i++) {
      matriz[i] = [];
      for (var j = 0; j < columnI; j++) {
        var inputC = ".input-" + i + "-" + j;
        var input2 = document.querySelector(inputC);
        matriz[i][j] = input2.value;
      }
    }

    console.log(matriz);

    pasarDatos();
    calcular();
}

function pasarDatos () {

    for (var i = 1; i < matriz.length; i++) {
        datos[i-1] = [];
      
        for (var j = 1; j < matriz[i].length; j++) {
          datos[i-1][j-1] = parseFloat(matriz[i][j]);
        }
    }

    console.log (datos);
    
}




/*var datos = [

                         
    [190000,85000, 60000,-29000],
    [95000,76000,53000,-39000],
    [65000,48000,40000,-50000],
    [1000,1000,1000,1000],
    [0.17,0.23,0.26,0.34]

  ];*/

  function calcular(){

    var suma = 0;
    var VME = [];
    var indPro = datos.length;

    for (let i = 0; i < datos.length-1; i++) {

    for (let j = 0; j< datos.length; j++) {
        
        if(j<datos.length-1){
            suma = suma + datos[indPro-1][j]*datos[i][j];
        } 
        
        else{
            VME.push(suma);
            suma = 0;
        }
        
    }

  }

  var maximo = Math.max(...VME);
  var alternativa = VME.indexOf(maximo)+1;
  console.log("El máximo valor monetario esperado es " + maximo + " que esta en la alternativa " + alternativa);
  divCalcular.innerHTML = "<p>El máximo valor monetario esperado es " + maximo + " que esta en la alternativa " + alternativa + "</P>";
  
  }

  


