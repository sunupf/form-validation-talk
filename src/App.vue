<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/vuelidate">Vuelidate</router-link> |
      <router-link to="/veevalidate">Veevalidate</router-link> |
      <router-link to="/validatorjs">ValidatorJS</router-link> |
      <router-link to="/validatejs">ValidateJS</router-link> |
    </div>
    <router-view/>
  </div>
</template>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
<style src='./assets/css/index.css'></style>
