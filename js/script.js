function validate(event) {
    var list = document.getElementById('list');
    list.innerHTML = '';
    let names = document.querySelector('[name="names"]');
    if (names.value.length == 0) {
        event.preventDefault();
        let list = document.getElementById("list");
        let li = document.createElement("li");
        li.innerText = 'brak imienia i nazwiska';
        list.appendChild(li);
    }
    let email = document.querySelector('[name="email"]');
    if (email.value.length == 0) {
        event.preventDefault();
        let list = document.getElementById("list");
        let li = document.createElement("li");
        li.innerText = 'brak email';
        list.appendChild(li);
    } else {
        if (!email.value.includes("@")){
            event.preventDefault();
            let list = document.getElementById("list");
            let li = document.createElement("li");
            li.innerText = 'brak @ w email';
            list.appendChild(li);
        }
    }
    let zgoda_1 = document.querySelector('[name="zgoda_1"]');
    if (!zgoda_1.checked) {
        event.preventDefault();
        let list = document.getElementById("list");
        let li = document.createElement("li");
        li.innerText = 'brak zgody 1';
        list.appendChild(li);
    }

}

let form = document.getElementById('form');
form.addEventListener('submit', validate);

let zgody = document.querySelector('[name="zgody"]');
zgody.addEventListener('change', (event) => {
  if (event.currentTarget.checked) {
    document.getElementById("zgoda_1").checked = true;
    document.getElementById("zgoda_1").disabled = true;
    document.getElementById("zgoda_2").checked = true;
    document.getElementById("zgoda_2").disabled = true;
  } else {
    document.getElementById("zgoda_1").checked = false;
    document.getElementById("zgoda_1").disabled = false;
    document.getElementById("zgoda_2").checked = false;
    document.getElementById("zgoda_2").disabled = false;
  }
})



