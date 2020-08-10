//  this sets the first display to hidden
document.getElementById('output').style.visibility = 'hidden';

//  This calculates the weight
document.getElementById('amountInput').addEventListener('input', function(e){
    document.getElementById('output').style.visibility = 'visible';
    let amount = e.target.value;
    document.getElementById('dollar-output').innerHTML = amount / 459.55;
    document.getElementById('euros-output').innerHTML = amount / 429.8802;
    document.getElementById('yen-output').innerHTML = amount * 0.28;
    document.getElementById('won-output').innerHTML = amount * 3.17;

});
