const inputBox =  document.getElementById("input-box");
const listContainer =  document.getElementById("list-container");
const button = document.getElementById("add_button");


//check if the user input an entry
button.onclick = function(){
  if(inputBox.value.trim() ===""){
    alert("you muast write something")
  } 

  //if yes, then create a li tag, appending it to listcontainer
  else{
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);

//creating the span to hold the close icon
    let span = document.createElement("span");
    span.innerHTML="x";
    li.appendChild(span);
    inputBox.value="";
    saveData()
  }
}

//for checking and deletion
listContainer.onclick = function(event){
    if (event.target.tagName === "LI"){
       event.target.classList.toggle("checked");
       saveData()
    }   
    else if(event.target.tagName === "SPAN"){
     event.target.parentElement.remove();
     saveData()
    }
    
}
showData()

//saving  and geting item from localstorage 
function saveData(){
  localStorage.setItem("data", listContainer.innerHTML)
};

function showData(){
  listContainer.innerHTML=localStorage.getItem("data");
}