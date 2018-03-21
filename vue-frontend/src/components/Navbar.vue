<template>
    <div>
        <nav class="navbar navbar-light" style="background-color: #9e9e9e ;" >
        <!--</nav>style="background-color: #4286f4;"-->
            <span class="navbar-brand mb-0 h1">Hallo Anne:)</span>
            <router-link :to="{name: 'Login'}">
                <span class="navbar-brand" >
                    <button type="button" class="btn btn-secondary" @click="logout"> <img src="https://cdn1.iconfinder.com/data/icons/materia-arrows-symbols-vol-8/24/018_320_door_exit_logout-512.png" width="30" height="30" class="d-inline-block align-top" alt="">  Logout  </button>
                </span>
            </router-link>
        </nav>
    </div>
</template>

<script>
    export default {
        name: 'navigation', 
        methods:{
            logout() {
                document.cookie = "nickname=;";
                console.log(document.cookie);
            }
        }
    };
</script>