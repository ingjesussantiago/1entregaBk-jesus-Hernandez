class Tienda{

constructor(){
    this.producto=[]
}

getproducto(){
    return this.producto
}

#agregarId(){
    
    const id=this.producto.length ===0
    ?1
    :this.producto[this.producto.length-1].id+1
    return id
}

#verificaCode(){
    


}

getproductoById(){

}

agregarProducto(nombre,descripcion,image, precio,stock=30,code){

    const producto={
        id:this.#agregarId(),
        nombre,
        descripcion,
        image,
        precio,
        stock,
        code,
       
    }
    this.producto.push(producto)
}


}
const manager = new Tienda();
manager.agregarProducto("evento1","lugar1",30)
manager.agregarProducto("evento2","lugar2",60)
manager.agregarProducto("evento3","lugar3",90)


console.log(manager)
