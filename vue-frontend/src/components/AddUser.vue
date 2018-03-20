<template>
    <div>
        <div class="card">
            <div class="card-body">
                <h1>Register</h1>
                <form>
                    <div class="form-group">
                        <label >Email address</label>
                        <input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email">
                    </div>
                    <div class="form-group">
                        <label >Nickname </label>
                        <input class="form-control" id="nickname" placeholder="nickname">
                    </div>
                    <div class="form-group">
                        <label >Password</label>
                        <input type="password" class="form-control" id="password" placeholder="Password">
                        <br>
                        <input type="password" class="form-control" id="password" placeholder="Repeat Password">
                    </div>
                    <button type="submit" class="btn btn-success centerButton">Register</button>
                    <router-link :to="{name: 'Login'}">
                        <button class="btn btn-primary centerButton">I am already a User</button>
                    </router-link>
                </form>
            </div>
        </div>
    
   </div>
</template>

<script>
   
    export default {
        name: 'AddUser'
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