# URL-manager
This project can manage the our customers PDF's, and field Form Information.

## Project Overview
1. Flash Screen
2. Dashboard with Header
3. Card with routing to URL page
4. URL page having the related URL of PDF's and Information
5. Intrest Rate table

## Setup Details


## Requirments
  1. NPM v9.5.1
  2. Node v18.16.1
  3. ReactJS v9.5.1
  4. Capicator (IONIC) v5.3.0
  ```
  npm i @capacitor/core
  npm i -D @capacitor/cli
  npm install @capacitor/app **used for hatrdware back event in android
  npm install @capacitor/filesystem **used for device file system in android
  npx cap init
  npm i @capacitor/android @capacitor/ios
  npx cap add android
  npx cap add ios
  npx cap sync
  ```

## Commands
1. start project by
  ```
    npm start
  ```

 2. Build project by 
  ```
  npm run build
  ```

 3. Generate the android and IOS updated folder for IDE (Android, XCode)
  ```
  npx cap sync
  ```