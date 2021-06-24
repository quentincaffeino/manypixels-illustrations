<script>
  let className = "";
  export { className as class };
  export let size = "100%";
  export let width = size;
  export let height = size;

  const svg = (className, width, height) => `<svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" class="manypixels manypixels-Kyoto ${className}" width="${width}" height="${height}"><circle cx="116.59" cy="71.34" r="25" fill="#ffd200"/><circle cx="116.59" cy="71.34" r="39.07" fill="#ffd200" opacity=".15"/><path fill="#68e1fd" d="M191.57 105.3h10.04v18.81h-10.04z"/><path fill="#fff" opacity=".44" d="M191.57 105.3h10.04v18.81h-10.04z"/><path fill="#68e1fd" d="M130.64 119.6h133.79v9.02H130.64z"/><path opacity=".09" d="M130.64 119.6h133.79v9.02H130.64z"/><path fill="#e6e6e6" d="m94.72 252.32 11.12-17.42h19.59l6.88-14.55h137.13l9.52 21.25h18.54l5.82 10.72H94.72z"/><path fill="#68e1fd" d="M142.21 107.37h14.81v112.97h-14.81zm54.92-7.02c-4.54-.11-47.11-1.25-65.47-5.44v12.46H262.6V94.91c-18.36 4.19-60.93 5.33-65.47 5.44z"/><path fill="#24285b" d="M142.21 188.53h14.81v31.81h-14.81z"/><path fill="#68e1fd" d="M240.42 107.37h14.81v112.97h-14.81z"/><path fill="#24285b" d="M240.42 188.53h14.81v31.81h-14.81zm-43.29-95.66c-4.46 0-45.81-.23-73.64-4.25L126 98s50.41 4.06 71.09 3.18c20.72.82 71.13-3.18 71.13-3.18l2.55-9.36c-27.83 4-69.18 4.22-73.64 4.23z"/></svg>`
</script>

{@html svg(className, width, height)}
