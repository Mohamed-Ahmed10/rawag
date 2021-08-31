<template>
  <section id="coverage">
    <div class="row">
      <div class="col-6 coverage_area">
        <img src="../assets/coverage.png" alt="" srcset="" />
      </div>
      <div class="test-6 coverage_details">
        <h6>{{$t('couverage.h6')}}</h6>
        <h2>{{$t('couverage.h2')}}</h2>
        <p>{{$t('couverage.p')}}</p>
        <button>{{$t('couverage.btn')}}</button>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.row {
  margin: 0;

  .col-6 {
    padding: initial;
    min-height: 500px;
  }

  .coverage_area {
    display: flex;
    align-items: center;
    overflow: hidden;

    img {
      max-width: 100%;
    }
  }
  img {
    max-width: 100%;
    display: flex;
    align-items: center;
  }
  .coverage_details {
    background-color: #22448f;
    width: 50%;
    color: #fff;
    text-align: left;
    padding: 60px 40px;

    h6,
    h2 {
      text-transform: uppercase;
      font-weight: bold;
      position: relative;
    }
    h2::after {
      position: absolute;
      content: "";
      height: 3px;
      background-color: #fea501;
      width: 25%;
      margin-left: 15px;
      bottom: -11px;
      left: -15px;
    }
    p {
      line-height: 2;
      padding: 30px 0;
    }
    button {
      height: 40px;
      width: 150px;
      border: none;
      color: #fff;
      background-color: #fea501;
      outline: none !important;
      font-weight: bold;
    }
  }
}
</style>

<script>
export default {
  name: "Coverage",
};
</script>