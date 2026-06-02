import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        sluzby: resolve(__dirname, 'sluzby.html'),
        omne: resolve(__dirname, 'o-mne.html'),
        galerie: resolve(__dirname, 'galerie.html'),
        kontakt: resolve(__dirname, 'kontakt.html')
      }
    }
  }
});
