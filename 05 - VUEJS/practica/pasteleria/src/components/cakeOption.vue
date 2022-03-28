<template>
  <label class="option">
    <input type="checkbox" />
    <img :src="image" />
    <div class="details">
      {{ flavor }}
      <div class="priceTag">(${{ price }})</div>
    </div>
  </label>
</template>

<script>
export default {
  name: "CakeOption",
  props: {
    image: String,
    flavor: String,
    price: String,
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

.option:hover .details,
.option:hover .priceTag,
.option:hover img {
  cursor: pointer;
}

.option:hover img {
  border-width: 8px;
}

.option input[type="checkbox"] {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

.option input[type="checkbox"]:checked ~ img {
  border-color: #c4c5ff;
  border-width: 9px;
}

.option input[type="checkbox"]:checked ~ img:hover {
  border-width: 8px;
}

.option input[type="checkbox"]:checked ~ .details {
  color: #384cc0;
  font-weight: 700;
}

.details {
  margin: 10px 0px;
}

.priceTag {
  font-size: 14px;
}
</style>