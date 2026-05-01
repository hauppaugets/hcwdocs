// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://hauppaugets.github.io',
    base: '/hcwdocs',
	integrations: [
		starlight({
			title: 'Hauppauge Docs',
			favicon: '/hcw_favicon_32.ico',
			logo: {
  				light: './src/assets/hcw_square_logo.png',
  				dark: './src/assets/hcw_square_logo_dark.png',
			},
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
			customCss: [
        		'./src/styles/custom.css',
      		],
			sidebar: [
				{
					label: 'WinTV 10',
					autogenerate: { directory: 'wintv10' },
				},
			],
		}),
	],
});
