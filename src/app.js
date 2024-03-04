console.log("Examen Node.js")

import express from 'express';
import ejs from 'ejs';
import {dirname, join} from 'path';
import {fileURLToPath} from 'url';
import indexRouter from './routes/index.js' 

const app = express();
app.use(express.json());

const __dirname = dirname(fileURLToPath(import.meta.url));
console.log(join(__dirname, 'views'));

app.set('view engine', 'ejs');
app.set('views', join(__dirname,'views'));

app.use(indexRouter);

app.use(express.static(join(__dirname, 'public')));

app.listen(3333);
console.log('Para este examen se está escuchando en el puerto 3333...');






