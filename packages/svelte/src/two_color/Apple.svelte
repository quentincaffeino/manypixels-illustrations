<script>
  let className = "";
  export { className as class };
  export let size = "100%";
  export let width = size;
  export let height = size;

  const svg = (className, width, height) => `<svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" class="manypixels manypixels-Apple ${className}" width="${width}" height="${height}"><path d="M98.52 114.3s41.16-31.52 79.83-19.13 55.7 21.67 40.91 75.66-13 65.45-40.91 61.63-21.87 3.52-42 .67-83.79-60.82-37.83-118.83z" fill="#ffd200"/><ellipse cx="194.11" cy="234.26" rx="117.19" ry="29.34" fill="#e6e6e6" opacity=".3"/><path d="M171 135.94s-22.71 9.61-24.75 39.23 2.05 58.43 2.05 58.43 9.18-2.44 16.58-2.27c2 0 24.16 2.75 30.08.49S171 135.94 171 135.94z" opacity=".05"/><path d="M165.78 144.58s-16.82 33.77 9.73 71 82.26 34.44 111.34 3.39-35.32-104.92-121.07-74.39z" fill="#ffd200"/><path d="M204.21 190.33s-44.17-5.62-40.52-38 69.53-57.92 96.08-22.68c0 0 32.17-6.06 38.81 20s11.34 80.14-46.67 79.63-47.7-38.95-47.7-38.95z" fill="#ffd200"/><path d="M204.21 190.33s-44.17-5.62-40.52-38 69.53-57.92 96.08-22.68c0 0 32.17-6.06 38.81 20s11.34 80.14-46.67 79.63-47.7-38.95-47.7-38.95z" fill="#fff" opacity=".64"/><path d="M217.25 181.54s-24.13-3.07-22.14-20.76 38-31.63 52.48-12.38c0 0 17.57-3.31 21.2 10.9s6.2 43.77-25.49 43.49-26.05-21.25-26.05-21.25z" fill="#fff" opacity=".6"/><path d="M151.64 107.22s1.7-26.26-17.7-37.5" fill="none" stroke="#24285b" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3"/><path d="M145.85 101.3s-21.45 3.83-19.06 13 29.61 3.06 42.89 0 10.89-15.46-23.83-13z" opacity=".05"/><path d="M146.85 83.83S80.15 68 72 137.33c0 0 88.78 14.38 74.85-53.5z" fill="#68e1fd"/><path d="M209.51 184.77s29-20.37 50.26-55.11" fill="none" stroke="#24285b" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3"/><path d="M227.23 153.13s-13.64-5-14.78 1.78 10.88 5.26 14.78-1.78zm15.82 12.71s-5.38 16.61 2.83 17.67 5.81-13.31-2.83-17.67z" fill="#24285b"/><path d="M82.19 129.66s29.23-33.61 64.66-45.83l1.48 9.28s-14.56-1.9-66.14 36.55z" fill="#fff" opacity=".19"/></svg>`
</script>

{@html svg(className, width, height)}
