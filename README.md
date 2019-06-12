# node-google-sign-in
Google Sign-in example using Node.js server/backend

## How to run this example
- Setup the server
  - `cd` into `server/` directory
  - Create a `.env` file and enter a `CLIENT_ID` you got from
    Google. If you're not sure what to type, please check
    `server/.env-template` and to generate a `CLIENT_ID` please refer to
    [https://developers.google.com/identity/sign-in/web/sign-in](https://developers.google.com/identity/sign-in/web/sign-in)
  - Enter a `JWT_SECRET` on `.env`
  - Install server dependencies with `npm install`
  - Run `npm run dev` and you should see something like `Listening on port
    3000`

- Setup the client
  - Install `live-server` package from npm (highly recommended)
  - `cd` into `client/` directory
  - Edit the `<meta name="google-signin-client_id">` on `index.html` and
    insert your `CLIENT_ID` to the `content` attribute
  - Run `live-server --host=localhost`
  - And it should be ready to use!
