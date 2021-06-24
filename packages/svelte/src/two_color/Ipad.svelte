<script>
  let className = "";
  export { className as class };
  export let size = "100%";
  export let width = size;
  export let height = size;

  const svg = (className, width, height) => `<svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" class="manypixels manypixels-Ipad ${className}" width="${width}" height="${height}"><ellipse cx="189.5" cy="240.72" rx="160.51" ry="21.62" fill="#e6e6e6" opacity=".45"/><path fill="#c9c9c9" d="M50.47 40.56h135.42v198.18H50.47z"/><path opacity=".12" d="M114.21 45.05h9.88v1.44h-9.88z"/><circle cx="110.63" cy="45.92" r="1.61" fill="#fff"/><path fill="#fff" d="M58.69 50.83h118.97v163.74H58.69z"/><circle cx="118.18" cy="227.04" r="4.98" fill="#fff" opacity=".52"/><path fill="#68e1fd" d="M97.1 165.87h40.98v5.9H97.1zm13.24-67.85h11.38v21.66h-11.38z"/><ellipse cx="117.16" cy="137.63" rx="26.55" ry="5.71" fill="#e6e6e6" opacity=".45"/><path fill="#fff" opacity=".46" d="M125.07 165.87h13.01v5.9h-13.01z"/><path fill="#24285b" d="M103.48 102.31h26.02v34.74h-26.02z"/><path fill="#fff" d="m112.5 116.95 5.1-5.87-1.92 5.81 3.09 3.34-4.07 5.22 1.55-5.01-3.75-3.49z"/><path fill="#24285b" d="M196 40.56h135.42v198.18H196z"/><path opacity=".12" d="M259.75 45.05h9.88v1.44h-9.88z"/><circle cx="256.17" cy="45.92" r="1.61" fill="#fff"/><path fill="#fff" d="M204.23 50.83H323.2v163.74H204.23z"/><circle cx="263.71" cy="227.04" r="4.98" fill="#fff" opacity=".52"/><path fill="#ffd200" d="M242.63 165.87h40.98v5.9h-40.98zm13.24-67.85h11.38v21.66h-11.38z"/><ellipse cx="262.69" cy="137.63" rx="26.55" ry="5.71" fill="#e6e6e6" opacity=".45"/><path fill="#fff" opacity=".46" d="M270.6 165.87h13.01v5.9H270.6z"/><path fill="#24285b" d="M249.01 102.31h26.02v34.74h-26.02z"/><path fill="#fff" d="m258.03 116.95 5.1-5.87-1.92 5.81 3.09 3.34-4.07 5.22 1.55-5.01-3.75-3.49z"/></svg>`
</script>

{@html svg(className, width, height)}
