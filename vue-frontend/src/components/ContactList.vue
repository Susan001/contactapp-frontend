<template>
    <div v-if= "userNickname != ''">
        <navigation></navigation>
        
        <form class="form-inline search-inline">
            <input class="form-control" type="search" placeholder="Search" v-model= "search" style="width:85%" >
            <router-link :to="{name: 'AddContact'}">
                <button class="btn btn-secondary" >Add Contact</button>
            </router-link>
        </form>
        <div class="contacts">
            <div class="card" v-for= "contact in filterdContacts">
                <img v-if= "contact.imageUrl != ''" class="card-img-top" v-bind:src="contact.imageUrl" alt="Card image cap">
                <img v-else class="card-img-top" src="https://www.w3schools.com/howto/img_avatar.png" alt="Card image cap">
                <div class="card-body">
                    <h2 class="card-title">{{contact.firstName}} {{contact.lastName}}</h2>
                    <p class="card-text">Mobile: {{contact.mobile}}</p>
                    <p v-if= "contact.email != ''" class="card-text">Email: {{contact.email}}</p>
                    <p v-if= "contact.facebook != ''" class="card-text">Facebook: {{contact.facebook}}</p>
                </div>
                <div class="card-footer text-muted">
                    <router-link :to="{ path: 'editContact/'+contact._id }">
                        <button type="button" class="btn btn-primary"> <img src=" https://upload.wikimedia.org/wikipedia/commons/3/3e/White_pencil.png" width="20px" /> </button>
                    </router-link>
                    <button type="button" class="btn btn-danger" @click="deleteContact(contact._id)"> <img src= "http://www.iconsplace.com/download/white-eraser-512.png" width="20px"/> </button>
                </div>
                </div>
            </div>
        </div>
        
    
   </div>
   <div v-else >
       <navigation></navigation>
       <br>
       <h1>Please log in!</h1>
   </div>
</template>

<script>
const myURL = "https://contactapp-susan001.c9users.io:8081/contacts/";
import navigation from './Navbar';
import axios from 'axios';
export default {
    name: 'ContactList',
    components: {
         navigation
    }, data() {
        return{
            contacts: [],
            search: "",
            userNickname: ""
        };
    }, computed:{
        filterdContacts: function () {
          return this.contacts.filter((contact) => {
            return contact.firstName.match(this.search);
          });
        }
    },mounted() {
        
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
        
        axios.get(myURL + this.userNickname).then((response) => {
            //console.log(response.data);
            this.contacts = response.data;
            
        }).catch((error) => {
            console.log(error);
        });
        
        
        
    }, methods: {
        deleteContact(key){
            axios.delete(myURL +key).then((response) => {
            console.log(response.data);
            this.contacts = response.data;
            location.reload();
            
            }).catch((error) => {
                console.log(error);
                location.reload();
            });
        }
    
    }
};
</script>

<style scoped>
.card-text, .card-title{
    margin:0;
    padding: 0;
}
.search-inline{
    margin-left: 3em;
    margin-top: 1em;
}
.contacts{
    margin-left:3em;
    margin-top: 1em;
}
.card {
    width: 18rem;
    float:left;
    margin-bottom: 1em;
}
.card-columns {
  @include media-breakpoint-only(lg) {
    column-count: 4;
  }
  @include media-breakpoint-only(xl) {
    column-count: 5;
  }
}
</style>




