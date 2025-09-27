hexvalues=[0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f']
function changeColor(){
  let color="#"; 
  for(let i=0; i<6;++i){
    color += hexvalues[Math.floor(Math.random()*16)];
  }
  document.body.style.background=color;
}
  