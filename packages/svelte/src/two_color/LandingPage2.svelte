<script>
  let className = "";
  export { className as class };
  export let size = "100%";
  export let width = size;
  export let height = size;

  const svg = (className, width, height) => `<svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" class="manypixels manypixels-LandingPage2 ${className}" width="${width}" height="${height}"><path fill="#e6e6e6" opacity=".22" d="M86.02 66.94h279.16v199.15H86.02z"/><path fill="#e6e6e6" d="M63.21 46.49h279.16v199.15H63.21z"/><circle cx="82.19" cy="64.79" r="6.04" fill="#ffd200"/><circle cx="99.21" cy="64.79" r="6.04" fill="#68e1fd"/><circle cx="115.5" cy="64.79" r="6.04" fill="#24285b"/><path fill="#fff" d="M254.87 58.74h69.11V72.7h-69.11z"/><path fill="#c1c1c1" d="M203.72 93.81h36.6v8.68h-36.6z"/><path fill="#c1c1c1" opacity=".43" d="M111.59 93.81h30.26v8.68h-30.26z"/><path fill="#fff" opacity=".43" d="M248.4 93.81h29.36v8.68H248.4zm36.77 0h29.36v8.68h-29.36z"/><circle cx="91.43" cy="100.01" r="11.53" fill="#c1c1c1" opacity=".36"/><path fill="#68e1fd" d="M88.23 187.19h63.15v18.44H88.23z"/><path fill="#c1c1c1" d="M88.23 125.47h62.13v7.66H88.23z"/><path fill="#c1c1c1" opacity=".44" d="M88.23 145.54h97.11v7.66H88.23zm0 16.78h97.11v7.66H88.23z"/><path d="M190.24 245.64s-.11-.7-.27-2c-8.64-68.55 45-129.08 114.12-129.08h38.28v131.08z" fill="#fff" opacity=".18"/><path fill="#ffd200" d="M230.02 129.3h86.55v65.87h-86.55z"/><path fill="#24285b" d="m230.02 195.17-14.3 17.45h115.07l-14.22-17.45h-86.55z"/><path fill="#fff" opacity=".43" d="M240.32 137.04h66.3v47.32h-66.3z"/><path fill="#24285b" d="M215.72 212.62h115.06v6.3H215.72z"/><path fill="#fff" opacity=".15" d="M215.72 212.62h115.06v6.3H215.72z"/><path fill="#fff" opacity=".06" d="m234.87 197.72-7.74 10.47h91.57l-6.3-10.47h-77.53z"/><path fill="#fff" opacity=".49" d="M241.09 184.36 259.13 151l15.32 25.87 13.78-16.17 18.39 23.66h-65.53z"/><circle cx="275.68" cy="152.06" r="5.32" fill="#fff"/></svg>`
</script>

{@html svg(className, width, height)}
