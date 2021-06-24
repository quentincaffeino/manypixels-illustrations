<script>
  let className = "";
  export { className as class };
  export let size = "100%";
  export let width = size;
  export let height = size;

  const svg = (className, width, height) => `<svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" class="manypixels manypixels-Polaroid ${className}" width="${width}" height="${height}"><path d="M108.55 70.16c-28 12.3-48.66 43.29-52.62 80.7-3.33 31.53 6.42 77.53 55.05 87.27 94.62 18.94 194 30.28 216.37-21.89s3-158.75-45-164.34c-38.19-4.44-119.15-5.76-173.8 18.26z" fill="#e6e6e6" opacity=".3"/><path fill="#68e1fd" d="M117.35 39.9h166.3v72.92h-166.3zm0 72.92-11.42 20.59h188.93l-11.22-20.59H117.35z"/><path fill="#fff" opacity=".39" d="m117.35 112.82-11.42 20.59h188.93l-11.22-20.59H117.35z"/><path fill="#68e1fd" d="M105.96 133.4h188.9v8.38h-188.9z"/><path fill="#24285b" d="m105.96 141.79 15.23 54.55h157.42l16.25-54.55h-188.9z"/><circle cx="200.39" cy="76.36" r="27.95" fill="#68e1fd"/><circle cx="200.39" cy="76.36" r="27.95" fill="#fff" opacity=".39"/><circle cx="200.39" cy="76.36" r="22.23" fill="#24285b"/><circle cx="204.08" cy="72.83" r="11.69" fill="#fff" opacity=".08"/><circle cx="208.66" cy="70.53" r="4.59" fill="#fff" opacity=".08"/><path d="M256 51.3h27.65v28.6H256a14.3 14.3 0 0 1-14.3-14.3A14.3 14.3 0 0 1 256 51.3z" opacity=".08"/><path fill="#24285b" d="M255.99 89.56h18.72v9.03h-18.72z"/><path fill="#fff" opacity=".39" d="M130.63 58.57h22.72v22.72h-22.72z"/><path fill="#24285b" d="M130.63 97h22.72v7.31h-22.72zm21.19-65.44h89.87v8.34h-89.87z"/><path fill="#ffd200" d="M130.63 157.51h138.3v106.55h-138.3z"/><path fill="#fff" opacity=".5" d="M146.72 157.51h106.13v90.55H146.72z"/><path opacity=".08" d="M130.63 157.51h138.3v11.55h-138.3z"/></svg>`
</script>

{@html svg(className, width, height)}
