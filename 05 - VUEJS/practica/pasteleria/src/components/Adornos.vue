<template>
  <div class="title">Elija sus adornos</div>
  <div class="options">
    <CakeOption
      image="https://www.maxpixel.net/static/photo/1x/Cake-Decorated-Icing-White-Decoration-Party-Pink-1950952.jpg"
      flavor="Flor"
      price="500"
    />
    <CakeOption
      image="https://bakesbybrownsugar.com/wp-content/uploads/2021/04/Coconut-Cake-Ingredients-1-6-1-500x375.jpg"
      flavor="Capa de Coco"
      price="450"
    />
    <CakeOption
      image="https://www.maxpixel.net/static/photo/1x/Icing-Frosting-Dessert-Cake-Decoration-Cake-6292573.jpg"
      flavor="Merengue"
      price="300"
    />
  </div>
</template>
<script>
import CakeOption from "../components/cakeOption.vue";
export default {
    name: "Adornos",
    components: {
        CakeOption,
    }
}
</script>