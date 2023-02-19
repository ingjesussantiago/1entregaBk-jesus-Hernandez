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
    const code =this.code
    const codeVerifica = this.producto.find(producto=>producto.code===code)
    ?code
    :this.code
    return code

}

getproductoById(){

}


agregarProducto(nombre,descripcion="n/a",image="n/a", precio,code,categoria,stock=30){

    const producto={
        id:this.#agregarId(),
        nombre,
        descripcion,
        image,
        precio,
        code:this.#verificaCode(),
        categoria,
        stock,
    }
    this.producto.push(producto)
    console.log(producto)
 }

 

}
const manager = new Tienda();
manager.agregarProducto("camisa","algodo",1,30,001,"ropa")
manager.agregarProducto("cadena","oro 18k",2,300,002,"joyas")
manager.agregarProducto("anillo","oro 24k", 3,400,003,"joyas")
// manager.agregarProducto("pulsera","oro 24k", 3,500,003,"joyas")











