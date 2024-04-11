import { defineStore } from "pinia";
import { uid } from "uid";

interface Libro {
  id: string;
  titulo: string;
  autor: string;
  genero: string;
  sinopsis: string;
  estado: string;
}

export const useLibroStore = defineStore("libro", {
  state: () => ({
    libros: [] as Libro[],
  }),
  getters: {
    getLibroById: (state) => (libroid: string) =>
      state.libros.find((libro) => libro.id === libroid),
    getLibrosByGenero(state): Record<string, number> {
      const countByGenero: Record<string, number> = {};
      state.libros.forEach((libro) => {
        if (libro.genero in countByGenero) {
          countByGenero[libro.genero]++;
        } else {
          countByGenero[libro.genero] = 1;
        }
      });
      return countByGenero;
    },
    getLibrosEstado(state): Record<"prestado" | "no prestado", number> {
      const countByEstado: Record<"prestado" | "no prestado", number> = {
        "prestado": 0,
        "no prestado": 0,
      };
      state.libros.forEach((libro) => {
        if (libro.estado === "prestado") {
          countByEstado.prestado++;
        } else {
          countByEstado["no prestado"]++;
        }
      });
      return countByEstado;
    },
  },
  actions: {
    addLibro(
      this: { libros: Libro[] },
      titulo: string,
      autor: string,
      genero: string,
      sinopsis: string,
      estado: string
    ) {
      const libroNuevo: Libro = {
        id: uid(),
        titulo,
        autor,
        genero,
        sinopsis,
        estado,
      };

      this.libros.push(libroNuevo);
    },
    deleteLibro(this: { libros: Libro[] }, libroid: string) {
      this.libros = this.libros.filter((libro) => libro.id !== libroid);
    },
    updateLibro(this: { libros: Libro[] }, libroActualizado: Libro) {
      const index = this.libros.findIndex(
        (libro) => libro.id === libroActualizado.id
      );
      if (index !== -1) {
        this.libros[index] = libroActualizado;
      }
    },
  },
});
