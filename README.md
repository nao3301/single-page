# single-page

New tool chain based on gulp tasks and webpack. I tried parcel but their devserver currently doesnt support scss HMR. Maybe later down the road.


**npm install** to install dependencies

**npm start** runs the dev env tool chain
* generates a dist folder with webpack bundling and image stripping
* runs the ***soon*** implemented test suite
* starts an express server on localhost:3000 with HMS and Sass compiling


**npm run build** runs the prod env tool chain
* generates a **build** folder with webpack bundling, css extraction and image stripping
* all bundles contain source maps and uglifying
* runs the ***soon*** implemented test suite
* starts an express server on localhost:8080 with HMS and Sass compiling
