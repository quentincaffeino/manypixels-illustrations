<script>
  let className = "";
  export { className as class };
  export let size = "100%";
  export let width = size;
  export let height = size;

  const svg = (className, width, height) => `<svg data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 400 300" class="manypixels manypixels-TheGreatPyramid ${className}" width="${width}" height="${height}"><defs><linearGradient id="a" x1="281.22" y1="198.95" x2="285.52" y2="192.63" gradientUnits="userSpaceOnUse"><stop offset=".01" stop-color="#fcca4c"/><stop offset="1" stop-color="#de9f3b"/></linearGradient><linearGradient id="b" x1="240.51" y1="140.91" x2="269.99" y2="140.91" xlink:href="#a"/><linearGradient id="c" x1="191.58" y1="250.46" x2="221.05" y2="250.46" xlink:href="#a"/><linearGradient id="d" x1="252.37" y1="236.31" x2="281.84" y2="236.31" xlink:href="#a"/></defs><path d="M198.91 283.92 26.41 182c-5.49-3.08-10.2-8.15-4.85-11.46l173.13-99.8c2.6-1.61 6.54-2.66 9.18-1.13L384.94 174.7c5.49 3.19 6.48 12.1 1 15.29l-164.29 93.77a22.94 22.94 0 0 1-22.74.16z" fill="#fcca4c"/><path fill="url(#a)" d="m257.41 191.63 12.22-7.44 37.03 19.68-12.67 7.88-36.58-20.12z"/><path fill="#68e1fd" d="M165.57 238.15V94.73l-89.02 91.91 89.02 51.51z"/><path fill="#153e42" opacity=".27" d="M165.57 238.15V94.73l-89.02 91.91 89.02 51.51z"/><path fill="#68e1fd" d="m165.57 238.15 90.57-50.16-90.57-93.26v143.42zm141.09-34.28v-58.94l-37.16 39.1 37.16 19.84z"/><path fill="#153e42" opacity=".27" d="M306.66 203.87v-58.94l-37.16 39.1 37.16 19.84z"/><path fill="#68e1fd" d="m306.66 203.87 37.8-19.26-37.8-39.68v58.94z"/><path fill="url(#b)" d="m268.72 134.01-28.21 6.58 8.03 7.22 21.45-11.91-1.27-1.89z"/><path d="M267 106.15V106c-.07-.59.76-.63 1-.13v.06a.5.5 0 0 1 0 .07 100.36 100.36 0 0 1 .73 13 .51.51 0 0 1-1 .23.53.53 0 0 1-.82-.4 85 85 0 0 1 .09-12.68z" fill="#ab9e5a"/><path d="M257.16 116c0-.07.09-.11.13-.17a.42.42 0 0 1 .08-.31c2.43-3.47 7-2 9.09.92a4.27 4.27 0 0 1 1.06 2.37c.07.6-.8.63-1 .1a.47.47 0 0 1-.12-.22 5.13 5.13 0 0 0-.86-1.77 5.74 5.74 0 0 0-2.87-1.35c-1.34-.27-3.86-.54-4.66.94-.29.49-1.16.03-.85-.51z" fill="#575c1c"/><path d="M256.06 112.59c4.13-2.82 10.81.89 11.38 5.66a.41.41 0 0 1-.45.48.4.4 0 0 1-.58-.21c-1.73-4-5.17-6.86-9.68-5.11h-.16c-.57.42-1.04-.41-.51-.82z" fill="#636d27"/><path d="m258.51 109.89.08-.09a1.06 1.06 0 0 1 .84-.2c4.87-.46 8.85 4.44 8.89 9.07a.47.47 0 0 1-.56.48.52.52 0 0 1-.81-.24c-.67-2.05-1.07-4.29-2.62-5.91a7.21 7.21 0 0 0-5.65-2.15c-.59.03-.68-.78-.17-.96z" fill="#746927"/><path d="M260.92 107.6a.5.5 0 0 1 .33-.06c4.91.84 7 5.4 7.1 10v.33c0 .65-1 .64-1 0a.47.47 0 0 1 0-.07v-.22c-.33-4.05-2.43-7.81-6.57-8.92a.5.5 0 0 1 .14-1.06z" fill="#7d7a33"/><path d="M267.93 106.15V106c.07-.59-.76-.63-1-.13v.06a.5.5 0 0 0 0 .07 100.36 100.36 0 0 0-.73 13 .51.51 0 0 0 1 .23.53.53 0 0 0 .82-.4 85 85 0 0 0-.09-12.68z" fill="#ab9e5a"/><path d="M277.75 116c0-.07-.09-.11-.13-.17a.42.42 0 0 0-.08-.31c-2.43-3.47-7-2-9.09.92a4.27 4.27 0 0 0-1.06 2.37c-.07.6.8.63 1 .1a.47.47 0 0 0 .12-.22 5.13 5.13 0 0 1 .86-1.77 5.74 5.74 0 0 1 2.87-1.35c1.34-.27 3.86-.54 4.66.94.29.49 1.16.03.85-.51z" fill="#575c1c"/><path d="M278.84 112.59c-4.13-2.82-10.81.89-11.38 5.66a.41.41 0 0 0 .45.48.4.4 0 0 0 .58-.21c1.73-4 5.17-6.86 9.68-5.11h.16c.54.42 1.05-.41.51-.82z" fill="#636d27"/><path d="m276.39 109.89-.08-.09a1.06 1.06 0 0 0-.84-.2c-4.87-.46-8.85 4.44-8.89 9.07a.47.47 0 0 0 .56.48.52.52 0 0 0 .81-.24c.67-2.05 1.07-4.29 2.62-5.91a7.21 7.21 0 0 1 5.65-2.15c.59.03.64-.78.17-.96z" fill="#746927"/><path d="M274 107.6a.5.5 0 0 0-.33-.06c-4.91.84-7 5.4-7.1 10v.33c0 .65 1 .64 1 0a.47.47 0 0 0 0-.07v-.22c.33-4.05 2.43-7.81 6.57-8.92a.5.5 0 0 0-.14-1.06z" fill="#7d7a33"/><path d="M265.35 136.1c0-.25.84-9.94.67-12.81s-.33-6-.33-6h2.6s.71 16.95 1.71 18.81z" fill="#974c13"/><path fill="url(#c)" d="m219.79 243.57-28.21 6.57 8.02 7.22 21.45-11.91-1.26-1.88z"/><path d="M218 215.7v-.1c-.07-.59.76-.63 1-.13v.06a.5.5 0 0 1 0 .07 100.36 100.36 0 0 1 .73 13 .51.51 0 0 1-1 .23.53.53 0 0 1-.82-.4 85 85 0 0 1 .09-12.73z" fill="#ab9e5a"/><path d="M208.22 225.52c0-.07.09-.11.13-.17a.42.42 0 0 1 .08-.31c2.43-3.47 7-2 9.09.92a4.27 4.27 0 0 1 1.06 2.37c.07.6-.8.63-1 .1a.47.47 0 0 1-.12-.22 5.13 5.13 0 0 0-.86-1.77 5.74 5.74 0 0 0-2.87-1.35c-1.34-.27-3.86-.54-4.66.94-.29.57-1.16.06-.85-.51z" fill="#575c1c"/><path d="M207.13 222.15c4.13-2.82 10.81.89 11.38 5.66a.41.41 0 0 1-.45.48.4.4 0 0 1-.58-.21c-1.73-4-5.17-6.86-9.68-5.11h-.16c-.54.41-1.05-.46-.51-.82z" fill="#636d27"/><path d="m209.58 219.44.08-.09a1.06 1.06 0 0 1 .84-.2c4.87-.46 8.85 4.44 8.89 9.07a.47.47 0 0 1-.56.48.52.52 0 0 1-.81-.24c-.67-2.05-1.07-4.29-2.62-5.91a7.21 7.21 0 0 0-5.65-2.15c-.6.03-.65-.78-.17-.96z" fill="#746927"/><path d="M212 217.15a.5.5 0 0 1 .33-.06c4.91.84 7 5.4 7.1 10v.33c0 .65-1 .64-1 0a.47.47 0 0 1 0-.07v-.22c-.33-4.05-2.43-7.81-6.57-8.92a.5.5 0 0 1 .14-1.06z" fill="#7d7a33"/><path d="M219 215.7v-.1c.07-.59-.76-.63-1-.13v.06a.5.5 0 0 0 0 .07 100.36 100.36 0 0 0-.73 13 .51.51 0 0 0 1 .23.53.53 0 0 0 .82-.4 85 85 0 0 0-.09-12.73z" fill="#ab9e5a"/><path d="M228.81 225.52c0-.07-.09-.11-.13-.17a.42.42 0 0 0-.08-.31c-2.43-3.47-7-2-9.09.92a4.27 4.27 0 0 0-1.06 2.37c-.07.6.8.63 1 .1a.47.47 0 0 0 .12-.22 5.13 5.13 0 0 1 .86-1.77 5.74 5.74 0 0 1 2.87-1.35c1.34-.27 3.86-.54 4.66.94.29.57 1.16.06.85-.51z" fill="#575c1c"/><path d="M229.91 222.15c-4.13-2.82-10.81.89-11.38 5.66a.41.41 0 0 0 .45.48.4.4 0 0 0 .58-.21c1.73-4 5.17-6.86 9.68-5.11h.16c.54.41 1.04-.46.51-.82z" fill="#636d27"/><path d="m227.46 219.44-.08-.09a1.06 1.06 0 0 0-.84-.2c-4.87-.46-8.85 4.44-8.89 9.07a.47.47 0 0 0 .56.48.52.52 0 0 0 .81-.24c.67-2.05 1.07-4.29 2.62-5.91a7.21 7.21 0 0 1 5.65-2.15c.59.03.64-.78.17-.96z" fill="#746927"/><path d="M225 217.15a.5.5 0 0 0-.33-.06c-4.91.84-7 5.4-7.1 10v.33c0 .65 1 .64 1 0a.47.47 0 0 0 0-.07v-.22c.33-4.05 2.43-7.81 6.57-8.92a.5.5 0 0 0-.14-1.06z" fill="#7d7a33"/><path d="M216.42 245.65c0-.25.84-9.94.67-12.81s-.33-6-.33-6h2.6s.67 16.94 1.69 18.79z" fill="#974c13"/><path fill="url(#d)" d="m280.58 229.41-28.21 6.58 8.02 7.22 21.45-11.91-1.26-1.89z"/><path d="M278.83 201.55v-.1c-.07-.59.76-.63 1-.13v.06a.5.5 0 0 1 0 .07 100.36 100.36 0 0 1 .73 13 .51.51 0 0 1-1 .23.53.53 0 0 1-.82-.4 85 85 0 0 1 .09-12.73z" fill="#ab9e5a"/><path d="M269 211.37c0-.07.09-.11.13-.17a.42.42 0 0 1 .08-.31c2.43-3.47 7-2 9.09.92a4.27 4.27 0 0 1 1.06 2.37c.07.6-.8.63-1 .1a.47.47 0 0 1-.12-.22 5.13 5.13 0 0 0-.86-1.77 5.74 5.74 0 0 0-2.87-1.35c-1.34-.27-3.86-.54-4.66.94-.28.57-1.15.06-.85-.51z" fill="#575c1c"/><path d="M267.92 208c4.13-2.82 10.81.89 11.38 5.66a.41.41 0 0 1-.45.48.4.4 0 0 1-.58-.21c-1.73-4-5.17-6.86-9.68-5.11h-.16c-.54.41-1.05-.46-.51-.82z" fill="#636d27"/><path d="m270.37 205.29.08-.09a1.06 1.06 0 0 1 .84-.2c4.87-.46 8.85 4.44 8.89 9.07a.47.47 0 0 1-.56.48.52.52 0 0 1-.81-.24c-.67-2.05-1.07-4.29-2.62-5.91a7.21 7.21 0 0 0-5.65-2.15c-.6.03-.64-.78-.17-.96z" fill="#746927"/><path d="M272.78 203a.5.5 0 0 1 .33-.06c4.91.84 7 5.4 7.1 10v.33c0 .65-1 .64-1 0a.47.47 0 0 1 0-.07v-.22c-.33-4.05-2.43-7.81-6.57-8.92a.5.5 0 0 1 .14-1.06z" fill="#7d7a33"/><path d="M279.79 201.55v-.1c.07-.59-.76-.63-1-.13v.06a.5.5 0 0 0 0 .07 100.36 100.36 0 0 0-.73 13 .51.51 0 0 0 1 .23.53.53 0 0 0 .82-.4 85 85 0 0 0-.09-12.73z" fill="#ab9e5a"/><path d="M289.6 211.37c0-.07-.09-.11-.13-.17a.42.42 0 0 0-.08-.31c-2.43-3.47-7-2-9.09.92a4.27 4.27 0 0 0-1.06 2.37c-.07.6.8.63 1 .1a.47.47 0 0 0 .12-.22 5.13 5.13 0 0 1 .86-1.77 5.74 5.74 0 0 1 2.87-1.35c1.34-.27 3.86-.54 4.66.94.25.57 1.16.06.85-.51z" fill="#575c1c"/><path d="M290.7 208c-4.13-2.82-10.81.89-11.38 5.66a.41.41 0 0 0 .45.48.4.4 0 0 0 .58-.21c1.73-4 5.17-6.86 9.68-5.11h.16c.54.41 1.04-.46.51-.82z" fill="#636d27"/><path d="m288.25 205.29-.08-.09a1.06 1.06 0 0 0-.84-.2c-4.87-.46-8.85 4.44-8.89 9.07a.47.47 0 0 0 .56.48.52.52 0 0 0 .81-.24c.67-2.05 1.07-4.29 2.62-5.91a7.21 7.21 0 0 1 5.65-2.15c.59.03.64-.78.17-.96z" fill="#746927"/><path d="M285.84 203a.5.5 0 0 0-.33-.06c-4.91.84-7 5.4-7.1 10v.33c0 .65 1 .64 1 0a.47.47 0 0 0 0-.07v-.22c.33-4.05 2.43-7.81 6.57-8.92a.5.5 0 0 0-.14-1.06z" fill="#7d7a33"/><path d="M277.21 231.5c0-.25.84-9.94.67-12.81s-.33-6-.33-6h2.6s.67 16.94 1.69 18.79z" fill="#974c13"/></svg>`
</script>

{@html svg(className, width, height)}
