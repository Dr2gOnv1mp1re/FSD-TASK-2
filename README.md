# Digital Notes Application

A basic ReactJS app to add, edit, delete, search and categorize notes.
Notes are saved in the browser's localStorage.

## Features
- Add, edit and delete notes
- Search notes by title or content
- Filter notes by category
- Form validation (title, category, content)
- 3 pages: My Notes, Add/Edit Note, Categories

## Run locally
```
npm install
npm run dev
```
Then open the URL shown in the terminal (usually http://localhost:5173).

## Project structure
```
src/
  main.jsx            entry point + router
  App.jsx             state (useState/useEffect) + routes
  App.css             styles
  constants.js        category list
  components/         Navbar, NoteCard, NoteForm
  pages/              Home, NoteEditor, Categories
```
