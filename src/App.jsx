import { useEffect, useState } from "react";
import Dashboard from "./components/Dashboard";
import Header from "./components/Header";
import Archive from "./components/Archive";
import Footer from "./components/Footer";
import { PostProvider } from "./components/PostContext";

function App() {
  const [isFakeDark, setIsFakeDark] = useState(false);

  // Whenever `isFakeDark` changes, we toggle the `fake-dark-mode` class on the HTML element (see in "Elements" dev tool).
  useEffect(
    function () {
      document.documentElement.classList.toggle("fake-dark-mode");
    },
    [isFakeDark],
  );

  return (
    <section>
      <button
        onClick={() => setIsFakeDark((isFakeDark) => !isFakeDark)}
        className="btn-fake-dark-mode"
      >
        {isFakeDark ? "☀️" : "🌙"}
      </button>
      <PostProvider>
        <Header />
        <Dashboard />
        <Archive />
        <Footer />
      </PostProvider>
    </section>
  );
}

export default App;
