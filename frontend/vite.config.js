import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	server: {
		proxy: {
			"/api": {			
				target: "http://localhost:5000", //note: prefix to /api, localhost:5000 is added
			},
		},
	},
});
