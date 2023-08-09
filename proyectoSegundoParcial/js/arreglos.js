class Arreglos {
  mayor(){
    //'23;40;4;100' 
    let datos = document.getElementById("text1").value;
    let numeros = datos.split(";"); //["23","40","4","100"]
    let mayor=parseInt(numeros[0]); // 23
    let resp = document.getElementById("resp");
    
    //let dat = Json.parse(numeros[0]); // 23

    for(let i=1; i<numeros.length; i++){
      if (mayor < parseInt(numeros[i])){
        mayor = parseInt(numeros[i]); //100
      } 
    }

    resp.textContent = `El mayor del arreglo [${numeros}] es: ${mayor}`
  }

  menor(){
    let datos = document.getElementById("text1").value;
    let numeros = datos.split(";"); // ["23","40","4","100"]
    let menor = parseInt(numeros[0]); // Inicializar con el primer valor del arreglo
    let resp = document.getElementById("resp");

    for (let i = 1; i < numeros.length; i++) {
      if (menor > parseInt(numeros[i])) {
        menor = parseInt(numeros[i]);
      }
    }

    resp.textContent = `El menor del arreglo [${numeros}] es: ${menor}`;
  }

  promedio(){
    let datos = document.getElementById("text1").value;
    let numeros = datos.split(";").map(Number); // Convertir los valores a números
    let suma = 0;

    for (let i = 0; i < numeros.length; i++) {
      suma += numeros[i];
    }

    let promedio = suma / numeros.length;
    let resp = document.getElementById("resp");
    resp.textContent = `El promedio de los elementos es: ${promedio.toFixed(2)}`;
  }

  nombresReves(){
    let nombres = document.getElementById("text1").value;
    const nombresSeparados = nombres.split(",").map(nombre => nombre.trim());
    const nombresAlReves = nombresSeparados.map(nombre => nombre.split("").reverse().join(""));
    
    let resp = document.getElementById("resp");
    resp.textContent = `Los nombres al revés son: ${nombresAlReves.join(", ")}`;
  }

  // !REVISAR
  buscar(){
    let datos = document.getElementById("text1").value
    let arreglo = datos.split(";")
    let buscado = document.getElementById("text2").value
    let c = 0;
    let enc = false;
    let resp = document.getElementById("resp")
    while (c < arreglo.length && enc == false) {
      if (arreglo[c] == buscado){
        enc = true
      }
      else {
        c = c + 1
      }
    }
    if (enc == true) {
      //console.log(buscado, "se encuentra en la pos: ",c)
      resp.textContent = `el dato: ${buscado} se encuentra en la posicion:${c} del arreglo$${JSON.stringify(arreglo)}`
    } else {
      //console.log(buscado," no se encuentra")
      resp.textContent = `el dato: ${buscado} no se encuentra en el arreglo${JSON.stringify(arreglo)}`
    }
  }


  adivinaNumero() {
    let adivinar = parseInt(document.getElementById("text1").value);  
    let resp = document.getElementById("resp");
    let arrNumeros = [];
    
    for (let i = 0; i < 100; i++) {
      arrNumeros.push(Math.floor(Math.random() * 100));
    }

    console.log("Arreglo generado con éxito:", arrNumeros);

    if (!isNaN(adivinar) && arrNumeros.includes(adivinar)) {
      resp.textContent = "¡Adivinaste! El número está en el arreglo.";
    } else {
      resp.textContent = "Error, no adivinaste. El número no está en el arreglo.";
    }
  }

  insertar(){
    let numeros = document.getElementById("text1").value.split(",").map(num => parseInt(num));
    let numeroAInsertar = parseInt(document.getElementById("text2").value);
    let posicion = parseInt(document.getElementById("text3").value);
    let aux = [];

    if (posicion >= 0 && posicion <= numeros.length) {
        for (let i = 0; i < posicion; i++) {
            aux.push(numeros[i]);
        }
        aux.push(numeroAInsertar);

        for (let i = posicion; i < numeros.length; i++) {
            aux.push(numeros[i]);
        }

        numeros = aux;
        let resp = document.getElementById("resp");
        resp.textContent = `Nuevo arreglo: [${numeros.join(", ")}]`;
    } else {
        alert("La posición no es válida.");
    }
  }

  eliminar(){
    let numerosString = document.getElementById("text1").value;
    let numeroAEliminar = parseInt(document.getElementById("text2").value);
    let numeros = numerosString.split(",").map(num => parseInt(num));

    let index = numeros.indexOf(numeroAEliminar);
    if (index !== -1) {
      numeros.splice(index, 1);
      let resp = document.getElementById("resp");
      resp.textContent = `Nuevo arreglo: [${numeros.join(", ")}]`;
    } else {
      alert("El número no se encontró en el arreglo.");
    }
  }

  base2a10(){
    let numBase2 = document.getElementById("text1").value;
    let arr = numBase2.split("").map(Number);

    let base10 = 0;
    let exp = arr.length - 1;
    for (let i = 0; i < arr.length; i++) {
      base10 += arr[i] * Math.pow(2, exp);
      exp--;
    }

    const resp = document.getElementById("resp");
    resp.textContent = `Base2[${numBase2}] es= ${base10} Base10`;
  }

  base10a2(){
    let num = parseInt(document.getElementById("text1").value)
    let digito,numeros = [], base2 = "",aux
    aux=num
    let resp = document.getElementById("resp")
    while (num > 0) {
      digito = num % 2
      num = Math.floor(num / 2)
      numeros.push(digito)
    }
    for (let ind = numeros.length - 1; ind >= 0; ind--) {
      base2 = base2 + numeros[ind]
    }
    console.table({aux,base2})
    resp.textContent = `Base10[${aux}] es= ${base2} Base2`
  }

  sueldoEmpleados(){
    let empleados = [];
    let nombre = document.getElementById("text1").value;
    let valorHora = parseInt(document.getElementById("text2").value);
    let numeroHoras = parseInt(document.getElementById("text3").value);

    if (nombre && !isNaN(valorHora) && !isNaN(numeroHoras)) {
      empleados.push({ nombre: nombre, vh: valorHora, nh: numeroHoras });
      document.getElementById("nombreEmpleado").value = "";
      document.getElementById("valorHora").value = "";
      document.getElementById("numeroHoras").value = "";
    }

    if (empleados.length === 0) {
      document.getElementById("resp").textContent = "Agrega al menos un empleado.";
    } else {
      let totalSueldos = 0;
      for (let i = 0; i < empleados.length; i++) {
        totalSueldos += empleados[i].vh * empleados[i].nh;
      }

      let promedioSueldos = totalSueldos / empleados.length;
      document.getElementById("resp").textContent = "Promedio de sueldos: " + promedioSueldos.toFixed(2);
    }
  }

  // ? 0000000000000000000000000
  acuDivisores(num){
    let acu=0
    for(let c=1; c<num; c++){
      if (num%c==0){
        acu = acu + c;
      }
    }
    return acu;
  }

  // !a
  factorize(num) {
    let factors = [];
    for (let i = 2; i <= num; i++) {
      while ((num % i) === 0) {
        factors.push(i);
        num /= i;
      }
    }
    return factors;
  }

  // !b
  binarioADecimal(binario) {
    let decimal = parseInt(binario, 2);
    return decimal;
  }
  // (base 2 a base 10)

  // ? 0000000000000000000000000

  sumaDivisores(){
    //[4,6,9,10]=1+2=3,1+2+3=6,1+3=4,1+2+5=8
    let datos= document.getElementById("text1").value;
    let numeros = datos.split(";"); //["4","6","9","10"]
    let acu = 0;
    let num = 0;
    let resultado = "";
    let resp = document.getElementById("resp");

    // recorre cada elemento del arreglo
    for(let i=0; i<numeros.length; i++){
        // proceso de suma de divisores
        num = parseInt(numeros[i]);
        acu = this.acuDivisores(num);
        resultado = resultado + acu +"|";    //""+"3"="3"+"|"+"6"="3|6"
    }

    resp.textContent=`La suma de los divisores del arreglo[${numeros}] son= ${resultado}`;
  }

  perfectos(){
    let datos= document.getElementById("text1").value
    let numeros = datos.split(";")
    let acu,num=0,resultado=""
    let resp = document.getElementById("resp")
    // recorre cada elemento del arreglo
    for(let i=0;i < numeros.length;i++){
      num=parseInt(numeros[i])
      acu=this.acuDivisores(num)
      if (acu==num){
        resultado=resultado+num+"|"    //""+"3"="3"+"|"+"6"="3|6"
      }
    }
    resp.textContent=`Los numeros perfecto del arreglo[${numeros}] son= ${resultado}`
  }

  // !agregar respuesta
  primos(){
    let arr1 = document.getElementById("text1").value;
    let respuesta = document.getElementById("resp");
    let arr = arr1.split(";").map(Number);
    let canPrimos = 0;

    for (let i = 0; i < arr.length; i++) {
      let numero = arr[i];
      if (numero > 1) {
        let esPrimo = true;
        for (let j = 2; j <= Math.sqrt(numero); j++) {
          if (numero % j === 0) {
            esPrimo = false;
            break;
          }
        }
        if (esPrimo) {
          canPrimos++;
        }
      }
    }

    respuesta.textContent = `La cantidad de números primos es: ${canPrimos}`;
  }

  repeticionNdA(){
    let arreglo = document.getElementById("text1").value;
    let numero = parseInt(document.getElementById("text2").value);
    let arr = arreglo.split(";").map(Number);
  
    let repeticiones = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === numero) {
        repeticiones++;
      }
    }
  
    const resp = document.getElementById("resp");
    resp.textContent = `El número ${numero} se repite ${repeticiones} veces en el arreglo.`;
  }

  vueltoCantidadMB(){
    let costo =document.getElementById("text1").value
    costo=parseFloat(costo)
    let pago =document.getElementById("text2").value
    pago=parseFloat(pago)
    let vuelto=pago-costo
    if(costo>pago){
      document.getElementById("resp").textContent = `Pago insuficiente`

    }else{
      if(costo==pago){
        document.getElementById("resp").textContent = `Pago exacto`

      }else{
        let vueltofinal=parseInt(vuelto)
        let cantidaddecimal=Math.round((vuelto%1)*100)
        const billetes = [100,50, 20, 10, 5, 1];
        let respuesta = "";
        let respuestaFormatoEspecial = "";

        for (let i = 0; i < billetes.length; i++) {
          const billete = billetes[i];
          let contador = 0;

          while (vueltofinal >= billete) {
            contador++;
            vueltofinal-=billete;
          }

          if (contador > 0) {
            if (billete >= 1) {
              respuestaFormatoEspecial += `${contador} billete${contador > 1 ? "s" : ""} de ${billete}, `;
            }
          }
        }

        respuestaFormatoEspecial = respuestaFormatoEspecial.slice(0, -2);
        document.getElementById("resp").textContent = `Vuelto: ${respuestaFormatoEspecial} y ${cantidaddecimal} centavos`;
      }
    }
  }
}

const arreglos = new Arreglos()



function acuDivisores(num){
  let acu=0
  for(let c=1; c<num; c++){
    if (num%c==0){
      acu = acu + c;
    }
  }
  return acu;
}

function limpiarR() {
  document.getElementById("resp");
  resp.textContent = "RESPUESTA";
}