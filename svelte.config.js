import adapter from '@sveltejs/adapter-auto';

export default {
	kit: {
		adapter: adapter(),
		// Specify your custom routes directory here
		files: {
			routes: 'src/routes'
		}
	}
};
