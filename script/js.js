let title = document.querySelector('.title');
let color = ['#2350f8','#0d8476','#fd9175','#133f81','#7931a5','coral','#a3101e','#a3101e','#1c59f7']
  console.log(Math.round(Math.random() * 10))
title.addEventListener("click",function (){
    title.style.color = color[Math.round(Math.random() * 10)];
})