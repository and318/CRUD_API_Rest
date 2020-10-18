<template>
  <div class="about">
    <h1>Si quieres puedes salir</h1>

    

    <button @click="logout">SALIR</button> <br>
  </div>
</template>
<script>
import firebase from 'firebase'

  export default {
      methods:{
    logout(){
      firebase.auth().signOut()
        .then(()=>{
          this.$router.push('/')
        })
        .catch(function(error){
          alert(error)
        })
    }
  }
  }

</script>