class Servicio {
    constructor(importeServicio){
        
        this.importeServicio = importeServicio;

    }

    

}



class ServicioModel {
    //CONSTRUCTOR DEL MODELO PRODUCTO
    constructor() {
        //OBTENEMOS EL ARRAY DE PRODUCTOS PARSEANDO DESDE EL JSON SI EXISTE
        const servicios = JSON.parse(localStorage.getItem('servicio')) || [];
        //USAMOS MAP PARA CREAR UN NUEVO ARRAY DE OBJETOS DE TIPO PRODUCTO
        this.servicios = servicios.map(servicio => new Servicio(servicio));
    }
    //MÈTODO PARA GUARDAR EL ARRAY DE PRODUCTOS EN STORAGE
    guardarServicios() {
        localStorage.setItem('servicio', JSON.stringify(this.servicios));
    } 
    //MÊTODO PARA AGREGAR UN PRODUCTO AL ARRAY DE PRODUCTOS
    agregarServicio(servicio) {
        this.servicios.push(new Servicio(servicio));
        this.guardarServicos();
    }
    //MÊTODO PARA ELIMINAR UN PRODUCTO DEL ARRAY DE PRODUCTOS
    eliminarServicio(importeServicio) {
        this.servicios = this.servicios.filter(servicio => servicio.importeServicio !== importeServicio);
        this.guardarServicios();
    }
   
}