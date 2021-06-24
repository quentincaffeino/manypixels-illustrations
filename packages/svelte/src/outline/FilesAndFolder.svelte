<script>
  let className = "";
  export { className as class };
  export let size = "100%";
  export let width = size;
  export let height = size;

  const svg = (className, width, height) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" class="manypixels manypixels-FilesAndFolder ${className}" width="${width}" height="${height}"><g data-name="#16_files_and_folder_outline"><path fill="#68e1fd" d="M113.07 223.56V100.24h57.16l12.95 11.54h85.03v111.78H113.07z"/><path d="M268.21 224.56H113.07a1 1 0 0 1-1-1V100.24a1 1 0 0 1 1-1h57.16a1 1 0 0 1 .66.25l12.67 11.29h84.65a1 1 0 0 1 1 1v111.78a1 1 0 0 1-1 1zm-154.14-2h153.14V112.78h-84a1 1 0 0 1-.67-.25l-12.66-11.29h-55.81z" fill="#093f68"/><path fill="#ffbc0e" d="M119.708 88.805 250.756 76.44l12.428 131.715-131.048 12.365z"/><path d="M132.13 221.52a1 1 0 0 1-1-.9L118.71 88.9a1 1 0 0 1 .9-1.09l131.05-12.36a1 1 0 0 1 1.09.9l12.42 131.72a1 1 0 0 1-.22.73 1 1 0 0 1-.68.36l-131 12.36zM120.79 89.71 133 219.43l129.06-12.17-12.21-129.73z" fill="#093f68"/><path fill="#fff" d="M132.5 92.66h131.63v119.05H132.5z"/><path d="M264.13 212.72H132.5a1 1 0 0 1-1-1V92.66a1 1 0 0 1 1-1h131.63a1 1 0 0 1 1 1v119.06a1 1 0 0 1-1 1zm-130.63-2h129.63V93.66H133.5z" fill="#093f68"/><path d="M248 109.63h-26.34a1 1 0 1 1 0-2H248a1 1 0 1 1 0 2zm0 12.62h-97.91a1 1 0 0 1 0-2H248a1 1 0 1 1 0 2zm0 12.62h-97.91a1 1 0 0 1 0-2H248a1 1 0 1 1 0 2zm0 12.63h-97.91a1 1 0 0 1 0-2H248a1 1 0 1 1 0 2z" fill="#70cc40"/><path fill="#68e1fd" d="m113.07 223.56 23.65-80.53h72.64l10.7-9.85h76.87l-27.59 90.38H113.07z"/><path d="M269.34 224.56H113.07a1 1 0 0 1-.8-.4 1 1 0 0 1-.16-.88l23.65-80.53a1 1 0 0 1 1-.72H209l10.42-9.59a1 1 0 0 1 .67-.26h76.87a1 1 0 0 1 .8.4 1 1 0 0 1 .16.89l-27.6 90.38a1 1 0 0 1-.98.71zm-154.93-2H268.6l27-88.38h-75.15L210 143.77a1 1 0 0 1-.68.26h-71.85z" fill="#093f68"/><path d="M262.57 212.34h-32.1a1 1 0 0 1 0-2h32.1a1 1 0 0 1 0 2z" fill="#f56132"/><path d="M161.69 109.63h-11.6a1 1 0 0 1 0-2h11.6a1 1 0 0 1 0 2z" fill="#70cc40"/></g></svg>`
</script>

{@html svg(className, width, height)}
