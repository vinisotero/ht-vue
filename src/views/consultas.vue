<template>
    <div>
        <header className = 'header-login'>
            <h1 id = 'title-page' >Health Time</h1>
        </header>
        <h1>Consultas</h1>
        <ul>
            <li  v-for="consulta in store.consultas"  :key="consulta.id">
                <p>Médico - Dr {{consulta.doctor}}</p>
                <hr>
            </li>
        </ul>
        <router-link to="/home"> <button>voltar</button> </router-link>
    </div>
</template>

<script>
    import {store} from '../store'
    export default{
        name: 'consultas',
        data(){
            return{
                store,
            }
        }
    }
</script>

<style>
    .header-login{
  height: 60px;
  padding: 20px;
  background-color: aquamarine;
}

#title-page{
  margin-top: -10px;
  color: white;
}
li {
  list-style-type: none;
}
</style>