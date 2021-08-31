<template>
  <section
    id="about"
    class="wow fadeInRight"
    data-wow-duration="2s"
    data-wow-offset="400"
  >
    <div class="container">
      <div class="row">
        <div class="col">
          <div class="details">
            <h2>{{$t('about.h')}}</h2>
            <p>
             {{$t('about.content')}}
            </p>
            <button>{{$t('about.contact')}}</button>
          </div>
        </div>
        <div class="col">
          <img src="../assets/about.png" alt="" srcset="" />
        </div>
      </div>
    </div>
  </section>
</template>
<style lang="scss" scoped>
* {
  font-weight: bold;
}
#about {
  min-height: 350px;
  padding-bottom: 30px;

  .details {
    padding-top: 20%;

    h2 {
      text-transform: uppercase;
      color: #fea501;
    }
    p {
      color: #000;
    }
    button {
      height: 40px;
      width: 150px;
      border: none;
      color: #fff;
      background-color: #fea501;
      outline: none !important;
    }
  }
  img {
    width: 80%;
    margin: 10%;
  }
}
</style>
<script>
export default {
  name: "About",
  props: {},
};
</script>
