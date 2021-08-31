<template>
  <div class="about">
    <h1>This is an about page</h1>
    <router-link to="/about/about-company" tag="a">about company</router-link> |
    <router-link to="/about/about-me" tag="a">about me</router-link>

    <router-view></router-view>
  </div>
</template>
