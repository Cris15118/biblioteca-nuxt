

<template>
  <client-only>
  <el-menu
    
    class="el-menu-demo"
    mode="horizontal"
    background-color="#C218BD"
    text-color="#fff"
  >
   <nuxt-Link to="/" class="links" active-class="active"><el-menu-item index="0">Home</el-menu-item></nuxt-Link> 
   <nuxt-Link to="/form-libro-nuevo" class="links" active-class="active"><el-menu-item index="1" >Libro Nuevo</el-menu-item></nuxt-Link> 
   <nuxt-Link to="/libros" class="links" active-class="active"><el-menu-item index="2">Listado Libros</el-menu-item></nuxt-Link>
   <nuxt-Link to="/estadistica" class="links" active-class="active"><el-menu-item index="3">Estadistica</el-menu-item></nuxt-Link>
  </el-menu>
  </client-only>
</template>


  
  <style scoped>
  .links{
    text-decoration: none;
  }
 
  .active{
    border-bottom: 2px solid rgb(123, 14, 14);
    margin-bottom: 10px;
  }
  </style>