import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Login'
import AddContact from '@/components/AddContact'
import EditContact from '@/components/EditContact'
import ContactList from '@/components/ContactList'
import AddUser from '@/components/AddUser'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/test',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path:'/',
      name: 'Login',
      component: Login
    },
    {
      path:'/addUser',
      name: 'AddUser',
      component: AddUser
    },
    {
      path: '/addContact',
      name: 'AddContact',
      component: AddContact
    },
    {
      path: '/editContact',
      name: 'EditContact',
      component: EditContact
    },
    {
      path: '/contactList',
      name: 'ContactList',
      component : ContactList
    }
  ]
})
