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

export const useLibroStore = defineStore('libro', {
    state: () => ({
        libros: [] as Libro[]
    }),
    getters: {
        getLibroById: (state) => (libroid: string) => state.libros.find(libro => libro.id === libroid)
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
            }
            this.libros.push(libroNuevo);
        },
        deleteLibro(this:{libros: Libro[]}, libroid:string){
        this.libros = this.libros.filter(libro => libro.id !== libroid);
        },
        updateLibro( this:{libros: Libro[]},libroActualizado:Libro){
           const index = this.libros.findIndex(libro => libro.id === libroActualizado.id);
           if(index !== -1){
            this.libros[index] = libroActualizado
           }
        }
    }
});
