<template>
  <div class="home">
    <div class="formEntry">
      <Formulario />
    </div>
    <aboutInfo />
  </div>
</template>

<script>
// @ is an alias to /src
import aboutInfo from "@/components/aboutInfo.vue";
import Formulario from "../components/Formulario.vue"

export default {
  name: "HomeView",
  components: {
    aboutInfo,
    Formulario,
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