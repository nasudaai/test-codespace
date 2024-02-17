import * as esbuild from 'esbuild'

await esbuild.build({
  entryPoints: ['src/main.jsx'],
  bundle: true,
  platform: 'node',
  packages: 'external',
  outfile: 'server/out.cjs',
})