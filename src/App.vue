<template>
   
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#" style="border: solid 1px; padding-left: 10px; padding-right: 10px;"> LES HUMAINS DE <br> NEW YORK</a>
    <hr>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav" style="padding-left: 1000px;">
        <a class="nav-link active" aria-current="page" href="#"> HISTORIES </a>
        <a class="nav-link" href="#"> DES PAYS </a>
        <a class="nav-link" href="#"> SERIES </a>
        <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true"> PARTAGER</a>
      
      </div>
    </div>
  </div>
</nav>
  <nav>
    <router-link to="/">Home</router-link> |
  </nav>
  <router-view/>
</template>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
