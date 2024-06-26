import { defineConfig, sharpImageService } from "astro/config";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import mdx from '@astrojs/mdx';
import compressor from "astro-compressor";

// https://astro.build/config
export default defineConfig({
  devToolbar: {
    enabled: false
  },
  integrations: [tailwind(), compressor(), mdx(), icon({
    include: {
      bi: ["*"],
      bxl: ["*"],
      mdi: ["*"]
    },
  })],
  image: {
    service: sharpImageService()
  },
  site: "https://cojocarudavid.me",
  vite: {
    optimizeDeps: {
      exclude: ["@resvg/resvg-js"]
    }
  }
});