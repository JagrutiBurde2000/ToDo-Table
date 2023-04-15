const container=document.getElementById("input-container1")
const nameaccess=document.getElementById("name")
const emailaccess=document.getElementById("email")
const table=document.getElementById("todo-table")
const button=document.getElementById("btn");
const button1=document.getElementById("btn1");
function addTodo(){
   console.log("function called")
  
   
    let firstName=nameaccess.value.trim();
    let emailval=emailaccess.value;

   console.log(firstName,emailval)

  var row=table.insertRow();

  if(firstName &&  emailval){
   var cell1=row.insertCell(0);
   var cell2=row.insertCell(1);
   cell1.innerHTML=firstName;
  cell2.innerHTML=emailval;
  button.innerText="add more"
}
 
}

