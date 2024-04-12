import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    dts({ exclude: ['**/*.stories.tsx'], rollupTypes: true }),
  ],
  build: {
    // Library entry and output settings
    lib: {
      entry: resolve(__dirname, 'lib/main.ts'),
      name: 'onboarding-library-openmaze',
      fileName: 'onboarding-library-openmaze',
    },
    // Bundler options
    // Externalize react-related imports
    rollupOptions: {
      external: ['react', 'react-dom', 'react/jsx-runtime'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'react/jsx-runtime': 'react/jsx-runtime',
        },
      },
    },
  },
});
