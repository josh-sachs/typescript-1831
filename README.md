# typescript-1831
Workspace for Microsoft/Typescript #1831
https://github.com/Microsoft/TypeScript/issues/18311#issuecomment-327884760

###Reproduction Steps: 
1. yarn
2. tsc -p src/broken
3. tsc -p src/workaround
4. tsc -p src/app

###Observe: 
> _"error TS2306: File bundles/broken.d.ts is not a module."_

###Issue: 
TSC module resolution expects a module to be declared by the name `@bundles/broken` within `./bundles/broken.d.ts` however the `system` and `amd` module formats register modules by resource path within the module. 

TSC successfully resolves the module location using the `--paths` configuration, but does not correctly scan the declaration file for a convention based entry point.

You will notice that `./bundles/broken.d.ts` declares a module by the name of `index` but not `@bundles/broken`

###Workaround:
We can coerce the desired behavior by creating a folder called `@bundles` within the `./src/workaround` folder and then re-exporting the contents of folder's root `index.ts`

You will notice that `./bundles/workaround.d.ts` contains an additional declaration for `@bundles/workaround` as a result of the hacky folder structure.

###Expected Behavior: 
At minimum, TSC should additionally check the declaration file for convention based entry points...

1. declared module `@bundles/broken`
2. declared module `index`