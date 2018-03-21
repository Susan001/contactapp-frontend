<template>
    <div>
        <navigation></navigation>
        <div class="card">
            <div class="card-body">
                <h3>Add Contact</h3>
                <form>
                    <div class="form-group">
                        <label >ContactID *</label>
                        <input class="form-control" id="contactID" placeholder="ContactID" v-model="Contact.contactId">
                    </div>
                    <div class="form-group">
                        <label >First Name *</label>
                        <input class="form-control" id="firstName" placeholder="First Name" v-model="Contact.firstName">
                    </div>
                    <div class="form-group">
                        <label >Last Name *</label>
                        <input class="form-control" id="lastName" placeholder="Last Name" v-model="Contact.lastName">
                    </div>
                    <div class="form-group">
                        <label >Mobile Number *</label>
                        <input class="form-control" id="mobile" placeholder="Mobile Number" v-model="Contact.mobile">
                    </div>
                    <div class="form-group">
                        <label >Email address</label>
                        <input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" v-model="Contact.email">
                    </div>
                    <div class="form-group">
                        <label >Facebook </label>
                        <input class="form-control" id="facebook" placeholder="Facebook" v-model="Contact.facebook">
                    </div>
                    <div class="form-group">
                        <label >Image URL </label>
                        <input class="form-control" id="image" placeholder="Image URL" v-model="Contact.imageUrl">
                    </div>
                    <!--
                    <div class="form-group">
                        <label >Password</label>
                        <input type="password" class="form-control" id="password" placeholder="Password">
                    </div>
                    -->
                    <router-link :to="{name: 'ContactList'}">
                        <button type="submit" class="btn btn-success centerButton" @click= "addContact" >Save</button>
                    </router-link>
                    <router-link :to="{name:'ContactList'}">
                        <button class="btn btn-primary centerButton">Close</button>
                    </router-link>
                </form>
            </div>
        </div>
    
   </div>
</template>

<script>
const myURL = "https://contactapp-susan001.c9users.io:8081/contacts/";
const userNickname = "laura";
import navigation from './Navbar';
import axios from 'axios';
export default {
    name: 'AddContact',
    components: {
         navigation
    }, data() {
        return{
            contacts: [],
            Contact: {
                "userNickname": userNickname,
                "contactId": "",
                "firstName": "",
                "lastName": "",
                "mobile": "",
                "email": "",
                "facebook": "",
                "imageUrl": ""
            }
        };
    }, mounted() {
        /**axios.get(myURL + userNickname).then((response) => {
            console.log(response.data);
            this.contacts = response.data;
            
        }).catch((error) => {
            console.log(error);
        });*/
    }, methods: {
        addContact(){
            let newContact = {
                userNickname: this.Contact.userNickname,
                contactId: this.Contact.contactId,
                firstName: this.Contact.firstName,
                lastName: this.Contact.lastName,
                mobile: this.Contact.mobile,
                email: this.Contact.email,
                facebook: this.Contact.facebook,
                imageUrl: this.Contact.imageUrl
            };
            console.log(newContact);
            axios.post(myURL, newContact).then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.log(error);
            });
            window.location.reload();
        }
    
    }
};
</script>


<style scoped>
*{
    line-height:1em;
}
.card-body{
}
.card{
    text-align: left;
    width:60%;
    margin:auto;
    margin-top:1em;
    margin-bottom: 1em;
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