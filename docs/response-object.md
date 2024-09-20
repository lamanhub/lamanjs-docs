# Response Object

The `res` variable represents the **Response Object** from Express.js, used to configure and send HTTP responses back to the client. This object is automatically accessible in `.edge` templates in Laman.js.

For a full reference of available properties and methods, refer to the [Express.js Response documentation](https://expressjs.com/en/4x/api.html#res).

## Properties and Methods

Below are the most commonly used properties and methods of the `res` object in Laman.js:

### 1. **res.status()**

- **Type:** `function`
- **Description:** Sets the HTTP status for the response that will be sent.
- **Example:**
  ```edge
  @let(response = res.status(200))
  ```

### 2. **res.header()**

- **Type:** `function`
- **Description:** Sets response headers.
- **Example:**
  ```edge
  @let(response = res.status(200).header("Content-Type", "application/json"))
  ```

### 3. **res.redirect()**

- **Type:** `function`
- **Description:** Redirects the client to a new URL.
- **Example:**
  ```edge
  @let(response = res.redirect('/new-url'))
  ```

## Example

```edge
@let(response = res.status(200))
@let(response = res.header("Content-Type", "application/json"))
@let(response = res.redirect('/new-url'))
```

## Full Reference

For a more detailed explanation of all available properties and methods, consult the [Express.js Response documentation](https://expressjs.com/en/4x/api.html#res).
