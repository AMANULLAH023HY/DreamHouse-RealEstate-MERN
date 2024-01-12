import  express from 'express';
import { createList ,deleteListing,updateListing} from '../controllers/listing.controller.js';
import { verifyToken } from '../utils/verifyUser.js';

const router = express.Router();


router.post('/create', verifyToken,createList);
router.delete('/delete/:id', verifyToken, deleteListing)
router.delete('/update/:id', verifyToken, updateListing)

export default router;
