import express from 'express';
import { DisplayContactListPage, DisplayEditPage } from '../controllers/contact';

const router = express.Router();


//Get display contact list view
router.get('/list', DisplayContactListPage);

//Get display contact item edit
router.get('/edit', DisplayEditPage);
export default router;

