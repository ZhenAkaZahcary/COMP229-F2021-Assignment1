import express from 'express';
import { DisplayContactListPage } from '../controllers/contact';

const router = express.Router();


//Get display contact list view
router.get('/list', DisplayContactListPage);

//Get display contact item edit
export default router;