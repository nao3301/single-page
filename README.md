# single-page


## Todo

- Menutext disapear and apear           DONE
- about us link
- second pic in fixed background
- Infobox heading
- action -> passion                     DONE
- all 3 text -> new                     DONE
- locationS                             DONE
- mini basic premium                    DONE
- footer with big contact data
- socialmedia links

New tool chain based on gulp tasks and webpack. I tried parcel but their devserver currently doesnt support scss HMR. Maybe later down the road.


**npm install** to install dependencies (some dependencies like node-sass require visual studio build tools to be installed as well as python 2.x or 3.x)

**npm start** runs the dev env tool chain
* generates a dist folder with webpack bundling and image stripping
* runs the ***soon*** implemented test suite
* starts an express server on localhost:3000 with HMR and Sass compiling



**npm run build** runs the prod env tool chain (only use this if you want a finished build to deploy, you'll lose scss realtime compilation)
* generates a **build** folder with webpack bundling, css extraction and image stripping
* all bundles contain source maps and uglifying
* runs the ***soon*** implemented test suite
* starts an express server on localhost:8080 with HMR and WITHOUT REALTIME Sass compiling

*if **npm start** or **npm run build** abort without any error you can run **npm run webpack** to find the issue, because most of the time this is webpack related.*

*if **npm run build** launches the dev server correctly you can upload the content of the **/build** directory to the web server.*
