import { CATEGORIES } from "../constants";

function Categories({ notes }) {
  return (
    <section>
      <h2>Categories</h2>
      <p>Total notes: <strong>{notes.length}</strong></p>

      <div className="notes-grid">
        {CATEGORIES.map((cat) => {
          const catNotes = notes.filter((n) => n.category === cat);
          return (
            <div key={cat} className="note-card">
              <h3>{cat}</h3>
              <p>{catNotes.length} {catNotes.length === 1 ? "note" : "notes"}</p>
              <ul>
                {catNotes.map((n) => (
                  <li key={n.id}>{n.title}</li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Categories;
