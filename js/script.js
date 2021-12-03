// creates custom grid and paints in it when mouseover
const container = document.getElementById('container'); 

function pixelsAmount(num) {
  if (container.children.length===0) {
   let side = 960/num;
   num*=num; 
   for (i=1;i<=num;i++) { 
    const div = document.createElement('div'); 
    div.style.height =  side + 'px';
    div.style.width = side + 'px';
    div.style.float = 'left'
    container.appendChild(div)
    div.addEventListener('mouseover',changeColor)
   } 
 } else { 
   console.log('WTF?')
 }
}


function changeColor (e) { 
  const randomColor = Math.floor(Math.random()*16777215).toString(16);
  e.target.style.backgroundColor = "#" + randomColor;
}

pixelsAmount(2);


//clear whiteboard on reset click

const reset = document.getElementById('reset');
reset.addEventListener('click', clearBoard)

function clearBoard () { 
  container.innerHTML = '';
  pixelsAmount(Math.floor(Math.random()*100));
}