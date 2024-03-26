<script setup lang="ts">
import { useLibroStore } from '~/store/LibroStore';
import { ref, onMounted } from 'vue';
import { uid } from 'uid';
import { useRouter } from 'vue-router';

interface Libro {
  id: string;
  titulo: string;
  autor: string;
  genero: string;
  sinopsis: string;
  estado: string;
}

const router = useRouter()
const libroStore = useLibroStore()
const libroId = router.currentRoute.value.params.id;

const libro: Ref<Libro> = ref({
   id: uid(),
   titulo:"",
   autor: "",
   genero: "",
   sinopsis: "",
   estado: "",
 });

 onMounted(()=>{
  const id: string = Array.isArray(libroId)? libroId[0] : libroId
  const libroSeleccionado = libroStore.getLibroById(id)
  if(libroSeleccionado){
    Object.assign(libro.value, libroSeleccionado)
  }else{
    alert(`No se encontró ningún libro con es Id: ${libroId}`)
  }
 })

 const actualizarLibro = () =>{
    libroStore.updateLibro(libro.value)
    router.push('/libros')
  
 }
</script>

<template>
 <div class="titulo-index">
    <h1>EDITAR LIBROS</h1>
  </div>
    <div class="container-form">
    <el-form
      @submit.prevent="actualizarLibro"
      label-width="auto"
      style="max-width: 600px"
    >
      <el-form-item label="Título" >
        <el-input
          v-model="libro.titulo"
          placeholder="Introduce el título del libro"
        />
      </el-form-item>
      <el-form-item label="Autor" >
        <el-input v-model="libro.autor"
          placeholder="Introduce el nombre del Autor"
        />
      </el-form-item>
      <el-form-item label="Género" >
        <el-select v-model="libro.genero" placeholder="Elige el genero">
          <el-option label="Ciencia Ficcion" value="Ciencia Ficcion"/>
          <el-option label="Romántica" value="Romantica" />
          <el-option label="Novela Negra" value="Novela Negra" />
          <el-option label="Terror" value="Terror" />
          <el-option label="Narrativa" value="Narrativa" />
        </el-select>
      </el-form-item>
      <el-form-item label="Sinopsis" >
        <el-input
        v-model="libro.sinopsis"
          type="textarea"
          placeholder="Describe el Libro"
        />
      </el-form-item>
      <el-form-item label="Estado">
        <el-radio-group v-model="libro.estado">
          <el-radio value="Prestado">Prestado</el-radio>
          <el-radio value="No Prestado">No Prestado</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item>
        <el-button type="success" @click="actualizarLibro" style="margin-right: 10px;"
          >Aceptar</el-button
        >
        <router-link to="/libros">
       <el-button type="info" >Volver Listado</el-button></router-link>
      </el-form-item>
    </el-form>
  </div>
    
  </template>

<style scoped>
.container-form {
  display: flex;
  justify-content: center;
  margin-top: 40px;
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
