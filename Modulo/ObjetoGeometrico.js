function ObjGeometrico (cuadrado, circulo){
    this.cuadrado=cuadrado
    this.circulo=circulo
}


function DBJCuadrado(cv,x,y,l) {
    //var canvas = document.getElementById('canvas');
    //if (canvas.getContext) {
      //var ctx = canvas.getContext('2d');
      x=25;
      y=25;
      l=100;
      cv.ctx.fillRect(x,y,l,l);
      
    }
    export {DBJCuadrado};