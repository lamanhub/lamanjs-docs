# SSR Fetching

This guide will walk you through the basics of SSR data fetching in Laman.js, providing practical examples and best practices.

Here's a minimal example of data fetching in Laman.js:

```edge
@let(data = await fetch('https://api.vercel.app/blog'))
@let(posts = await data.json())

<html>
  <head>
    <title>Laman.js</title>
  </head>
  <body>
    <ul>
      @each(post in posts)
        <li>{{ post.title }}</li>
      @end
    </ul>
  </body>
</html>
```

This example demonstrates a basic server-side data fetch using the `fetch` API in an asynchronous JavaScript.
