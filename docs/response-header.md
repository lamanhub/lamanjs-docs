# Response Header

The `setHeader` function allows you to modify the response headers when rendering templates in `.edge` files. This is useful for setting content types, controlling cache, or customizing any other response headers before sending the response to the client.

## Usage

The `setHeader` function can be called inside `.edge` templates to dynamically modify the response headers. This function is especially useful when generating content like XML, JSON, or other MIME types that need explicit headers.

## Syntax

```edge
{{ setHeader(headerName, headerValue) }}
```

- `headerName` (string): The name of the HTTP header you want to set.
- `headerValue` (string): The value for the specified header.

## Example

In this example, we generate a sitemap using a server-side function and set the `Content-Type` header to `application/xml`:

```edge
{{{ await ((await inject()).generateSitemap("https://" + req.hostname)) }}}
{{ setHeader("Content-Type", "application/xml") }}
```

- **`generateSitemap`**: A server-side injected function that creates the sitemap.
- **`setHeader("Content-Type", "application/xml")`**: This sets the content type of the response to XML.

## Common Use Cases

- **Content-Type Modification:** Dynamically change the content type based on the response.
- **Cache-Control:** Control client-side caching behavior.
- **Custom Headers:** Add custom headers for security or tracking purposes.

## Example 2: Setting a JSON Response

If you're returning a JSON response, you can use `setHeader` to specify the correct content type:

```edge
{{{ JSON.stringify(data) }}}
{{ setHeader("Content-Type", "application/json") }}
```
