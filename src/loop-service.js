for (let i = 0; i <10; i++) {
  let rando1 = Math.floor(Math.random() * 100);
  // $("#image-display").html(`<img src="${response.collection.items[rando1].links[0].href}">`);
  console.log(rando1);
}

setInterval(function(){ 
  for (let i = 0; i < 1; i++) {
  let rando1 = Math.floor(Math.random() * 100);
  // $("#image-display").html(`<img src="${response.collection.items[rando1].links[0].href}">`);
  console.log(rando1);
}; }, 5000);