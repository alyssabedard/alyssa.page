import { defineConfig } from 'astro/config';

// Cloudflare Package
// import cloudflare from "@astrojs/cloudflare";

// Environment Variables
// import { loadEnv } from "vite";
// const { PUBLIC_IMAGE_URL} = loadEnv(process.env.NODE_ENV, process.cwd(), "");
// const { SECRET_PASSWORD } = loadEnv(process.env.NODE_ENV, process.cwd(), "");
// const env = loadEnv(mode, process.cwd(), '')

import cloudflare from "@astrojs/cloudflare";
//https://docs.astro.build/en/guides/environment-variables/
//https://docs.astro.build/en/guides/integrations-guide/cloudflare/#cloudflare-runtime
// https://developers.cloudflare.com/pages/functions/bindings/#environment-variables
export default defineConfig({
  output: "server",
  adapter: cloudflare({
    runtime: {
      mode: 'local',
      type: 'pages',
      bindings: {
        // example of a var binding (environment variable)
        "URL": {
          type: "var",
          value: "https://docs.astro.build/en/guides/integrations-guide/cloudflare/#cloudflare-runtime",
        },
  
      },
    },
  }),
  } 
);