# Routing

## File-Based Routing

LamanHub uses file-based routing, which means the generated website pages are mapped from the directory structure of the source Edge files. For example, given the following directory structure:

```
src
│   └───pages
│   │   └───getting-started.edge
│   │   └───index.edge
│   │   └───prologue.edge
```

The generated URL will be:

```
index.edge              -->  /
getting-started.edge    -->  /getting-started
prologue.edge           -->  /prologue
```

## Public and Pages Directory

There are two important concepts in the file structure of a LamanHub project: the public and the pages directory.

### Public Directory

The `public` directory is designated for storing static assets, such as images, fonts, and other media files, as well as compiled distribution files (dist). These files are served directly to the client without any processing or transformation, making this directory ideal for assets that do not require any dynamic rendering or compilation. Anything placed in the `public` directory will be accessible at the root of your website.

### Pages Directory

The `src/pages` directory is where your routing files are located. Each file in this directory represents a route in your application. For example, a file named `about.edge` in the `src/pages` directory would correspond to the `/about` route in your application. This directory is essential for defining the structure of your website, as it dictates how users navigate through different pages and content.

## Dynamic Routes

When you don't know the exact segment names ahead of time and want to create routes from dynamic data, you can use Dynamic Segments that are filled in at request time.

### Convention

A Dynamic Segment can be created by wrapping a folder name or file name in square brackets: `[folderName]`. For example, `[id].edge` or `/[slug]/index.edge`.

Dynamic requests or segments are passed to the template engine as properties of Express's `Request` object, accessible through the `req` variable.
