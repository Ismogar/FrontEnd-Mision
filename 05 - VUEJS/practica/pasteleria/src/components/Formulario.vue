<template>
  <div class="formEntry">
    <Cakes />
  </div>
  <div class="formEntry">
    <Adornos />
  </div>
  <div class="title">Datos del Cliente</div>
  <div class="textEntry">
    <label for="Nombre"> Nombre </label>
    <input id="Nombre" type="text" v-model="nombre" />
  </div>
  <div class="textEntry">
    <label for="Telefono"> Teléfono </label>
    <input id="Telefono" type="text" v-model="telefono" />
  </div>
  <div class="textEntry">
    <label for="Correo"> Correo Electrónico</label>
    <input id="Correo" type="text" v-model="correo" />
  </div>
  <div class="textEntry area">
    <label for="Descripcion"> Descripción del Pastel </label>
    <textarea id="Descripcion" v-model="descripcion" />
  </div>
  <input type="button" value="Enviar Pedido" @click="pedido" />
</template>

<script>
import Cakes from "@/components/Cakes.vue";
import Adornos from "../components/Adornos.vue";

export default {
  name: "Formulario",
  components: {
    Cakes,
    Adornos,
  },
  data: function () {
    return {
      nombre: "",
      telefono: "",
      correo: "",
      descripcion: "",
    };
  },
  methods: {
    pedido() {
      var sabor1 = document.getElementById("sabor1").checked;
      var sabor2 = document.getElementById("sabor2").checked;
      var sabor3 = document.getElementById("sabor3").checked;
      var adorno1 = document.getElementById("adorno1").checked;
      var adorno2 = document.getElementById("adorno2").checked;
      var adorno3 = document.getElementById("adorno3").checked;
      console.log(
        this.nombre,
        this.telefono,
        this.correo,
        this.descripcion,
        sabor1,
        sabor2,
        sabor3,
        adorno1,
        adorno2,
        adorno3
      );
      if (this.nombre && this.telefono && this.correo && this.descripcion) {
        this.$store.commit("addPedido", {
          nombre: this.nombre,
          telefono: this.telefono,
          correo: this.correo,
          descripcion: this.descripcion,
          sabor1: sabor1,
          sabor2: sabor2,
          sabor3: sabor3,
          adorno1: adorno1,
          adorno2: adorno2,
          adorno3: adorno3,
        });
      }
    },
  },
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
  word-break: break-word;
}

.formEntry input[type="button"] {
  width: 35%;
  height: 30px;

  margin: 15px;
  padding: 3px 0px;

  font-size: 14px;
}
</style>