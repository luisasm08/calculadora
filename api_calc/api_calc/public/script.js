function sendCalc(){
    const url = "http://localhost:5500"
    const corpo = {
        operador: document.getElementById('cnumero1').innerHTML,
        numero1: document.getElementById('coperador').innerHTML,
        numero2: document.getElementById('cnumero2').innerHTML
    }
    fetch(url, {
        method: "POST",
        body: JSON.stringify(corpo),
        headers:{
            "Content-type":"application/json; charset=UTF-8"
        }
    })
}
