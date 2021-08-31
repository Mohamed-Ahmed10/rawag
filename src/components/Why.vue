<template>
  <section id="why_rawing">
    <h2>{{$t('why.header')}}</h2>
    <div class="line"></div>
    <div class="container">
      <div class="row">
        <div class="col-6">
          <div class="media">
            <img src="../assets/icons/why1.png" class="mr-3" alt="..." />
            <div class="media-body">
              <h5 class="mt-0">{{$t('why.h')}}</h5>
              <p>{{$t('why.content')}}</p>
            </div>
          </div>
        </div>
        <div class="col-6">
          <div class="media">
            <img src="../assets/icons/why2.png" class="mr-3" alt="..." />
            <div class="media-body">
              <h5 class="mt-0">{{$t('why.h')}}</h5>
              <p>{{$t('why.content')}}</p>
            </div>
          </div>
        </div>
        <div class="col-6">
          <div class="media">
            <img src="../assets/icons/why3.png" class="mr-3" alt="..." />
            <div class="media-body">
              <h5 class="mt-0">{{$t('why.h')}}</h5>
              <p>{{$t('why.content')}}</p>
            </div>
          </div>
        </div>
        <div class="col-6">
          <div class="media">
            <img src="../assets/icons/why4.png" class="mr-3" alt="..." />
            <div class="media-body">
              <h5 class="mt-0">{{$t('why.h')}}</h5>
              <p>{{$t('why.content')}}</p>
            </div>
          </div>
        </div>
        <div class="col-6">
          <div class="media">
            <img src="../assets/icons/why5.png" class="mr-3" alt="..." />
            <div class="media-body">
              <h5 class="mt-0">{{$t('why.h')}}</h5>
              <p>{{$t('why.content')}}</p>
            </div>
          </div>
        </div>
        <div class="col-6">
          <div class="media">
            <img src="../assets/icons/why6.png" class="mr-3" alt="..." />
            <div class="media-body">
              <h5 class="mt-0">{{$t('why.h')}}</h5>
              <p>{{$t('why.content')}}</p>
            </div>
          </div>
        </div>
        <div class="col-6">
          <div class="media">
            <img src="../assets/icons/why7.png" class="mr-3" alt="..." />
            <div class="media-body">
              <h5 class="mt-0">{{$t('why.h')}}</h5>
              <p>{{$t('why.content')}}</p>
            </div>
          </div>
        </div>
        <div class="col-6">
          <div class="media">
            <img src="../assets/icons/why8.png" class="mr-3" alt="..." />
            <div class="media-body">
              <h5 class="mt-0">{{$t('why.h')}}</h5>
              <p>{{$t('why.content')}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
#why_rawing {
  min-height: 500px;
  background-color: #eff1f0;
  padding: 30px 0;

  .container {
    margin-top: 30px;
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
  .media {
    padding: 20px;

    .media-body {
      text-align: left;

      > h5 {
        font-weight: bold;
        text-transform: capitalize;
      }
    }
  }
}
</style>
<script>
export default {
  name: "Why",
  props: {},
};
</script>