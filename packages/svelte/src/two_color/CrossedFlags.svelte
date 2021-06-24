<script>
  let className = "";
  export { className as class };
  export let size = "100%";
  export let width = size;
  export let height = size;

  const svg = (className, width, height) => `<svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" class="manypixels manypixels-CrossedFlags ${className}" width="${width}" height="${height}"><path d="M165.5 65.76s-11.6 23.28-40.32 18-50.33 19-50.33 19 18.71 46.64 21.08 53c0 0 10-19 43.48-16.6s44.35-9.67 47.87-17.88z" fill="#68e1fd"/><ellipse cx="205.83" cy="229.46" rx="95.4" ry="13.35" fill="#e6e6e6" opacity=".3"/><path fill="#e6e6e6" d="m237.396 227.025-4.522 1.914L160.99 59.095l4.521-1.914z"/><path d="M234.5 65.76s11.6 23.28 40.32 18 50.33 19 50.33 19-18.71 46.64-21.08 53c0 0-10-19-43.48-16.6s-44.35-9.67-47.87-17.88z" fill="#ffd200"/><path fill="#e6e6e6" d="m234.49 57.188 4.521 1.914-71.884 169.844-4.522-1.914z"/><path d="M265.82 214.21s-10.58-2.89-12.88-12.73c0 0 16.38-3.31 16.85 13.6z" fill="#68e1fd" opacity=".58"/><path d="M267.11 213.16s-7.38-11.68-.88-22.6c0 0 12.45 7.91 6.92 22.62z" fill="#68e1fd" opacity=".73"/><path d="M269 213.17s3.9-12.33 15.69-14.67c0 0 2.22 8-7.63 14.7z" fill="#68e1fd"/><path fill="#24285b" d="m261.35 212.89 2.14 14.66 13.5.06 1.99-14.65-17.63-.07z"/></svg>`
</script>

{@html svg(className, width, height)}
