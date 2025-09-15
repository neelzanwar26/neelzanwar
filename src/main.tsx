import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Handle GitHub Pages redirect param (?p=...) to support SPA deep links
const params = new URLSearchParams(window.location.search);
const redirectPath = params.get("p");
if (redirectPath) {
  const url = new URL(window.location.href);
  url.searchParams.delete("p");
  window.history.replaceState(null, "", `${import.meta.env.BASE_URL}${redirectPath}${url.search}${url.hash}`);
}

createRoot(document.getElementById("root")!).render(<App />);
