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
  // const addItemMutation = gql`
    // query JwtToken($username: String!, $password: String!) {
      // JwtToken(username: $username, password: $password) {
        // jwt
      // }
    // }`;

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
      login: function () {
        const { username, password } = this
        // console.log(this);
        // console.log(this.$apollo);

        // this.$apollo.mutate({
        //   mutation: addItemMutation,
        //   variables: { username: username, password: password }
        // });
        this.$store.dispatch(AUTH_REQUEST, { username, password }).then(() => {
          this.$router.push('/')
        })
      }
    },
  }
</script>
