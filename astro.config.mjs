// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
	output: 'server',
	adapter: cloudflare(),
	i18n: {
		defaultLocale: "de-CH",
		locales: ["de-CH",
			{
				path: "en",
				codes: ["en-CH", "en"]
			},
			{
				path: "fr",
				codes: ["fr-CH", "fr"]
			},
			{
				path: "it",
				codes: ["it-CH", "it"]
			},
		],
	},
	fonts: [
		{
			provider: fontProviders.google(),
			name: "Unbounded",
			cssVariable: "--unbounded",
			weights: ["200 900"],
			fallbacks: ["ui-sans-serif", "sans-serif"]
		},
		{
			provider: fontProviders.google(),
			name: "Lilex",
			cssVariable: "--lilex",
			styles: ["normal", "italic"],
			weights: ["200 700"],
			fallbacks: ["ui-monospace", "monospace"],
			featureSettings: "'zero' on, 'cv09' on, 'ss04' on, 'cv11' on",
		},
		{
			provider: fontProviders.google(),
			name: "Fraunces",
			cssVariable: "--fraunces",
			styles: ["normal", "italic"],
			weights: ["200 900"],
			fallbacks: ["ui-serif", "serif"],
			variationSettings: "'SOFT' 10, 'WONK' 1"
		},
		{
			provider: fontProviders.google(),
			name: "Oi",
			cssVariable: "--oi",
			fallbacks: ["cursive"]
		},
		{
			provider: fontProviders.google(),
			name: "Modak",
			cssVariable: "--modak",
			fallbacks: ["cursive"]
		},
		{
			provider: fontProviders.googleicons(),
			name: "Material Symbols Rounded",
			cssVariable: "--material",
			variationSettings: "'wght' 400, 'opsz' 24"
		}
	]
});