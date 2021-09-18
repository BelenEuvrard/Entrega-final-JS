
$(document).ready(function(){
 const form = $('#form-registro');
 const inputName = $('#nombre');
 const inputApellido = $('#apellido');
 const inputEmail = $('#email');
 const forServicios =$('#form-servicios')  
 const forIngresoServicios =  $('#ingresoServicio') 
 const inputIngresoFamiliar = $('#ingresoFamiliar')
 const  inputServicioApagar =$('#inputGroupSelect04')
 const  inputImporteServicio =$('#importeServicio')
 const card2 =$('#card2')
 

 $(inputIngresoFamiliar).change(function(){
  UI($(this).val());
   console.log($(this).val());
 });

form.submit(function(e){
      e.preventDefault();

      const nombre = inputName.val();
      localStorage.setItem('Nombre', nombre);
      const apellido = inputApellido.val();
      localStorage.setItem('Apellido', apellido);
      const email = inputEmail.val();
      localStorage.setItem('Email', email);

$('#saludo').prepend(` <p class="d-flex justify-content-center text-info"><strong>
 Hola ${nombre + ' ' + apellido} usted fue registrado exitosamente,¡empecemos a gestionar su economia familiar!</strong></p>`)

 

////////////////////////////////////////////////DESAFIO CLASE 13 llamada ajax////////////////////////////
 const URLGET   = "https://jsonplaceholder.typicode.com/posts"
//Declaramos la información a enviar
const infoPost =  { nombre: `${nombre}`, apellido: `${apellido}`, email: `${email}`}


//Escuchamos el evento click del botón 
$("#botonFormulario").click(() => { 
    $.post(URLGET, infoPost ,(respuesta, estado) => {
        if(estado === "success"){
          $('#saludo').prepend(` <p class="d-flex justify-content-center text-info"><strong>
          Hola ${respuesta.nombre} usted fue registrado exitosamente,¡empecemos a gestionar su economia familiar!</strong></p>`)    
        
    }
    });
  });


      resetForm()
     

    });

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    forServicios.submit(function(e){ 
      e.preventDefault();
      const ingresoFamiliar = inputIngresoFamiliar.val();
      localStorage.setItem('Ingreso Familiar', ingresoFamiliar);
      const servicioApagar = inputServicioApagar.val();
      localStorage.setItem('Servicio Ingresado', servicioApagar);
      const importeServicio = inputImporteServicio.val();
      localStorage.setItem('Importe Servicio', importeServicio);

      let saldo = parseFloat(ingresoFamiliar) - parseFloat(importeServicio);

      resetForm();    
      newServicio(servicioApagar,importeServicio);
      resultado(saldo);
      
      

    });

   
   });

      

  


