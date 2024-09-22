# Primevue Module Federation demo application

## Structure
The project has two separate parts:
- `host` application. This application includes a link to` remoteEntry.js` to plug in `remote` application.
- `remote` application. This part of the project includes vite special vite configurations to generate a necessary file to share this application with another project that uses Module Federation.
### Instructions for the local deployment
Enter the follow command to build and preview `remote` application.
```sh
cd ./remote
npm run preview
```
This command will generate a production build, and the application will be available by the following link http://localhost:4173/.
Then enter the follow command to start the `host` application as a development server.
```sh
cd ./host
npm run dev
```
Application will be available on the http://localhost:5173/. You'll see both `host` and `remote` applications by this link.
In the files `vite.config.js` of both applications's directories, you can learn Module Federation configurations and change them to get a necessary result.