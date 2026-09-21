import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import NoteCard from "../components/NoteCard";
import { CATEGORIES } from "../constants";

function Home({ notes, onDelete }) {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    document.title = "My Notes | Digital Notes";
  }, []);

  // Search by title/content and filter by category
  const visibleNotes = notes.filter((note) => {
    const text = search.toLowerCase();
    const matchesSearch =
      note.title.toLowerCase().includes(text) ||
      note.content.toLowerCase().includes(text);
    const matchesCategory = filter === "All" || note.category === filter;
    return matchesSearch && matchesCategory;
  });

  return (
    <section>
      <h2>My Notes</h2>

      <div className="toolbar">
        <input
          type="text"
          placeholder="Search notes..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select value={filter} onChange={(e) => setFilter(e.target.value)}>
          <option value="All">All categories</option>
          {CATEGORIES.map((c) => (
            <option key={c} value={c}>{c}</option>
          ))}
        </select>
      </div>

      {visibleNotes.length === 0 ? (
        <p className="empty">
          {notes.length === 0 ? (
            <>No notes yet. <Link to="/add">Add your first note</Link>.</>
          ) : (
            "No notes match your search."
          )}
        </p>
      ) : (
        <div className="notes-grid">
          {visibleNotes.map((note) => (
            <NoteCard key={note.id} note={note} onDelete={onDelete} />
          ))}
        </div>
      )}
    </section>
  );
}

export default Home;
