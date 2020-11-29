//clase 
class ObjGeometrico{
  constructor(x,y,l){
    this.x=x;
    this.y=y;
    this.l=l;
  }
 

  //metodo
   static DBJCuadrado(cv,x,y,l) {
    //var canvas = document.getElementById('canvas');
    //if (canvas.getContext) {
      //var ctx = canvas.getContext('2d');
      x=25;
      y=25;
      l=100;
      return cv.ctx.fillRect(x,y,l,l);
      
    }
    //metodo
     static DBJCirculo(cv,x,y,r){
     return cv.ctx.arc(360,70,50,0,(Math.PI/180)*360,true);
     cv.ctx.fillStyle="#f99";
     cv.ctx.fill();
    }
}
    export {DBJCuadrado,DBJCirculo,ObjGeometrico};