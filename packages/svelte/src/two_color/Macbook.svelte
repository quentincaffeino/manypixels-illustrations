<script>
  let className = "";
  export { className as class };
  export let size = "100%";
  export let width = size;
  export let height = size;

  const svg = (className, width, height) => `<svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" class="manypixels manypixels-Macbook ${className}" width="${width}" height="${height}"><path d="M286.7 197.47s59.24 8.17 60.77-14.81-42.81-21.91-16.05-60.74 6.65-69.47 6.65-69.47" fill="none" stroke="#ffd200" stroke-miterlimit="10" stroke-width="5"/><path fill="#dddbdb" d="M99.08 45.98h204.47v140.21H99.08z"/><path fill="#fff" d="M108.64 55.54h184.29v120.09H108.64z"/><path fill="#dddbdb" d="m99.08 186.19-39.57 50.45h278.56l-34.52-50.45H99.08z"/><path fill="#c9c9c9" d="M59.51 236.64h278.56v8.67H59.51z"/><path fill="#fff" opacity=".56" d="m105.99 193.27-12.75 18.14h212.79l-10.98-18.14H105.99z"/><path fill="#fff" opacity=".28" d="M162.64 216.28h69.74l6.38 14.87h-81.79l5.67-14.87z"/><path fill="#68e1fd" opacity=".32" d="M158.25 142.64h88.52v12.75h-88.52z"/><path fill="#68e1fd" d="M218.67 142.64h28.1v12.75h-28.1zm5.75-49.2-20.55-11.87-20.55 11.87v23.73l20.55 11.86 20.55-11.86V93.44z"/><path fill="#fff" opacity=".46" d="m183.32 93.44 20.55-11.87 20.55 11.87-20.55 11.86-20.55-11.86z"/><path opacity=".08" d="M203.87 105.3v23.73l20.55-11.86V93.44l-20.55 11.86z"/><circle cx="118.94" cy="65.67" r="3.32" fill="#24285b"/><circle cx="130.03" cy="65.67" r="3.32" fill="#68e1fd"/><circle cx="141.45" cy="65.67" r="3.32" fill="#ffd200"/></svg>`
</script>

{@html svg(className, width, height)}
