const addroom = document.getElementById('addroom');
//to add new rooms 
addroom.addEventListener('click', function() {
    const container = document.getElementById('container');
    const clone = container.cloneNode(true); // Cloning the room structure
    container.parentNode.appendChild(clone); // Appending the cloned structure
    
  });

//to subtract old rooms 
const subroom = document.getElementById("subroom");
subroom.addEventListener("click", ()=>{
    container.removeChild(container.lastChild);
})
