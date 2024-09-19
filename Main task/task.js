function setform() {
  document.querySelector(".name").value = "Hafiz Rehan ";
  document.querySelector("#green").checked = true;
  document.querySelector(".male").checked = true;
  document.querySelector("#country").value = "Italy";
}

function getform() {
  const name = document.querySelector(".name").value;
  const color = [];
  const colorInputs = document.querySelectorAll('input[name="color"]:checked');
  colorInputs.forEach((input) => {
    color.push(input.value);
  });
  const gender = document.querySelector('input[name="gender"]:checked').value;
  const country = document.getElementById("country").value;
  alert(
    ` Name is: ${name} \n Color is: ${color} \n Gender is: ${gender} \n Country is: ${country}  `
  );
}

function Table() {
  const tableContainer = document.querySelector(".table-container");
  if (tableContainer.style.display == "none") {
    tableContainer.style.display = "block";
    loadstudentdata();
  } else {
    tableContainer.style.display = "none";
  }
}

function loadstudentdata() {
  fetch("./main.json")
    .then((response) => response.json())
    .then((data) => maketable(data));
}

function maketable(students) {
  const table = document.getElementById("studentTable");
  table.innerHTML = `
  <tr>
    <th>Name</th>
    <th>Favorite Color</th>
    <th>Gender</th>
    <th>Country</th>
    <th>Age</th>
  </tr>
`;

  students.forEach((student) => {
    let row = `
    <tr>
    <td>${student.name}</td>
    <td>${student.color}</td>
    <td>${student.gender}</td>
    <td>${student.country}</td>
    <td>${student.age}</td>
    </tr>
    `;
    table.innerHTML += row;
  });
}

let firstname = document.getElementById("naa");
let button = document.getElementById("button");

button.addEventListener("click", () => {
  let fname = firstname.value;

  let color = [];
  let colorInputs = document.querySelectorAll('input[name="color"]:checked');
  colorInputs.forEach((input) => {
    color.push(input.value);
  });
  let clrinput = color;

  let gender = document.querySelector('input[name="gender"]:checked').value;

  const country = document.getElementById("country").value;

  let student = {
    name: fname,
    color: clrinput,
    gender: gender,
    country: country,
  };

  let localStorageData = JSON.parse(localStorage.getItem("studentData")) || [];
  localStorageData = [...localStorageData, student];
  localStorage.setItem("studentData", JSON.stringify(localStorageData));

  let newbtn = document.getElementById("showDataButton");

  newbtn.addEventListener("click", () => {
    const storedData = JSON.parse(localStorage.getItem("studentData")) || [];
    const table = document.getElementById("studentTable");

    table.innerHTML = `
    <tr>
      <th>Name</th>
      <th>Favorite Color</th>
      <th>Gender</th>
      <th>Country</th>
    </tr>`;

    storedData.forEach((student) => {
      let row = `
        <tr>
          <td>${student.name}</td>
          <td>${student.color}</td>
          <td>${student.gender}</td>
          <td>${student.country}</td>
        </tr>`;
      table.innerHTML += row;
    });
  });
});
