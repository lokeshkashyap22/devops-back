import Note from "../model/note.js";

export const creatingNote = async (req, res) => {
  const { title, content } = req.body;
  const note = new Note({
    title,
    content,
  });
  try {
    const createdNote = await note.save();
    res.status(201).json(createdNote);
  } catch (error) {
    res.status(400).json({ message: "Note creation failed" });
  }
};

export const gettingNotes = async (req, res) => {
  try {
    const notes = await Note.find();
    res.status(200).json(notes);
  } catch (error) {
    res.status(404).json({ message: "Notes not found" });
  }
};
