<template>
    <div>
        <div class="card">
            <div class="card-body">
                <h1>Register</h1>
                <form>
                    <div class="form-group">
                        <label >Nickname </label>
                        <input class="form-control" id="nickname" placeholder="Nickname" v-model="User.nickname">
                    </div>
                    <div class="form-group">
                        <label >Password</label>
                        <input type="password" class="form-control" placeholder="Password" v-model= "User.password">
                        <br>
                        <input type="password" class="form-control" placeholder="Repeat Password" v-model= "User.repeatPassword">
                        <p v-if= "User.password != User.repeatPassword">Please Recheck your password</p>
                        <p v-if= "User.password.length <5">Your password must contain 5 characters</p>
                    </div>
                    <!--<router-link :to="{name: 'Login'}"> -->
                        <button v-if= "(User.password.length>4) && (User.password === User.repeatPassword)" @click="addUser" type="submit" class="btn btn-success centerButton" >Register</button>
                        <button v-else @click="addUser" type="submit" class="btn btn-success centerButton" disabled>Register</button>
                    <!--</router-link> -->
                    <router-link :to="{name: 'Login'}">
                        <button class="btn btn-primary centerButton">I am already a User</button>
                    </router-link>
                </form>
            </div>
        </div>
    
   </div>
</template>

<script>
const myURL = "https://contactapp-susan001.c9users.io:8081/users/";
import axios from 'axios';
export default {
    name: 'AddUser',
    components: {
    },data() {
        return{
            User: {
                "nickname": "",
                "password": "",
                "repeatPassword": ""
            }
        };
    }, mounted() {
    }, methods: {
        addUser(){
            
            axios.get(myURL + this.User.nickname).then((response) => {
                console.log(response.data);
                if(response.data.length<1){
                    alert("here we go");
                    let newUser = {
                        nickname: this.User.nickname,
                        password: this.User.password
                    };
                    axios.post(myURL, newUser).then((response) => {
                        console.log(response);
                    })
                    .catch((error) => {
                        console.log(error);
                    });
                }
                else{
                    alert("This nickname is already in use. Please choose another one.");
                }
                
            }).catch((error) => {
                console.log(error);
            });
            
            
        }
    
    }
};
</script>


<style scoped>
.card{
    margin: auto;
    margin-top:4em;
    width: 25em;
    text-align: left;
}
lable {
    font-size: 0.5em;
}
input {
    line-height: 0.5em;
}
</style>