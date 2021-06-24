<script>
  let className = "";
  export { className as class };
  export let size = "100%";
  export let width = size;
  export let height = size;

  const svg = (className, width, height) => `<svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" class="manypixels manypixels-DataStorage ${className}" width="${width}" height="${height}"><path fill="#e6e6e6" d="M198.79 251.33h-39.2v-3h36.2v-53.32h3v56.32z"/><path d="M276.48 129.37c-.93 0-1.84.06-2.74.15v-1.29a39 39 0 0 0-39-39h-1.65A46.65 46.65 0 1 0 141 101a39 39 0 0 0 1.47 77.93h134a24.77 24.77 0 0 0 0-49.54z" fill="#68e1fd"/><path fill="#ffd200" d="M155.27 153.28h92.99v58.61h-92.99z"/><path opacity=".09" d="M155.27 153.28h92.99v58.61h-92.99z"/><path fill="#ffd200" d="M147.25 128.68h109.38v28.75H147.25z"/><path fill="#24285b" d="M159.59 139.24h65.26v6.69h-65.26z"/><circle cx="238.79" cy="143.58" r="5.46" fill="#fff"/><path fill="#ffd200" d="M147.25 163.34h109.38v28.75H147.25z"/><path fill="#24285b" d="M159.59 173.89h65.26v6.69h-65.26z"/><circle cx="238.79" cy="178.24" r="5.46" fill="#fff"/><path fill="#ffd200" d="M147.25 198h109.38v28.75H147.25z"/><path fill="#24285b" d="M159.59 208.55h65.26v6.69h-65.26z"/><circle cx="238.79" cy="212.9" r="5.46" fill="#fff"/><path fill="#e6e6e6" d="M197.29 248.33h36.04v3h-36.04z"/><circle cx="161.18" cy="249.95" r="5.9" fill="#c1c1c1"/><circle cx="233.33" cy="249.95" r="5.9" fill="#c1c1c1"/></svg>`
</script>

{@html svg(className, width, height)}
