function showAlert() {
    alert("Take action alert box!");
  }
  
function send() {
  try {
    document.getElementById("form").addEventListener("submit", (x) => {
        x.preventDefault();
        var name = document.getElementById("name").value;
        var email = document.getElementById("email").value;
        var message = document.getElementById("message").value;

        var show = document.getElementById("show_response")

        show.innerHTML = `
          <div class="container pb-5" id="show">
            <h1 style="color:#06BEE1;">Thanks for your response. Your data recorded as :</h1>
            <div class="d-flex">
              <h5 class="">Hello, my name is : </h5>
              <h5 class="fw-bold" id="show_name"> </h5>
            </div>
            <div class="d-flex">
              <h5 class="">Please contact me through : </h5>
              <h5 class=" fw-bold" id="show_email"> </h5>
            </div>
            <div class="d-flex">
              <h5 class="">I want to say about :</h5>
              <h5 class="d-inline-block fw-bold" id="show_message"> </h5>
            </div>
          </div>`;


        document.getElementById("show_name").innerText = name;
        document.getElementById("show_email").innerText = email;
        document.getElementById("show_message").innerText = message;

      });
    } catch (err) {
      alert(err.message);
    }
  }
var total = 0;

  function addNewField() {
    var namaField = prompt("Masukkan Nama Jenis Sampah");
    var newItemInput = document.createElement("div");
    newItemInput.classList.add("item-input");
    newItemInput.style.margin = "5px";
  
    var itemNameInput = document.createElement("input");
    itemNameInput.type = "text";
    itemNameInput.classList.add("item-name");
  
    newItemInput.appendChild(document.createTextNode(namaField + ": "));
    newItemInput.appendChild(itemNameInput);
    document.getElementById("item-container").appendChild(newItemInput);
  }
  
function calculateTotal() {
    var itemNames = document.getElementsByClassName("item-name");
    total = 0;
  
    for (var i = 0; i < itemNames.length; i++) {
      var itemName = itemNames[i].value;
  
      if (itemName) {
        var itemValue = parseFloat(itemName) * 365;
        total += itemValue;
      }
    }
  
    document.getElementById("total").textContent = total;
  }