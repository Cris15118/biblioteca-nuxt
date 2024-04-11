<script setup lang="ts">
import { useLibroStore } from "~/store/LibroStore";
import { ref, onMounted } from "vue";
import { uid } from "uid";
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
const libroId = router.currentRoute.value.params.id;

const libro: Ref<Libro> = ref({
  id: uid(),
  titulo: "",
  autor: "",
  genero: "",
  sinopsis: "",
  estado: "",
});

onMounted(() => {
  const id: string = Array.isArray(libroId) ? libroId[0] : libroId;
  const libroSeleccionado = libroStore.getLibroById(id);
  if (libroSeleccionado) {
    Object.assign(libro.value, libroSeleccionado);
  } else {
    alert(`No se encontró ningún libro con es Id: ${libroId}`);
  }
});

const actualizarLibro = () => {
  libroStore.updateLibro(libro.value);
  router.push("/libros");
};
</script>

<template>
  <div class="heading">
    <h1>DETALLES LIBRO</h1>
  </div>
  <div class="super-card">
    <div class="card">
      <h3><strong>Título: </strong>{{ libro.titulo }}</h3>

      <div>
        <p><strong>Autor: </strong>{{ libro.autor }}</p>
        <p><strong>Género: </strong>{{ libro.genero }}</p>
        <p><strong>Sinopsis: </strong>{{ libro.sinopsis }}</p>
      </div>

      <router-link to="/libros">
        <el-button type="info">Volver Listado</el-button></router-link
      >
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "../../assets/styles/encabezado.scss";
.super-card {
  display: flex;
  justify-content: center;
}
.card {
  border: solid 1px gray;
  width: 500px;
  height: 380px;
  border-radius: 5px;
  padding: 20px;
  text-align: center;
}
</style>
