function setInnerText(id, value) {
    document.getElementById(id).innerText = value;
  }

  function totalPrice(id, value) {
    const totalCost = document.getElementById(id).innerText;
    const total = parseInt(totalCost) + parseInt(value);
    document.getElementById(id).innerText = total;
    grandTotal("other");
  }
  function totalPrice(id, value) {
    const totalCost = document.getElementById(id).innerText;
    const total = parseInt(totalCost) + parseInt(value);
    document.getElementById(id).innerText = total;
  
  }

  function hideElementById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}

function showElementById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}
function setBackgroundColorById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('bg-orange-400');
}

function removeBackgroundColorById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('bg-orange-400');
}
