<script>
  let className = "";
  export { className as class };
  export let size = "100%";
  export let width = size;
  export let height = size;

  const svg = (className, width, height) => `<svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" class="manypixels manypixels-DataAnalytics ${className}" width="${width}" height="${height}"><path fill="#e6e6e6" d="M100.88 162.83h49.36v72.64h-49.36zm70.86-17.75h49.36v90.39h-49.36zm69.88-59.03h49.36v149.41h-49.36z"/><path fill="#68e1fd" d="m80.5 233.97-3-2.64 47.89-54.6 35.04 31.7 36.1-47.36 30.92 32.43 17.19-29.93 3.46 2-19.85 34.57-31.38-32.92-35.9 47.1-35.25-31.9-45.22 51.55z"/><path d="M303.68 238.59H76.44a3 3 0 0 1-3-3V73.83a3 3 0 1 1 6 0v158.76h224.24a3 3 0 0 1 0 6zm-15.533-81.775 5.25-8.429 16.025 9.983-5.25 8.428z" fill="#24285b"/><path fill="#fff" opacity=".29" d="m288.147 156.815 5.25-8.429 16.025 9.983-5.25 8.428z"/><circle cx="265.99" cy="137.16" r="34.5" fill="#ffd200"/><circle cx="265.99" cy="137.16" r="24.39" fill="#fff"/><rect x="311.8" y="151.43" width="17.88" height="39.77" rx="5.11" transform="rotate(-58.08 320.757 171.317)" fill="#24285b"/><path fill="#68e1fd" d="m253.25 134.77 20.02 13.07.62-23.23-20.64 10.16zm6.69 4.37L249 154.7a20 20 0 0 0 6.69 4.58l10.47-16.06z"/><circle cx="125.6" cy="181.12" r="7.79" fill="#68e1fd"/><circle cx="196.41" cy="165.13" r="7.79" fill="#68e1fd"/><circle cx="125.6" cy="181.12" r="7.79" fill="#fff" opacity=".57"/><circle cx="196.41" cy="165.13" r="7.79" fill="#fff" opacity=".57"/><path d="M122.44 152.55s-8.32-2.27-10.13-10c0 0 12.89-2.61 13.26 10.7z" fill="#68e1fd" opacity=".58"/><path d="M123.46 151.73s-5.81-9.19-.7-17.78c0 0 9.8 6.22 5.45 17.8z" fill="#68e1fd" opacity=".73"/><path d="M125 151.73s3.07-9.7 12.35-11.54c0 0 1.74 6.3-6 11.57z" fill="#68e1fd"/><path fill="#24285b" d="m118.92 151.51 1.69 11.54 10.62.05 1.56-11.53-13.87-.06z"/></svg>`
</script>

{@html svg(className, width, height)}
