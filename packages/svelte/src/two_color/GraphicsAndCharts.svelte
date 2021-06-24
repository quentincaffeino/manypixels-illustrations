<script>
  let className = "";
  export { className as class };
  export let size = "100%";
  export let width = size;
  export let height = size;

  const svg = (className, width, height) => `<svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" class="manypixels manypixels-GraphicsAndCharts ${className}" width="${width}" height="${height}"><rect x="49.61" y="237.53" width="298.72" height="18.05" rx="9.03" fill="#24285b"/><path fill="#ffd200" d="M189.88 184.92h36.4v52.61h-36.4zm-49.02 23.49h36.4v29.12h-36.4zm-49.71 14.56h36.4v14.56h-36.4zm146.73-72.77h36.4v87.33h-36.4zm45.96-38.81h36.4v126.14h-36.4z"/><path d="M105.78 181.36s84.76-9.56 129.22-75.51l21.12 16.6S189 193.62 105.78 181.36z" fill="#68e1fd"/><path fill="#68e1fd" d="m223.25 100.15 39.23 32.79 8.23-46.77-47.46 13.98z"/><circle cx="112.33" cy="104.16" r="40.25" fill="#e6e6e6"/><path d="M112.33 63.9v40.26l36-18s-8.52-21.41-36-22.26z" fill="#c1c1c1"/><circle cx="132.03" cy="82.37" r="3.45" opacity=".09"/><path d="m112.33 104.16 40.06 3.93s1.74-9.87-4-21.92z" fill="#afafaf"/><path d="m112.33 104.16 36.75 16.42a28.92 28.92 0 0 0 3.31-12.49z" fill="#999"/><path d="m112.33 104.16 31.34 25.24s3.91-4.73 5.41-8.82z" fill="#848484"/><path d="M132.36 82.79a.52.52 0 0 1-.33-.12.51.51 0 0 1-.03-.67l18.59-22a.46.46 0 0 1 .38-.18h24a.5.5 0 0 1 0 1H151.2l-18.46 21.79a.49.49 0 0 1-.38.18z" fill="#24285b"/><path fill="#24285b" d="M169.61 50.63h42.64v19.4h-42.64z"/><path fill="#68e1fd" d="M199.64 63.95h8.55l-4.28-8.04-4.27 8.04z"/><rect x="178.54" y="56.24" width="16.85" height="2.55" rx="1.28" fill="#fff"/><rect x="178.54" y="61.1" width="16.85" height="2.55" rx="1.28" fill="#fff" opacity=".15"/></svg>`
</script>

{@html svg(className, width, height)}
