import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import PhotoBoothResult from "./pages/PhotoBoothResult";
import PhotoBoothSmile from "./pages/PhotoBoothSmile";
import PhotoBoothSmile1 from "./pages/PhotoBoothSmile1";
import PhotoBoothSelfieQuestion from "./pages/PhotoBoothSelfieQuestion";
import Map1 from "./pages/Map1";
import Projects from "./pages/Projects";
import { useEffect } from "react";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/photoboothsmile1":
        title = "";
        metaDescription = "";
        break;
      case "/photoboothsmile":
        title = "";
        metaDescription = "";
        break;
      case "/photoboothselfiequestion":
        title = "";
        metaDescription = "";
        break;
      case "/map":
        title = "";
        metaDescription = "";
        break;
      case "/projects":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<PhotoBoothResult />} />
      <Route path="/photoboothsmile1" element={<PhotoBoothSmile />} />
      <Route path="/photoboothsmile" element={<PhotoBoothSmile1 />} />
      <Route
        path="/photoboothselfiequestion"
        element={<PhotoBoothSelfieQuestion />}
      />
      <Route path="/map" element={<Map1 />} />
      <Route path="/projects" element={<Projects />} />
    </Routes>
  );
}
export default App;
