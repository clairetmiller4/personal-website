const path = require('path');
const express = require('express');
const history = require('connect-history-api-fallback');

const app = express();
const port = process.env.PORT || 8080;
const staticAssets = express.static(path.join(__dirname, 'dist'));

app.use(staticAssets);

// Fixing navigation errors associated with HTML5 history mode
app.use(history());

// Must include static assets again as described in documentation
// https://github.com/bripkens/connect-history-api-fallback/tree/master/examples/static-files-and-index-rewrite#configuring-the-middleware
app.use(staticAssets);

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Server listening on port ${port}`);
});
