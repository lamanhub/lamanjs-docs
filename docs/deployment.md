# Deploy Your Laman.js App

Laman.js offers flexible deployment options to suit your needs. You can either deploy your app to LamanHub for a seamless experience or host it on your own server.

## Deploy to LamanHub

### Step 1: Register on LamanHub

Before deploying your application, you need to register an account on LamanHub. Visit the registration page:

[https://app.lamanhub.site/auth/register](https://app.lamanhub.site/auth/register)

Fill out the registration form to create your account.

### Step 2: Prepare Your Project

Ensure that your project is ready for deployment. Follow the production build steps:

```bash
npm run build
```

This will generate the necessary production files in the `./dist` directory.

### Step 3: Deploy to LamanHub

Once your build is ready, deploy to LamanHub with the following command:

```bash
npm run deploy
```

This command will automatically handle the deployment process and make your app live on LamanHub. LamanHub offers:

- **Automatic Subdomain**: Each project deployed on LamanHub will receive a unique subdomain.
- **SSL Certificate**: LamanHub includes SSL certification for secure HTTPS connections.
- **Custom Domain**: Option to configure a custom domain if needed.

### Step 4: Verify Deployment

Once the deployment process is complete, visit the provided subdomain or your custom domain to ensure that your application is live and functioning as expected.

## Deploy to Your Own Server

### Step 1: Production Build

First, create optimized HTML, CSS, and JavaScript files of your website for production by running:

```bash
npm run build
```

The compiled output is written inside the `./dist` directory.

### Step 2: Starting the Production Server

After a successful build process, you may start the production server by running:

```bash
npm start
```

It is recommended to use a process manager like PM2 for better management.

- **PM2**: Runs your application in the background without blocking the current terminal session.
- **Auto-Restart**: Restarts the application if it crashes.
- **Cluster Mode**: Simplifies running your application in [cluster mode](https://nodejs.org/api/cluster.html#cluster).

Here is an example [PM2 ecosystem file](https://pm2.keymetrics.io/docs/usage/application-declaration/) you can use:

```javascript
module.exports = {
  apps: [
    {
      name: "lamanjs-app",
      script: "npm",
      args: "start",
      instances: "max",
      exec_mode: "cluster",
      autorestart: true,
    },
  ],
};
```

Start the PM2 process with:

```bash
pm2 start ecosystem.config.js
```

Your application will now be live on your server.

---

Choose the deployment option that best suits your needs: LamanHub for ease of use and integrated features, or self-hosted for more control over your environment.
