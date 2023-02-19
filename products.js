class TickManager{

constructor(){
    this.evento=[]
}

getEventos(){
    return this.evento
}

agregarEvento(nombre,lugar, precio,capacidad=50,fecha=new Date){

const id=this.evento.length ===0
?1
:this.evento[this.evento.length-1].id+1

    const evento={
        id,
        nombre,
        lugar,
        precio,
        capacidad,
        fecha,
        participantes:[]
    }
    this.evento.push(evento)
}


}
const manager = new TickManager();
manager.agregarEvento("evento1","lugar1",30)
manager.agregarEvento("evento2","lugar2",60)

console.log(manager)
