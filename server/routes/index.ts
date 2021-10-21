
import express from 'express';
import { DisplayAboutpage, DisplayContactpage, DisplayHomepage, DisplayProjectspage, DisplayServicespage } from '../controllers';
const router = express.Router();

/* GET home page. */
router.get('/', DisplayHomepage);

router.get('/home', DisplayHomepage);

router.get('/about', DisplayAboutpage);

router.get('/services', DisplayServicespage );

router.get('/projects', DisplayProjectspage);

router.get('/contact', DisplayContactpage);

export default router;

