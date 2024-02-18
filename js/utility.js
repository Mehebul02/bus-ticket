function setInnerText(id, value) {
    document.getElementById(id).innerText = value;
  }

  function totalPrice(id, value) {
    const totalCost = document.getElementById(id).innerText;
    const total = parseInt(totalCost) + parseInt(value);
    document.getElementById(id).innerText = total;
    grandTotal("other");
  }
//   let selectedTickets = [];
//         function selectTicket(ticketNumber) {
//             if (selectedTickets.includes(ticketNumber)) {
//                 const index = selectedTickets.indexOf(ticketNumber);
//                 selectedTickets.splice(index, 1);
//                 document.querySelector(`.ticket:nth-child(${ticketNumber})`).classList.remove('selected');
//             } else {
//                 if (selectedTickets.length < 4) {
//                     selectedTickets.push(ticketNumber);
//                     document.querySelector(`.ticket:nth-child(${ticketNumber})`).classList.add('selected');
//                 } else {
//                     alert('আপনি মোট ৪ টি টিকেট নির্বাচন করেছেন');
//                 }
//             }
//         }