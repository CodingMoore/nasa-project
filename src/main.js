import $ from "jquery";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css";
import NasaAPI from "./images-service.js";

function outputOptions(response) {
  if (response.collection) {
    $("#image-display").html(`${response.collection.items[0].data[0].nasa_id}`);
  } else {
    $("#image-display").html(`${response}`);
  }
}
async function apiServiceCall(searchTerm) {
  const response = await NasaAPI.imageCall(searchTerm);
  outputOptions(response);
}

$(document).ready(function () {
  $("#search-button").click(function () {
    event.preventDefault();
    let searchTerm = $("#search-term").val();
    apiServiceCall(searchTerm);
  });
});

// function getElements(response) {
//   if (response.main) {
//     $(".showHumidity").text(
//       `The humidity in ${response.name} is ${response.main.humidity}%`
//     );
//     $(".showTemp").text(
//       `The temperature in Kelvins is ${response.main.temp} degrees.`
//     );
//   } else {
//     $(".showErrors").text(`There was an error: ${response}`);
//   }
// }
