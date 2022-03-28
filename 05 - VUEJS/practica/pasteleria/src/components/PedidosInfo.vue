<template>
  <table class="tablaPedidos">
    <thead>
      <tr>
        <th>Nombre</th>
        <th>Teléfono</th>
        <th>Correo Electrónico</th>
        <th>Descripción del Pastel</th>
        <th colspan="3">Sabores</th>
        <th colspan="3">Adornos</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="pedido in $store.state.pedidos" :key="pedido.nombre">
        <td>{{ pedido.nombre }}</td>
        <td>{{ pedido.telefono }}</td>
        <td>{{ pedido.correo }}</td>
        <td>{{ pedido.descripcion }}</td>
        <td><div :class="{ active: pedido.sabores[0] }"></div></td>
        <td><div :class="{ active: pedido.sabores[1] }"></div></td>
        <td><div :class="{ active: pedido.sabores[2] }"></div></td>
        <td><div :class="{ active: pedido.adornos[0] }"></div></td>
        <td><div :class="{ active: pedido.adornos[1] }"></div></td>
        <td><div :class="{ active: pedido.adornos[2] }"></div></td>
      </tr>
    </tbody>
  </table>
</template>
<script>
export default {
  name: "PedidosInfo",
};
</script>
<style>
.tablaPedidos {
    width: 65%;
    margin-top: 25px;
}

.tablaPedidos th {
    border-radius: 5px;

    background-color: #cae6ff;

    height: 30px;
}

.tablaPedidos td {
    border-style: solid;
    border-color: #e7f3ff;
    border-width: 1px;
    border-radius: 15px;

    background-color: #d5ebff;

    word-wrap: break-word;
}

.tablaPedidos tbody tr td div {
    background-color: #d84040;
  border-radius: 50%;
  width: 20px;
  height: 20px;
}

.tablaPedidos .active {
  background-color: #70f070;
}
</style>