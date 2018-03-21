<template>
    <div>
        
        <div class="card">
            <div class="card-body">
                <h1>Login</h1>
                <form>
                    <div class="form-group">
                        <label >Nickname </label>
                        <input class="form-control" id="nickname" placeholder="Nickname" v-model="User.nickname">
                    </div>
                    <div class="form-group">
                        <label >Password</label>
                        <input type="password" class="form-control" id="password" placeholder="Password" v-model="User.password">
                    </div>
                    
                    <button type="submit" class="btn btn-success centerButton" @click="login" >Login</button>
                    <router-link :to="{name: 'AddUser'}">
                        <button class="btn btn-primary centerButton">Register</button>
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
                "password": ""
            }
        };
    }, mounted() {
    }, methods: {
        login(){
            
            axios.get(myURL + this.User.nickname).then((response) => {
                const realUser = response.data[0];
                if(response.data.length>0){
                    if((this.User.nickname == realUser.nickname) && (this.User.password == realUser.password)){
                        alert("Correct Credentials");
                        const text = "nickname=" + realUser.nickname;
                        document.cookie = text;
                        
                    }
                    else {
                        alert("Wrong credentials");
                    }
                }
                else{
                    alert("Wrong credentials.");
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