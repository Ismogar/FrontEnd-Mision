<template>
  <div class="title">¿De que Sabor Quiere el Pastel?</div>
  <div class="options">
    <CakeOption
      image="https://thestayathomechef.com/wp-content/uploads/2016/06/The-Most-Amazing-Chocolate-Cake-Square-1.jpg"
      flavor="Chocolate"
      price="700"
    />
    <CakeOption
      image="https://sugargeekshow.com/wp-content/uploads/2020/06/moist_vanilla_cake_recipe_featured2.jpg"
      flavor="Vainilla"
      price="400"
    />
    <CakeOption
      image="https://sugargeekshow.com/wp-content/uploads/2019/07/fresh-strawberry-cake-5.jpg"
      flavor="Fresa"
      price="600"
    />
  </div>
</template>

<script>
import CakeOption from "@/components/cakeOption.vue";

export default {
  name: "Cakes",
  components: {
    CakeOption,
  },
};
</script>