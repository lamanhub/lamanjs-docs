# SSR Fetching

This guide will walk you through the basics of data fetching and caching in LamanHub, providing practical examples and best practices.

Here's a minimal example of data fetching in LamanHub:

```edge
@let(data = await fetch('https://api.vercel.app/blog'))
@let(posts = await data.json())

<html>
  <head>
    <title>LamanHub</title>
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

This example demonstrates a basic server-side data fetch using the `fetch` API in an asynchronous Javascript.
