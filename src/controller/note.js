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

export const updatingNote = async (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;
  try {
    const updatedNote = await Note.findByIdAndUpdate(
      id,
      { title, content },
      { new: true }
    );
    res.status(200).json(updatedNote);
  } catch (error) {
    res.status(404).json({ message: "Note not found" });
  }
};

export const deletingNote = async (req, res) => {
  const { id } = req.params;
  try {
    await Note.findByIdAndDelete(id);
    res.status(200).json({ message: "Note deleted" });
  } catch (error) {
    res.status(404).json({ message: "Note not found" });
  }
};
