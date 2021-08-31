<template>
  <section class="our_group">
    <h2>{{$t('our_group.header')}}</h2>
    <div class="images_container">
      <img
        src="../assets/our_group_image1.png"
        alt="logo for one of  our groups"
        srcset=""
      />
      <img
        src="../assets/our_group_image2.png"
        alt="logo for one of  our groups"
        srcset=""
      />
      <img
        src="../assets/our_group_image3.png"
        alt="logo for one of  our groups"
        srcset=""
      />
    </div>
  </section>
</template>

<style lang="scss" scoped>
.our_group {
  padding: 30px 0;

  h2 {
    text-transform: uppercase;
    font-weight: bold;
    margin-bottom: 30px;
  }
}
</style>


<script>
export default {
  name: "Our_group",
};
</script>