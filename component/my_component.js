export default{
    data(){
        return {
            lista: [],

            nombre: null,
            edad: null,
            transporte: null

        }
    },

    methods:{
        crearobj(){
            this.lista.push({
                nom: this.nombre,
                edad: this.edad,
                trans: this.transporte
            })

            this.nombre = null,
            this.edad = null,
            this.transporte = null
        }
    }
}