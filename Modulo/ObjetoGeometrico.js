function ObjGeometrico (cuadrado, circulo){
    this.cuadrado=cuadrado
    this.circulo=circulo
}


function DBJCuadrado(cv,x,y,l) {
    //var canvas = document.getElementById('canvas');
    //if (canvas.getContext) {
      //var ctx = canvas.getContext('2d');
  
      cv.ctx.fillRect(25,25,100,100);
      cv.ctx.clearRect(45,45,60,60);
      cv.ctx.strokeRect(50,50,50,50);
   // }
    
  }
  function DBJCirculo(cv,r){

  }
export { DBJCuadrado};

class ObjGeo {

  
  
}
export {ObjGeo}