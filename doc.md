# Fetching Technical Test for Jr and Trainee

1. On the console: 'npm create vite@latest'
2. Project's name:'KittenApp'
3. Package's name: 'kittenapp'
4. If we can, choose 'React', otherwise choose 'Vanilla' and then 'JavaScript'
5. Enter the folder: cd 'KittenApp'
6. Npm install @vitejs/plugin-react -E => Install the plugins with the exact version and create the development environment. 
7. Install 'npm install react react-dom -E' => dependencies that have been not installed and are not in the package.json 
8. Minimize the console
9. Open project folder with VSCode
10. Create the Vite Configuration, in the new file 'vite.config.js'
11. In the file vite.config.js:

    - import { defineConfig } from 'vite';
    - import react from '@vitejs/plugin-react';

    - export default defineConfig({
      plugins: [react()],
      });

12. In the file main.js:

    - import { createRoot a} from 'react-dom/ client';

    - const root = createRoot(document.getElementById('app'));
      root.render(<h1>Hello World!</h1>);

13. Convert the file 'main.js' in 'main.jsx' and change the name in the file 'index.html', because the Vite plugin is not prepared to transpile JS code.

14. Start/run application 'npm run dev'

15. npm install standard \_d => for install eslintConfig

16. In the package.json, add
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
