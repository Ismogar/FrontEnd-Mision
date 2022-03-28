<template>
  <div class="title">Stock de Adornos</div>
  <div class="options">
    <CakeOptionAmount
      v-for="adorno in $store.state.adornos"
      :key="adorno.nombre"
      :image=adorno.img
      :flavor=adorno.nombre
      :amount=adorno.stock
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