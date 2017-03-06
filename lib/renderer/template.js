function template({ body, initialState }) {
  return (`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1, maximum-scale=1, user-scalable=no" />
      <title>MovieBoard - THE BEST WAY TO EXPLORE MOVIES</title>
      <link rel="stylesheet" href="/assets/css/mb.css">
      <script src="/assets/js/vendor.js"></script>
      <script>
        window.__app_initial_state__ = ${JSON.stringify(initialState)};
      </script>
    </head>
    <body>
      <div id="mbMountPoint">${body}</div>
      <script src="/assets/js/mb.js"></script>
    </body>
    </html>
  `);
}

module.exports = template;
