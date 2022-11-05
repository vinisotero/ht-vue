<template>
    <div id='home-area'>
            <header className = 'header-login'>
                <h1 id = 'title-page' >Health Time</h1>
            </header>
            
            <div id = 'list-area-border'>
                <h2 id = "secondary-title">Especialidades</h2>
                <div id = 'list-area'>
                    <img id = "pulmao"  src= "../assets/3.png" alt = "pulmao" />
                    <button v-on:click="goToPneumologista" className = "doctor-option">Pneumologista</button>
                    <br/>
                    <img id = "coracao" src= "../assets/coracao.png" alt = "Coração" />
                    <button v-on:click="goToCardiologista" className = "doctor-option">Cardiologista</button>
                    <br/>
                    <img id = "icon-endo" src= "../assets/6.png" alt = "icon-endo" />
                    <button v-on:click="goToEndocrinologista" className = "doctor-option">Endocrinologista</button>
                    <br/>
                    <img id = "icon-geral" src= "../assets/4.png" alt = "icon-geral" />
                    <button v-on:click="goToGeral" className = "doctor-option">Geral</button>
                    <br/>
                    <img id = "icon-ped" src= "../assets/5.png" alt = "icon-ped" />
                    <button v-on:click="goToPedriatria" className = "doctor-option">Pedriatria</button>
                    <br/>
                    <img id = "icon-cirurgiao" src= "../assets/7.png" alt = "icon-cirurgiao" />
                    <button v-on:click="goToCirurgiao" className = "doctor-option">Cirurgião</button>
                </div>
            </div>
            <router-link to="/home"> <button>voltar</button> </router-link>
        </div>
</template>

<script>
        export default ({
            name: "speciality-list",
            methods: {  
              goToPneumologista(){
                this.$router.push('/pneumologista')
              },
              goToCardiologista(){
                this.$router.push('/cardiologista')
              },
              goToEndocrinologista(){
                this.$router.push('/endocrinologista')
              },
              goToGeral(){
                this.$router.push('/clinico-geral')
              },
              goToPedriatria(){
                this.$router.push('/pediatra')
              },
              goToCirurgiao(){
                this.$router.push('/cirurgiao')
              }
            }
    })
</script>

<style scoped>
    .header-login{
  height: 60px;
  padding: 20px;
  background-color: aquamarine;
}

#title-page{
  margin-top: -10px;
  color: white;
}

#list-area-border{
  margin: 90px auto;
  background-color: #f1ebe5;
  height: 450px;
  width: 300px;
  padding: 5px;
  box-shadow: 1px 1px 1px 1px rgb(0, 2, 2);
}

#secondary-title {
  font-family: 'Montserrat', sans-serif;
  font-weight: 200;
  margin-top: 20px;
}


.doctor-option{
  background-color: transparent;
  border-color: black;
  box-sizing: 1px;
  width: 250px;
  height: 50px;
  margin-top: 10px;
}

.doctor-option:hover{
  background-color: black;
  border-color: black;
  color: white;
}

#coracao{
  width: 55px;
  height: 38px;
  position: absolute;
  margin-top: 13px;
}

#pulmao{
  width: 55px;
  height: 38px;
  position: absolute;
  margin-top: 13px;
}

#icon-endo{
  width: 55px;
  height: 38px;
  position: absolute;
  margin-top: 13px;
}

#icon-geral{
  width: 55px;
  height: 38px;
  position: absolute;
  margin-top: 13px;
}

#icon-ped{
  width: 55px;
  height: 38px;
  position: absolute;
  margin-top: 13px;
}


#icon-cirurgiao{
  width: 55px;
  height: 38px;
  position: absolute;
  margin-top: 13px;
}
</style>