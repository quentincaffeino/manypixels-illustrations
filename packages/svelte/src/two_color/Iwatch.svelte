<script>
  let className = "";
  export { className as class };
  export let size = "100%";
  export let width = size;
  export let height = size;

  const svg = (className, width, height) => `<svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" class="manypixels manypixels-Iwatch ${className}" width="${width}" height="${height}"><circle cx="199.33" cy="153.7" r="118.98" fill="#e6e6e6" opacity=".3"/><path fill="#efefef" d="M145.32 99.15h106.32v106.32H145.32z"/><path fill="#24285b" d="M154.52 108.35h87.93v87.93h-87.93z"/><path d="M225.07 30.5h-53.18c7.64 35.75-11.1 68.65-11.1 68.65h75.39s-18.74-32.9-11.11-68.65zm-53.18 243.62h53.18c-7.63-35.75 11.11-68.65 11.11-68.65h-75.39s18.74 32.9 11.1 68.65z" fill="#68e1fd"/><path fill="#fff" d="M164.66 169.89h67.4v2.55h-67.4z"/><circle cx="175.77" cy="182.74" r="5.11" fill="#68e1fd"/><circle cx="190.32" cy="182.74" r="5.11" fill="#68e1fd" opacity=".38"/><circle cx="205.38" cy="182.74" r="5.11" fill="#68e1fd" opacity=".38"/><circle cx="220.06" cy="182.74" r="5.11" fill="#68e1fd" opacity=".38"/><circle cx="198.48" cy="143.26" r="17.37" fill="#ffd200"/><path fill="#fff" d="m194.84 141.73 5.93-6.83-2.23 6.75 3.58 3.88-4.72 6.08 1.8-5.82-4.36-4.06z"/><path fill="#efefef" d="m169.68 104.28 4.77 14.12h47.66l3.91-14.12h-56.34z"/><path fill="#e6e6e6" d="M251.65 118.4h5.44v22.89h-5.44zm0 31.6h5.44v22.89h-5.44z"/></svg>`
</script>

{@html svg(className, width, height)}
