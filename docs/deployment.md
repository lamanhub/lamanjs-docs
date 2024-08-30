# Deploy Your Laman.js App

## Production Build

As a first step, you must create an optimized HTML, CSS, and JavaScript files of your website for production by running:

```bash
npm run build
```

The compiled output is written inside the `./dist` directory.

## Starting the production server

After a successful build process, you may start the production server by running:

```bash
npm start
```

However, it is recommended to use a process manager like pm2.

- PM2 will run your application in background without blocking the current terminal session.
- It will restart the application, if your app crashes while serving requests.
- Also, PM2 makes it super simple to run your application in [cluster mode](https://nodejs.org/api/cluster.html#cluster)

Following is an example [pm2 ecosystem file](https://pm2.keymetrics.io/docs/usage/application-declaration/) you may use as the starting point.

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

```bash
pm2 start ecosystem.config.js
```
