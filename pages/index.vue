<script setup lang="ts">
import { ref } from "vue";
interface Articulo {
  id: number;
  titulo: string;
  imagen: string;
}

const articulos = ref<Articulo[]>([
  {
    id: 1,
    titulo: "libros volando",
    imagen:
      "https://librosviajeroshome.files.wordpress.com/2019/05/slider1.jpg?w=900&h=300&crop=1",
  },
  {
    id: 2,
    titulo: "estateria con libros",
    imagen: "https://okdiario.com/img/2022/11/22/libros-4.jpg",
  },
  {
    id: 3,
    titulo: "libros varios",
    imagen:
      "https://e00-elmundo.uecdn.es/assets/multimedia/imagenes/2023/12/28/17037831165043.jpg",
  },
]);
</script>
<template>
  <div class="titulo-index">
    <h2>GESTIÓN DE BIBLIOTECA</h2>
  </div>

  <div class="card-content">
    <el-carousel :interval="6000" arrow="always">
      <el-carousel-item v-for="articulo in articulos" :key="articulo.id">
        <img :src="articulo.imagen" :alt="articulo.titulo" />
      </el-carousel-item>
    </el-carousel>
  </div>

  <div class="card">
    <div class="card-1">
      <div class="imagen-card">
        <img
        class="solo-imagen"
          src="public/img/imagenform.webp"
          alt="foto formulario"
          height="100px"
        />
      </div>
      <div>
        <NuxtLink to="/form-libro-nuevo" class="links"
          >Crea nuevas entradas de libros</NuxtLink
        >
      </div>
    </div>
    <div class="card-1">
      <div class="imagen-card">
        <img
        class="solo-imagen"
          src="public/img/listado.jpg"
          alt="foto formulario"
          height="100px"
        />
      </div>
      <div>
        <NuxtLink to="/libros" class="links">Mira nuestro listado de libros</NuxtLink>
      </div>
    </div>
  </div>
</template>

<style scoped>
.titulo-index {
  text-align: center;
  background-color: #efb0ed;
  padding: 3px;
  margin: 18px;
  border-radius: 4px;
  color: rgb(119, 106, 106);
}
.card-content {
  padding: 20px;
}

.card {
  
  padding: 20px;
  display: flex;
  justify-content: space-around;
  
}
.card-1 {
  background-color: #eac5e9;
  height: 200px;
  width: 250px;
  border-radius: 8px;
}
.links {
  text-decoration: none;
  text-align: center;
  display: flex;
  justify-content: center;
  margin-top: 20px;
  padding: 8px;
  color: rgb(123, 14, 14);
  font-size: 18px;
  font-weight: bold;
}
.imagen-card {
  margin-top: 10px;
  display: flex;
  justify-content: center;
  
}
.solo-imagen{
  border-radius: 20px;
}

</style>
