document.getElementById('increase') .addEventListener('click', function name() {
  productsHandeler(true)  
})

document.getElementById('decrease') .addEventListener('click', function () {
   productsHandeler(false)
})


function productsHandeler(isIncrease) {
    const ticketInput = document.getElementById('money-count')
    const ticketCount = parseInt(ticketInput.value);
    // const ticketNewCount = ticketCount- 1;
    let ticketNewCount = ticketCount;
    if (isIncrease == true) {
        ticketNewCount = ticketCount + 1;
        
    }
    if (isIncrease == false && ticketCount>0) {
        ticketNewCount = ticketCount - 1;
        
    }
    ticketInput.value = ticketNewCount;
    const newTotal = ticketNewCount * 150;
    document.getElementById('subTotal').innerText = '$'+ newTotal;
}

//  Economy Ticket count
document.getElementById('economy-increase').addEventListener('click', function name() {
    const ticketInput = document.getElementById('economy-money')
    const ticketCount = parseInt(ticketInput.value);
    const ticketNewCount = ticketCount+ 1;
    ticketInput.value = ticketNewCount;
    var economyNewTotal = ticketNewCount * 100;
    document.getElementById('subTotal').innerText = '$'+ economyNewTotal;
})


// document.getElementById('increase') .addEventListener('click', function name() {
//     const ticketInput = document.getElementById('money-count')
//     const ticketCount = parseInt(ticketInput.value);
//     const ticketNewCount = ticketCount+ 1;
//     ticketInput.value = ticketNewCount;
//     const newTotal = ticketNewCount * 150;
//     document.getElementById('total')
    
// })

// document.getElementById('decrease') .addEventListener('click', function () {
//     const ticketInput = document.getElementById('money-count')
//     const ticketCount = parseInt(ticketInput.value);
//     const ticketNewCount = ticketCount- 1;
//     ticketInput.value = ticketNewCount;
//     const newTotal = ticketNewCount * 150;
//     document.getElementById('total')
// })