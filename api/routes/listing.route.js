import  express from 'express';
import { createList ,deleteListing} from '../controllers/listing.controller.js';
import { verifyToken } from '../utils/verifyUser.js';

const router = express.Router();


router.post('/create', verifyToken,createList);
router.delete('/delete/id', verifyToken, deleteListing)

export default router;
