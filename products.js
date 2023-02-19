class Tienda{

constructor(){
    this.producto=[]
}

getEventos(){
    return this.producto
}

agregarEvento(nombre,lugar, precio,capacidad=50,fecha=new Date){

const id=this.producto.length ===0
?1
:this.producto[this.producto.length-1].id+1

    const producto={
        id,
        nombre,
        lugar,
        precio,
        capacidad,
        fecha,
        participantes:[]
    }
    this.producto.push(producto)
}


}
const manager = new Tienda();
manager.agregarEvento("evento1","lugar1",30)
manager.agregarEvento("evento2","lugar2",60)

console.log(manager)
