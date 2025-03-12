import { Router } from "express";
import { creatingNote, deletingNote, gettingNotes, updatingNote } from "../controller/note.js";

const router = Router();

router.post("/", creatingNote);
router.get("/", gettingNotes);
router.put("/:id", updatingNote);
router.delete("/:id", deletingNote);

export default router;