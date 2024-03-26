<script setup lang="ts">
import { useLibroStore } from "../store/LibroStore";
import { reactive } from "vue";
import { uid } from "uid";
import type { id } from "element-plus/es/locale/index.mjs";
import { useRouter } from "vue-router";

interface Libro {
  id: string;
  titulo: string;
  autor: string;
  genero: string;
  sinopsis: string;
  estado: string;
}

const router = useRouter();
const libroStore = useLibroStore();
const libro = reactive<Libro[]>({
  id: null,
  titulo: "",
  autor: "",
  genero: "",
  sinopsis: "",
  estado: "",
});
const editarLibro = (id)=>{
  libroStore.updateLibro(id)
}

const borrarLibro = (libroId:string)=>{
  libroStore.deleteLibro(libroId)
  console.log(libroId)
}
const libros = libroStore.libros;
</script>

<template>
  <div class="titulo-index">
    <h1>LISTADO LIBROS</h1>
  </div>
  <div >
    <div v-if="libros.length > 0" class="display">
      <el-card
      
        v-for="libro in libros"
        :key="libro.id"
        class="tarjetas"
        style="max-width: 300px"
      >
        <template #header class="card-header">
          <h3><strong>Título: </strong>{{ libro.titulo }}</h3>
        </template>
        <div style="margin-top: 5px">
          <p><strong>ID: </strong>{{ libro.id }}</p>
          <p><strong>Autor: </strong>{{ libro.autor }}</p>
          <p><strong>Género: </strong>{{ libro.genero }}</p>
          <p><strong>Sinopsis: </strong>{{ libro.sinopsis }}</p>
          <p><strong>Estado: </strong>{{ libro.estado }}</p>
        </div>
        <NuxtLink :to="{ name: 'detalles-id', params: { id: libro.id } }"
          ><el-button type="success" @click="editarLibro" style="margin-right: 5px;"
            >Editar</el-button
          ></NuxtLink
        >
        <el-button type="danger" @click="borrarLibro"
          >Borrar</el-button
        >
      </el-card>
    </div>
    <div v-else>
      <p>NO HAY LIBROS DISPONIBLES</p>
    </div>
  </div>
</template>

<style scoped>
.tarjetas {
  text-align: justify;
  background-color: #ebdeeb;
}
.display {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  margin-top: 15px;
}
.titulo-index {
  text-align: center;
  background-color: #efb0ed;
  padding: 3px;
  margin: 18px;
  border-radius: 4px;
  color: rgb(119, 106, 106);
}
</style>
