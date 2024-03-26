<script setup lang="ts">
import { useLibroStore } from "../store/LibroStore";
import { useRouter } from "vue-router";

const router = useRouter();
const libroStore = useLibroStore();

const editarLibro = (libro: Libro)=>{
 router.push('/detalles/'+ libro.id)
}

const borrarLibro = (libro:string)=>{
  libroStore.deleteLibro(libro.id)
  libros.value = libroStore.libros
};

const libros = ref(libroStore.libros);

interface Libro {
  id: string;
  titulo: string;
  autor: string;
  genero: string;
  sinopsis: string;
  estado: string;
}
</script>

<template>
  <div class="titulo-index">
    <h1>LISTADO LIBROS</h1>
  </div>
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
      <el-button type="success" @click="editarLibro(libro)" style="margin-right: 5px;">Editar</el-button>
      <el-button type="danger" @click="borrarLibro(libro)">Borrar</el-button>
    </el-card>
  </div>
  <div v-else>
    <p style="text-align: center;">NO HAY LIBROS DISPONIBLES</p>
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
}
</style>