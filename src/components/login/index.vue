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

    <notifications group="auth" position="top right" />
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
  import gql from 'graphql-tag'
  import {AUTH_REQUEST} from '../../store/actions/auth'

  export default {
    name: 'login',
    data () {
      return {
        username: 'dogo',
        password: 'dogy',
      }
    },
    methods: {
      async login() {
        const { username, password } = this

        const response = await this.$apollo.query({
          query: gql`
          query JwtToken($username: String!, $password: String!) {
            JwtToken(username: $username, password: $password) {
              jwt
            }
          }`,
          variables: { username: username, password: password }
        })
        if (response.data.JwtToken && response.data.JwtToken.jwt) {
          this.$store.dispatch(AUTH_REQUEST, { username, password }).then(() => {
            this.$router.push('/')
            // this.$notify({ group: 'auth', clean: true })
            // this.$notify({ group: 'auth', type: 'success', text: 'You have been logged in' })
          })
        }
        else {
          // this.$notify({ group: 'auth', clean: true })
          // this.$notify({ group: 'auth', type: 'warn', text: 'Wrong password, please try again later', clean: true })
          this.$notify({ group: 'auth', type: 'error', text: 'Wrong password, please try again later' })
        }
      }
    },
  }
</script>
