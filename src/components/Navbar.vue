<template>
  <nav class="navbar navbar-expand-lg navbar-light">
    <div class="container">
      <a class="navbar-brand" href="#">
        <img class="logo" src="../assets/icon.png" alt srcset />
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <router-link class="nav-link" to="/">{{$t('nav.home')}}</router-link>
          <a class="nav-link" href="/#about">{{$t('nav.about')}}</a>
          <a class="nav-link" href="/#why_rawing">{{$t('nav.whyrawing')}}</a>
          <a class="nav-link" href="/#services">{{$t('nav.services')}}</a>
          <a class="nav-link" href="/#coverage">{{$t('nav.coverage')}}</a>
          <a class="nav-link" href="/#our_apps">{{$t('nav.our_apps')}}</a>
          <router-link class="nav-link" to="/contacts">{{$t('nav.contacts')}}</router-link>
        </div>
        <button>{{$t('nav.business')}}</button>
        <a href="" class="lang_links " :class="{'active' : $i18n.locale == 'en'}" @click.prevent="changeLocale('en')">E</a>
        <a href="" class="lang_links" :class="{'active' : $i18n.locale == 'ar'}" @click.prevent="changeLocale('ar')">ع</a>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  name: "App",

  data: function() {
    return {
 
    };
  },
  methods: {
   changeLocale(locale) {
      if (locale == "ar") {
        document.querySelector("body").classList.add("rtl");
        document.dir = "rtl";
        localStorage.setItem("locale", "ar");
        console.log(locale);
      } else {
        document.querySelector("body").classList.remove("rtl");
        document.dir = "ltr";
        localStorage.setItem("locale", "en");
        console.log(locale);
      }
      this.$i18n.locale = locale;
    }
  }
};
</script>
<style lang="scss" scoped>
nav {
  position: sticky;
  top: 0;
  background-color: #e2e2e2cc;
  z-index: 2;

  .logo {
    height: 80px;
  }
  .navbar-collapse {
    justify-content: center;
  }
  .nav-link {
    text-transform: uppercase;
    font-size: 12px;
    color: rgba(0, 0, 0, 81%);
    font-weight: bold;
  }
  .nav-link.active {
    color: #fea501 !important;
    border-bottom: dashed;
  }
  button {
    height: 40px;
    width: 165px;
    border: 1px solid #fea501;
    color: #fea501;
    font-weight: bold;
    text-transform: capitalize;
    background-color: transparent;
    outline: none;
  }
  .lang_links {
    color: #fea501;
    padding: 3px;
    margin: 10px;
    border: 1px solid #fea501;
    height: 40px;
    width: 40px;
    font-weight: bold;
    font-size: 23px;
    text-decoration: navajowhite;
  }
  .lang_links.active {
    background-color: #fea501;
    color: #fff;
  }
  .navbar-collapse {
    transition: all 1s ease-in-out;
  }
}
</style>
