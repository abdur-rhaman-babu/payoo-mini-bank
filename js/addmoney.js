// add money 
document.getElementById('add-money-btn').addEventListener('click', function(e){
    e.preventDefault()

    const amount = document.getElementById('amount').value;
    const pinNumber = document.getElementById('pin-number').value;
    const balance = document.getElementById('current-balance').innerText;
    if ( pinNumber === '1234'){
      
        const preAmount = parseFloat(balance)
        const currentAmount = parseFloat(amount)
        document.getElementById('current-balance').innerText = preAmount + currentAmount;
      
    }else{
        alert('Something is worng went,please try again')
    }
})