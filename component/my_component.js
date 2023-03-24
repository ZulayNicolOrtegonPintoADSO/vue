export default{
    //clase data para meter los datos
    data(){ 
        //retornar
        return { 
            //creo array (lista)
            lista: [], 

            //variables tipo null porque los valores los determina el input
            nombre: null, 
            edad: null,
            transporte: null,

            opcion: null,
            indice: null,

            agg_nom: null, 
            agg_edad: null,
            agg_trans: null
        }
    },
    //clase methods para métodos (en él van las funciones)
    methods:{ 
        //función crear objeto que se activa al dar click en el botón enviar.
        crearobj(){ 
            //agregar a la lista un objeto que se compone de las variables que están en data
            this.lista.push({ 
                nom: this.nombre,
                edad: this.edad,
                trans: this.transporte
            })

            //vaciar los inputs
            this.nombre = null, 
            this.edad = null,
            this.transporte = null
        },

        eliminar(){

            if(this.opcion == 1){
                let eliminar = this.lista.shift()
                console.log("funciona opc 1")
            }
            
            else if(this.opcion == 2){
                let eliminar = this.lista.pop()
                console.log("funciona opc 2")
            }

            else if(this.opcion == 3){
                let agg = this.lista.splice(this.indice, 1)

                this.agg_nom = null, 
                this.agg_edad = null, 
                this.agg_trans = null
            }

            else{
                alert("OPCIÓN NO ESCOGIDA CORRECTAMENTE")
            }
        },

        agg(){

            let opciones = Number(prompt("1. Agregar elemento del comienzo \n\r 2.Agregar elemento del final \n\r 3.Agregar elemento de posición deseada"));

            if(opciones == 1){
                this.lista.unshift({ 
                    nom: this.agg_nom,
                    edad: this.agg_edad,
                    trans: this.agg_trans
                })

                this.agg_nom = null, 
                this.agg_edad = null, 
                this.agg_trans = null
            }
            
            else if(opciones == 2){
                this.lista.push({ 
                    nom: this.agg_nom,
                    edad: this.agg_edad,
                    trans: this.agg_trans
                })

                this.agg_nom = null, 
                this.agg_edad = null, 
                this.agg_trans = null
            }

            else if(opciones == 3){
                
            }

            else{
                alert("OPCIÓN NO ESCOGIDA CORRECTAMENTE")
            }
        }


    }
}