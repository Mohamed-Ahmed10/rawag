<template class="fdf">
  <navbar />
  <router-view />
</template>
<style lang="scss">
$main-color: #f0cd8e;

* {
  user-select: none;
  box-sizing: border-box;
}

#app {
  font-family: "Raleway", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.rtl
{
  *
  {
    font-family: 'Cairo', sans-serif !important;
  }
  .navbar-nav
  {
    margin-left: 100px;

    a 
    {
      font-size: 17px;
      margin: 0 5px;
    }
  }
}
#nav {
  //Variables

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
button:hover:not(.navbar-toggler) {
  box-shadow: 0 0 13px 4px #afafaf9e;
  color: #fea501 !important ;
  background-color: #eee !important;
  transition: 0.5s all ease-in-out;
}
img:hover {
  transform: scale(1.1);
  transition: 0.5s all ease-in-out;
}
</style>
<script>
import Navbar from "./components/Navbar";

export default {
  components: {
    Navbar,
  },
};
</script>
