<template>
  <div class="title">Stock de Sabores</div>
  <div class="options">
    <CakeOptionAmount
      v-for="sabor in $store.state.sabores"
      :key="sabor.nombre"
      :image=sabor.img
      :flavor=sabor.nombre
      :amount=sabor.stock
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