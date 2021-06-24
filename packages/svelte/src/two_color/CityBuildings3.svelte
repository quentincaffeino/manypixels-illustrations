<script>
  let className = "";
  export { className as class };
  export let size = "100%";
  export let width = size;
  export let height = size;

  const svg = (className, width, height) => `<svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" class="manypixels manypixels-CityBuildings3 ${className}" width="${width}" height="${height}"><path d="M111.42 118.53h-34.3v111.83h34.3v-7.1h34.13v-72.38h-34.13v-32.35zm128.61-68.15H207.1v138.38h32.59v26.81h40.68v-64.34h-40.34V50.38zm50.8 58.98h49.88v106.21h-49.88z" opacity=".64" fill="#dddbdb"/><circle cx="292.87" cy="54.71" r="17.11" fill="#ffd200"/><circle cx="292.87" cy="54.71" r="26.74" fill="#ffd200" opacity=".15"/><path fill="#ffd200" d="M121.31 259.72H53.14v-71.77l68.17-20.03v91.8z"/><path fill="#68e1fd" d="M119.8 68.04h68.17v191.68H119.8zm68.18 53.71h68.17v137.97h-68.17z"/><path fill="#fff" opacity=".12" d="M187.98 121.75h68.17v137.97h-68.17z"/><path fill="#68e1fd" d="M256.16 206.98h99.54v52.75h-99.54z"/><path fill="#fff" opacity=".44" d="M187.98 121.75h68.17v16.15h-68.17z"/><rect x="39.85" y="259.72" width="328.85" height="8.3" rx="4.15" fill="#24285b"/><path fill="#68e1fd" d="M119.8 68.04h68.17l-34.09-47.92-34.08 47.92z"/><path opacity=".15" d="M119.8 68.04h68.17l-34.09-47.92-34.08 47.92z"/><path fill="#fff" d="M63 235.95h14.13v23.77H63zm83.73 0h14.13v23.77h-14.13zm81.02 0h14.13v23.77h-14.13zm40.04 0h14.13v23.77h-14.13z"/><path fill="#fff" opacity=".44" d="M65.27 196.8h43.91v6.13H65.27zm0 15.32h43.91v6.13H65.27z"/><path fill="#24285b" d="M87.22 230.36h21.96v18.86H87.22zm220.6-6.92h35.01v24.4h-35.01z"/><path fill="#fff" opacity=".47" d="M131.07 80.03h8.51v126.94h-8.51zm19.07 0h8.51v126.94h-8.51zm18.38 0h8.51v126.94h-8.51z"/><path fill="#68e1fd" d="M118.23 135.09h72v14.55h-72z"/><path opacity=".15" d="M118.23 135.09h72v14.55h-72z"/><path fill="#fff" opacity=".47" d="M198.49 149.65h12.6v16.51h-12.6zm30.03 0h12.6v16.51h-12.6zm-30.03 28.68h12.6v16.51h-12.6zm30.03 0h12.6v16.51h-12.6zm-30.03 28.59h12.6v16.51h-12.6zm30.03 0h12.6v16.51h-12.6z"/><path fill="#24285b" d="M198.49 106.75h28v15h-28zm88.03 88.09h28v12.36h-28z"/></svg>`
</script>

{@html svg(className, width, height)}
