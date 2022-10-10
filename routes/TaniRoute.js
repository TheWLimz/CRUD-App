import { Router } from "express";
import { getTaniData, 
    createTaniData, 
    getTaniDataById, 
    deleteTaniData,
    updateTaniData
} from "../controller/TaniController.js";

const router = Router();

router.get('/tani', getTaniData);
router.post('/tani', createTaniData);
router.get('/tani/:id', getTaniDataById);
router.patch('/tani/:id', updateTaniData);
router.delete('/tani/:id', deleteTaniData);

export default router;
