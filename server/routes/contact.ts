import express from 'express';
import { DisplayAddPage, DisplayContactListPage, DisplayEditPage, ProcessAddPage, ProcessDeletePage, ProcessEditPage } from '../controllers/contact';

const router = express.Router();
//(CREATE) display contact list add page
router.get('/add', DisplayAddPage);
//(CREATE) process contact/add page
router.post('/add', ProcessAddPage);


//(READ) display contact list page
router.get('/list', DisplayContactListPage);


//(UPDATE) display contact list edit page
router.get('/edit/:id', DisplayEditPage);
//(UPDATE) process contact/edit/:id
router.post('/edit/:id', ProcessEditPage);


//(DELETE) process contact/delete/:id 
router.get('/delete/:id', ProcessDeletePage);

export default router;



