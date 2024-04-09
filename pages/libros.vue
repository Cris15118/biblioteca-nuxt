<script setup lang="ts">
import { useLibroStore } from "../store/LibroStore";
import { useRouter } from "vue-router";

const router = useRouter();
const libroStore = useLibroStore();
const searchLibro = ref<string>('')

const editarLibro = (libro: Libro)=>{
 router.push('/editar/'+ libro.id)
}

const borrarLibro = (libro:string)=>{
  libroStore.deleteLibro(libro.id)
  libros.value = libroStore.libros
};

const detallesLibro =(libro: Libro)=>{
  router.push('/detalles/'+libro.id)
}

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
        
        <p><strong>Autor: </strong>{{ libro.autor }}</p>
        <p><strong>Género: </strong>{{ libro.genero }}</p>
        <p class="sinopsis-corta"><strong>Sinopsis: </strong>{{ libro.sinopsis }}</p>
        <p><strong>Estado: </strong>{{ libro.estado }}</p>
      </div>
      <div class="botones">
        <el-button type="info" @click="detallesLibro(libro)">Ver Detalles</el-button>
        <el-button type="success" @click="editarLibro(libro)">Editar</el-button>
        <el-button type="danger" @click="borrarLibro(libro)">Borrar</el-button>
      </div>
      
      
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
.sinopsis-corta{
  height: 60px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
.botones{
  display: flex;
  justify-content: space-between;
}
</style>