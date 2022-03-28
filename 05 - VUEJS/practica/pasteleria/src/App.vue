<template>
  <nav>
    <router-link to="/">Vista Cliente</router-link> 
    <router-link to="/pastelero">Vista Pastelero</router-link>
  </nav>
  <router-view/>
</template>

<style>
body {
  background-color: #e7f3ff;
  margin: 0;
}

input {
  font-family: Avenir, Helvetica, Arial, sans-serif;

  border-style: solid;
  background-color: #d4eaff;
  border-color: #95cbfd;
  border-radius: 5px;

  box-sizing: border-box;

  color: #387cc0;
  font-weight: 500;
  
  width: 163px;
}

input:hover {
  border-width: 3px;
}

input[type="button"]:active {
  background-color: #97bfe4;
  border-color: #6fbaff;
  font-weight: 700;
}

textarea {
  font-family: Avenir, Helvetica, Arial, sans-serif;

  border-style: solid;
  background-color: #d4eaff;
  border-color: #95cbfd;
  border-radius: 5px;
  border-width: 2px;

  box-sizing: border-box;

  color: #387cc0;
  font-weight: 500;

  resize: none;
  
  width: 163px;
}

textarea:hover {
  border-width: 3px;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
}

nav {
  text-align: center;
  padding: 20px 10px;
  width: fit-content;
  background-color: #88d5f8;
  margin-bottom: 15px;
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
}

nav a {
  font-weight: bold;
  text-decoration: none;
  color: #3c86cf;
  padding: 20px;
}

nav a:hover {
  font-weight: 900;
}

nav a.router-link-exact-active {
  color: #433ac2;
}
</style>