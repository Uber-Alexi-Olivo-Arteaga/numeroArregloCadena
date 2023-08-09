class Numeros{
    vuelto(){
    let cantidad = parseInt(document.getElementById("num1").value);
    let precio = parseFloat(document.getElementById("num2").value);
    let pago = parseFloat(document.getElementById("num3").value);
    let agregarIva = document.getElementById("cBox").checked;
    let ivaPorcentaje = parseFloat(document.getElementById("num4").value);
    let resp = document.getElementById("resp");

    if (isNaN(cantidad) || isNaN(precio) || isNaN(pago)) {
      resp.textContent = "Por favor, ingrese valores numéricos válidos";
      return;
    }

    let total = cantidad * precio;
    let vuelto = pago - total;

    if (agregarIva) {
      if (isNaN(ivaPorcentaje)) {
        resp.textContent = "Por favor, ingrese un porcentaje de iva válido";
        return;
      }
      let iva = total * (ivaPorcentaje / 100);
      let totalConIva = total + iva;
      let vueltoConIva = pago - totalConIva;
      resp.textContent = `El valor del vuelto es ${vueltoConIva}`;
    } else {
      resp.textContent = `El valor del vuelto es ${vuelto}`;
    }
  }

  multiplo(){
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let resp = document.getElementById("resp");
    num1 = parseInt(num1);
    num2 = parseInt(num2);

    if (isNaN(num1) || isNaN(num2)) {
      resp.textContent = "Por favor, ingrese ambos números";
    } else {
      if (num1 % num2 === 0) {
        resp.textContent = `${num2} es múltiplo de ${num1}`;
      } else{
        resp.textContent = `${num2} no es múltiplo de ${num1}`;
      }
    }
  }
  
  divisores(){
    let num1 = parseInt(document.getElementById("num1").value);
    let resp = document.getElementById("resp");
    let contador = 1;
    let divisor = "";

    if (isNaN(num1) || (num1 === "")) {
      resp.textContent = "Por favor, ingrese un número valido";
    } else {
      while (contador <= num1) {
        if (num1 % contador === 0) {
          divisor = divisor + " " + contador.toString();
        }
        contador = contador + 1;
      }
      resp.textContent = divisor;
    }
  }

  sumaDivisores(){
    let num1 = parseInt(document.getElementById("num1").value);
    let resp = document.getElementById("resp");
    let divisor = 1;
    let sumaD = 0;

    if (isNaN(num1) || (num1 === "")) {
      resp.textContent = "Por favor, ingrese un número válido";
    } else {
      while (divisor <= num1) {
        if (num1 % divisor === 0) {
          sumaD = sumaD + parseInt(divisor);
        }
        divisor = divisor + 1;
      }
      resp.textContent = sumaD;
    }
  }

  cantidadDivisores(){
    let num1 = parseInt(document.getElementById("num1").value);
    let resp = document.getElementById("resp");
    let divisor = 1;
    let cantidadD = 0;

    if (isNaN(num1) || (num1 === "")) {
      resp.textContent = "Por favor, ingrese un número valido";
    } else {
      while (divisor <= num1) {
        if (num1 % divisor === 0) {
          cantidadD = cantidadD + 1;
        }
        divisor = divisor + 1;
      }
      resp.textContent = cantidadD;
    }
  }

  perfecto(){
    let num1 = parseInt(document.getElementById("num1").value);
    let resp = document.getElementById("resp");
    let resto = 0;
    let contador = 1;
    let sumaD = 0;

    if (isNaN(num1)) {
      resp.textContent = "Por favor, ingrese un número válido";
    } else {
      while(contador < num1){
        resto = num1 % contador;
        if (resto === 0) {
          sumaD = sumaD + contador;
        }
        contador = contador + 1;
      }
      if (sumaD === num1) {
        resp.textContent = `${num1} es un número perfecto`;
      } else {
        resp.textContent = `${num1} no es un número perfecto`;
      }
    }
  }

  amigos(){
    let num1 = parseInt(document.getElementById("num1").value);
    let num2 = parseInt(document.getElementById("num2").value);
    let resp = document.getElementById("resp");
    let sumaDiv1 = 0;
    let sumaDiv2 = 0;

    if (isNaN(num1) || isNaN(num2)) {
      resp.textContent = "Por favor, ingrese ambos números";
    } else if (num1 === num2) {
      resp.textContent = "Los números iguales no pueden ser amigos (reflexivo)";
    } else {
      for (let i = 1; i < num1; i++){
        if (num2 % i === 0) {
          sumaDiv1 = sumaDiv1 + i;
        }
      }
      for (let j = 1; j < num2; j++) {
        if (num2 % j === 0) {
          sumaDiv2 = sumaDiv2 + j;
        }
      }
      if (sumaDiv1 === sumaDiv2) {
        resp.textContent = `${num1} y ${num2} son números amigos`;
      } else {
        resp.textContent = `${num1} y ${num2} no números amigos`;
      }
    }
  }

  primo(){
    let num1 = parseInt(document.getElementById("num1").value);
    let resp = document.getElementById("resp");

    if (isNaN(num1)) {
      resp.textContent = "Por favor, ingrese un número válido";
    } else if (num1 <= 1) {
      resp.textContent = `El número ${num1} no es primo`;
    } else {
      let esPrimo = true;
      for (let i = 2; i <= Math.sqrt(num1); i++) {
        if (num1 % i === 0) {
          esPrimo = false;
          break;
        }
      }
      if (esPrimo) {
        resp.textContent = `El número ${num1} es primo`;
      } else {
        resp.textContent = `El número ${num1} no es primo`;
      }
    }
  }

  primosGemelos(){
    let num1 = parseInt(document.getElementById("num1").value);
    let num2 = parseInt(document.getElementById("num2").value);
    let resp = document.getElementById("resp");

    function esPrimo(num) {
      if (num <= 1) {
        return false;
      }
      for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
        return false;
        }
      }
      return true;
    }
    if (isNaN(num1) || isNaN(num2)) {
      resp.textContent = "Por favor, ingrese ambos números";
    } else {
      if (esPrimo(num1) && esPrimo(num2) && Math.abs(num1 - num2) === 2) {
      resp.textContent = `${num1} y ${num2} son primos gemelos`;
    } else {
      resp.textContent = `${num1} y ${num2} no son primos gemelos`;
      }
    }
  }

  numeroInvertido(){
    let num1 = parseInt(document.getElementById("num1").value);
    let resp = document.getElementById("resp");
    let digito = 0;
    let nI = 0;
    if (isNaN(num1) || (num1 === "")) {
      resp.textContent = "Por favor, ingrese un número valido";
    } else {
      while (num1 !== 0) {
        digito = num1 % 10;
        nI = (nI * 10) + digito;
        num1 = Math.trunc(num1 / 10);
      }
      resp.textContent = nI;
    }
  }

  cantidadDigitos(){
    let num1 = document.getElementById("num1").value;
    let resp = document.getElementById("resp");
    let contador = 0;
    if (isNaN(num1) || (num1 === "")) {
      resp.textContent = "Por favor, ingrese un número valido"
    } else {
      if (num1 === 0) {
        contador = 1;
      } else {
        let numString = num1.toString();
        contador = numString.length;
        resp.textContent = contador;
      }
    }
  }

  factorial(){
    let num1 = document.getElementById("num1").value;
    let resp = document.getElementById("resp");
    let factorial = 1;
    if (num1 === "") {
      resp.textContent = "Por favor, ingrese un número valido";
    } else {
      if (num1 > 0) {
        for (let x = 1; x <= num1; x++) {
          factorial = factorial * x;
        }
        resp.textContent = `El factorial de ${num1} es: ${factorial}`;
      } else {
        resp.textContent = `El factorial solo está definido para números naturales`;
      }
    }
  }

  exponente(){
    let num1 = parseInt(document.getElementById("num1").value);
    let num2 = parseInt(document.getElementById("num2").value);
    let resp = document.getElementById("resp");
    let resultado = 1;
    if (isNaN(num1) || isNaN(num2)) {
      resp.textContent = "Por favor, ingrese ambos números";
    } else {
      for (let i = 1; i <= num2; i++) {
        resultado = resultado * num1;
    }
    resp.textContent = resultado;
    }
  }

  tablaMultiplicar(){
    let num1 = parseInt(document.getElementById("num1").value);
    let resp = document.getElementById("resp");
    if (isNaN(num1)) {
      resp.textContent = "Por favor, ingrese un número válido";
    } else {
      let tabla = "";
      for (let contador = 1; contador <= 12; contador++) {
        let resultado = num1 * contador;
        tabla = tabla + `${num1} x ${contador} = ${resultado} <br>`;
      }
      resp.innerHTML = tabla;
    }
  }

  fibonacci() {
    let num1 = parseInt(document.getElementById("num1").value);
    let resp = document.getElementById("resp");
    let numeroActual = 0;
    let siguienteN = 1;
    let suma = 0;
    let contador = 2;
    let serie = "";
    if (isNaN(num1) || (num1 < 1)) {
      resp.textContent = "Por favor, ingrese un número válido";
    } else {
      serie = serie + numeroActual;
      if (num1 > 1) {
        serie = serie + "<br>" + siguienteN;
      }
      while (contador <= num1) {
        suma = numeroActual + siguienteN;
        serie = serie + "<br>" + suma;
        numeroActual = siguienteN;
        siguienteN = suma;
        contador = contador + 1;
      }
      resp.innerHTML = serie;
    }
  }
}

const numero = new Numeros();


function limpiarR() {
  document.getElementById("resp");
  resp.textContent = "RESPUESTA";
}