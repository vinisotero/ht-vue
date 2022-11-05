<template>
    <div>
            <header id = "header-site">
                <h1 id = "title-site">Health Time</h1>
            </header>
            <div className = 'area-login'>
                <form id = 'patient-register'>
                    <h1 className = 'title-login'>CRIAR UMA</h1>
                    <h1 className = 'title-login'>NOVA CONTA MÉDICO</h1>
                    <p className='p-patient-register'>Nome</p>
                    <input v-model="name" className='input-patient-register' id='name'>
                    <p className='p-patient-register'>Especialidade</p>
                    <select v-model="speciality" id = "email" name="select">
                        <option value="1">Endocrinologista</option>
                        <option value="2">Pediatra</option>
                        <option value="3">Cirurgiao</option>
                        <option value="4">Clínico Geral</option>
                        <option value="5">Cardiologista</option>
                        <option value="6">Pneumologista</option>
                    </select>
                    <br>
                    <br>
                    <br>
                    <br>
                    <br>
                    <br>
                    <br>
                    <button v-on:click = 'registrar' className='button-patient-register'>Resgistrar</button>
                    <br>
                    <br>
                    <button v-on:click = 'voltar' className='back-patient-register'>Voltar</button>
                </form>
            </div>
        </div>
</template>


<script>

import { store } from '../store'
export default {
    name: "cadastro-medico",
    data(){
        return{
            store,
            name: "",
            speciality: ""

        } 
    },
    methods: {
        voltar(e){
            e.preventDefault();
            this.$router.push('/')
        },

        registrar(e){
            e.preventDefault();

            if(this.speciality == "1")
                store.endocrinos.push({name: this.name, speciality: this.speciality})
            else if(this.speciality == "2")
                store.pediatras.push({name: this.name, speciality: this.speciality})
            else if(this.speciality == "3")
                store.cirurgioes.push({name: this.name, speciality: this.speciality})
            else if(this.speciality == "4")
                store.clinicos.push({name: this.name, speciality: this.speciality})
            else if(this.speciality == "5")
                store.cardios.push({name: this.name, speciality: this.speciality})
            else
                store.pneumologistas.push({name: this.name, speciality: this.speciality})
            this.$router.push('/')
        }

        
    } 
    
}

</script>

<style scoped>
    #header-site{
        height: 80px;
        padding: 20px;
        background-color: aquamarine;
    }


    #title-site{
        color: white;
        text-align: center;
    }
    .area-login{
        color: white;
        background-color: aquamarine;
        height: 500px;
        width: 300px;
        text-align: center;
        margin: 150px auto;
        border-radius: 10px;
    }

    #h1-login{
        padding: 40px;
    }


    #input-email{
        margin-top: 20px;
        height: 30px;
    }


    #input-password{
        margin-top: 90px;
        height: 30px;
    }


    #input-submit{
        margin-top: 20px;
        height: 30px;
        width: 70px;
    }

    a {
        color: inherit;
        text-decoration: none;
    }
</style>