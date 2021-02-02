import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'

import {getAliases} from 'vite-aliases'
const aliases = getAliases();

export default defineConfig({
  plugins: [vue()],
  alias: aliases,
})
