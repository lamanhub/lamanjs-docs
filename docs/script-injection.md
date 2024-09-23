# Script Injection

The **Script Injection** feature allows for the execution of JavaScript on the server side in a Laman.js application. This enables the use of libraries like `momentjs` for data processing (e.g., date formatting) before it is sent to the client. By performing this processing on the server, it can enhance SEO and site performance.

## Usage

1. **Install the Library:**

   To use a library on the server side, first install it using npm:

   ```bash
   npm install moment
   ```

2. **Create the Inject File:**

   Create a file `src/inject.ts` to export the library you want to inject:

   ```typescript
   // src/inject.ts
   export { default as moment } from "moment";
   ```

3. **Use in Edge Template:**

   After creating the `inject.ts` file, you can use the injected library within your `.edge` templates. Simply call `inject()` to access the exported libraries:

   ```edge
   {{ inject().moment().format("YYYY-MM-DD") }}
   ```

   In this example, `moment()` is used to format the date on the server before the result is sent to the client.

## Benefits

- **SEO:**
  By processing data on the server side, the content sent to the client is ready to be indexed by search engines, improving your site's SEO visibility.
- **Performance:**
  Server-side script execution helps reduce the processing load on the client, resulting in faster page load times and a better user experience.

## Code Examples

```typescript
// src/inject.ts
export { default as moment } from "moment";
```

```edge
{{-- src/pages/index.edge --}}
{{ inject().moment().format("YYYY-MM-DD") }}
```
