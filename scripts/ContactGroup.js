let inputName = document.querySelector("#input-name");
let btn = document.querySelector(".save");
let table = document.querySelector("#table");
let n = 0;

btn.addEventListener("click", (e) => {
  e.preventDefault();
  const groupName = inputName.value.trim();
  if (groupName.length > 0) {

    table.classList.add('active')

    const tr = document.createElement("tr");
    const tdId = document.createElement("td");

    tdId.setAttribute("class", "id-number");
    tdId.textContent = n + 1;

    const tdName = document.createElement("td");
    tdName.textContent = groupName;

    const tdBtn = document.createElement("td");
    tdBtn.innerHTML = `
    <span class="material-icons fa fa-pencil"></span>
    <span class="material-icons fa fa-trash"></span>`
    ;

    tr.appendChild(tdId);
    tr.appendChild(tdName);
    tr.appendChild(tdBtn);

    table.appendChild(tr);
    n++;
    inputName.value = ''
  } else {
    alert("نام گروه را وارد کنید");
  }
});