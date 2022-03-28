<template>
  <div class="title">Stock de Sabores</div>
  <div class="options">
    <CakeOptionAmount
      image="https://thestayathomechef.com/wp-content/uploads/2016/06/The-Most-Amazing-Chocolate-Cake-Square-1.jpg"
      flavor="Chocolate"
      amount="700"
    />
    <CakeOptionAmount
      image="https://sugargeekshow.com/wp-content/uploads/2020/06/moist_vanilla_cake_recipe_featured2.jpg"
      flavor="Vainilla"
      amount="400"
    />
    <CakeOptionAmount
      image="https://sugargeekshow.com/wp-content/uploads/2019/07/fresh-strawberry-cake-5.jpg"
      flavor="Fresa"
      amount="600"
    />
  </div>
</template>

<script>
import CakeOptionAmount from "@/components/cakeOptionAmount.vue";

export default {
  name: "Cakes",
  components: {
    CakeOptionAmount,
  },
};
</script>