import { useParams, useNavigate } from "react-router-dom";
import NoteForm from "../components/NoteForm";

// Used for both "Add Note" (/add) and "Edit Note" (/edit/:id)
function NoteEditor({ notes, onAdd, onUpdate }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const isEditing = id !== undefined;
  const noteToEdit = isEditing ? notes.find((n) => n.id === Number(id)) : null;

  if (isEditing && !noteToEdit) {
    return <p className="empty">Note not found.</p>;
  }

  const handleSubmit = (data) => {
    if (isEditing) {
      onUpdate(noteToEdit.id, data);
    } else {
      onAdd(data);
    }
    navigate("/");
  };

  return (
    <section>
      <h2>{isEditing ? "Edit Note" : "Add Note"}</h2>
      <NoteForm
        initialData={noteToEdit}
        onSubmit={handleSubmit}
        buttonText={isEditing ? "Save changes" : "Add note"}
      />
    </section>
  );
}

export default NoteEditor;
