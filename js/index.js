// const allBtn = document.querySelectorAll(".seat_btn");
// console.log(allBtn)
// let totalSeat =40
//  let count = 0;
//  for (const btn of allBtn) {
//    btn.addEventListener("click", function halnDle(e) {
//      count +=1
//     setInnerText('seat_count',count)
//     totalSeat -=1
//     setInnerText('total_seat',totalSeat)
    
    
    

//    } )};

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
        const selectedContainer = document.getElementById(
            "selected-seat-number"
          );
        const selectedSeatNumber = document.getElementById('selected-seat-number')
        console.log("jhkgdfg")
    });
}

// const allBtn = document.querySelectorAll(".seat_btn");
// let totalSeat = 40;
// let selectedCount = 0;

// for (const btn of allBtn) {
//     btn.addEventListener("click", function handleClick(e) {
//         if (!btn.classList.contains('selected') && selectedCount < 4) {
//             btn.classList.add('selected');
//             selectedCount++;
//             setInnerText('seat_count', selectedCount);
//             totalSeat--;
//             setInnerText('total_seat', totalSeat);
//             // বাটনের টেক্সট দাম হিসাবে নেওয়া যায়
//             const seatNumber = btn.innerText;
//             console.log('সিট নাম্বার:', seatNumber);
//             // সিটের ক্লাস দাম হিসাবে নেওয়া যায়
//             const seatClass = btn.getAttribute('ক্িবতু');
//             console.log('সিট ক্লাস:', seatClass);
//         } else if (btn.classList.contains('selected')) {
//             btn.classList.remove('selected');
//             selectedCount--;
//             setInnerText('seat_count', selectedCount);
//             totalSeat++;
//             setInnerText('total_seat', totalSeat);
//         } else {
//             alert('আপনি মোট ৪ টি টিকেট নির্বাচন করেছেন');
//             return;
//         }
//     });
// }
