<script setup lang="ts">
import { useLibroStore } from "~/store/LibroStore";
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import { uid } from "uid";

const router = useRouter();
const libroStore = useLibroStore();

const librosByGenero = libroStore.getLibrosByGenero;

const { prestado, "no prestado": noPrestado } = libroStore.getLibrosEstado;
const countPrestado = prestado;
const countNoPrestados = noPrestado;
</script>
<template>
  <div class="heading">
    <h1>LIBROS POR GENERO Y ESTADO</h1>
  </div>
  <div class="contenedor">
    <div>
      <h2>Cantidad de libros por genero</h2>
      <table>
        <thead>
          <tr>
            <th>Género</th>
            <th>Cantidad</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(count, genero) in librosByGenero" :key="genero">
            <td>{{ genero }}</td>
            <td>{{ count }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div>
      <h2>Estado de los libros</h2>
      <p class="estado">
        Libros Prestados: <strong>{{ countPrestado }}</strong>
      </p>
      <p class="estado">
        Libros No Prestados: <strong>{{ countNoPrestados }}</strong>
      </p>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "../assets/styles/encabezado.scss";
.contenedor {
  display: flex;
  justify-content: space-evenly;
}
table {
  width: 50%;
  border-collapse: collapse;
}
th,
td {
  border: 1px solid gray;
  padding: 5px;
  text-align: left;
}
th {
  background-color: #ef5ed0;
}
td {
  background-color: #e7d9e4;
}
.estado {
  background-color: #ef5ed0;
}
</style>
