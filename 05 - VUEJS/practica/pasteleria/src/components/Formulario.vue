<template>
    <div class="formEntry">
      <Cakes />
    </div>
    <div class="formEntry">
      <Adornos />
    </div>
  <div class="title">
    Datos del Cliente
  </div>
  <div class="textEntry">
    <label for="Nombre"> Nombre </label>
    <input id="Nombre" type="text" />
  </div>
  <div class="textEntry">
    <label for="Teléfono"> Teléfono </label>
    <input id="Teléfono" type="text" />
  </div>
  <div class="textEntry">
    <label for="Correo"> Correo </label>
    <input id="Correo" type="text" />
  </div>
  <div class="textEntry">
    <label for="Electrónico"> Electrónico </label>
    <input id="Electrónico" type="text" />
  </div>
  <div class="textEntry area">
    <label for="Descripcion"> Descripción del Pastel </label>
    <textarea style="word-break: break-word" id="Descripcion" />
  </div>
  <input type="button" value="Enviar Pedido" />
</template>

<script>
import Cakes from "@/components/Cakes.vue";
import Adornos from "../components/Adornos.vue"

export default {
  name: "Formulario",
  components: {
    Cakes,
    Adornos,
  }
};
</script>

<style>
.textEntry {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  width: 75%;
  height: 24px;

  margin: 10px 0px;
}

.title + .textEntry {
  margin-top: 25px;
}

.formEntry .textEntry.area {
  height: 46px;
}

.formEntry input[type="button"] {
  width: 35%;
  height: 30px;

  margin: 15px;
  padding: 3px 0px;

  font-size: 14px;
}
</style>