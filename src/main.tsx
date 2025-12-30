import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Import the PNG from src/assets so Vite bundles it and returns a usable URL.
import faviconUrl from "./assets/icon.png";

function setFavicon(href: string) {
	try {
		let link = document.querySelector("link[rel~='icon']") as HTMLLinkElement | null;
		if (!link) {
			link = document.createElement("link");
			link.rel = "icon";
			document.getElementsByTagName("head")[0].appendChild(link);
		}
		// Use a URL from the bundler. This helps avoid manual copying to public/ and busts cache.
		link.href = href;
	} catch (err) {
		// In case document is not ready yet or running in an environment without DOM
		// we silently ignore the error.
		// eslint-disable-next-line no-console
		console.warn("Could not set favicon:", err);
	}
}

setFavicon(faviconUrl);

createRoot(document.getElementById("root")!).render(<App />);
