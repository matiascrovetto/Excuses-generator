/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  document.querySelector("#excuse").innerHTML = generateExcuse();
  console.log("Hello Rigo from the console!");
};

let generateExcuse = () => {
  let quien = ["El gato", "Mi vecino", "Mi mama"];
  let que = ["se estrello", "comio", "bebio", "me visito"];
  let cuando = ["anteayer", "en mi casa", "en la escuela", "hoy"];

  let quienIndx = Math.floor(Math.random() * quien.length);
  let queIndx = Math.floor(Math.random() * que.length);
  let cuandoIndx = Math.floor(Math.random() * cuando.length);

  return quien[quienIndx] + " " + que[queIndx] + " " + cuando[cuandoIndx];
};
