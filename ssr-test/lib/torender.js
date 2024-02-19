import * as esbuild from 'esbuild'

await esbuild.build({
  entryPoints: ['src/server-entry.jsx'],
  bundle: true,
  platform: 'node',
  packages: 'external',
  outfile: 'server-render/out.cjs',
})