# ui5-training

### Migrate to for use in Fiori Tools resulted in following changes. This branch is just after the migration. No other changes done (other than readme file).

#### A .gitignore file is added containing all unneeded files
### A package.json is created at the root, making this a Node.js application.
#### Defines metadata, dependencies, scripts for RUNNING and BUILDING the app
### package.json Vs package-lock.json
#### "npm i" => installs the exact version in package-lock.json
#### If package-lock.json is not present, it will install the latest suitable dependecies from package.json + It creates package-lock.json
#### ~1.4.3 => Only patches can be upgraded
#### ^1.4.3 => Minor version can be upgraded
#### 1.4.3 => Major version can be upgraded
### ui5.yaml - Specifies custom middlewares, how to build, how to run, how to connect to backend. 
#### fiori-tools-preview - For locally running the app, fiori-tools-proxy - for connecting to OData and UI5 library, fiori-tools-appreload - auto refresh upon change
### Under a new 'test' folder, flpSandbox.html is created, it is used for running in a FLP. locate-reuse-libs.js is used, but you do not have to edit it.
### Index.html is used which will take care of new syntax for instantiating a component and placing it in a div.
### .vscode/launch.json - This is used for local run and debugging within BAS/VSCode


