# Request Object

The `req` variable represents the **Request Object** from Express.js, providing details about the HTTP request made by the client. It includes information like headers, query parameters, the request URL, and more. This object is automatically accessible in `.edge` templates in Laman.js.

For a full reference of available properties and methods, refer to the [Express.js Request documentation](https://expressjs.com/en/4x/api.html#req).

## Properties

Below are the most commonly used properties of the `req` object in Laman.js:

### 1. **req.hostname**

- **Type:** `string`
- **Description:** The hostname of the server where the request was made. Useful for dynamically generating URLs.
- **Example:**
  ```edge
  {{ req.hostname }}
  ```

### 2. **req.url**

- **Type:** `string`
- **Description:** The full URL of the request, including the path and query string.
- **Example:**
  ```edge
  {{ req.url }}
  ```

### 3. **req.method**

- **Type:** `string`
- **Description:** The HTTP method of the request (e.g., `GET`, `POST`, `PUT`, `DELETE`).
- **Example:**
  ```edge
  {{ req.method }}
  ```

### 4. **req.headers**

- **Type:** `object`
- **Description:** An object containing the request headers as key-value pairs.
- **Example:**
  ```edge
  {{ JSON.stringify(req.headers) }}
  ```

### 5. **req.query**

- **Type:** `object`
- **Description:** An object containing the query string parameters of the request.
- **Example:**
  ```edge
  {{ JSON.stringify(req.query) }}
  ```

### 6. **req.params**

- **Type:** `object`
- **Description:** An object containing route parameters, often used in dynamic routes.
- **Example:**
  ```edge
  {{ JSON.stringify(req.params) }}
  ```

### 7. **req.cookies**

- **Type:** `object`
- **Description:** An object containing cookies sent by the client.
- **Example:**
  ```edge
  {{ JSON.stringify(req.cookies) }}
  ```

### 8. **req.ip**

- **Type:** `string`
- **Description:** The IP address of the client making the request.
- **Example:**
  ```edge
  {{ req.ip }}
  ```

### 9. **req.protocol**

- **Type:** `string`
- **Description:** The protocol used for the request (e.g., `http` or `https`).
- **Example:**
  ```edge
  {{ req.protocol }}
  ```

## Example

```edge
<p>Request was made from: {{ req.hostname }}</p>
<p>Request method: {{ req.method }}</p>
<p>Request URL: {{ req.url }}</p>
```

## Full Reference

For a more detailed explanation of all available properties and methods, consult the [Express.js Request documentation](https://expressjs.com/en/4x/api.html#req).
