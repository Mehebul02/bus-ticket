
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
document.getElementById('input-filed').addEventListener('keyup',function(event){
    const text =event.target.value
    console.log(text)
    const deleteButton =document.getElementById('apply-btn')
    if(text ==='NEW15'){
        

        deleteButton.removeAttribute('disabled')

    }
    else if(text ==='Couple20'){
        deleteButton.removeAttribute('disabled')
    }
    
    else{
        deleteButton.setAttribute('disabled')
    }
})


document.getElementById('apply').addEventListener('click',function(){
    const secret =document.getElementById('info')
    secret.style.display='none'
})

