<script>
  let className = "";
  export { className as class };
  export let size = "100%";
  export let width = size;
  export let height = size;

  const svg = (className, width, height) => `<svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" class="manypixels manypixels-Iphone ${className}" width="${width}" height="${height}"><ellipse cx="200.49" cy="251.93" rx="160.51" ry="21.62" fill="#e6e6e6" opacity=".45"/><path fill="#c9c9c9" d="M72.08 46.45h114.13v204.69H72.08z"/><path fill="#fff" d="M81.52 56.79h94.47v182.04H81.52z"/><path fill="#c9c9c9" d="M98.28 53.21h60.26v13.4H98.28z"/><path opacity=".12" d="M119.49 54.45h32v4.67h-32z"/><circle cx="107.9" cy="57.29" r="5.21" fill="#fff"/><path fill="#ffd200" d="M69.09 75.77h3v20.26h-3zm0 25.78h3v40.73h-3zm117.12-15.66h3v40.73h-3z"/><path fill="#c9c9c9" d="M326.47 251.14H212.34V46.45h114.13z"/><path fill="#ffd200" d="M329.47 96.02h-3V75.76h3zm0 46.27h-3v-40.73h3zm-117.13-15.66h-3V85.9h3z"/><path fill="#68e1fd" d="M102.69 185.38h52.01v7.49h-52.01zm16.8-86.12h14.44v27.49h-14.44z"/><ellipse cx="128.15" cy="149.54" rx="33.7" ry="7.25" fill="#e6e6e6" opacity=".45"/><path fill="#fff" opacity=".46" d="M138.19 185.38h16.51v7.49h-16.51z"/><path fill="#24285b" d="M110.79 104.7h33.02v44.09h-33.02z"/><path fill="#fff" d="m122.24 123.29 6.48-7.46-2.44 7.38 3.91 4.23-5.16 6.64 1.97-6.36-4.76-4.43z"/><path opacity=".12" d="M226.7 59.12h39.32v36.9H226.7z"/><circle cx="238.12" cy="69.29" r="5.21" fill="#fff"/><circle cx="254.46" cy="69.29" r="5.21" fill="#68e1fd"/><circle cx="238.12" cy="84.87" r="5.21" fill="#fff"/><circle cx="254.46" cy="84.87" r="5.21" fill="#fff"/><circle cx="269.21" cy="144.92" r="19.96" opacity=".12"/></svg>`
</script>

{@html svg(className, width, height)}
