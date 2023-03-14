class Tienda{

constructor(){
    this.productos=[]
}

getproducto(){
    return this.productos
}

agregarProducto(nombre,descripcion,image, precio,code,categoria,stock=30){

  

  const producto={
    
            id:this.#agregarId(),
            nombre,
            descripcion,
            image,
            precio,
            code,
            categoria,
            stock,
        }
        if (!producto.nombre) {
            console.log("campos obligatorios");
            return this.productos
           
        }

        if (this.productos.find((p)=>p.code===code)) {
     console.log("verifique el codigo, esta repetido");
     return code
    }  

    
        this.productos.push(producto)
        console.log(producto)
         
     }

#agregarId(){






    
    const id=this.productos.length ===0
     ?1
    :this.productos[this.productos.length-1].id+1
    return id


    
}


#verificaCode(){


}

getProductoById(id) {
    const productos = this.productos.find((p) => p.id === id);
    if (productos) {
        return productos;
    } else {
        console.log('Error: Not found');
    }
}


}
const manager = new Tienda();
manager.agregarProducto("camisa","algodo","a",30, 1,"ropa")
manager.agregarProducto("pantalon","oro 18k","b",300, 2,"joyas")
// manager.agregarProducto("cadena","oro 18k","b",300,3,"joyas")

// console.log(manager.getProductoById(1));







