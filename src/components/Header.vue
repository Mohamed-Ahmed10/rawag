<template>
  <section id="header">
    <div class="header_container">
      <h1>{{$t('header.h1')}}</h1>
      <h5>{{$t('header.h5')}}</h5>
      <button>{{$t('header.contact')}}</button>
    </div>
  </section>
</template>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
* {
  text-transform: uppercase;
  color: #fff;
  font-weight: bold;
}
#header {
  height: calc(100vh - 100px);
  background: url("../assets/header_cover.png");
  background-size: cover;
  display: flex;
  flex-direction: row;
  align-content: center;
  flex-wrap: wrap;
  overflow: hidden;
}
.header_container {
  padding: 30px 0;
  background-color: #768db9ab;
  width: 100%;
}
h1 {
  padding: 20px 0;
}
h5 {
  padding: 0 0 40px 0;
}
button {
  height: 40px;
  width: 150px;
  border: none;
  color: #fff;
  background-color: #fea501;
  outline: none !important;
}
</style>

<script>
export default {
  name: "Header",
  props: {
    h1_content: String,
    h5_content: String,
  },
};
</script>

