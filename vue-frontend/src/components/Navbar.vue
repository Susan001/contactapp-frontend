<template>
    <div>
        <nav class="navbar navbar-light" style="background-color: #9e9e9e ;" >
            <span v-if="userNickname != '' " class="navbar-brand mb-0 h1">Hello {{userNickname}} :) !</span>
            <span v-else class="navbar-brand mb-0 h1"> </span>
            <router-link :to="{name: 'Login'}">
                <span class="navbar-brand" >
                    <button v-if="userNickname != '' " type="button" class="btn btn-secondary" @click="logout"> <img src="https://cdn1.iconfinder.com/data/icons/materia-arrows-symbols-vol-8/24/018_320_door_exit_logout-512.png" width="30" height="30" class="d-inline-block align-top" alt="">  Logout  </button>
                    <button v-else type="button" class="btn btn-success" >LOGIN</button>
                </span>
            </router-link>
        </nav>
    </div>
</template>

<script>
    export default {
        name: 'navigation', 
        data(){
            return {
                "userNickname":""
            };
        }, mounted(){
            //Read cookie https://www.w3schools.com/js/js_cookies.asp
            const x = document.cookie;
            let name= "nickname"+ "=";
            var ca = x.split(';');
            for(var i = 0; i <ca.length; i++) {
                var c = ca[i];
                while (c.charAt(0) == ' ') {
                    c = c.substring(1);
                }
                if (c.indexOf(name) == 0) {
                    this.userNickname= c.substring(name.length, c.length);
                }
            }
        }, methods:{
            logout() {
                document.cookie = "nickname=;";
            }
        }
    };
</script>