<template>
  <section class="contacts">
    <div class="container">
      <div class="row">
        <div class="col-3">
          <div class="contacts_icon_container">
            <img src="../assets/contacts/phone.png" alt="" srcset="" />
          </div>
          <h6>1800-425-2026</h6>
        </div>
        <div class="col-3">
          <div class="contacts_icon_container">
            <img src="../assets/contacts/email.png" alt="" srcset="" />
          </div>
          <h6>info@charity.com</h6>
        </div>
        <div class="col-3">
          <div class="contacts_icon_container">
            <img src="../assets/contacts/calender.png" alt="" srcset="" />
          </div>
          <h6>Mon-Sat:8:00-18:00</h6>
        </div>
        <div class="col-3">
          <div class="contacts_icon_container">
            <img src="../assets/contacts/maps.png" alt="" srcset="" />
          </div>
          <h6>Rouwais Dist ,,, P.O.Box : 810</h6>
        </div>
      </div>
      <hr />
      <div class="social_media">
        <a href="#">
          <img
            src="../assets/social_media/facebook.png"
            alt="facebook link"
            srcset=""
          />
        </a>
        <a href="#">
          <img
            src="../assets/social_media/instagram.png"
            alt="instagram link"
            srcset=""
          />
        </a>
        <a href="#">
          <img
            src="../assets/social_media/linkedin.png"
            alt="linkedin link"
            srcset=""
          />
        </a>
        <a href="#">
          <img
            src="../assets/social_media/twitter.png"
            alt="twitter link"
            srcset=""
          />
        </a>
        <a href="#">
          <img
            src="../assets/social_media/whatsapp.png"
            alt="whatsapp link"
            srcset=""
          />
        </a>
      </div>
      <hr />
    </div>
    <div class="rights">All rights reserved Tatx &copy; 2021</div>
  </section>
</template>

<style lang="scss" scoped>
.contacts {
  margin-top: 100px;
  font-family: tahoma;
  .contacts_icon_container {
    height: 50px;
  }
  h6 {
    margin-top: 20px;
    font-size: 13px;
  }
}
a {
  margin: 10px;
}
a:hover img {
  transform: scale(1.2);
  transition: 0.5s ease-in-out;
}
.rights {
  margin: 20px 0;
}
</style>

<script>
export default {
  name: "Contacts",
};
</script>