//clase 
class ObjGeo {
  constructor(x, y) {
      this.x = x;
      this.y = y;
      this.cv = 0;
      this.CrearCanvas(x,y);
  }
   
  DbjCuadrado()
  {
      var canvas = document.getElementById(0);
      var ctx = canvas.getContext("2d");
      ctx.fillStyle = "#000FFF";
      ctx.fillRect(80,80, 130, 130);
      console.log("hola");
  }
    
  DbjCirculo()
  {
      var canvas = document.getElementById(0);
      var ctx = canvas.getContext("2d");
     ctx.beginPath();
     ctx.arc(360,70,50,0,(Math.PI/180)*360,true);
     ctx.fillStyle="#f99";
     ctx.fill();
  }

  limpiarCanvas()
  {
      var canvas = document.getElementById(0);
      var ctx = canvas.getContext("2d");
      ctx.fillStyle = "#FFFFFF";
      ctx.fillRect(0,0,800,600);
  }

  //funcion asistente del constructor
  //se encarga de hacer el canvas con sus botones
  CrearCanvas(x,y)
  {
      var canv = document.createElement('canvas');
      canv.id = this.cv;        
      canv.width=this.x;
      canv.height=this.y;
      document.body.appendChild(canv);
      //////////////////////////////////////
      var boton1 = document.createElement('button');
      boton1.width=150;
      boton1.height=80;
      boton1.textContent="Dibujar cuadrado";
      boton1.addEventListener("click", this.DbjCuadrado);
      document.body.appendChild(boton1);

   
      var boton2 = document.createElement('button');
      boton2.width=150;
      boton2.height=80;
      boton2.textContent="Dibujar circulo";
      boton2.addEventListener("click", this.DbjCirculo);
      document.body.appendChild(boton2);
      
      var boton3 = document.createElement('button');
      boton3.width=150;
      boton3.height=80;
      boton3.textContent="Limpiar Lienzo";
      boton3.addEventListener("click", this.limpiarCanvas);
      document.body.appendChild(boton3);
  }
}
export {ObjGeo};