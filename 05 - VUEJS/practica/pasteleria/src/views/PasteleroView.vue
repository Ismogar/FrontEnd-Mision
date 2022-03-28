<template>
  <div class="home">
    <div class="formEntry">
      <cakes-amount />
    </div>
    <div class="formEntry">
      <adornos-amount />
    </div>
    <div class="formEntry">
      <div class="title">Datos de Pedidos</div>
      <PedidosInfo />
    </div>
  </div>
</template>

<script>
import AdornosAmount from "../components/AdornosAmount.vue";
import CakesAmount from "../components/CakesAmount.vue";
import PedidosInfo from "../components/PedidosInfo.vue";

export default {
  name: "PasteleroView",
  components: {
    AdornosAmount,
    CakesAmount,
    PedidosInfo,
  },
};
</script>

<style>
.home {
  display: flex;
  flex-direction: column;
}

.formEntry {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 17px;
  font-weight: 600;
  color: #387cc0;
  text-align: center;
}

.formEntry .title {
  font-size: 25px;
  font-weight: 800;
  color: #433ac2;

  margin-top: 40px;
}

.options {
  display: flex;
  flex-direction: row;
  justify-content: center;
}
</style>