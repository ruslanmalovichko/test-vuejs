<template>
  <div>
    <form class="login" @submit.prevent="login">
      <h1>Sign in</h1>
      <label>User name</label>
      <input required v-model="username" type="text" placeholder="Snoopy"/>
      <label>Password</label>
      <input required v-model="password" type="password" placeholder="Password"/>
      <hr/>
      <button type="submit">Login</button>
    </form>

    <notifications group="auth" position="top left" />
  </div>
</template>

<style>
  .login {
    display: flex;
    flex-direction: column;
    width: 300px;
    padding: 10px;
  }
</style>

<script>
  // import gql from 'graphql-tag'
  import axios from 'axios'
  import qs from 'qs'
  // import {AUTH_REQUEST} from '../../store/actions/auth'

  export default {
    name: 'login',
    data () {
      return {
        username: 'admin',
        password: 'admin',
        token: ''
      }
    },
    // methods: {
    //   async login() {
    //     const { username, password } = this

    //     const response = await this.$apollo.query({
    //       query: gql`
    //       query JwtToken($username: String!, $password: String!) {
    //         JwtToken(username: $username, password: $password) {
    //           jwt
    //         }
    //       }`,
    //       variables: { username: username, password: password }
    //     })
    //     if (response.data.JwtToken && response.data.JwtToken.jwt) {
    //       await localStorage.setItem('user-token', response.data.JwtToken.jwt)
    //       this.$token = response.data.JwtToken.jwt
    //       // this.$notify({ group: 'auth', type: 'success', text: 'You have been logged in' })
    //       await this.$apolloProvider.defaultClient.resetStore()
    //       this.$router.push('/')
    //     }
    //     else {
    //       // this.$notify({ group: 'auth', clean: true })
    //       // this.$notify({ group: 'auth', type: 'warn', text: 'Wrong password, please try again later', clean: true })
    //       this.$notify({ group: 'auth', type: 'error', text: 'Wrong password, please try again later' })
    //     }
    //   }
    // },
    methods: {
      async login() {
        // const { username, password } = this

        // // this.isLoading = true;
        // try {
        //   const responce = await this.$axios.post('http://drupal-8-graphql/oauth/token', {
        //     headers: 'Content-Type: application/x-www-form-urlencoded',
        //     body: 'grant_type=password&username=' + username + '&password=' + password + '&client_id={{client_id_user}}&client_secret={{client_secret_user}}'
        //   });
        //   this.post = responce.data;
        //   this.isLoading = false
        // } catch(err) {
        //   console.log(err);
        // }

        // axios.get('http://jsonplaceholder.typicode.com/posts/'+this.id+'/')
        // .then((resp) => {
        //   this.post = resp.data
        // })

        this.fetchData()
      },
      async fetchData() {
        const { username, password } = this

        console.log(this.$axios);

        // this.isLoading = true;
        try {


          const responce = await axios.post('http://drupal-8-graphql/oauth/token', qs.stringify({
            'grant_type': 'password',
            'username': username,
            'password': password,
            'client_id': 'a85dd781-0ceb-475d-a7df-8d2ac3cb7eb9',
            'client_secret': 'Customer-secret'
          }))

          console.log(responce);
          console.log(responce.data.access_token);

          if (responce.data.access_token) {

            console.log(typeof responce.data.access_token);
            console.log(localStorage.getItem('user-token'));
            await localStorage.setItem('user-token', responce.data.access_token)
            localStorage.setItem('user-token', responce.data.access_token)
            console.log(localStorage.getItem('user-token'));
            this.$token = responce.data.access_token
            // this.$notify({ group: 'auth', type: 'success', text: 'You have been logged in' })
            await this.$apolloProvider.defaultClient.resetStore()
            this.$router.push('/')
          }
          else {
            // this.$notify({ group: 'auth', clean: true })
            // this.$notify({ group: 'auth', type: 'warn', text: 'Wrong password, please try again later', clean: true })
            this.$notify({ group: 'auth', type: 'error', text: 'Wrong password, please try again later' })
          }
        } catch(err) {
          console.log(err);
        }
      },
      onCancel() {
        console.log('User cancelled the loader.')
      }
    },
  }
</script>
