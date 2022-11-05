<template>
    <div>
            <header id = "header-site">
                <h1 id = "title-site">Health Time</h1>
            </header>
            <div className = 'area-login'>
                <form id = 'patient-register'>
                    <h1 className = 'title-login'>CRIAR UMA</h1>
                    <h1 className = 'title-login'>NOVA CONTA PACIENTE</h1>
                    <p className='p-patient-register'>Nome</p>
                    <input v-model="name" className='input-patient-register' id='name'>
                    <p className='p-patient-register'>E-mail</p>
                    <input v-model="email" id = 'email' class='email'>
                    <p className='p-patient-register'>Senha</p>
                    <input v-model="password" className='input-patient-register' id = "password" type = 'password'>
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
    name: "cadastro",
    data(){
        return {
            store,
            name: '',
            email: '',
            password: ''
        }
    },
    methods: {  
        voltar(e){
            e.preventDefault();
            this.$router.push('/')
        },
        
        registrar(e){
            e.preventDefault();
            console.log('aqui')
            var teste = JSON.parse(JSON.stringify(store.patients))
            console.log(teste)
            var user = {name: this.name, email: this.email, password: this.password}
            teste.push(user)
            store.patients = teste
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