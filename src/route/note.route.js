import { Router } from "express";
import { creatingNote, gettingNotes } from "../controller/note.js";

const router = Router();

router.post("/", creatingNote);
router.get("/", gettingNotes);

export default router;