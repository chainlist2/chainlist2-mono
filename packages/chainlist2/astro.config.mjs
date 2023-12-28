import react from '@astrojs/react';
import tailwindcss from 'tailwindcss';

export default {
  integrations: [react()],
  styles: [
    '@app/styles.css', // Add this line to include your custom styles
    tailwindcss('./tailwind.config.js'), // Add the Tailwind CSS integration
  ],
  routes: {
    '/explore': '/src/pages/index.astro', // Adjust the path based on your project structure
  },
  plugins: [
    // ... other plugins
  ],
  // ... rest of your config
};
