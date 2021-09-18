 

function UI (ingresoFamiliar) {

        
   
      const litsingreso = document.getElementById("ingresoServicio");
      const elementIngreso =document.createElement("div");

      
      const cardIngreso = document.getElementById("cardIngreso");

      if(!cardIngreso){
        elementIngreso.innerHTML = 
                                   `
                                    <div id="cardIngreso" class="card text-center mb-4 mt-3 bg-warning text-dark ">
                                      <div class="card-body">
                                      <strong>Ingreso Familiar</strong>: <span id="ingresoFamiliarMonto">${ingresoFamiliar}</span> 
                
               
                                      </div>
                                     </div>`;
             litsingreso.appendChild(elementIngreso);
  
      }else{ 
        $("#ingresoFamiliarMonto").html(ingresoFamiliar);

      }

  }

  function newServicio (servicioApagar,importeServicio) {

        
      
    const litsingreso = document.getElementById("ingresoServicio");
      const elementIngreso =document.createElement("div");
      let cantDeServicios = $('.cardServicio').length;
      elementIngreso.innerHTML = 
                                 `
                                  <div id="card`+(cantDeServicios+1)+`" class="card text-center mb-4 my-3 bg-success text-white cardServicio">
                                    <div class="card-body">
                                    <strong>Servicio</strong>:<span codigo="${servicioApagar}" class="nombreServicio">${servicioApagar}</span>
                                    <strong>Importe</strong>: <span class="monto">${importeServicio}</span>
                                    <a href="#" class="btn btn-danger borrarServicio" name="borrar">borrar</a>
                                    </div>
                                 </div>`;
      litsingreso.appendChild(elementIngreso);

    agregaEventoBorrarServicio();
          

  }

  function agregaEventoBorrarServicio(){

    $('.borrarServicio').click(function(e){
      e.preventDefault();
      let cardServicio = $(this).closest('.cardServicio');
      console.log($(cardServicio).find('.monto').html());
      let importeServicio = $(cardServicio).find('.monto').html();
      let nombreServicio = $(cardServicio).find('.nombreServicio').html();
      let codigoServicio = $(cardServicio).find('.nombreServicio').attr('codigo');
      console.log(nombreServicio)
      
      //eliminarServicio(codigoServicio)
      cardServicio.remove();
    });
    
  }

  function resultado (calculo) {

        
      
    const litsingreso = document.getElementById("ingresoServicio");
      const elementIngreso =document.createElement("div");
     
     const saldo = document.getElementById("saldo")
     if(!saldo){
          elementIngreso.innerHTML =    `<div id="saldo" class="card text-center mb-4 mt-3">
                                              <div class="card-body">
                                                  <strong>Saldo</strong>: <span class="">${calculo}</span> 
                                              </div>
                                        </div>`;
          litsingreso.after(elementIngreso);

          
      }
  }

function resetForm() {
    document.getElementById("form-servicios").reset();
    document.getElementById("form-registro").reset();
  }


  
    
  

   
        
      
    




