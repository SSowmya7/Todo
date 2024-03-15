let ulElement = document.querySelector("ul");
// console.log(ulElement);
ulElement.addEventListener("click", function (event) {
  let targetElement = event.target;
//   console.log(targetElement);
  if (targetElement.id == "delete") {
    targetElement.parentElement.parentElement.remove();
  }
});


let formElement = document.getElementById("add");
formElement.addEventListener("submit", addtodo);

function addtodo(event) {
  event.preventDefault();
  let inputValue = formElement.querySelector("input").value;
  const timestamp = new Date().toLocaleString();
  // console.log(timestamp)
  // console.log(inputValue)
  if(inputValue !== ''){
  let ulElement = document.querySelectorAll("ul")[0];

  let liElement = document.createElement("li");
  let itemElement = document.createElement("span");
  let deleteItem = document.createElement("span");
  let editItem = document.createElement('span')
  // console.log("timestamp"+timestamp);
  itemElement.innerHTML = '<input type="checkbox">' + inputValue +`  `+ `[`+`${timestamp}`+']';
  // itemElement.textContent=inputValue;
  editItem.innerHTML='<i id="edit" class="fa fa-edit"></i>';
  deleteItem.innerHTML = '<i id="delete" class="fa fa-trash-o"></i>';
  itemElement.classList.add("item");
  deleteItem.classList.add("delete");
  editItem.classList.add('edit')

  // console.log(deleteItem);
  liElement.appendChild(itemElement);
  liElement.appendChild(editItem);
  liElement.appendChild(deleteItem);
 
  // console.log(liElement);
  ulElement.appendChild(liElement);}
  formElement.querySelector("input").value = '';
}

let listElement = document.getElementById('edit');

ulElement.addEventListener('click',editTodo);

function editTodo(event) {
        let targetElement = event.target;
//   console.log(targetElement);
  if (targetElement.id == "edit") {
    let liElement = targetElement.parentElement.parentElement;
    // console.log(liElement)
    let itemElement = liElement.querySelector('.item');
        // console.log(itemElement);
        let inputValue = itemElement.textContent
       
        // console.log(inputValue)
         
         let inputField = document.createElement('input');
     
         inputField.value = inputValue;
        
        
         liElement.replaceChild(inputField, itemElement);
         
       
         inputField.focus();
         
         inputField.addEventListener('keyup', function(e) {
            
             if (e.key === 'Enter') {
                const timestamp = new Date().toLocaleString();
                 let newInputValue = inputField.value
                
                 if (newInputValue !== '') {
                     itemElement.innerHTML =  '<input type="checkbox">' + newInputValue +`  `+ `[`+`${timestamp}`+']';
                 }
                 liElement.replaceChild(itemElement, inputField);
             }
         });
  }
    
}
