import { defineConfig, type Options } from 'tsup'

const commonOptions = {
  // splitting: false,
  sourcemap: true,
  format: ['cjs', 'esm'],
  external: ['vue', 'pinia'],
  dts: true,
  target: 'esnext',
} satisfies Options

export default defineConfig([
  {
    ...commonOptions,
    clean: true,
    entry: ['src/index.ts'],
    globalName: 'dev.openpanel.co',
  },
  // {
  //   ...commonOptions,
  //   entry: ['src/plugins/persist-pending-queries.ts'],
  //   outDir: 'dist/plugins',
  // },
])
