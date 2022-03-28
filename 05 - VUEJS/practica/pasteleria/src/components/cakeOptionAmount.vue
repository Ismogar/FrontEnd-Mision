<template>
  <label class="option">
    <img :src="image" />
    <div class="details">
      {{ flavor }}
      <div class="amountTag">({{ amount }} Unidades)</div>
    </div>
  </label>
</template>

<script>
export default {
  name: "CakeOption",
  props: {
    image: String,
    flavor: String,
    amount: String,
  },
};
</script>

<style scoped>
.option {
  display: flex;
  flex-direction: column;

  margin: 25px;
  margin-bottom: 0;
}

.option img {
  width: 150px;
  height: 150px;
  object-fit: cover;

  border-radius: 30px;
  border-style: solid;
  border-color: #c4e2ff;
  border-width: 10px;

  -webkit-user-drag: none;
  box-sizing: border-box;
}

.details {
  margin: 10px 0px;
}

.amountTag {
  font-size: 14px;
}
</style>