// node abridor.js 

const { exec } = require('child_process');

// Rutas completas de los programas que quieres abrir
// vivaldi default

const vivaldi_aux = '"D:/! Accesos/0- Navs/_Investigación/v2 Aux1 - Vivaldi/0 v2 Aux1 - Vivaldi.lnk"';
// notion
const notion = '"C:/Users/USER/AppData/Local/Programs/Notion/Notion.exe"';
// vivaldi inglés
const vivaldi_ingles = '"D:/! Accesos/0- Navs/_Investigación/v2 Inglés1 - Vivaldi/v2 Inglés1.lnk"';
// vivaldi AI
const vivaldi_ai = '"D:/! Accesos/0- Navs/1 Desarrollo/v2 AI - Vivaldi/v2 AI - Vivaldi.lnk"';

const navs_folder = 'D:\\! Accesos\\0- Navs';

const folder2 = 'D:\\Proyectos\\Desarrollo';


// Crea una promesa para cada ejecución
// const promesa1 = exec(rutaAlPrograma1);
// const promesa2 = exec(rutaAlPrograma2);
// const promesa3 = exec(vivaldi_aux);
// const promesa4 = exec(notion);
// const promesa6 = exec(notion);
// const promesa7 = exec(`explorer "${navs_folder}"`);
const promesa7 = exec(`explorer "${codigo_folder}"`);


// exec(`explorer "${carpeta}"`, (error, stdout, stderr) => {
//   if (error) {
//     console.error(`Error al abrir la carpeta: ${error.message}`);
//     return;
//   }
//   if (stderr) {
//     console.error(`Error en la ejecución del comando: ${stderr}`);
//     return;
//   }
//   console.log('Carpeta abierta exitosamente');
// });

// Ejecuta todas las promesas al mismo tiempo
// Promise.all([promesa1, promesa2])
//  .then(() => console.log('Se abrieron los programas con éxito'))
//  .catch(error => console.error(`Error al intentar abrir los programas: ${error}`));