
function productsHandeler(ticket , isIncrease) {
    let ticketInput = document.getElementById(ticket) // money
    let ticketCount = parseInt(ticketInput.value);
    // const ticketNewCount = ticketCount- 1;
    let ticketNewCount = ticketCount;
    if (isIncrease == true) {
        ticketNewCount = ticketCount + 1;
    }
    if (isIncrease == false && ticketCount > 0) {
        ticketNewCount = ticketCount - 1;
    }
    ticketInput.value = ticketNewCount;
    let newTotal = 0;
    if (ticket == "money") {
        newTotal = ticketNewCount * 150;
    }
    if (ticket == "economy") {
        newTotal = ticketNewCount * 100;
    }

    document.getElementById('subTotal').innerText = '$'+ newTotal;

    totalTicketPrice();
}

function totalTicketPrice(){
    let moneyInput = dynamicInput('money');
    let economynput = dynamicInput('economy');

    let subTotal = moneyInput * 150 + economynput * 100;
    document.getElementById('subTotal').innerText = '$' + subTotal;

    let vat = Math.round(subTotal * 0.1);
    document.getElementById('vat').innerText = '$' + vat;

    let totalCost = subTotal + vat;
    document.getElementById('totalCost').innerText = '$' + totalCost;
}

function dynamicInput(ticket){
    let ticketInput = document.getElementById(ticket) // money
    let ticketCount = parseInt(ticketInput.value);

    return ticketCount;
}


var bookingButton = document.getElementById('booking');
bookingButton.addEventListener('click', function () {
    var bookingArea = document.getElementById('booking-btn');
    bookingArea.style.display="none";
    var paymentStatus = document.getElementById('payment-confermation');
    paymentStatus.style.display = 'block';
})