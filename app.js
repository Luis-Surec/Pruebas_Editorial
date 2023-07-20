
/*
const  suma ="+";
const  resta ="-";
const  mult ="*";
const  divide ="/";


function resultado(a,b)
{
  const v1  = parseInt(document.getElementById('valor1').value);
  const v2  = parseInt(document.getElementById('valor2').value);
 const v3  = parseInt(v1 + v2);
  console.log(v3);
  return(v3);
  
}  

function res(){
const entregavalor = resultado();
document.getElementById("valor3").innerHTML = entregavalor;
document.getElementById("valor4").innerHTML = entregavalor;
console.log("resultado entegado:    " + entregavalor);
}*/

/*

//EJECUCION DE FUNCIONES

function ejercicio(a, b, operation) {
  switch (operation) {
    case "suma":
      return a + b;
      break;
    case "resta":
      return a - b;
      break;
    case "multiplicacion":
      return a * b;
      break;
    case "divicion":
      return a / b;
      break
    default:

      console.err(`la opracion ${operation} no es valida`);
  }

}


//EJECUCION DE FUNCIONES

ejercicio(12,2,"suma");
*/


/*
function multiplica(n1,n2){

const resultado = n1 * n2;

console.log(resultado);

}

multiplica(50,20);*/



function calculo(){
	//tasa de impuesto
  var tasa = 12;
  
  //monto a calcular el impuesto
  var monto = $("input[name=monto]").val();
  
  //calsulo del impuesto
  var iva = (monto * tasa)/100;
  
  //se carga el iva en el campo correspondien te
  $("input[name=iva]").val(iva);
  
  //se carga el total en el campo correspondiente
  $("input[name=total]").val(parseInt(monto)+parseInt(iva));


}