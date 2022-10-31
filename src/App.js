import "./Components/css/App.css";
import Notes from "./Components/NoteComponents/Notes";
import Header from "./Components/NoteComponents/Header";
import Footer from "./Components/NoteComponents/Footer";
function App() {
  return (
    <div className="main">
      <Header />
      <Notes />
      <Footer />
    </div>
  );
}
export default App;
