import $ from "jquery";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css";
import NasaAPI from "./images-service.js";
import Insight from "./insight-service.js";

function outputOptions(response) {
  if (response.collection) {
    //setInterval(function(){ 
    // for (let i = 0; i < 1; i++) {
    //   let rando1 = Math.floor(Math.random() * 100);
    //   $("#image-display").html(`<img src="${response.collection.items[rando1].links[0].href}">`);
    // } }, 10000);
    let rando1 = Math.floor(Math.random() * 100);
    $("#image-display").html(`<img src="${response.collection.items[rando1].links[0].href}">`);
  } else {
    $("#image-display").html(`${response}`);
  }
}

function outputMars(response) {
  if (response[698]){
    $("#mars-output").html(`Median temperature on Mars is ${response[698].AT.av} degrees.`);
  } else {
    $("#mars-output").html(`${response}`);
  }
}


async function apiServiceCall(searchTerm) {
  const response = await NasaAPI.imageCall(searchTerm);
  outputOptions(response);
}

async function apiMarsWeather() {
  const response = await Insight.getStats();
  outputMars(response);
}


$(document).ready(function () {
  $("#search-button").click(function () {
    event.preventDefault();
    let searchTerm = $("#search-term").val();
    apiServiceCall(searchTerm);
  });

  $("#mars-weather").click(function () {
    event.preventDefault();
    apiMarsWeather();
  });
});