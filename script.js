function GuardarDatos() {
    let nm = document.getElementById("Nomb").value;
    let nm1 = document.getElementById("Cnomb");
    nm1.value = nm;

    let ab = document.getElementById("Apel").value;
    let ab1 = document.getElementById("Capel");
    ab1.value = ab;

    let ac = document.getElementById("Email").value;
    let ac1 = document.getElementById("Cemail")
    ac1.value = ac;
    
    let ad = document.getElementById("Año").value;
    let ad1 = document.getElementById("CEdad")
    ad1.value = new Date().getFullYear() - ad;

    let ae = document.getElementById("Condi");
    if (ad1.value >= 18) {
        ae.value = "Mayor de edad"
    } else {
        ae.value = "Menor de edad";
    }

    let af = parseFloat(document.getElementById("Peso").value);
    let ag = parseFloat(document.getElementById("Altura").value);
    let imc = af/(ag*ag);
    let imcRedondeado = imc.toFixed(1);
    document.getElementById("CIMC").value = imcRedondeado;

    let ah = document.getElementById("Año").value;
    let ai = document.getElementById("AñoN");
    
    ai.value = ah;

    if(parseInt(ah)  % 2 === 0){
        ai.value +=  " Par";
    }else{
        ai.value += " Impar";
    }
}
    document.getElementById("form").addEventListener("submit", function(event) {
        event.preventDefault();
        GuardarDatos();
});