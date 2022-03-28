<template>
  <div class="title">Stock de Adornos</div>
  <div class="options">
    <CakeOptionAmount
      image="https://www.maxpixel.net/static/photo/1x/Cake-Decorated-Icing-White-Decoration-Party-Pink-1950952.jpg"
      flavor="Flor"
      amount=500
    />
    <CakeOptionAmount
      image="https://bakesbybrownsugar.com/wp-content/uploads/2021/04/Coconut-Cake-Ingredients-1-6-1-500x375.jpg"
      flavor="Capa de Coco"
      amount=450
    />
    <CakeOptionAmount
      image="https://www.maxpixel.net/static/photo/1x/Icing-Frosting-Dessert-Cake-Decoration-Cake-6292573.jpg"
      flavor="Merengue"
      amount=300
    />
  </div>
</template>
<script>
import CakeOptionAmount from "../components/cakeOptionAmount.vue";
export default {
    name: "Adornos",
    components: {
        CakeOptionAmount,
    }
}
</script>