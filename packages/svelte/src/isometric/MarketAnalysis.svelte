<script>
  let className = "";
  export { className as class };
  export let size = "100%";
  export let width = size;
  export let height = size;

  const svg = (className, width, height) => `<svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 400 300" class="manypixels manypixels-MarketAnalysis ${className}" width="${width}" height="${height}"><defs><linearGradient id="a" x1="192.28" y1="275.24" x2="216.61" y2="242.45" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#fff" stop-opacity="0"/><stop offset="1" stop-color="#d43500"/></linearGradient><linearGradient id="b" x1="106.85" y1="205.39" x2="122.42" y2="183.25" xlink:href="#a"/></defs><path fill="#ffb844" d="M157.72 106.46 38.39 174.61 234 287.54l120.22-68.28-196.5-112.8z"/><path opacity=".32" fill="url(#a)" d="m274.29 241.35-57.63 32.68-54.97-34.2 52.27-25.89"/><path opacity=".32" fill="url(#b)" d="m163.36 187.61-45.67 28.86-45.66-24.15 52.26-25.89"/><path fill="#68e1fd" d="M269.65 75.57 166.51 14v86.33l103.14 58.32V75.57z"/><path fill="none" stroke="#29abe2" stroke-miterlimit="10" d="M174.45 27.81v71.75m17.82-60.61v71.76m27.86-55.19v71.75m20.13-60.82v71.76m18.02-60.1v71.76"/><path d="M322.23 180.44a39 39 0 0 0 8.77-3.72c3.62-2.29-3.56-1.66-4.62-1.43s-4.15 5.15-4.15 5.15zm-20.04-78.54a37.08 37.08 0 0 1 12-2.32c7.41-.34-6.83 5.51-6.83 5.51" fill="#ffa515"/><ellipse cx="318.7" cy="139.08" rx="26.77" ry="39.93" transform="rotate(-11.37 318.655 139.054)" fill="#ffa515"/><ellipse cx="312.86" cy="140.96" rx="26.77" ry="40.61" transform="rotate(-11.37 312.835 140.96)" fill="#fcb632"/><path d="M292.28 109.82 312.86 141v-39.25s-9.53-4.96-20.58 8.07z" fill="#68e1fd"/><path d="M312.86 141 340 153.6s3.92-41.58-27.11-52.26z" fill="#db5db6"/><path fill="#d8d5d0" d="m261.19 187.61 53.18 30.55-74.48 43.1-52.55-31.37 73.85-42.28z"/><path fill="#d8d5d0" d="M187.34 217.95v11.94l12.12-5.97-12.12-5.97zm127.03-11.73v11.94l-12.24-5.66 12.24-6.28z"/><path fill="#eaeaea" d="m261.19 175.67 53.18 30.55-74.48 43.1-52.55-31.37 73.85-42.28z"/><path d="m197.55 212.93-.15-.74-7.65 1.32s5.65 8.92 9.88 11.75c-2.51-3.56-2.1-8.16-2.08-12.33zm58.76-28.69 26.67 15.33" fill="#d8d5d0"/><path d="m255.93 184.89 26.68 15.33a.75.75 0 0 0 .76-1.3l-26.68-15.33a.75.75 0 0 0-.76 1.3z" fill="#ccc"/><path fill="#d8d5d0" d="m252.84 186.51 42.91 24.66"/><path d="m252.46 187.16 42.91 24.65a.75.75 0 0 0 .76-1.3l-42.91-24.65a.75.75 0 0 0-.76 1.3z" fill="#ccc"/><path fill="#d8d5d0" d="m249.37 189.14 42.91 24.66"/><path d="m249 189.79 42.91 24.65a.75.75 0 0 0 .76-1.3l-42.92-24.64a.75.75 0 0 0-.76 1.3z" fill="#ccc"/><path fill="#d8d5d0" d="m245.84 191.32 42.91 24.65"/><path d="m245.46 192 42.91 24.65a.75.75 0 0 0 .76-1.3l-42.91-24.65a.75.75 0 0 0-.76 1.3z" fill="#ccc"/><path fill="#68e1fd" d="m225.15 208.32 12.11-6.97 3 1.73-12.14 6.93-2.97-1.69zm5.53 4.14 21.35-12.29 2.87 1.84-21.21 12.11-3.01-1.66zm6.58 3.86 12.83-7.38 3.25 1.59-13.08 7.47-3-1.68zm6.49 3.24 16.94-9.75 3.17 1.65-17.09 9.77-3.02-1.67zm6.32 3.86 6.24-3.59 3.06 1.67-6.32 3.61-2.98-1.69zm7.55 3.73 21.35-12.29 2.88 1.84-21.18 12.1-3.05-1.65z"/><path fill="#d8d5d0" d="m213.4 209.39 26.68 15.33"/><path d="m213 210 26.68 15.33a.75.75 0 0 0 .76-1.3l-26.68-15.33a.75.75 0 0 0-.76 1.3z" fill="#ccc"/><path fill="#d8d5d0" d="m209.93 211.67 42.91 24.65"/><path d="M209.55 212.32 252.46 237a.75.75 0 0 0 .76-1.3L210.31 211a.75.75 0 0 0-.76 1.3z" fill="#ccc"/><path fill="#d8d5d0" d="m206.46 214.3 42.91 24.65"/><path d="M206.09 214.95 249 239.6a.75.75 0 0 0 .76-1.3l-42.91-24.65a.75.75 0 0 0-.76 1.3z" fill="#ccc"/><path fill="#d8d5d0" d="m202.93 216.47 42.91 24.65"/><path d="m202.55 217.12 42.91 24.65a.75.75 0 0 0 .76-1.3l-42.91-24.65a.75.75 0 0 0-.76 1.3z" fill="#ccc"/><path fill="none" stroke="#ccc" stroke-miterlimit="10" stroke-width=".5" d="m314.37 208.94-74.11 43.1-52.92-30.81"/><path fill="none" stroke="#ccc" stroke-miterlimit="10" stroke-width=".5" d="M314.11 211.67 240 254.77l-52.93-30.81"/><path fill="none" stroke="#ccc" stroke-miterlimit="10" stroke-width=".5" d="M314.11 215.61 240 258.7l-52.93-30.81"/><path fill="#ffc65a" d="m319.26 222.9 7.83-1.21-6.82 6.94"/><ellipse cx="319.26" cy="225.92" rx="2.33" ry="3.02" fill="#465ca2"/><path fill="#465ca2" d="m251.49 269.82 68.78-41.19-1.88-5.51-68.7 41.13 1.8 5.57z"/><ellipse cx="250.59" cy="267.03" rx="2.33" ry="3.02" fill="#283860"/><path d="m327.09 221.69-3 .46a1.39 1.39 0 0 1 .79 1.75z" fill="#465ca2"/><path d="m156.16 182.65-.91-.69.81-10.83 4.77.17s-.24 4.63.78 5.76 3.88.58 4.15.69 2.18-.3 3 .63-3.1 3.15-5.09 3.47a12.7 12.7 0 0 1-4.09-.14s-.23-2.8-.93-2.58-1 3.15-1 3.15z" fill="#9c4100"/><path d="M154.2 148.54c-.39 11.33-.81 26.1-.81 26.1s2.59 3.52 9.61 2c.75-.16 2.43-18.22 3.25-27.62a27 27 0 0 0-12.05-.48z" fill="#653200"/><path d="m168.59 192-.91-.69.81-10.83 4.77.17s-.24 4.63.78 5.76 3.88.58 4.15.69 2.18-.3 3 .63-3.1 3.15-5.09 3.47a12.7 12.7 0 0 1-4.1-.2s-.23-2.8-.93-2.58-1 3.15-1 3.15z" fill="#9c4100"/><path d="M170.64 150.6a28.4 28.4 0 0 0-9.93-2.47c.58 4.24 1.12 7.18 1.21 7.4.23.54 4.59 27.46 4.59 27.46 5.15 2.08 11.24.34 11.24.34s-2.1-21-2.27-24.51q0-.57-.06-1.13a8.26 8.26 0 0 0-4.78-7.09z" fill="#653200"/><path d="M139 156.86s8.73-7.9 15.23-8.32 15.76 6.32 15 10.24-13.17 12.34-13.17 12.34" fill="#653200"/><path d="m156.82 142.76-7-4.91a1.48 1.48 0 0 1-.49-1.81l4.93-11a1.48 1.48 0 0 1 2.13-.65l7.77 4.84a1.48 1.48 0 0 1 .53 1.94l-5.74 11a1.48 1.48 0 0 1-2.13.59z" fill="#1784aa"/><path d="m156.2 142.38-7-4.91a1.48 1.48 0 0 1-.49-1.81l4.93-11a1.48 1.48 0 0 1 2.13-.65l7.77 4.84a1.48 1.48 0 0 1 .53 1.94l-5.74 11a1.48 1.48 0 0 1-2.13.59z" fill="#29abe2"/><path fill="#e4f5fd" d="m157.36 141.71-7.83-5.53 5.13-11.41 8.7 5.42-6 11.52z"/><path d="M153.74 129.61c-2.59 1.42-6.64 3-9.36 4.91-.44.3-1.09 1.34-.66 1.19-.18.21 1.6.91 1.43 1.14-.06.08 1.15-.59 1.22-.56a4.66 4.66 0 0 0 3.34.4l.45-.33.11-.07a.26.26 0 0 1 .08-.08h.07a.27.27 0 0 1 .1-.16c.6-.47 1.91-.72 2.05-1.51a1.63 1.63 0 0 0-.19-.6.23.23 0 0 1 0-.31 1.82 1.82 0 0 0-.27-1.38l.15-.18a17.51 17.51 0 0 0 2-1.64.41.41 0 0 0 .13-.25.38.38 0 0 0 0-.08.49.49 0 0 0-.65-.49z" fill="#e85454"/><path d="M152.42 132.41c-.19-.5-.48-.52-.93-.33a15.59 15.59 0 0 0-2.58 1.47c-.14.09 0 .31.14.22.51-.35 2.69-2 3.13-1.25s-1 1.2-1.43 1.41l-1.58.84c-.15.08 0 .3.14.22l1-.52a.13.13 0 0 0 0 .08 1.53 1.53 0 0 0 .3.3 1 1 0 0 0-.11.9v.06a2.81 2.81 0 0 1-3.44.5c-.13-.1-.31.09-.18.19a3 3 0 0 0 3.86-.59 1.4 1.4 0 0 0 .46-.15 3 3 0 0 0 1.22-.8 1 1 0 0 0 0-1 .64.64 0 0 0 0-.92 1 1 0 0 0 0-.63zm-.11 2.32a1.63 1.63 0 0 1-.66.54c-.17.1-.57.38-.74.34-.33-.08-.13-.52 0-.71a1.8 1.8 0 0 0 .51-.3l.63-.4.21-.16a.79.79 0 0 1 .05.7zm-.8-.48c-.36.22-.65.5-1 .11.5-.26 1-.52 1.48-.81a1.2 1.2 0 0 0 .37-.33c.27.45-.59.87-.85 1.04z" fill="#653200"/><path d="M146 132.57s1.75.39 1.88 4.06l-1.31 3.25-7.11-3.69s1.7-2.14 6.54-3.62z" fill="#88d3d8"/><path d="M162.85 134.28c-.53 1.17-1.06 2.23-1.5 3.43-.33-.79-.63-1.44-1-2.2a.58.58 0 0 0-.06-.07.61.61 0 0 0-1.13.38 5 5 0 0 0 .83 2 .63.63 0 0 0-.16.12c-1 1.14-.78 2.88-.66 4.28a.54.54 0 0 0 .81.43.55.55 0 0 0 .28-.07 4.6 4.6 0 0 0 1.85-2.67c.6-1.77 1.34-3.74.74-5.63z" fill="#e85454"/><path d="m136.31 134.2 2.57-.76c.64.09 6.2 2.36 8.51 6.32a24.74 24.74 0 0 1 .57 3.67c.21 1.65.38 3.3.46 5a36.15 36.15 0 0 1-.08 5.42c-.08.77-.13 1.16-.26 1.92a3.42 3.42 0 0 1-1 .61c-7.71 2.68-13.37-1.66-13.6-2.28s-.6-9.52-.78-14.81a5.09 5.09 0 0 1 3.61-5.09z" fill="#88d3d8"/><path d="M143.11 125s1.73 8.71-1.48 9.65-7-2.69-7.26-4.48 4.24-8.04 8.74-5.17z" fill="#e85454"/><path d="M141.87 128.52c.1-.15 1.94-.63 2.33-2.19s-1-3.59-4.23-3.89-8.6 1.46-7.77 9.91 9.34 4.82 9.89 2.12a16.18 16.18 0 0 0-.22-5.95z" fill="#653200"/><path d="M141.87 128.52s.54 2.89 1.71 4.13 2.12 3.5.68 5.22 0 2.66 2 4.31.78 8.35-6.54 6.71a19.69 19.69 0 0 1-10.72-6.07s1.88-13.16 3.87-16.25" fill="#653200"/><path d="M147.41 139.88s1.66 5.55 3.31 5.72 4.17-2.28 5.93-5.48a4.65 4.65 0 0 1 5.09 4.45s-5.83 11.82-14.33 8.93" fill="#88d3d8"/><ellipse cx="156.45" cy="132.91" rx="3.42" ry="2.94" transform="rotate(-68.71 156.463 132.914)" fill="#1784aa"/><path fill="#e4f5fd" d="m154.46 132.05.92-.29.38 1.3 2.99-1.07.13.92-3.64 1.33-.78-2.19z"/><path d="M116.86 182.2a36.22 36.22 0 0 1-7.52-23.2 26.43 26.43 0 0 1 7.39-18.11c4.31-4.42 10.82-6.6 16.59-3.6 4.79 2.49 7.11 7.26 8.78 12.15 2 5.85 2.68 13.36 9.81 15.17 2.77.7 5.67.22 8.52 0 5-.34 10.21 1.27 11.75 6.57 2.77 9.48-10 17.57-17.15 20.63a33.11 33.11 0 0 1-36.71-7.94q-.76-.8-1.46-1.67z" fill="#7ec971"/><path d="M171.95 171.33c-5.07 9.17-21.58 13.31-30.58 12.85-8.17-.42-13.33-5.41-12.78-13.68.31-4.54 1.75-9.07 1.34-13.64-.69-7.79-8.09-14.18-15.64-12.66a26.65 26.65 0 0 0-5 15.33 36.22 36.22 0 0 0 7.52 23.2q.7.87 1.46 1.7a33.11 33.11 0 0 0 36.71 7.94c7.17-3.06 19.92-11.15 17.15-20.63a2.85 2.85 0 0 1-.18-.41z" fill="#61af51"/><path d="M176 88.85s4.56-22.29 13.71-18.25c9.7 4.28.87 22.65 11.39 28.12 10.19 5.3 7.23-33.46 19-28.89 10.52 4.08 6.59 19.74 6.6 27.74 0 3.7-1.25 17.4 5.95 19.5 12.59 3.67 7.37-34.06 23.6-25.49" fill="none" stroke="#fff" stroke-miterlimit="10"/><ellipse cx="176.05" cy="89.01" rx="1.97" ry="2.38" fill="#fff"/><ellipse cx="256.31" cy="92.11" rx="1.97" ry="2.38" fill="#fff"/><ellipse cx="211.31" cy="78.11" rx="1.97" ry="2.38" fill="#fff"/><ellipse cx="226.82" cy="94.49" rx="1.97" ry="2.38" fill="#fff"/><path d="m81.12 69.7 54-31a2.27 2.27 0 0 1 3.4 2v20a5.45 5.45 0 0 1-2.79 4.76L83.36 94.74a2.27 2.27 0 0 1-3.38-2V71.67a2.27 2.27 0 0 1 1.14-1.97z" fill="#68e1fd"/><path fill="#68e1fd" d="M84.97 90.48v11.7l9.76-14.55m36.69-38.33-28.66 15.98"/><path d="M130.66 48 102 64c-1.69.94-.18 3.53 1.51 2.59l28.66-16c1.69-.94.18-3.53-1.51-2.59z" fill="#f2f2f2"/><path fill="#68e1fd" d="M132.67 57.29 89.35 81.45"/><path d="M131.91 56 88.59 80.15c-1.69.94-.18 3.53 1.51 2.59l43.32-24.16c1.69-.94.18-3.53-1.51-2.59z" fill="#f2f2f2"/><ellipse cx="63.31" cy="113.99" rx="18.9" ry="15.44" transform="rotate(-45 63.305 113.988)" fill="none" stroke="#0071bc" stroke-miterlimit="10" stroke-width="3"/><path d="M60.74 130.67a6.9 6.9 0 0 1-4.93-.12l-6.11 21.8c1.1 3.31 4.41 1.62 4.41 1.62l6.75-23.37a.75.75 0 0 1-.12.07z" fill="#2e3192"/></svg>`
</script>

{@html svg(className, width, height)}
