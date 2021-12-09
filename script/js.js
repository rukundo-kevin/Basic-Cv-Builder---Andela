let title = document.querySelector('.title');
let color = ['#2350f8','#0d8476','#fd9175','#133f81','#7931a5',
            'coral','#a3101e','#a3101e','#1c59f7','#607662','#0000ff',
             '#990099','#622766','#311433','#004040','#008080','#994c30']


title.addEventListener("click",function (){
    title.style.color = color[Math.round(Math.random() * 17)];
})

document.addEventListener("scroll",function(){
	console.log(scrollY)
    document.querySelector('.head').classList.add('head-fixed');
})
