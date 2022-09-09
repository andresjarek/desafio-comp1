
class Producto{
    constructor(nombre, imagen, precio, cantidad){
      this.nombre = nombre;
      this.precio = precio;
      this.imagen = imagen;
      // this.vendido = false;
      this.cantidad = cantidad;
    }
  
    vender(){
      this.cantidad = this.cantidad - 1;
    }
  }
  
  const producto1 = new Producto("monitor", "htt", 1234, 5);
  console.log(producto1);
  
  producto1.vender();
  console.log(producto1);
  