
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
 const value=500
 const price= td3.innerText =value
     selectedSeatNumber.appendChild(td3)
   
totalPrice("total_price",price)
totalPrice("grand_total",price)
    

// let isSeatSelected = false;
// let isNameEntered = false;
// let isNumber=false


// const seatButton = document.getElementById('input_btn');
// const nameInput = document.getElementById('name_Input');
// const numberInput = document.getElementById('number_input');

// // বাটন ক্লিকের ইভেন্ট লিসেনার
// seatButton.addEventListener('click', function() {
//     if (isSeatSelected && isNameEntered) {
//         // এই ক্লিকের ব্যবস্থা
//         console.log('সিট নির্বাচন এবং নাম প্রবেশ দেওয়া হয়েছে, বাটন চালু করা হয়েছে।');
//     } else {
//         console.log('দুঃখিত, সিট নির্বাচন বা নাম প্রবেশ করা হয়নি।');
//     }
    
// });

// // ইনপুট ফিল্ডের onchange ইভেন্ট লিসেনার
// nameInput.addEventListener('change', function() {
//     const nameValue = nameInput.value.trim();
//     if (nameValue !== '') {
//         isNameEntered = true;
//     } else {
//         isNameEntered = false;
//     }
//     console.log('নাম প্রবেশ:', isNameEntered);
// });
// numberInput.addEventListener('change', function() {
//     const numberValue = numberInput.value.trim();
//     if (numberValue !== '') {
//         isNumber = true;
//     } else {
//         isNumber = false;
//     }
//     console.log('নাম প্রবেশ:', isNumber);
// });

// // আপনার সিট নির্বাচন লজিক যোগ করুন, এবং isSeatSelected ভেরিয়েবল আপডেট করুন।

// // এবং আপনার অন্যান্য কোড লিখুন।



    });
}
const seatButton = document.getElementById('input_btn');
const containerButton = document.getElementById('container');

seatButton.addEventListener("click",function(){
    hideElementById('main_section')
    showElementById('success_section')

})
containerButton.addEventListener("click",function(){
    hideElementById('success_section')
    showElementById('main_section')
})

