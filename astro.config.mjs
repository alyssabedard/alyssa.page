import { defineConfig } from 'astro/config';
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [react({
    // Recommended to place common framework components 
    //  in the same folder (e.g. /components/react/)
    include: ['**/react/*']
  })]
});
