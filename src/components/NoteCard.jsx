import { Link } from "react-router-dom";

function NoteCard({ note, onDelete }) {
  const handleDelete = () => {
    if (window.confirm(`Delete "${note.title}"?`)) {
      onDelete(note.id);
    }
  };

  return (
    <div className="note-card">
      <span className="badge">{note.category}</span>
      <h3>{note.title}</h3>
      <p>{note.content}</p>
      <small>{note.date}</small>
      <div className="card-actions">
        <Link to={`/edit/${note.id}`} className="btn btn-small">Edit</Link>
        <button className="btn btn-small btn-danger" onClick={handleDelete}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default NoteCard;
