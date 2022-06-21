let nombre = prompt ("Ingrese su nombre")
alert ("Tu nombre es" + " " + nombre)

let numero = prompt ("¿Ver la tabla del ... ?")
for(let i = 0; i<100; i++){
    if((i+1)===5){
        continue
    }else{
        console.log(`${(i+1)}x${numero} = ${numero*(i+1)}`)
    }
}

let entrada;
do {
  entrada = prompt("Conforme? ( E para salir)");
  alert("El usuario ingresó " + entrada);
} while (entrada != "E");