
const addAmount = document.getElementById('add-amount')
const cashoutAmount = document.getElementById('cashout-amount')

// add money
document.getElementById('add-money').addEventListener('click', function(){
    addAmount.classList.remove('hidden')
    cashoutAmount.classList.add('hidden')
})

// cashout money
document.getElementById('cashout-money').addEventListener('click', function(){
    addAmount.classList.add('hidden')
    cashoutAmount.classList.remove('hidden')
})

