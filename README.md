{
  "name": "kbiostats.brain_correlation_clustering_toolbox",
  "version": "1.0.0",
  "description": "EEG Correlation Viewer - KAUST Biostatistics Group",
  "main": "./index.js",
  "scripts": {
    "start": "electron index.js",
    "test": "echo \"Error: no test specified\" && exit 1",
    "pack": "electron-builder --dir",
    "dist": "electron-builder"
  },
  "author": "M.A.P-O.",
  "license": "MIT/GPL",
  "devDependencies": {},
  "build": {
    "icon": "static/images/icon",
    "appId": "kbiostats.brain_correlation_clustering_toolbox",
    "electronVersion": "1.8.2-beta.5",
    "files": [
      {
        "from": "./",
        "to": "./"
      },
      {
        "from": "./",
        "to": "./",
        "filter": [
          "**/*.vue",
          "**/*.html"
        ]
      }
    ],
    "extraResources": [
      {
        "from": "../model/",
        "to": "./model/",
        "filter": [
          "**/*"
        ]
      }
    ],
    "extraFiles": [
      {
        "from": "../model/",
        "to": "./model/",
        "filter": [
          "**/*"
        ]
      }
    ],
    "mac": {
      "category": "public.app-category.productivity",
      "target": "dir"
    },
    "win": {
      "target": "portable"
    }
  },
  "postinstall": "electron-builder install-app-deps"
}
