import logo from "./logo.svg";
import "./App.css";

function Features() {
  return (
    <div className="features">
      <h3 className="feature-title">title</h3>
      <p className="feature-description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil magni
        minima aliquam dolores sapiente adipisci facilis molestiae sint nobis
        eveniet, eaque, ab omnis in quasi quos soluta? Nulla, nesciunt nisi!
      </p>
    </div>
  );
}

function App() {
  return (
    <div>
      <Features></Features>
    </div>
  );
}

export default App;
