class Tienda{

constructor(){
    this.producto=[]
}

getproducto(){
    return this.producto
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

        
        this.producto.push(producto)
        console.log(producto);
        this.#verificaCode()
     
       
     }

#agregarId(){
    
    const id=this.producto.length ===0
     ?1
    :this.producto[this.producto.length-1].id+1 
    return id
    
}


#verificaCode(){

 const code =this.producto.some(element =>element.code ===this.producto.code)
    code
    ? console.log("repetido")
    : this.code
    
   
// if (this.producto.some(element =>element.code ===this.producto.code) ){
//     console.log('Error: El código del producto ya existe')
//     return;
// }


}

getProductoById(id) {
    const producto = this.products.find((p) => p.id === id);
    if (producto) {
        return producto;
    } else {
        console.log('Error: Not found');
    }
}


}
const manager = new Tienda();
manager.agregarProducto("camisa","algodo",1,30, 1,"ropa")
manager.agregarProducto("cadena","oro 18k",2,300,2,"joyas")
manager.agregarProducto("anillo","oro 24k", 3,400,3,"joyas")
manager.agregarProducto("pulsera","oro 24k", 4,500,3,"joyas")






