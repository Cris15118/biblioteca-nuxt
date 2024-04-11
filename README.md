# Control de Biblioteca
## Descripcion

Aplicación creada para para control de bibliotecas, donde se puede crear libros en la DB, editarlos y borrarlos, también podrás visualizar los detalles de cada libro.

Además en la vista de Estadísticas puedes ver la cantidad de libros por genero y la cantidad de libros que hay prestados y no prestados.

## Setup

Instala las dependencias:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

# Flujo de Navegación
* Home: Pagina de inicio donde se ve la portada de la App, un carrusel de imagenes y dos enlaces en los que acceder al formulario de creación o al listado de libros.
* Formulario: Desde esta vista se agregan libros nuevos al listado de libros por titulo, autor, género, sinopsis y estado.
* Listado Libros: En esta vista se ven todos los libros del listado de libros, desde esta vista puedes acceder a los detalles del libro, a editar el libro o puedes borrar un libro.
* Detalles: En esta vista se accede a cada libro, visualizando los detalles al completo.
* Editar: Esta vista te lleva la edición desde un formulario para actualizar los datos necesarios. en caso de no querer actualizar el libro puedes volver al listado de libros.

# Recursos Utilizados
* Nuxt 3
* Pinia
* Element Plus
* Sass
