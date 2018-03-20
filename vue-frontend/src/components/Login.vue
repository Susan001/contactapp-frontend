<template>
    <div>
        
        <div class="card">
            <div class="card-body">
                <h1>Login</h1>
                <form>
                    <div class="form-group">
                        <label >Nickname </label>
                        <input class="form-control" id="nickname" placeholder="nickname">
                    </div>
                    <div class="form-group">
                        <label >Password</label>
                        <input type="password" class="form-control" id="password" placeholder="Password">
                    </div>
                    <button type="submit" class="btn btn-success centerButton">Login</button>
                    <router-link :to="{name: 'AddUser'}">
                        <button class="btn btn-primary centerButton">Register</button>
                    </router-link>
                </form>
            </div>
        </div>
    
   </div>
</template>

<script>
   
    export default {
        name: 'Login'
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