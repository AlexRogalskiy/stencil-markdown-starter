module.exports = {
  "skipWaiting": true,
  "globDirectory": "www/",
  "globPatterns": [
    "**/*.{js,css,json,html,ico,png,svg}"
  ],
  "swDest": "www/sw.js",
  "globIgnores": [
    "../workbox-cli-config.js",
    "docs-content/**/*.html"
  ]
};
