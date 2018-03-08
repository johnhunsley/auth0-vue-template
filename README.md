# auth0-vue-template
A Vue.js template for Auth0 integration.

Auth0 is an identity provider service against which authentication and authorization challenges can be made using OAuth.
Auth0 plays the part of the remote token provider and provides a Json Web Token (JWT) which contains both the identity and
granted authorities of that identity. This project is a Vue.js template which can be used to create new Single Page App
views in Vue.js which require user authenitcation and authorization via Auth0 for access to the underlying resource provider,
whatever that may be.

This project includes routing, from the vue-router package, and callback event handling. In order to correctly process
callbacks from the Auth0 hosted login page back to the app the server must rewrite the callback URL back to the vue-router

To do this when deployed to Apache we add the following .htaccess file in /var/www/html/

```xml
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . index.html [L]
</IfModule>
```

Alternatively, when running this application from Node using the server.js file, we must add configuration to do the same
 with the express server.

 ```
app.use(function(req, res, next) {
     if (req.url == '/callback') {
       res.sendfile(__dirname + '/dist/index.html');
     } else {
       next();
     }
 });
 ```

To run this example:

```
npm install
npm run dev
```

To build and deploy to a production server:

```
npm run build
node server.js
```