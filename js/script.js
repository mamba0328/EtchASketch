//creating div's grid 
const container = document.getElementById('container')


function divAmount(num) { 

 for (i=1;i<=num; i++) {

  const div = document.createElement('div')
  div.classList.add('grid')
  container.appendChild(div)

  let s = 

  //add hoover effect 
  function changeColor(e) { 
    e.target.style.backgroundColor = 'pink';
  }
  
  div.addEventListener('mouseenter', changeColor)

 }

}

divAmount(16) 




