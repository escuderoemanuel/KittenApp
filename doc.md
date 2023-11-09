# Prueba Técnica Jr-Trainee Fetch

1. En consola 'npm create vite@latest'
2. Nombre del Proyecto 'KittenApp'
3. Nombre del package 'kittenapp'
4. Si nos dejan, elegir 'React', sino 'Vanilla' y luego 'JavaScript'
5. cd 'KittenApp'
6. npm install @vitejs/plugin-react -E => Instala el plugin con la versión exacta y crear el entorno de desarrollo
7. Instalar 'npm install react react-dom -E' => dependencias que no se han instalado y no están en el package.json
8. Dejar la consola minimizada
9. Abrir carpeta con VSCode
10. Crear la configuración de Vite, nuevo archivo 'vite.config.js'
11. En el archivo vite.config.js:

    - import { defineConfig } from 'vite';
    - import react from '@vitejs/plugin-react';

    - export default defineConfig({
      plugins: [react()],
      });

12. En el archivo main.js:

    - import { createRoot } from 'react-dom/ client';

    - const root = createRoot(document.getElementById('app'));
      root.render(<h1>Hello World!</h1>);

13. Antes del 'npm run dev' hay que convertir el archivo main.js en main.jsx y también cambiar el nombre a main.jsx en el archivo index.html, porque el plugin de vite no está preparado para transpilar js

14. Correr aplicación 'npm run dev'

15. npm install standard \_d => Para instalar eslintConfig

16. en el package.json, agregar
    "eslintConfig": {
    "extends": "./node_modules/standard/eslintrc.json"
    }

17. Create folder 'src'
18. Create file 'App.jsx' and export it
19. In the file main.jsx import file 'App.jsx' and render it
20. Separate the test into items/steps
21. Show progrees on the screen, incrementally
22. Review the API's and understand them!
23. Create the const with the necessary endpoints
24. Create an 'useState' for the the first step fact
25. Render the fact inside the main using conditional render
26. Create an 'useEffect' for the fetch
27. In the same 'useEffect' catch the first word with 'split', 'slice', 'join'
28. If necessary, search within the MDN website
29. Create new 'useState' for the 'image'
30. Render the image
