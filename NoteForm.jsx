import { useState } from "react";
import { CATEGORIES } from "../constants";

function NoteForm({ initialData, onSubmit, buttonText }) {
  const [title, setTitle] = useState(initialData?.title || "");
  const [content, setContent] = useState(initialData?.content || "");
  const [category, setCategory] = useState(initialData?.category || "");
  const [errors, setErrors] = useState({});

  // Client-side validation
  const validate = () => {
    const newErrors = {};
    if (title.trim() === "") newErrors.title = "Title is required.";
    else if (title.trim().length < 3) newErrors.title = "Title must be at least 3 characters.";

    if (content.trim() === "") newErrors.content = "Note content is required.";
    else if (content.trim().length < 5) newErrors.content = "Content must be at least 5 characters.";

    if (category === "") newErrors.category = "Please select a category.";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      onSubmit({ title: title.trim(), content: content.trim(), category });
    }
  };

  return (
    <form className="note-form" onSubmit={handleSubmit} noValidate>
      <label htmlFor="title">Title</label>
      <input
        id="title"
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter note title"
      />
      {errors.title && <p className="error">{errors.title}</p>}

      <label htmlFor="category">Category</label>
      <select
        id="category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="">-- Select category --</option>
        {CATEGORIES.map((c) => (
          <option key={c} value={c}>{c}</option>
        ))}
      </select>
      {errors.category && <p className="error">{errors.category}</p>}

      <label htmlFor="content">Content</label>
      <textarea
        id="content"
        rows="6"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Write your note here..."
      />
      {errors.content && <p className="error">{errors.content}</p>}

      <button type="submit" className="btn">{buttonText}</button>
    </form>
  );
}

export default NoteForm;
