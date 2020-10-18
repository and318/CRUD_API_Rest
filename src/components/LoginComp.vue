<template>
<div>
    <h1>Login</h1> <br>
    
    <small>
        use las siguientes credenciales:
    </small>
    <div>
        <p>
            user@test.com <br>
            123456
        </p>
    </div>
    <form action="">
        <label for="">Usuario</label>
        <input type="text" placeholder="Usuario" v-model="user"> <br>
        <label for="">Password</label>
        <input type="password" v-model="pass"> <br>
        <button @click.prevent="login">Ingresar</button>

    </form>
</div>
</template>

<script>
import firebase from 'firebase'
export default {
    name: 'LoginForm',
    //props: {},
    data() {
        return {
            user: '',
            pass: '',
        }
    },
    //components: {},
    methods: {
        login(){
            firebase.auth().signInWithEmailAndPassword(this.user, this.pass)
            .then((resp)=>{
                console.log(resp,'result')
                this.$router.push('/')
            })
            .catch(function(error){
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log(errorCode,errorMessage)
            })
        }
    },
}
</script>
