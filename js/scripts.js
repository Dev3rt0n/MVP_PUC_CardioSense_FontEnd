/*
  --------------------------------------------------------------------------------------
  Função para obter a lista existente do servidor via requisição GET
  --------------------------------------------------------------------------------------
*/
const getList = async () => {
  let url = 'http://127.0.0.1:5000/pacientes';
  fetch(url, {
    method: 'get',
  })
    .then((response) => response.json())
    .then((data) => {
      data.pacientes.forEach(item => insertList(
        item.name,
        item.age,
        item.sex,
        item.cp,
        item.trestbps,
        item.chol,
        item.fbs,
        item.restecg,
        item.thalach,
        item.exang,
        item.oldpeak,
        item.slope,
        item.ca,
        item.thal,
        item.target
      ))
    })
    .catch((error) => {
      console.error('Error:', error);
    });
}

/*
  --------------------------------------------------------------------------------------
  Chamada da função para carregamento inicial dos dados
  --------------------------------------------------------------------------------------
*/
getList()




/*
  --------------------------------------------------------------------------------------
  Função para colocar um item na lista do servidor via requisição POST
  --------------------------------------------------------------------------------------
*/
const postItem = async (inputPatient, inputAge, inputSex,
  inputCp, inputTrestbps, inputChol,
  inputFbs, inputRestecg, inputThalach,
  inputExang, inputOldpeak, inputSlope,
  inputCa, inputThal) => {

  const formData = new FormData();
  formData.append('name', inputPatient);
  formData.append('age', inputAge);
  formData.append('sex', inputSex);
  formData.append('cp', inputCp);
  formData.append('trestbps', inputTrestbps);
  formData.append('chol', inputChol);
  formData.append('fbs', inputFbs);
  formData.append('restecg', inputRestecg);
  formData.append('thalach', inputThalach);
  formData.append('exang', inputExang);
  formData.append('oldpeak', inputOldpeak);
  formData.append('slope', inputSlope);
  formData.append('ca', inputCa);
  formData.append('thal', inputThal);

  let url = 'http://127.0.0.1:5000/paciente';
  fetch(url, {
    method: 'post',
    body: formData
  })
    .then((response) => {
      response.json();
    })
    .catch((error) => {
      console.error('Error:', error);
    });
}


/*
  --------------------------------------------------------------------------------------
  Função para criar um botão close para cada item da lista
  --------------------------------------------------------------------------------------
*/
const insertDeleteButton = (parent) => {
  let span = document.createElement("span");
  let txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  parent.appendChild(span);
}

/*
  --------------------------------------------------------------------------------------
  Função para remover um item da lista de acordo com o click no botão close
  --------------------------------------------------------------------------------------
*/
const removeElement = () => {
  let close = document.getElementsByClassName("close");
  let i;
  for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      let div = this.parentElement.parentElement;
      const nomeItem = div.getElementsByTagName('td')[0].innerHTML
      if (confirm("Você tem certeza?")) {
        div.remove()
        deleteItem(nomeItem)
        alert("Removido!")
      }
    }
  }
}

/*
  --------------------------------------------------------------------------------------
  Função para deletar um item da lista do servidor via requisição DELETE
  --------------------------------------------------------------------------------------
*/
const deleteItem = (item) => {
  console.log(item)
  let url = 'http://127.0.0.1:5000/paciente?name=' + encodeURIComponent(item);
  fetch(url, {
    method: 'delete'
  })
    .then((response) => response.json())
    .catch((error) => {
      console.error('Error:', error);
    });
}

/*
  --------------------------------------------------------------------------------------
  Função para adicionar um novo item com nome, quantidade e valor 
  --------------------------------------------------------------------------------------
*/
const newItem = async () => {
  let inputPatient = document.getElementById("newInput").value;
  let inputAge = document.getElementById("newAge").value;
  let inputSex = document.getElementById("newSex").value;
  let inputCp = document.getElementById("newCp").value;
  let inputTrestbps = document.getElementById("newTrestbps").value;
  let inputChol = document.getElementById("newChol").value;
  let inputFbs = document.getElementById("newFbs").value;
  let inputRestecg = document.getElementById("newRestecg").value;
  let inputThalach = document.getElementById("newThalach").value;
  let inputExang = document.getElementById("newExang").value;
  let inputOldpeak = document.getElementById("newOldpeak").value;
  let inputSlope = document.getElementById("newSlope").value;
  let inputCa = document.getElementById("newCa").value;
  let inputThal = document.getElementById("newThal").value;

  // Verifique se o nome do produto já existe antes de adicionar
  const checkUrl = `http://127.0.0.1:5000/pacientes?nome=${inputPatient}`;
  fetch(checkUrl, {
    method: 'get'
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.pacientes && data.pacientes.some(item => item.name === inputPatient)) {
        alert("O paciente já está cadastrado.\nCadastre o paciente com um nome diferente ou atualize o existente.");
      } else if (inputPatient === '') {
        alert("O nome do paciente não pode ser vazio!");
      } else {
        insertList(
          inputPatient, inputAge, inputSex, inputCp, inputTrestbps,
          inputChol, inputFbs, inputRestecg, inputThalach, inputExang,
          inputOldpeak, inputSlope, inputCa, inputThal
        );
        postItem(
          inputPatient, inputAge, inputSex, inputCp, inputTrestbps,
          inputChol, inputFbs, inputRestecg, inputThalach, inputExang,
          inputOldpeak, inputSlope, inputCa, inputThal
        );
        alert("Item adicionado!");
      }
    })
    .catch((error) => {
      console.error('Error:', error);
    });
}


/*
  --------------------------------------------------------------------------------------
  Função para inserir items na lista apresentada
  --------------------------------------------------------------------------------------
*/
const insertList = (inputPatient, inputAge, inputSex,
  inputCp, inputTrestbps, inputChol,
  inputFbs, inputRestecg, inputThalach,
  inputExang, inputOldpeak, inputSlope,
  inputCa, inputThal, target) => {

  var table = document.getElementById('myTable');
  var row = table.insertRow();

  if (target === 1) {
    target = "Indícios de Doença"
    row.classList.add("table-danger");
  } else {
    target = "Sem Indícios de Doença"
  }
  var item = [
    inputPatient, inputAge, inputSex === 1 ? "Masculino" : "Feminino",
    inputCp, inputTrestbps, inputChol,
    inputFbs === 1 ? "Sim" : "Não", inputRestecg, inputThalach,
    inputExang === 1 ? "Sim" : "Não", inputOldpeak, inputSlope,
    inputCa, inputThal, target
  ];

  for (var i = 0; i < item.length; i++) {
    var cell = row.insertCell(i);
    cell.textContent = item[i];
  }

  var deleteCell = row.insertCell(-1);
  insertDeleteButton(deleteCell);


  document.getElementById("newInput").value = "";
  document.getElementById("newAge").value = "";
  document.getElementById("newSex").value = "";
  document.getElementById("newCp").value = "";
  document.getElementById("newTrestbps").value = "";
  document.getElementById("newChol").value = "";
  document.getElementById("newFbs").value = "";
  document.getElementById("newRestecg").value = "";
  document.getElementById("newThalach").value = "";
  document.getElementById("newExang").value = "";
  document.getElementById("newOldpeak").value = "";
  document.getElementById("newSlope").value = "";
  document.getElementById("newCa").value = "";
  document.getElementById("newThal").value = "";

  removeElement();
}

function DemoItem1() {
  document.getElementById("newInput").value = "Maria Siqueira";
  document.getElementById("newAge").value = 58;
  document.getElementById("newSex").value = 0;
  document.getElementById("newCp").value = 0;
  document.getElementById("newTrestbps").value = 170;
  document.getElementById("newChol").value = 225;
  document.getElementById("newFbs").value = 1;
  document.getElementById("newRestecg").value = 0;
  document.getElementById("newThalach").value = 146;
  document.getElementById("newExang").value = 1;
  document.getElementById("newOldpeak").value = 2.8;
  document.getElementById("newSlope").value = 1;
  document.getElementById("newCa").value = 2;
  document.getElementById("newThal").value = 1;
}

function DemoItem2() {
  document.getElementById("newInput").value = "João Silva";
  document.getElementById("newAge").value = 63;
  document.getElementById("newSex").value = 1;
  document.getElementById("newCp").value = 3;
  document.getElementById("newTrestbps").value = 145;
  document.getElementById("newChol").value = 233;
  document.getElementById("newFbs").value = 1;
  document.getElementById("newRestecg").value = 0;
  document.getElementById("newThalach").value = 150;
  document.getElementById("newExang").value = 0;
  document.getElementById("newOldpeak").value = 2.3;
  document.getElementById("newSlope").value = 0;
  document.getElementById("newCa").value = 0;
  document.getElementById("newThal").value = 1;
}