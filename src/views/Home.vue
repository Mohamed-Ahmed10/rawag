<template>
  <Header/>
  <About />
  <Why />
  <Our-group />
  <Services />
  <couverage />
  <technology />
  <apps />
  <our-customers />
</template>
<style lang="scss">
$main-color: #fea501;

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
import Header from "@/components/Header";
import About from "@/components/About";
import Why from "@/components/Why";
import OurGroup from "@/components/OurGroup";
import Services from "@/components/Services";
import Couverage from "@/components/Couverage.vue";
import Technology from "@/components/Technology";
import Apps from "@/components/Apps";
import OurCustomers from "@/components/OurCustomers.vue";

export default {
  components: {
    Header,
    About,
    Why,
    OurGroup,
    Services,
    Couverage,
    Technology,
    Apps,
    OurCustomers,
  },
};
</script>