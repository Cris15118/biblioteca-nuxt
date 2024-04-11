import type { NuxtConfig } from "@nuxt/types";
const config: NuxtConfig = {
  buildModules: [
    "@nuxt/typescript-build",
    '@nuxtjs/style-resources',
    '@pinia/nuxt',
    
    
  ],
  plugins: [{ 
    src: "~/plugins/element-plus.js",
    ssr: false 
  }],
  css: [
    "element-plus/dist/index.css"
  ],
  modules: [
    "@element-plus/nuxt",
    
    
  ],
  styleResources: {
    scss: [
    '~/assets/styles/variables.scss',
    
    ]
    },
   
};
export default config;
