import { createI18n } from "vue-i18n";


const messages = {
  en: {
    nav:{
      home: "home",
      about : "about",
      whyrawing : "why rawing",
      services : "services",
      coverage : "coverage",
      our_apps : "our apps",
      contacts : "contacts",
      business : "business login"
    },
    header:{
      h1 : "Rawag company",
      h5 : "rawaj company is a smart sheleves server provider",
      contact : "contact us"
    },
    about:{
      h : "about us",
      content : " Lorem ipsum dolor sit amet consectetur adipisicing elit. Saep tenetur reiciendis magni. Fugiat vel in quas totam sit! Ratione , eveniet! Dolores ipsum ab modi, similique ut accusamus vitae reprehenderit iusto",
      contact : "contact us "
    },
    why:{
      header : "why rawag ",
      h : "education",
      content :"Will you do the same for me? It's time to face the music I'm no longer your muse."
    },
    our_group : {
      header : "our group"
    },
    services : {
      header :  "rawaj services",
      h : "Kindness",
      content : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam minima ipsa est,"
    },
    couverage : {
      h6 : "kindness towards humanity",
      h2 : "our coverage",
      p : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo voluptates optio, dolor delectus, ad earum molestias, officiis repellendus quae saepe fugiat. Possimus debitis quidem ullam eos quo excepturi eveniet adipisci.0",
      btn : "contact us"
    },
    technology :{
      h2 : "rawaj technology" ,
      h5 : "kindness",
      p : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo voluptates optio, dolor delectus, ad earum molestias, officiis repellendus quae saepe fugiat. Possimus debitis quidem ullam eos quo excepturi eveniet adipisci.0"
    },
    apps : {
      h6 : "kindness towards humanity",
      h2 : "explore our apps" ,
      p : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries," ,
      btn : "contacts"
    },
    our_customers :{
      h2 : "our cutomers" ,
      rights : "All rights reserved Riwag  2021"
    }
  },
  ar: {
    nav:{
      home: "الرئيسية",
      about : "عنا",
      whyrawing : "لماذا رواج",
      services : "خدمات",
      coverage : "التغطية",
      our_apps : "تطبيقاتنا",
      contacts : "تواصل معنا",
      business : "تسجيل الدخول التجاري"
    },
    header:{
      h1 : "شركة رواج",
      h5 : "شركة رواج هي مزود خادم الرفوف الذكية",
      contact : "تواصل معنا"
    },
    about : 
    {
      h : "عنا",
      content :"نص باللغة العربية نص باللغة العربية نص باللغة العربية نص باللغة العربية نص باللغة العربية ",
      contact : "تواصل معنا"
    },
    why:{
      header : "لماذا رواج",
      h : "التعليم",
      content :"نص باللغة العربية نص باللغة العربية نص باللغة العربية نص باللغة العربية نص باللغة العربية نص باللغة العربية نص باللغة العربية "
    },
    our_group : {
      header : "مجموعتنا"
    },
    services : {
      header :  "خدمات رواج",
      h : "العطف",
      content : "نص باللغة العربية نص باللغة العربية نص باللغة العربية نص باللغة العربية نص باللغة العربية نص باللغة العربية "
    },
    couverage : {
      h6 : "اللطف تجاه الانسانية",
      h2 : "تغطيتنا",
      p : "نص باللغة العربية نص باللغة العربية نص باللغة العربية نص باللغة العربية نص باللغة العربية ",
      btn : "تواصل معنا"
    },
    technology :{
      h2 : "تكنولوجيا رواج" ,
      h5 : "اللطف",
      p : "نص باللغة العربية نص باللغة العربية نص باللغة العربية نص باللغة العربية نص باللغة العربية ",
    },
    apps : {
      h6 : "العطف تجاه البشرية",
      h2 : "اكتشف تطبيقاتنا" ,
      p : "نص باللغة العربية نص باللغة العربية نص باللغة العربية نص باللغة العربية نص باللغة العربية ",
      btn : "تواصل معنا"
    },
    our_customers :{
      h2 : "عملائنا" ,
      rights : " جميع الحقوق محفوظة لشركة رواج"
    }
  }
};

const i18n = createI18n({
  locale: "en", 
  messages 
});
export default i18n;