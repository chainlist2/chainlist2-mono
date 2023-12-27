import react from '@astrojs/react';

export default {
  integrations: [react()],
  styles: [
    '@app/styles.css', // Add this line to include your custom styles
  ],
  routes: {
    '/explore': '/src/pages/index.astro', // Adjust the path based on your project structure
  },
  // ... rest of your config
};
