#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { exec, execSync } = require('child_process');
const fetch = require('isomorphic-unfetch');

// Export the API routes
const apiConfig = require('./api.config.js');
const apiRoutes = apiConfig.exportPathMap();

// Logs
const log = (str) => console.log('\x1b[32m[LOG]\x1b[0m %s', str);
const error = (str) => console.log('\x1b[31m[ERR]\x1b[0m %s', str);

// Ensure a path exists
const createFolders = (destPath) => {
  const dirname = path.dirname(destPath);
  if (fs.existsSync(dirname)) {
    return;
  }
  // Recursive function
  createFolders(dirname);
  // Create the folder
  fs.mkdirSync(dirname);
}

const app = async () => {
  log('Caching api responses...');
  Promise.all(apiRoutes.map(async (r) => {
    try {
      const urlPath = `/static/_data${r}.json`;
      const filePath = path.join(__dirname, urlPath);
      log(`Caching: ${urlPath}`);
      const res = await fetch(`http://localhost:3000${urlPath}`);
      const data = await res.text();

      // Write the result
      createFolders(filePath);
      fs.writeFileSync(filePath, data);
      log(`Cached: ${urlPath}`);
    } catch (err) {
      error(err);
    }
  }))
  .then(() => {
    // Build the project!
    log('Building the project...');
    execSync('yarn export');
    log('Done!');
    server.kill();
  });
}

// Execute the server in background
log('Starting the server...');
const server = exec('yarn start');
server.stdout.on('data', (data) => {
  const res = data.toString();
  if (res.indexOf('Ready on http://localhost:3000') > -1) {
    log('The server is ready');
    app();
  }
});

server.stderr.on('data', (data) => {
  error(`stderr: ${data.toString()}`);
});

process.on('exit', function () {
  if (!server.killed) server.kill();
});
