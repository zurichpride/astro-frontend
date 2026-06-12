// src/middleware.ts
import { defineMiddleware } from "astro:middleware";

export const onRequest = defineMiddleware(async (context, next) => {
	try {
		return await next();
	} catch (error) {
		console.error( error);

		return new Response(
			`<h1>Ein Fehler ist aufgetreten</h1>
			 <p>Ein Element auf dieser Seite konnte nicht geladen werden.</p>
			 <pre style="background: #eee; padding: 10px;">${error instanceof Error ? error.message : String(error)}</pre>
			 <button onclick="window.location.reload()">Neu laden</button>`,
			{
				status: 500,
				headers: { "Content-Type": "text/html; charset=utf-8" }
			}
		);
	}
});