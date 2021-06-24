<script>
  let className = "";
  export { className as class };
  export let size = "100%";
  export let width = size;
  export let height = size;

  const svg = (className, width, height) => `<svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" class="manypixels manypixels-Cocktail ${className}" width="${width}" height="${height}"><ellipse cx="200" cy="132.44" rx="148.44" ry="94.32" fill="#e6e6e6" opacity=".3"/><ellipse cx="199.81" cy="254.35" rx="136.35" ry="7.53" fill="#e6e6e6" opacity=".45"/><path fill="#e6e6e6" d="M93.81 156.71h95.01l-6.6 95.93h-81.81l-6.6-95.93z"/><path fill="#68e1fd" d="m103.2 197.59 3.39 49.23h69.46l3.38-49.23H103.2z"/><rect x="107.89" y="191.28" width="26.79" height="26.79" rx="2.49" transform="rotate(-3.9 121.238 204.67)" fill="#fff" opacity=".44"/><rect x="132.32" y="216.58" width="26.79" height="26.79" rx="2.49" transform="rotate(32.99 145.702 229.935)" fill="#fff" opacity=".44"/><rect x="139.47" y="179.72" width="26.79" height="26.79" rx="2.49" transform="rotate(32.99 152.845 193.09)" fill="#fff" opacity=".44"/><path fill="#24285b" d="m180.843 112.162 3.83.473-16.404 132.84-3.831-.472z"/><circle cx="196.59" cy="73.27" r="23.11" fill="#ffd200"/><path d="M325.51 72a1.53 1.53 0 0 0-1.15-2.54H192.48a1.53 1.53 0 0 0-1.15 2.54l62.32 71.51v97.23l-37.78 11.89H301l-37.78-11.89v-97.22z" fill="#e6e6e6"/><path d="m219.7 93.09 35.36 40.49a4.47 4.47 0 0 0 6.72 0l35.36-40.49z" fill="#68e1fd"/></svg>`
</script>

{@html svg(className, width, height)}
