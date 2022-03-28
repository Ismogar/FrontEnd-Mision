<template>
  <div class="title">Elija sus adornos</div>
  <div class="options">
    <CakeOption
      v-for="(adorno, index) in $store.state.adornos"
      :key="adorno.nombre"
      :image="adorno.img"
      :flavor="adorno.nombre"
      :price="adorno.precio"
      :inputID="'adorno' + (index + 1)"
    />
  </div>
</template>
<script>
import CakeOption from "../components/cakeOption.vue";
export default {
  name: "Adornos",
  components: {
    CakeOption,
  },
};
</script>