let inputName = document.querySelector("#input-name");
let btn = document.querySelector(".save");
let n = 0;
let errorElement = document.querySelector('.error-message');



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




btn.addEventListener("click", (e) => {
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
  appendRowToContactGropTable(inputName.value , n);
  errorElement.classList.remove('visible')
  inputName.classList.remove('error')
  
});


function appendRowToContactGropTable(name, id) {

  let table = document.querySelector("#table");
  table.classList.add('active')

  const tr = document.createElement("tr");
  const tdId = document.createElement("td");

  tdId.setAttribute("class", "id-number");
  tdId.textContent = id;

  const tdName = document.createElement("td");
  tdName.textContent = name;

  const tdBtn = document.createElement("td");
  tdBtn.innerHTML = `
  <span class="material-icons fa fa-trash"></span>`
  ;

  const tdedit = document.createElement("td");
  tdedit.innerHTML = `
  <span class="material-icons fa fa-pencil"></span>
  `;

  

    
  tr.appendChild(tdId);
  tr.appendChild(tdName);
  tr.appendChild(tdBtn);
  tr.appendChild(tdedit);

  table.appendChild(tr);
}
