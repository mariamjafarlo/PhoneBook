let inputName = document.querySelector("#input-name");
let saveButton = document.querySelector(".save");
let n = 0;
let errorElement = document.querySelector('.error-message');
let modal = document.querySelector('.modal');
let iconremov = document.querySelector('td');
let overlay = document.querySelector('#overlay');
let modalText = document.querySelector('.modal-text');
let yesButton = document.querySelector('#yesEditName')
let tableContainer = document.querySelector('.table-container');
let containerBody = document.querySelector('.container')

// var ajax = new XMLHttpRequest();
// ajax.open('GET' , 'http://youseframezani.somee.com/swagger/index.html');

// ajax.addEventListener('load' , function () {
//   if(this.readyState == XMLHttpRequest.DONE) {
//     if(this.status == 200) {
//       console.log('done');
//       var data = JSON.parse(this.responseText);
//       console.log(data);
//       var name = 'name: '+ data.username;
// 						console.log(name);
//     }
//     else if(this.status == 404) {
//       console.log('users not found');
//     }
//   }
// })

// ajax.send();

function checkValidation(){
  
}


saveButton.addEventListener("click", (e) => {
  e.preventDefault();
  
  const groupName = inputName.value.trim();
  if (groupName.length > 30 ) {
    errorElement.textContent= 'نام گروه نمی نواند بیشتر از 30 کاراکتر باشد!';
    errorElement.classList.add('visible')
    inputName.classList.add('error')
    return
  } 

   if (groupName.length <= 0) {
    errorElement.textContent= 'نام گروه نمی تواند خالی باشد !';
    errorElement.classList.add('visible')
    inputName.classList.add('error')
    return
  } 
  
  
  
  n++;
  groupName.textContent= '';
  appendRowToContactGropTable(inputName.value , n);
  $(inputName).val('');
  errorElement.classList.remove('visible')
  inputName.classList.remove('error')
  
});


function appendRowToContactGropTable(name, id) {

  let table = document.querySelector("#table");
  table.classList.add('active')

  const tr = document.createElement("tr");
  tr.setAttribute("data-id", id);
  const tdId = document.createElement("td");

  tdId.setAttribute("class", "id-number");
  tdId.textContent = id;

  const tdName = document.createElement("td");
  tdName.setAttribute('data-id',id);
  tdName.textContent = name;
 

  const tdDelete = document.createElement("td"); 
  const btnDelete = document.createElement("span");
  btnDelete.textContent='Delete' ;
  btnDelete.setAttribute('class','btnDelete');  
  btnDelete.addEventListener('click' , ()=> {
    let message = `آیا مطمئن هستید که گروه ${name} را حذف کنید؟`;
    showModal(message,()=>{
      $("tr[data-id='"+id+"']").remove();
    });
});
tdDelete.appendChild(btnDelete);

  const tdEdit = document.createElement("td");
  const btnEdit = document.createElement("span");
  btnEdit.setAttribute('data-id', id);
  btnEdit.textContent = 'Edit'
  btnEdit.setAttribute('class','btnEdit');
  btnEdit.textContent='edit';


  btnEdit.addEventListener('click', editGroupName );
  tdEdit.appendChild(btnEdit);
 

  tr.appendChild(tdId);
  tr.appendChild(tdName);
  tr.appendChild(tdDelete);
  tr.appendChild(tdEdit);

  table.appendChild(tr);
}

function editGroupName()
{ 
 
  const id = this.getAttribute("data-id");
  const tdName = document.querySelector("td[data-id='"+ id +"']");
 

  const input = document.createElement('input');
  input.type='text';
  input.name='edit-name';
  input.value = tdName.textContent;
  tdName.textContent = ' ';
  input.setAttribute('class','inputEdit');
 
  tdName.appendChild(input);
  
  const tdEdit = this.parentElement;

  const saveNameButton = document.createElement('button');
    saveNameButton.setAttribute('class' , 'saveNameButtonEdit');
    saveNameButton.textContent = 'save';
    tdEdit.appendChild(saveNameButton);
    saveNameButton.addEventListener('click' , ()=> {
    let message = `آیا مطمئن هستید که نام گروه ویرایش شود؟`;
    showModal(message , SaveChangeGroupName );
  });


  function SaveChangeGroupName(){
    saveNameButton.style.display = 'none';
    tdName.textContent = input.value;
    
  }


}


function showModal(message,yesButtonAction)
{
  modalText.textContent = message;
  modal.classList.add('show-modal');
  overlay.classList.add('overlay');
  $('#yesButtonModal').click('click',()=>{
    yesButtonAction(); 
    modal.classList.remove('show-modal');
    overlay.classList.remove('overlay');
  });
  $('#noButtonModal').click('click',()=>{    
    modal.classList.remove('show-modal');
    overlay.classList.remove('overlay');
  });
 

}