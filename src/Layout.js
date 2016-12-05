import React from 'react';

const Layout = (props) => (
  <html>
    <head>
      <title>Alex Cushing</title>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css" />
      <link rel="stylesheet" href="/public/css/style.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.0.0-alpha.5/css/bootstrap-flex.css" />
    </head>
    <body>
      <div
        data-app
        dangerouslySetInnerHTML={{ __html: props.markup }}
      >
      </div>

      <script dangerouslySetInnerHTML={{__html: props.state}}></script>

      <script src="/public/js/main.js"></script>
    </body>
  </html>
);

export default Layout;
