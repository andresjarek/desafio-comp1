let dolaroficial = 141.11;


alert('Conversor Pesos Argentinos a Dolares');
let input = parseFloat(prompt('Ingrese el monto en pesos'));
while(input !='ESC'){
    
    alert('Dolar Oficial' + ' ' + ((input/dolaroficial).toFixed(2)))
    alert('Dolar Blue' + ' ' + (((input/dolaroficial)/ 1.98)).toFixed(2));


    input = parseFloat(prompt('Ingrese el monto en pesos'));
}