<template>
  <div class="title">¿De que Sabor Quiere el Pastel?</div>
  <div class="options">
    <CakeOption
      v-for="(sabor, index) in $store.state.sabores"
      :key="sabor.nombre"
      :image="sabor.img"
      :flavor="sabor.nombre"
      :price="sabor.precio"
      :inputID="'sabor' + (index + 1)"
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