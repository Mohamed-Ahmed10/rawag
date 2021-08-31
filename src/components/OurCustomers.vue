<template>
  <section class="our_cutomers">
    <h2>{{$t('our_customers.h2')}}</h2>
    <div class="line"></div>
    <div class="container">
      <div class="row">
        <div class="col">
          <img src="../assets/customers/customer1.png" alt="" srcset="" />
        </div>
        <div class="col">
          <img src="../assets/customers/customer2.png" alt="" srcset="" />
        </div>
        <div class="col">
          <img src="../assets/customers/customer3.png" alt="" srcset="" />
        </div>
        <div class="col">
          <img src="../assets/customers/customer4.png" alt="" srcset="" />
        </div>
        <div class="col">
          <img src="../assets/customers/customer5.png" alt="" srcset="" />
        </div>
        <div class="col">
          <img src="../assets/customers/customer6.png" alt="" srcset="" />
        </div>
      </div>
    </div>
    <div class="rights">{{$t('our_customers.rights')}}&copy;</div>
  </section>
</template>

<style lang="scss" scoped>
h2 {
  text-transform: uppercase;
  font-weight: bold;
  margin: 40px 0;
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
    background: #fff;
    padding: 2px;
  }
}
.row {
  margin: 40px 0;
}
.rights {
  margin: 20px 0;
  font-weight: bold;
}
</style>
<script>
export default {
  name: "OurCustomers",
};
</script>