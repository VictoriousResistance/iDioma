module.exports = function(initialState) {
  return `
  <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Welcome to iDioma!</title>
        <meta name="description" content="Learn languages with native speakers." />

        <!-- Schema.org markup for Google+ -->
        <meta itemprop="name" content="iDioma">
        <meta itemprop="description" content="iDioma pairs native speakers who want to learn each other's languages.">
        <meta itemprop="image" content="">

        <!-- Twitter Card data -->
        <meta name="twitter:card" content="iDioma">
        <meta name="twitter:title" content="iDioma">
        <meta name="twitter:description" content="iDioma pairs native speakers who want to learn each other's languages.">
        <meta name="twitter:image" content="">

        <!-- Open Graph data -->
        <meta property="og:title" content="Learn languages with native speakers." />
        <meta property="og:url" content="" />
        <meta property="og:image" content="" />
        <meta property="og:description" content="iDioma pairs native speakers who want to learn each other's languages." />
        <meta property="og:site_name" content="iDioma" />

        <link rel="stylesheet" href="/css/simple-grid.css" media="screen" title="no title" charset="utf-8">
        <link rel="stylesheet" href="/css/animate.css" media="screen" title="no title" charset="utf-8">
        <link rel="stylesheet" href="/css/app.css" media="screen" title="no title" charset="utf-8">

        <link href='https://fonts.googleapis.com/css?family=Open+Sans:400,600,700' rel='stylesheet' type='text/css'>
        <link href='https://fonts.googleapis.com/css?family=Signika:700,400,600' rel='stylesheet' type='text/css'>
      </head>
      <body>
        <div id='app'>
        </div>
        <script>
          window.__INITIAL_STATE__ = ${JSON.stringify(initialState)};
        </script>
        <script src="/dist/home.bundle.js"></script>
      </body>
    </html>
  `;
};