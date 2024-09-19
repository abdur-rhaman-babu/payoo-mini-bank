// cashout 
document.getElementById('cashout-money-btn').addEventListener('click', function(e){
    e.preventDefault()
    const cashoutAmount = document.getElementById('cashout-amount').value;
    const cashoutPin = document.getElementById('cashout-pin-number').value;
    const balance = document.getElementById('current-balance').innerText;
    console.log(cashoutAmount, cashoutPin)
    if ( cashoutPin === '1234'){
        console.log('cashout succefull')
        document.getElementById('current-balance').innerText = parseFloat(balance) - parseFloat(cashoutAmount)

    }else{
        alert('Something is worng went, please try again')
    }
})