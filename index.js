const metroStations = [
  "Rithla",
  "Rohini west",
  "Netaji subash place",
  "Keshav Puran",
  "Shastri Nagar",
  "Kashmere Gate",
  "Chandni chowk",
  "New Delhi",
  "Rajiv Chowk",
  "Patel Chowk",
  "Central secratariat",
  "Udyog bhawan",
  "Lok kalyan marg",
  "Aiims",
  "Green park",
  "Hauz khas",
  "Malviya Nagar",
  "Saket",
  "Qutub minar",
  "Chatrapur",
  "Sultanpur",
  "Ghitroni",
  "Arjan garh",
  "Guru Dronacharya",
  "Sikanderpur",
  "Mg Road",
  "Iffco Chowk",
  "Huda city center"
];

const sourceSelect = document.getElementById("source");
const destinationSelect = document.getElementById("destination");


// Adding stations to dropdown
metroStations.forEach(station => {
  sourceSelect.innerHTML += `<option value="${station}">${station}</option>`;
  destinationSelect.innerHTML += `<option value="${station}">${station}</option>`;
});


// Find Route Function
function findroute() {

  let source = sourceSelect.value;
  let destination = destinationSelect.value;


  if (source === "" || destination === "") {
    alert("Please select both source and destination");
    return;
  }


  if (source === destination) {
    alert("Source and destination cannot be same");
    return;
  }


  let sourceIndex = metroStations.indexOf(source);
  let destinationIndex = metroStations.indexOf(destination);


  let route = [];


  // Forward route
  if (sourceIndex < destinationIndex) {

    for (let i = sourceIndex; i <= destinationIndex; i++) {
      route.push(metroStations[i]);
    }

  }

  // Reverse route
  else {

    for (let i = sourceIndex; i >= destinationIndex; i--) {
      route.push(metroStations[i]);
    }

  }


  let totalStations = route.length - 1;


  // Fare calculation
  let fare;

  if (totalStations <= 5) {
    fare = 20;
  }

  else if (totalStations <= 10) {
    fare = 30;
  }

  else if (totalStations <= 15) {
    fare = 40;
  }

  else {
    fare = 50;
  }


  // Time calculation
  let travelTime = totalStations * 2;


  displayResult(route, totalStations, fare, travelTime);

}



// Display Result Function
function displayResult(route, stations, fare, time) {


  let html = `
    <div class="result-box">

      <h1>Journey Information</h1>


      <div class="info">
        <b>Total Stations:</b> ${stations}
      </div>


      <div class="info">
        <b>Estimated Fare:</b> Rs ${fare}
      </div>


      <div class="info">
        <b>Travel Time:</b> ${time} Minutes
      </div>


      <div class="route">

        <h3>Route Details</h3>
  `;


  route.forEach((station,index)=>{


    html += `
      <div class="station">
        ${station}
      </div>
    `;


    if(index !== route.length-1){

      html += `
        <div class="arrow">
          ⬇️
        </div>
      `;

    }


  });



  html += `
      </div>

    </div>
  `;


  document.getElementById("output").innerHTML = html;

}