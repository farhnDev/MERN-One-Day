import express from "express";
import { 
    deleteUSer,
    getUsers,
    getUsersById,
    saveUser,
    updateUSer,
} from "../controllers/UserController.js";

const router = express.Router();

router.get('/users',getUsers);
router.get('/users/:id',getUsersById);
router.post('/users',saveUser);
router.patch('/users/:id',updateUSer);
router.delete('/users/:id',deleteUSer);

export default router;