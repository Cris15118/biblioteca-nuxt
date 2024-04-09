<script setup lang="ts">
import { reactive, ref } from "vue";
import { useRouter } from "vue-router";
import type { FormInstance, FormRules } from "element-plus";
import { uid } from "uid";
import { useLibroStore } from "../store/LibroStore";

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
const formSize = ref("default");
const ruleFormRef = ref<FormInstance>();
const libro = reactive<Libro>({
  id: null,
  titulo: "",
  autor: "",
  genero: "",
  sinopsis: "",
  estado: "",
});

const rules = reactive<FormRules<Libro>>({
  titulo: [
    { required: true, message: "Campo Titulo Obligatorio", trigger: "blur" },
  ],
  autor: [
    {
      required: true,
      message: "Campo Autor Obligatorio",
      trigger: "blur",
    },
  ],
  genero: [
    {
      required: true,
      message: "Campo Genero Obligatorio",
      trigger: "change",
    },
  ],
  sinopsis: [
    { required: true, message: "Campo Sinopsis Obligatorio", trigger: "blur" },
  ],
  estado: [
    {
      required: true,
      message: "Campo Estado Obligatorio",
      trigger: "change",
    },
  ],
});

const añadirLibro = () => {
 
    libroStore.addLibro(
      libro.titulo,
      libro.autor,
      libro.genero,
      libro.sinopsis,
      libro.estado
    );
  
  router.push({ name: "libros" });
  //Limpiar el formulario despues de añadir el libro
  libro.titulo = "";
  libro.autor = "";
  libro.genero = "";
  libro.sinopsis = "";
  libro.estado = "";
};

const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  await formEl.validate((valid, fields) => {
    if (valid) {
      añadirLibro();
    }
  });
};


const libros = libroStore.libros;
</script>

<template>
  <div class="titulo-index">
    <h1>AÑADE UN LIBRO NUEVO</h1>
  </div>
  <div class="container-form">
    <el-form
      ref="ruleFormRef"
      :rules="rules"
      class="demo-ruleForm"
      :size="formSize"
      @submit.prevent="añadirLibro"
      :model="libro"
      label-width="auto"
      style="max-width: 600px"
    >
      <el-form-item label="Título" prop="titulo">
        <el-input
          v-model="libro.titulo"
          placeholder="Título del libro"
        />
      </el-form-item>
      <el-form-item label="Autor" prop="autor">
        <el-input
          v-model="libro.autor"
          placeholder="Nombre del Autor"
        />
      </el-form-item>
      <el-form-item label="Género" prop="genero">
        <el-select v-model="libro.genero" placeholder="Elige el genero">
          <el-option
            label="Ciencia Ficcion"
            value="Ciencia Ficcion"
           
          />
          <el-option label="Romántica" value="Romantica" />
          <el-option label="Novela Negra" value="Novela Negra" />
          <el-option label="Terror" value="Terror" />
          <el-option label="Narrativa" value="Narrativa" />
        </el-select>
      </el-form-item>
      <el-form-item label="Sinopsis" prop="sinopsis">
        <el-input
          v-model="libro.sinopsis"
          type="textarea"
          placeholder="Describe el Libro"
        />
      </el-form-item>
      <el-form-item label="Estado" prop="estado">
        <el-radio-group v-model="libro.estado">
          <el-radio value="Prestado">Prestado</el-radio>
          <el-radio value="No Prestado">No Prestado</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm(ruleFormRef)"
          >Crear</el-button
        >
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
