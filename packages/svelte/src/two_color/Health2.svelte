<script>
  let className = "";
  export { className as class };
  export let size = "100%";
  export let width = size;
  export let height = size;

  const svg = (className, width, height) => `<svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" class="manypixels manypixels-Health2 ${className}" width="${width}" height="${height}"><ellipse cx="196.46" cy="265.06" rx="129.1" ry="12.46" fill="#e6e6e6" opacity=".45"/><path fill="#e6e6e6" d="M279.3 101.3v158.81H115.89V56.31h114.9"/><path fill="#24285b" d="M230.79 56.31v44.99h48.51l-48.51-44.99z"/><path fill="#68e1fd" d="M188.16 100.15h15.06v41.11h-15.06z"/><path fill="#68e1fd" d="M216.24 113.17v15.06h-41.11v-15.06z"/><path opacity=".13" d="M128.91 69.64h36v20.17h-36z"/><path fill="#fff" opacity=".33" d="M138.36 154.91h119.49v63.66H138.36z"/><path d="M279.64 237.09h32.25a6.26 6.26 0 0 1 6.26 6.26V260h-38.5v-22.91h-.01z" fill="#ffd200"/><path fill="#68e1fd" d="M232.32 177.13h54.96v82.89h-54.96z"/><rect x="224.97" y="169.17" width="69.66" height="20.99" rx="6.14" fill="#68e1fd"/><rect x="224.97" y="169.17" width="69.66" height="20.99" rx="6.14" opacity=".13"/><path fill="#fff" opacity=".46" d="M232.32 207.7h54.96v35.27h-54.96z"/><path d="M246.64 234.47s19.72 2.47 1.36 25.53h-15.68l4.42-22.92z" opacity=".08"/><path d="m241.916 229.036 1.711 1.035a6.51 6.51 0 0 1 2.201 8.94l-5.755 9.514-12.835-7.763 5.756-9.515a6.51 6.51 0 0 1 8.922-2.211z" fill="#24285b"/><path d="m227.214 240.753 12.834 7.763-5.755 9.515a6.51 6.51 0 0 1-8.94 2.2l-1.711-1.034a6.51 6.51 0 0 1-2.2-8.94l5.755-9.515.017.01z" fill="#68e1fd"/><path d="m224.605 229.037 1.711 1.035a6.51 6.51 0 0 1 2.201 8.94l-5.755 9.514-12.835-7.764 5.755-9.514a6.51 6.51 0 0 1 8.923-2.211z" fill="#24285b"/><path d="m209.911 240.758 12.835 7.764-5.756 9.515a6.51 6.51 0 0 1-8.94 2.2l-1.71-1.035a6.51 6.51 0 0 1-2.201-8.94l5.755-9.514.017.01z" fill="#68e1fd"/><path fill="#fff" d="M138.36 230.32h40.85v12.65h-40.85z"/></svg>`
</script>

{@html svg(className, width, height)}
