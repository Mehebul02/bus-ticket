
const allBtn = document.querySelectorAll(".seat_btn");
let totalSeat = 40;
let selectedCount = 0;

for (const btn of allBtn) {
    btn.addEventListener("click", function handleClick(e) {
        
        if (!btn.classList.contains('select') && selectedCount < 4) {
            btn.classList.add('seat_btn');
            selectedCount++;
            setInnerText('seat_count', selectedCount);
            totalSeat--;
            setInnerText('total_seat', totalSeat);
            btn.style.background='green'
            btn.removeEventListener("click", handleClick);
        } else if (btn.classList.contains('select')) {
            
            btn.classList.remove('seat_btn');
            selectedCount++;
            setInnerText('seat_count', selectedCount);
            totalSeat--;
            setInnerText('total_seat', totalSeat);
            btn.style.background='green'
        } 
        else {
            alert('You have selected a total of 4 tickets');
            return 
        }
        
        const selectedSeatNumber = document.getElementById('selected-seat-number')
        const td1 = document.createElement('td');
  const td2 = document.createElement('td');
  const td3 = document.createElement('td');
 
  

  const newRow = document.createElement('tr');
  newRow.appendChild(td1);
  newRow.appendChild(td2);
  newRow.appendChild(td3);

  selectedSeatNumber.appendChild(newRow)
  const seatName = e.target.parentNode.innerText;
td1.innerText = seatName;
td2.textContent = 'Economoy'
   selectedSeatNumber.appendChild(td2)
   td3.textContent = '500'
     selectedSeatNumber.appendChild(td3)



// const li = document.createElement("li");
// const p1 = document.createElement("p");
// const p2 = document.createElement("p");
// const p3 = document.createElement("p");

// li.appendChild(p1);
// li.appendChild(p2);
// li.appendChild(p3);

// li.style.listStyle='none'
// selectedSeatNumber.appendChild(li);
//   const seatName = e.target.parentNode.innerText;
//     p1.innerText = seatName;
//     // 
//     p2.textContent = 'Economoy'
//     selectedSeatNumber.appendChild(p2)

//    p3.textContent = '500'
//     selectedSeatNumber.appendChild(p3)



    });
}
