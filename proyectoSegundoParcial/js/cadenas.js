class Cadenas {
  vocalesConsonantes(){
    let frase = document.getElementById("text1").value
    let resp = document.getElementById("resp")
    let cv=0,cc=0
    for(let i=0;i < frase.length;i++){
        if (frase[i]== 'a' || frase[i]== 'e' || frase[i]== 'i' || frase[i]== 'o' || frase[i]== 'u' ) {
          cv=cv+1
        }
        if (frase[i]>= 'a' && frase[i]<= 'z' ) {
          cc=cc+1
        }
    }
    console.table({cv,cc})
    resp.textContent=`cantidad de vocales:= ${cv} cantidad de consonantes:= ${cc}`
  }

  palabrasF(){
    let texto = document.getElementById("text1").value;
    let resp = document.getElementById("resp");
    let contadorSubcadenas = 0;

    for (let i = 0; i < texto.length; i++) {
        if (texto[i] !== " ") {
            contadorSubcadenas++;
            while (i < texto.length && texto[i] !== " ") {
                i++;
            }
        }
    }

    resp.innerHTML = "Número de palabras en la frase: " + contadorSubcadenas;
  }

  caracteresE(){
    let text1=document.getElementById("text1").value
    let resp=document.getElementById("resp")
    let ac=0
  
    for(let i=0; i < text1.length;i++){
    
    if(text1[i]=="," || text1[i]=="." || text1[i]==":" || text1[i]==';') {
    
    ac= ac + 1
    
    }


    }
    resp.textContent=`total de caracteres especiales: ${ac}`
    console.log("total de caracter especiales: "+ ac)
  }

  fraseIgual(){
    let text1= document.getElementById("text1").value
    let resp= document.getElementById("resp")
    let fra=""
    for(let i=text1.length-1;i>=0;i--){
      fra=fra+text1[i]
    }
    if(fra==text1){
      resp.textContent="si la inviertes es igual a la original"
    }else{
      resp.textContent="si la inviertes no es igual a la original"
    }

  }

  copiaFraseI(){
    let text1= document.getElementById("text1").value
    let resp= document.getElementById("resp")
    let fra=""
    for(let i=text1.length-1;i>=0;i--){
      fra=fra+text1[i]
    }
    resp.textContent= fra
  }

  concatenarF(){
    let frase1 = document.getElementById("text1").value;
    let frase2 = document.getElementById("text2").value;

    let fraseConcatenada = "";

    for (let i = 0; i < frase1.length; i++) {
        fraseConcatenada += frase1[i];
    }

    fraseConcatenada += " ";

    for (let i = 0; i < frase2.length; i++) {
        fraseConcatenada += frase2[i];
    }

    resp.innerHTML = "Frase concatenada es: " + fraseConcatenada;
  }

  buscarC(){
    let text1= document.getElementById("text1").value
    let text2= document.getElementById("text2").value
    let resp= document.getElementById("resp")
    let arr=[]
    for(let i=0;i<text1.length;i++){
      if (text1[i]==text2){
        arr.push(i)
      }
    }
    for(let i=0;i<text1.length;i++){
      if (text1[i]==text2){
        resp.textContent= `El caracter ${text2} esta en la posicion: ${arr}`
        break
      }else{
        resp.textContent= `El caracter ${text2} no esta en el texto`
      }
    }
    
  }

  buscarS(){
    let frase = document.getElementById("text1").value;
    let subcadena = document.getElementById("text2").value;
    let posicion = -1;

    for (let i = 0; i < frase.length - subcadena.length + 1; i++) {
        let coincidencia = true;
        for (let j = 0; j < subcadena.length; j++) {
            if (frase[i + j] !== subcadena[j]) {
                coincidencia = false;
                break;
            }
        }
        if (coincidencia) {
            posicion = i;
            break;
        }
    }

    resp.innerHTML = "Posición de la subcadena: " + (posicion !== -1 ? posicion : "No encontrada");
  }

  insertarS(){
    let cadena = document.getElementById("text1").value
    let subcadena = document.getElementById("text2").value
    let posicion = parseInt(document.getElementById("text3").value)
    let resp = document.getElementById("resp")
    let aux=""

    if (posicion>=0 && posicion<=cadena.length){ 
      for (let i=0; i<posicion; i++) {
        aux = aux + cadena[i];
      }
      aux = aux + subcadena;
      
      for (let i=posicion; i<cadena.length; i++) {
        aux = aux + cadena[i];
      }
      cadena = aux;
      
      resp.textContent = `Cadena nueva: ${cadena}`
    }

    else{
      alert("La posición no es valida")
    }
  }

  eliminarS(){
    let frase = document.getElementById("text1").value;
    let subcadena = document.getElementById("text2").value;
    let posicion = -1;

    for (let i = 0; i <= frase.length - subcadena.length; i++) {
        let coincidencia = true;
        for (let j = 0; j < subcadena.length; j++) {
            if (frase[i + j] !== subcadena[j]) {
                coincidencia = false;
                break;
            }
        }
        if (coincidencia) {
            posicion = i;
            break;
        }
    }

    if (posicion !== -1) {
        let nuevaFrase = "";
        for (let i = 0; i < frase.length; i++) {
            if (i < posicion || i >= posicion + subcadena.length) {
                nuevaFrase += frase[i];
            }
        }
        resp.innerHTML = "Frase después de eliminar: " + nuevaFrase;
    } else {
        resp.innerHTML = "La subcadena no se encontró en la frase.";
    }
  }

  convertirFaA(){
    let text1 =(document.getElementById("text1").value).split(";")
    let resp= document.getElementById("resp")
    let arr= []
    console.log(text1)
    for (let i=0;i<text1.length;i++){
      arr.push(text1[i])
    }
    resp.textContent=  `El arreglo es: [${arr}]`
  }

  sumaDigitosF(){
    let text1= (document.getElementById("text1").value)
    let resp= document.getElementById("resp")
    let nums = []
    let suma = 0
    for(let i=0;i<text1.length;i++){
      if(!isNaN(text1[i])){
        nums.push(parseInt(text1[i]))
        console.log(text1[i])
      }
    }
    for(let i = 0;i<nums.length;i++){
    suma = suma + nums[i]
    console.log(nums)
    }
    resp.textContent= `la suma de los numeros que hay en la frase es: ${suma}`
  }


  /*    sumaDigitosF2(){ //funciona bien cuando todo esta unido
      let text1= document.getElementById("text1").value
      let resp= document.getElementById("resp")
      let nums = []
      let suma = 0
      for(let i=0;i<text1.length;i++){
        if(!isNaN(text1[i])){
          nums.push(parseInt(text1[i]))
          console.log(text1[i])
        }
      }
      for(let i = 0;i<nums.length;i++){
      suma = suma + nums[i]
      console.log(nums)
      }
      resp.textContent= `la suma de los numeros que hay en la frase es: ${suma}`
    }

      sumaDigitosF3(){ //este funciona perfectamente pero usa el metodo replace o algo asi
        let text1 = document.getElementById("text1").value;
        let resp = document.getElementById("resp");
        let nums = [];
        let suma = 0;
        
        // Remover espacios en blanco y luego dividir la cadena en palabras
        let palabras = text1.replace(/\s+/g, '').split('');
      
        for (let i = 0; i < palabras.length; i++) {
          if (!isNaN(palabras[i])) {
            nums.push(parseInt(palabras[i]));
          }
        }
        
        for (let i = 0; i < nums.length; i++) {
          suma = suma + nums[i];
        }
      
        resp.textContent = `la suma de los números que hay en la frase es: ${suma}`;     */


  }


const cadenas = new Cadenas()


function limpiarR() {
  document.getElementById("resp");
  resp.textContent = "RESPUESTA";
}