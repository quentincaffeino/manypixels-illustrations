<script>
  let className = "";
  export { className as class };
  export let size = "100%";
  export let width = size;
  export let height = size;

  const svg = (className, width, height) => `<svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" class="manypixels manypixels-SwimmingSuit ${className}" width="${width}" height="${height}"><ellipse cx="200" cy="130.99" rx="117.3" ry="92.34" fill="#e6e6e6" opacity=".3"/><path fill="#e6e6e6" d="M268.89 258.3H159.9v-11.64h108.99z"/><path fill="#ccc" d="M255.9 246.61h-96v-11.64h96z"/><path d="M241.86 222.07s-10.18-2.78-12.39-12.26c0 0 15.77-3.18 16.22 13.09z" fill="#68e1fd" opacity=".58"/><path d="M243.11 221.06s-7.12-11.24-.86-21.76c0 0 12 7.62 6.67 21.78z" fill="#68e1fd" opacity=".73"/><path d="M244.94 221.07s3.76-11.88 15.11-14.13c0 0 2.13 7.71-7.35 14.16z" fill="#68e1fd"/><path fill="#24285b" d="m237.56 220.8 2.06 14.11 13 .06 1.91-14.1-16.97-.07z"/><ellipse cx="200" cy="262.54" rx="93.81" ry="8.17" fill="#e6e6e6" opacity=".45"/><path d="m194.88 193.74.41-33.73s.2-26-20.32-22.4l-1.86 2.39s-8.31 30.63 2 53.75zm9.82 0-.42-33.74s-.2-26 20.33-22.4l1.86 2.38s8.31 30.63-2 53.75zM159.9 57.8h77.72l2.06 21.4s-6.34 2.06-7.19 5-11.3 32.5-12.16 35.8-.94 11.3-.94 11.3h-42.2s1.54-10.27 1.2-12S168 85 166.23 83.31s-6.33-5.65-6.33-5.65z" fill="#24285b"/><path fill="#24285b" d="M190.09 43.2h19.4v17.35h-19.4z"/><path fill="#e6e6e6" d="M197.6 152.63h4.38v109.91h-4.38z"/><path d="m177.22 131-4 9s16.19-1.38 22.18 20h8.87s2.5-13.34 22.19-20l-5.54-8.74z" fill="#68e1fd"/><ellipse cx="185" cy="94.95" rx="16.21" ry="13.07" fill="#68e1fd"/><ellipse cx="214.57" cy="94.95" rx="16.21" ry="13.07" fill="#68e1fd"/><path fill="#68e1fd" d="m220.16 84.17-.45-26.37h4.68l5.36 35.5-9.59-9.13zm-40.75 0 .46-26.37h-4.68l-5.37 35.5 9.59-9.13z"/><path fill="#e6e6e6" d="M174.28 261.17h51.02v4.79h-51.02z"/><ellipse cx="202.46" cy="43.5" rx="4.23" ry="29.14" transform="rotate(-70.74 202.471 43.5)" fill="#ffd200"/><path d="M187.86 37.49c2.43-7 10.47-10.47 18-7.86S217.42 40 215 47z" fill="#ffd200"/><path opacity=".08" d="M194.19 234.97h3.4v23.33h-3.4z"/></svg>`
</script>

{@html svg(className, width, height)}
