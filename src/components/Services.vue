<template>
  <section id="services">
    <h2>{{$t('services.header')}}</h2>
    <div class="line"></div>
    <div class="container">
      <div class="row">
        <div class="col-3">
          <div class="service_container">
            <img
              src="../assets/icons/services_icon1.png"
              alt="this is icon for our services"
              srcset=""
            />
            <h5>{{$t('services.h')}}</h5>
            <p>{{$t('services.content')}}</p>
          </div>
        </div>
        <div class="col-3">
          <div class="service_container">
            <img
              src="../assets/icons/services_icon2.png"
              alt="this is icon for our services"
              srcset=""
            />
            <h5>{{$t('services.h')}}</h5>
            <p>{{$t('services.content')}}</p>
          </div>
        </div>
        <div class="col-3">
          <div class="service_container">
            <img
              src="../assets/icons/services_icon3.png"
              alt="this is icon for our services"
              srcset=""
            />
            <h5>{{$t('services.h')}}</h5>
            <p>{{$t('services.content')}}</p>
          </div>
        </div>
        <div class="col-3">
          <div class="service_container">
            <img
              src="../assets/icons/services_icon4.png"
              alt="this is icon for our services"
              srcset=""
            />
            <h5>{{$t('services.h')}}</h5>
            <p>{{$t('services.content')}}</p>
          </div>
        </div>
        <div class="col-3">
          <div class="service_container">
            <img
              src="../assets/icons/services_icon5.png"
              alt="this is icon for our services"
              srcset=""
            />
            <h5>{{$t('services.h')}}</h5>
            <p>{{$t('services.content')}}</p>
          </div>
        </div>
        <div class="col-3">
          <div class="service_container">
            <img
              src="../assets/icons/services_icon6.png"
              alt="this is icon for our services"
              srcset=""
            />
            <h5>{{$t('services.h')}}</h5>
            <p>{{$t('services.content')}}</p>
          </div>
        </div>
        <div class="col-3">
          <div class="service_container">
            <img
              src="../assets/icons/services_icon7.png"
              alt="this is icon for our services"
              srcset=""
            />
            <h5>{{$t('services.h')}}</h5>
            <p>{{$t('services.content')}}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
#services {
  min-height: 500px;
  background-color: #eff1f0;
  padding: 30px 0;

  .container {
    margin-top: 30px;
    .row {
      justify-content: center;

      .col-3 {
        padding: 0;

        &:nth-child(odd) {
          background-color: #fff;
        }
        &:nth-child(even) {
          background-color: #d0d0d0;
        }
      }
    }
  }
  h2 {
    text-transform: uppercase;
    font-weight: bold;
    position: relative;
  }
  .line {
    height: 1px;
    width: 90px;
    background: #fea501;
    margin: auto;
    position: relative;

    &::after {
      content: "^";
      position: inherit;
      top: -9px;
      left: 0;
      height: 1px;
      width: 15px;
      color: #fea501;
      font-weight: bold;
      background: #eff1f0;
      padding: 2px;
    }
  }
  .service_container {
    padding: 10px;

    h5 {
      margin: 11px 0;
      font-weight: bold;
    }
  }
}
</style>
<script>
export default {
  name: "Services",
  props: {},
};
</script>