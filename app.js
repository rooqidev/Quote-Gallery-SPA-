import { Home } from './home.js';
import { Quote } from './random.js';
import { Author } from './author.js';
import { router } from './router.js';

window.addEventListener("load", ()=>{
  router({
    '/':Home,
    '/randomquote':Quote,
    '/author':Author,
  })
});