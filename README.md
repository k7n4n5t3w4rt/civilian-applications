# Website

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

### Installation

```
$ npm i
```

### Local Development

```
$ npm start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Deployment

Because we're using GitLab we just push on the `master` branch. All the deployment to GitLab Pages is in the `/.gitlab_ci.yml`.

The `deploy` script just builds for GitLab Pages and pushes on the `master branch`.

```
npm run deploy
```

# civilian-applications
# civilian-applications
