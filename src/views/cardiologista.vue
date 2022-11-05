<template>
    <div>
        <header className = 'header-login'>
                <h1 id = 'title-page' >Health Time</h1>
            </header>
        <h1>Lista de cardiologistas</h1>
        <ul>
            <li  v-for="doctor in store.cardios"  :key="doctor.id">
                <p>Dr(a). {{doctor.name}}</p>
                <button v-on:click="marcar" v-bind:id="doctor.name"> Marcar </button>
                <hr>
            </li>
        </ul>
        <router-link to="/speciality-list"> <button>voltar</button> </router-link>
    </div>
</template>

<script>
    import {store} from '../store'
    export default{
        name: 'cardio',
        data(){
            return{
                store,
            }
        },
        methods: {
            marcar(e){
                e.preventDefault();
                store.consultas.push({user: store.user, doctor: e.target.id})

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