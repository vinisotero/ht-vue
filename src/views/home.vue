<template>
    <div id='home-area'>
            <header className = 'header-login'>
                <h1 id = 'title-page' >Health Time</h1>
            </header>
            <div id = 'welcome-area'>
                <h2 id = 'welcome-text' >Seja bem vindo, {{store.user.username}}!</h2>
                <router-link id = 'welcome-secondary-text' to="/speciality-list" >Para marcar consulta clique aqui!</router-link>
                <br>
                <br>
                <router-link id = 'welcome-secondary-text' to="/consultas" >Para ver suas consultas</router-link>
                <br>
                <br>
                <router-link to="/">Clique aqui para sair</router-link>
            </div>
        </div>
</template>

<script>
    import { store } from '../store'

    export default ({
        name: "home",
        data(){
            return {
                store
            }
        }
    })

</script>

<style scoped>
    .header-login{
        height: 60px;
        width: 100%;
        padding: 20px;
        background-color: aquamarine;
    }

    #title-page{
    margin-top: -10px;
    color: white;
    }

    #welcome-area{
  margin-top: 200px;
  height: 200px;
  width: 400px;
  padding: 20px;
  background-color: aquamarine;
  margin-left: 525px;
  margin: 150px auto;
}

#welcome-text{
  color: white;
}

#welcome-secondary-text{
  color: white;
}
</style>