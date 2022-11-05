
<template>
    <div class = "login">
        <header id = "header-site">
            <h1 id = "title-site">Health Time</h1>
        </header>
        <div className = 'area-login'>
            <form>
                <h1 id = 'h1-login'>Login</h1>
                <input v-model="email" id = 'input-email' type = 'email' placeholder = "exemple@email.com">
                <br>
                <input v-model="password" id = 'input-password' type = 'password' placeholder = '***************'>
                <br>
                <br>
                <br>
                <router-link id = 'link-resgister' to="/cadastro">Cadastrar Paciente</router-link>
                <br>
                <br>
                <router-link to="cadastro-medico">Cadastrar Médico</router-link>
                <br>
                <input v-on:click = 'entrar' id = 'input-submit' type = "submit" value = "login">     
            </form>
        </div>
    </div>  
</template>

<script>
import { store } from '../store'
    export default ({
        name: "login",
        data(){
            return {
                store,
                email: '',
                password: ''
            }
        },
        methods: {  
        
        entrar(e){
            e.preventDefault();
            var teste = JSON.parse(JSON.stringify(store.patients))
            var achou = false;
            for(var i = 0; i < teste.length; i++){
                if(teste[i].email == this.email){
                    if(teste[i].password == this.password){
                        var username = teste[i].name
                        var userEmail = teste[i].email
                        var userPassword = teste[i].password
                        achou = true
                    }
                }
            }
            if(achou){
                store.user = {username: username, email: userEmail, password: userPassword}
                this.$router.push('/home')
            }else{
                alert("Usuário ou senha incorretos")
            }

        }
    }
    })

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
</style>>