import { createStore } from 'vuex'

export default createStore({
  state: {
    pedidos: [
      {
        nombre: "Prueba Prueba Prueba",
        telefono: "998 123 4512",
        correo: "correo@prueba.com",
        descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        sabores: [true, true, false],
        adornos: [false, true, false],
      },
      {
        nombre: "Prueba Prueba Prueba2",
        telefono: "998 123 4512",
        correo: "correo@prueba.com",
        descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        sabores: [false, false, true],
        adornos: [true, false, true],
      },
    ],
    sabores: [
      {
        nombre: "Chocolate",
        precio: "600",
        stock: "400",
        img: "https://thestayathomechef.com/wp-content/uploads/2016/06/The-Most-Amazing-Chocolate-Cake-Square-1.jpg",
      },
      {
        nombre: "Vainilla",
        precio: "400",
        stock: "500",
        img: "https://sugargeekshow.com/wp-content/uploads/2020/06/moist_vanilla_cake_recipe_featured2.jpg",
      },
      {
        nombre: "Fresa",
        precio: "800",
        stock: "700",
        img: "https://sugargeekshow.com/wp-content/uploads/2019/07/fresh-strawberry-cake-5.jpg",
      },
    ],
    adornos: [
      {
        nombre: "Flor",
        precio: "300",
        stock: "400",
        img: "https://www.maxpixel.net/static/photo/1x/Cake-Decorated-Icing-White-Decoration-Party-Pink-1950952.jpg",
      },
      {
        nombre: "Capa de Coco",
        precio: "450",
        stock: "550",
        img: "https://bakesbybrownsugar.com/wp-content/uploads/2021/04/Coconut-Cake-Ingredients-1-6-1-500x375.jpg",
      },
      {
        nombre: "Merengue",
        precio: "400",
        stock: "800",
        img: "https://www.maxpixel.net/static/photo/1x/Icing-Frosting-Dessert-Cake-Decoration-Cake-6292573.jpg",
      },
    ],
  },
  getters: {
  },
  mutations: {
    addPedido(state, payload) {
      console.log("mutation: " +
        payload.nombre,
        payload.telefono,
        payload.correo,
        payload.descripcion,
        payload.sabor1,
        payload.sabor2,
        payload.sabor3,
        payload.adorno1,
        payload.adorno2,
        payload.adorno3
      );
      console.log("payload: " + JSON.stringify(payload));
      state.pedidos.push({
        nombre: payload.nombre,
        telefono: payload.telefono,
        correo: payload.correo,
        descripcion: payload.descripcion,
        sabores: [payload.sabor1, payload.sabor2, payload.sabor3],
        adornos: [payload.adorno1, payload.adorno2, payload.adorno3],
      })
      console.log({
        nombre: payload.nombre,
        telefono: payload.telefono,
        correo: payload.correo,
        descripcion: payload.descripcion,
        sabores: [payload.sabor1, payload.sabor2, payload.sabor3],
        adornos: [payload.adorno1, payload.adorno2, payload.adorno3],
      })
    }
  },
  actions: {
  },
  modules: {
  }
})
