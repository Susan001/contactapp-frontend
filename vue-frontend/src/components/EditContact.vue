<template>
    <div>
        <navigation></navigation>
        <div v-if= "userNickname != ''" class="card">
            <div class="card-body">
                <form>
                    <h3>Edit Contact</h3>
                    <div class="form-group">
                        <label >ContactID *</label>
                        <input class="form-control" id="contactID" v-model="Contact.contactId" >
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
                        <!-- v-if= "contact.facebook != ''" -->
                        <input class="form-control" id="image" placeholder="Image URL" v-model="Contact.imageUrl">
                    </div>
                    <button  v-if= "(Contact.contactId != '') && (Contact.lastName !='') && (Contact.firstName !='') && (Contact.mobile !='')" @click="editContact" type="submit" class="btn btn-success centerButton">Save</button>
                    <button  v-else @click="editContact" type="submit" class="btn btn-success centerButton" disabled>Save</button>
                    <router-link :to="{name:'ContactList'}">
                        <button class="btn btn-primary centerButton">Close</button>
                    </router-link>
                </form>
            </div>
        </div>
        <div v-else > <br> <h1>Please log in!</h1></div>
   </div>
</template>

<script>
const myURL = "https://contactapp-susan001.c9users.io:8081/contacts/";
import navigation from './Navbar';
import axios from 'axios';
export default {
    name: 'EditContact',
    components: {
         navigation
    },data() {
        return{
            Contact: {
                "contactId": "",
                "firstName": "",
                "lastName": "",
                "mobile": "",
                "email": "",
                "facebook": "",
                "imageUrl": ""
            },
            userNickname:""
        };
    }, mounted() {
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
        axios.get(myURL + "contact/" + this.$route.params.contactId).then((response) => {
            this.Contact = response.data[0];
            
        }).catch((error) => {
            console.log(error);
    });
    }, methods: {
        editContact(key){
            let updatedContact = {
                contactId: this.Contact.contactId,
                firstName: this.Contact.firstName,
                lastName: this.Contact.lastName,
                mobile: this.Contact.mobile,
                email: this.Contact.email,
                facebook: this.Contact.facebook,
                imageUrl: this.Contact.imageUrl
            };
            axios.put(myURL + this.$route.params.contactId, updatedContact).then((response) => {
                console.log(response);
                this.$router.push('/contactList');
            })
            .catch((error) => {
                console.log(error);
                this.$router.push('/contactList');
            });
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