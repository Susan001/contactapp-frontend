<template>
    <div>
        <navigation></navigation>
        <div class="card">
            <h1>EditContact</h1>
            <div class="card-body">
                <form>
                    <div class="form-group">
                        <label >ContactID *</label>
                        <input class="form-control" id="contactID" placeholder="ContactID">
                    </div>
                    <div class="form-group">
                        <label >First Name *</label>
                        <input class="form-control" id="firstName" placeholder="First Name">
                    </div>
                    <div class="form-group">
                        <label >Last Name *</label>
                        <input class="form-control" id="lastName" placeholder="Last Name">
                    </div>
                    <div class="form-group">
                        <label >Mobile Number *</label>
                        <input class="form-control" id="mobile" placeholder="Mobile Number">
                    </div>
                    <div class="form-group">
                        <label >Email address</label>
                        <input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email">
                    </div>
                    <div class="form-group">
                        <label >Facebook </label>
                        <input class="form-control" id="facebook" placeholder="Facebook">
                    </div>
                    <!--
                    <div class="form-group">
                        <label >Password</label>
                        <input type="password" class="form-control" id="password" placeholder="Password">
                    </div>
                    -->
                    <button type="submit" class="btn btn-success centerButton">Save</button>
                    <button class="btn btn-primary centerButton">Close</button>
                </form>
            </div>
        </div>
    
   </div>
</template>

<script>
    import navigation from './Navbar';
    export default {
        name: 'EditContact',
        components: {
             navigation
        }
    };
</script>


<style scoped>
*{
    line-height:1em;
}
.card-body{
    padding-top:0;
}
.card{
    text-align: left;
}
lable {
    font-size: 0.5em;
}
input {
    line-height: 0.5em;
}
.centerButton{
    text-align: center;
    
}
</style>