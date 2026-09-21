import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import NoteEditor from "./pages/NoteEditor";
import Categories from "./pages/Categories";

function App() {
  // Load saved notes from localStorage on first render
  const [notes, setNotes] = useState(() => {
    const saved = localStorage.getItem("notes");
    return saved ? JSON.parse(saved) : [];
  });

  // Save notes to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const addNote = (note) => {
    const newNote = {
      ...note,
      id: Date.now(),
      date: new Date().toLocaleDateString(),
    };
    setNotes([newNote, ...notes]);
  };

  const updateNote = (id, updatedNote) => {
    setNotes(notes.map((n) => (n.id === id ? { ...n, ...updatedNote } : n)));
  };

  const deleteNote = (id) => {
    setNotes(notes.filter((n) => n.id !== id));
  };

  return (
    <div className="app">
      <Navbar />
      <main className="container">
        <Routes>
          <Route path="/" element={<Home notes={notes} onDelete={deleteNote} />} />
          <Route path="/add" element={<NoteEditor notes={notes} onAdd={addNote} />} />
          <Route
            path="/edit/:id"
            element={<NoteEditor notes={notes} onUpdate={updateNote} />}
          />
          <Route path="/categories" element={<Categories notes={notes} />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
