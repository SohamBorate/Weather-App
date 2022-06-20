# Running locally

-   ## Proxy
Download packages.
Add your `OpenWeatherMap` `API_KEY` to `.env`.
Start local server.
```
> npm install
> nodemon
[nodemon] 2.0.15
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,json
[nodemon] starting `node app.js`
Server running on port 3000
```

-   ## Desktop
Download packages and build.
```
> npm install
> npm install --save-dev @electron-forge/cli
> npx electron-forge import
> npm run make
```

-   ## Website
Almost same steps as backend.
Download packages.
Put in your proxy server url at `/public/js/index.js`.
Start local server.
```
> npm install
> nodemon
[nodemon] 2.0.15
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,json
[nodemon] starting `node app.js`
Server running on port 3000
```

# Hosting on Heroku
To host the proxy and website servers on<br>
Heroku refer to this guide: [https://devcenter.heroku.com/articles/deploying-nodejs](https://devcenter.heroku.com/articles/deploying-nodejs)