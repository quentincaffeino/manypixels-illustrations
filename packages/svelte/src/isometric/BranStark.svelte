<script>
  let className = "";
  export { className as class };
  export let size = "100%";
  export let width = size;
  export let height = size;

  const svg = (className, width, height) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" class="manypixels manypixels-BranStark ${className}" width="${width}" height="${height}"><defs><linearGradient id="a" x1="143.36" y1="260.28" x2="179.46" y2="208.87" gradientTransform="matrix(-1 0 0 1 381.48 0)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#fff" stop-opacity="0"/><stop offset="1"/></linearGradient></defs><g data-name="Layer 2" style="isolation:isolate"><path d="M186.16 288.26 42 203.05c-4.59-2.58-8.53-6.81-4.05-9.58l144.7-83.4c2.17-1.34 5.47-2.23 7.68-.94L341.65 197c4.59 2.67 5.41 10.11.82 12.78l-137.31 78.35a19.17 19.17 0 0 1-19 .13z" fill="#adce46"/><path d="m192.69 261.74-103.1-60.93c-3.28-1.84-6.1-4.87-2.9-6.85l103.47-59.63c1.55-1 3.91-1.59 5.49-.68l108.23 62.81c3.28 1.91 3.87 7.23.59 9.14l-98.18 56.05a13.71 13.71 0 0 1-13.6.09z" fill="#93ad23"/><path opacity=".5" fill="url(#a)" style="mix-blend-mode:multiply" d="m214.4 191.34 82.58 44.37-69.81 39.85-92.2-53.79 79.43-30.43z"/><path d="M140.73 210.67c-.27-1.35-27-73.32-27-73.32s29.38 58.77 29.38 59.58-2.38 13.74-2.38 13.74zm2.42-20.76s-27.77-85.72-27.23-86.53 30.46 74.94 30.46 74.94z" fill="#68e1fd"/><path d="M147.74 175.18c0-.63-31.81-71.8-31.81-71.8l33.7 64.7z" fill="#68e1fd"/><path d="M120.51 78.85c.27.81 29.11 89.23 29.11 89.23s7-9.17 7-10.51-36.11-78.72-36.11-78.72z" fill="#68e1fd"/><path fill="#68e1fd" d="m149.62 155.41-21.16-93.27 26.55 85.72-5.39 7.55zm8.63-18.06s-23.72-91.12-22.91-89.77 37.2 107.83 37.2 107.83l-6.47 4.59z"/><path fill="#68e1fd" d="m166.34 143.28-16.72-97.05 20.76 86.8-4.04 10.25z"/><path d="M155 27.09c-.27 1.08 12.4 110.26 12.4 110.26l7.28-1.35z" fill="#68e1fd"/><path d="M169 20.62c0 1.08 14.29 118.66 14.29 118.66s-10.78 1.12-10.78 0S169 20.62 169 20.62z" fill="#68e1fd"/><path d="M182 20.62c0 .54 7 114.29 7 114.29l-8.09-3.49z" fill="#68e1fd"/><path d="m191.14 13.61 5.12 118.61s-10.78-4.85-11.32-4.85 6.2-113.76 6.2-113.76z" fill="#68e1fd"/><path fill="#68e1fd" d="m203.81 30.6-11.86 95.96 13.21-1.07-1.35-94.89z"/><path d="M198.39 159.87c.27-2.16 19.44-113.64 19.44-113.64s-14.23 115.44-14.25 116.3c-.25 9.68-5.19-2.66-5.19-2.66z" fill="#68e1fd"/><g opacity=".47" fill="#5f5d51"><path d="M140.73 210.67c-.27-1.35-27-73.32-27-73.32s29.38 58.77 29.38 59.58-2.38 13.74-2.38 13.74zm2.42-20.76s-27.77-85.72-27.23-86.53 30.46 74.94 30.46 74.94z"/><path d="M147.74 175.18c0-.63-31.81-71.8-31.81-71.8l33.7 64.7z"/><path d="M120.51 78.85c.27.81 29.11 89.23 29.11 89.23s7-9.17 7-10.51-36.11-78.72-36.11-78.72z"/><path d="m149.62 155.41-21.16-93.27 26.55 85.72-5.39 7.55zm8.63-18.06s-23.72-91.12-22.91-89.77 37.2 107.83 37.2 107.83l-6.47 4.59z"/><path d="m166.34 143.28-16.72-97.05 20.76 86.8-4.04 10.25z"/><path d="M155 27.09c-.27 1.08 12.4 110.26 12.4 110.26l7.28-1.35z"/><path d="M169 20.62c0 1.08 14.29 118.66 14.29 118.66s-10.78 1.12-10.78 0S169 20.62 169 20.62z"/><path d="M182 20.62c0 .54 7 114.29 7 114.29l-8.09-3.49z"/><path d="m191.14 13.61 5.12 118.61s-10.78-4.85-11.32-4.85 6.2-113.76 6.2-113.76z"/><path d="m203.81 30.6-11.86 95.96 13.21-1.07-1.35-94.89z"/><path d="M198.39 159.87c.27-2.16 19.44-113.64 19.44-113.64s-14.23 115.44-14.25 116.3c-.25 9.68-5.19-2.66-5.19-2.66z"/></g><path d="m200.39 158.85 4.46-76.75-10.41 67.23 7.14-84.72-11.9 71V51.76c0 .89-6.54 94.75-6.54 94.75L179 53.25l-4.76 89.81L168.27 59s2.38 75.21 2.08 74.32-12.49-66-12.49-66l4.76 79.21-22.32-63.24 12.79 69.61-19.93-52.43 13.68 74.05-23.5-56.42s17 79.44 17.85 82.41-4.46 8.92-3.57 9.22 22.31-33.91 22.31-33.91l18.74-19z" fill="#68e1fd"/><path fill="#a09c93" d="m248.28 190.43 3.46 41.11-6.13-38.61"/><path fill="#68e1fd" d="m259.95 215.27 1.48 15.05-9.69-12.42-1.16 11.51-6.57-14.14.66 20.42-5.9-17.79-1.99 23.34-7.15-19.04-3.6 20.24-6.34-9.58-5.02 18.57-3.53-12.82-9.29 12.82-5.95-8.99-4.21 6.03-8.14-10.68-2.32 7.23-6.62-13.48-1.5 9.7-6.14-11.67-9.08.75h-10.85l2.67-3.38-8.42 1.15 1.15-5.15-7.1.88 4.69-23.17 4.3-11.17 3.65-7.29-4.7-21.15 1.62-14.01 11.03 16.31-2.58-19.22 14.35 15.75-2.37-20.21 10.09 13.49-2.91-31.4 9.36 26.11 9.82-23.48 3.62 28.27 9.91-17.07 2.38 26.28 5.19-27.56.87 36.76 8.82-32.19-.82 32.26 11.94-9.54-3.97 15.38 10.35-5.84-1.22 12.31 10.84-1.25 2.14 13.85 8.21 19.23z"/><path fill="#382a1c" opacity=".4" d="m259.95 215.27 1.48 15.05-9.69-12.42-1.16 11.51-6.57-14.14.66 20.42-5.9-17.79-1.99 23.34-7.15-19.04-3.6 20.24-6.34-9.58-5.02 18.57-3.53-12.82-9.29 12.82-5.95-8.99-4.21 6.03-8.14-10.68-2.32 7.23-6.62-13.48-1.5 9.7-6.14-11.67-9.08.75h-10.85l2.67-3.38-8.42 1.15 1.15-5.15-7.1.88 4.69-23.17 4.3-11.17 3.65-7.29-4.7-21.15 1.62-14.01 11.03 16.31-2.58-19.22 14.35 15.75-2.37-20.21 10.09 13.49-2.91-31.4 9.36 26.11 9.82-23.48 3.62 28.27 9.91-17.07 2.38 26.28 5.19-27.56.87 36.76 8.82-32.19-.82 32.26 11.94-9.54-3.97 15.38 10.35-5.84-1.22 12.31 10.84-1.25 2.14 13.85 8.21 19.23z"/><path d="M255.35 214.45c0 .43 1.64 4.69 3.22 8.69 1.46 3.7 2.86 7.18 2.86 7.18l-9.7-12.43-.82-16.52-9.53-11.89 4.23 11.89v12.75l1 5.07 1 5.29 4.77 15.45-8.38-17-2.63-11.29-3.45-11.94-7.49-9.29.46 5.62 3.26 16.97-.33 6.9 4.95 22.56-8.33-23.22-4.44 23.2-1-24.55-8.31 33.87-2-20.22L209 253.4l-4.58-18.69-3.85 17.87 1.3-25.48.43-16.12-4.46 20.56 1.1-28.86 18.29-6.24 4.87-10.83 19.72-3.47 9.93 9.17 6.08 14.1 2.14 9.86-5.37-10z" fill="#5f5d51"/><path d="m155.93 193.8 51.89-28.16 31 18.71 9.47 7.35s-15.29 11.06-15.42 11.5-9.29 6.17-9.29 6.17l-20.9 2-6.49 2.63z" fill="#68e1fd"/><path d="m155.93 193.8 51.89-28.16 31 18.71 9.47 7.35s-15.29 11.06-15.42 11.5-9.29 6.17-9.29 6.17l-20.9 2-6.49 2.63z" fill="#382a1c" opacity=".55"/><path d="M189.87 96.75s-3.41-1.49-3-3.63a3.17 3.17 0 0 1 3.84-2.77c1.71.43 4.1 1.93 3 4.8-.71 1.92-3.84 1.6-3.84 1.6z" fill="#5f5d51"/><ellipse cx="177.84" cy="79.44" rx="2.86" ry="3.94" fill="#5f5d51"/><path fill="#68e1fd" d="m191.69 109.02-4.84 65.19h-3.52l4.88-65.62 3.48.43zm-9.55-12.9s.57 72.89 0 73.18-3.44 1-3.44 1l-1.58-73.53z"/><path d="M155.64 94.83c1.43 1.41 23 72 23 72.74a31.66 31.66 0 0 1-1.52 4.56l-23.77-76" fill="#68e1fd"/><path d="M136.88 127.48c.72.14 7.59 2.58 7.59 2.58l24.78 14.06 29.17 22.17-36.18-19.4-26.71-17.54m.92 13.65c.86.14 58.86 26.21 58.86 26.21L149.05 152l-13.71-7" fill="#68e1fd"/><path d="M146.62 112.14c.14.45 3.88 9 3.88 9l1.7 1s23.77 60.15 23.2 60.72-4-1.58-4-1.58l-23.92-58.57-2.58-8.88" fill="#68e1fd"/><path fill="#382a1c" opacity=".4" d="m191.69 109.02-4.84 65.19h-3.52l4.88-65.62 3.48.43zm-9.55-12.9s.57 72.89 0 73.18-3.44 1-3.44 1l-1.58-73.53z"/><path d="M155.64 94.83c1.43 1.41 23 72 23 72.74a31.66 31.66 0 0 1-1.52 4.56l-23.77-76" fill="#382a1c" opacity=".4"/><path d="M136.88 127.48c.72.14 7.59 2.58 7.59 2.58l24.78 14.06 29.17 22.17-36.18-19.4-26.71-17.54m.92 13.65c.86.14 58.86 26.21 58.86 26.21L149.05 152l-13.71-7" fill="#382a1c" opacity=".4"/><path d="M146.62 112.14c.14.45 3.88 9 3.88 9l1.7 1s23.77 60.15 23.2 60.72-4-1.58-4-1.58l-23.92-58.57-2.58-8.88" fill="#382a1c" opacity=".4"/><path d="m234.05 185.2 26.53-7.27 1.25 5.51s-1.06 3.63 1.76 4 0-4.22 0-4.22l-1.41-6.56 8.21-2.23h2.34l1.64-1.41a5.79 5.79 0 0 1 2.58 0c1.06.35.7-3.52 0-4.1s-2.58 0-2.58 0l-.35 1.64s-2.93-.12-3.4.47-8.67 2.93-8.67 2.93l-2.11-7.39s.12-3.75-1.52-3.63.35 4.34.35 4.34l1.17 7L225 183.2l6 3.28z" fill="#68e1fd"/><path d="m226.95 181.58 1.67-27.46 5.62.59s3.1 2.17 4.34-.38-4-1.36-4-1.36l-6.67-.78.54-8.49.76-2.22-.8-2a5.79 5.79 0 0 1 .83-2.44c.67-.89-3.1-1.8-3.88-1.32s-.83 2.44-.83 2.44l1.47.84s-1.06 2.74-.65 3.37 0 9.16 0 9.16l-7.67-.38s-3.51-1.32-3.93.27 4.22 1.07 4.22 1.07l7 1.16-2.79 35.83 5-4.6z" fill="#68e1fd"/><path d="m223 181.07 13.17-24.15 4.84 2.92s1.89 3.28 4.09 1.5-3-2.93-3-2.93l-5.7-3.54 4.09-7.46 1.63-1.69.13-2.16a5.79 5.79 0 0 1 1.79-1.86c1-.52-2-2.95-3-2.85s-1.79 1.86-1.79 1.86l.94 1.39s-2.12 2-2 2.77-3.91 8.28-3.91 8.28l-6.78-3.6s-2.62-2.69-3.67-1.42 3.37 2.76 3.37 2.76l5.88 4-17.74 31.26 6.51-2z" fill="#68e1fd"/><path d="m224 182.93 18.87-20 3.94 4.05s1 3.65 3.58 2.49-2.2-3.6-2.2-3.6l-4.61-4.87 5.85-6.17 2-1.22.67-2.06a5.79 5.79 0 0 1 2.2-1.34c1.08-.25-1.23-3.37-2.14-3.5S250 148 250 148l.55 1.58s-2.56 1.43-2.66 2.17-5.88 7-5.88 7l-5.65-5.21s-1.85-3.26-3.19-2.31 2.56 3.52 2.56 3.52l4.66 5.39-25.08 25.74 6.81-.31z" fill="#68e1fd"/><path d="m237.23 190.85 18-26 5.17 3.93s1.75 4 4.49 2.21-3.11-3.72-3.11-3.72l-6.08-4.75 5.59-8 2.07-1.73.41-2.45a6.65 6.65 0 0 1 2.27-1.9c1.19-.47-2-3.62-3-3.61s-2.27 1.9-2.27 1.9l.9 1.71s-2.67 2.06-2.65 2.92-5.48 9-5.48 9l-7.31-4.95s-2.66-3.39-4-2.08 3.51 3.56 3.51 3.56l6.22 5.33-24.1 33.52 7.69-1.52z" fill="#68e1fd"/><g opacity=".63" fill="#382a1c"><path d="m234.05 185.2 26.53-7.27 1.25 5.51s-1.06 3.63 1.76 4 0-4.22 0-4.22l-1.41-6.56 8.21-2.23h2.34l1.64-1.41a5.79 5.79 0 0 1 2.58 0c1.06.35.7-3.52 0-4.1s-2.58 0-2.58 0l-.35 1.64s-2.93-.12-3.4.47-8.67 2.93-8.67 2.93l-2.11-7.39s.12-3.75-1.52-3.63.35 4.34.35 4.34l1.17 7L225 183.2l6 3.28z"/><path d="m226.95 181.58 1.67-27.46 5.62.59s3.1 2.17 4.34-.38-4-1.36-4-1.36l-6.67-.78.54-8.49.76-2.22-.8-2a5.79 5.79 0 0 1 .83-2.44c.67-.89-3.1-1.8-3.88-1.32s-.83 2.44-.83 2.44l1.47.84s-1.06 2.74-.65 3.37 0 9.16 0 9.16l-7.67-.38s-3.51-1.32-3.93.27 4.22 1.07 4.22 1.07l7 1.16-2.79 35.83 5-4.6z"/><path d="m223 181.07 13.17-24.15 4.84 2.92s1.89 3.28 4.09 1.5-3-2.93-3-2.93l-5.7-3.54 4.09-7.46 1.63-1.69.13-2.16a5.79 5.79 0 0 1 1.79-1.86c1-.52-2-2.95-3-2.85s-1.79 1.86-1.79 1.86l.94 1.39s-2.12 2-2 2.77-3.91 8.28-3.91 8.28l-6.78-3.6s-2.62-2.69-3.67-1.42 3.37 2.76 3.37 2.76l5.88 4-17.74 31.26 6.51-2z"/><path d="m224 182.93 18.87-20 3.94 4.05s1 3.65 3.58 2.49-2.2-3.6-2.2-3.6l-4.61-4.87 5.85-6.17 2-1.22.67-2.06a5.79 5.79 0 0 1 2.2-1.34c1.08-.25-1.23-3.37-2.14-3.5S250 148 250 148l.55 1.58s-2.56 1.43-2.66 2.17-5.88 7-5.88 7l-5.65-5.21s-1.85-3.26-3.19-2.31 2.56 3.52 2.56 3.52l4.66 5.39-25.08 25.74 6.81-.31z"/><path d="m237.23 190.85 18-26 5.17 3.93s1.75 4 4.49 2.21-3.11-3.72-3.11-3.72l-6.08-4.75 5.59-8 2.07-1.73.41-2.45a6.65 6.65 0 0 1 2.27-1.9c1.19-.47-2-3.62-3-3.61s-2.27 1.9-2.27 1.9l.9 1.71s-2.67 2.06-2.65 2.92-5.48 9-5.48 9l-7.31-4.95s-2.66-3.39-4-2.08 3.51 3.56 3.51 3.56l6.22 5.33-24.1 33.52 7.69-1.52z"/></g><path fill="#a09c93" d="m213.66 171.06 9.78 33.53-5.89-1.31-7.56-38.3 3.67 6.08z"/><path fill="#a09c93" d="m193.88 172.13 1.43.57 33.91 13.49 11.34 8.7-4.3 4.32-9.18-9.73m-39.57-12.01 42.93 22.24-4.23 3.67-38.7-25.91z"/><path fill="#5f5d51" d="m156.9 190.43-1.48 2 35.5 17.75 14.3 2.13-48.32-21.88z"/><path d="M171.2 183c0 .06 16.31 22.9 16.31 22.9l8.39 2.19-18.78-28.16zm12.35-4.38 12.35 14.79 21.65 9.87-8.57 3.96-15.1-11.03-10.33-17.59zm53.23 16.11-44.21-19.23 37.87 22.68 6.34-3.45z" fill="#5f5d51"/><path d="m201.77 169.16 35 12.26 11.5 9s-1.73 2.68-2.67 2.51-43.83-23.77-43.83-23.77z" fill="#a09c93"/><path d="M215.27 165c.47.49 17.51 31.06 17.51 31.06l4-1.31zm-27.02 12.47-10.08 4.04 40.49 9.81-30.41-13.85z" fill="#5f5d51"/><path fill="#5f5d51" d="m207.6 165.64-8.29 3.52 17.4 6.34 11.1 1.12-20.21-10.98z"/><path d="M165.33 185.67c-.37-.31-5.17 3.81-5.17 3.81l43.42 17.77-8.27-6.76zm45.81 18.92-35.73-21.68 8.14-4.29 27.59 25.97zm29.42-9.7-1 19.23 4.44 27.12s-8-27.12-8-27.94.3-14.09.3-14.09zm-10.12 4.82-.89 11.95-1.15 6.41 8.38 28.1-8.38-18.24-3.37-10.03 1.18-14.52m-2.77 1.21-3.92 18.35 1.96 14.19-2.82 7.24-1.95-18.25-3.15-8.05 3.99-14.79m-8.57 3.96 1.01 26.11-2.63 20.06-1.32-21.87v-24.3" fill="#a09c93"/><path d="M212.79 135.78s-2.08-6.23-4.15-13.85c0 0-1.62-2.08-.81-3s3.35 0 2.37 2.54c0 0 3.29 7.73 3.75 13 0 0 2.08 1.38 1 2.77s-3.31-.19-2.16-1.46z" fill="#5f5d51"/><path d="m211.44 124.72 10.12-7.62a58.39 58.39 0 0 1 3.58-5c.35-.12 2.88 4.38 2.65 5s-4.38 1.33-4.38 1.33l-10.81 8.28s-27.39 25-49.89 43.35-19.27 16.15-19.27 16.15 39.18-41.21 66.5-61.17" fill="#5f5d51"/><ellipse cx="135.52" cy="128.2" rx="3.22" ry="2.72" fill="#5f5d51"/><circle cx="135.34" cy="143.63" r="3.4" fill="#5f5d51"/><path d="M141.75 129.92c.43.14 8-7.16 8-7.16l-8.88 17.47-.86-1.29zm6.59 9.74-8.34 16.4a21.06 21.06 0 0 0 6.78-5.23c2.85-3.44 1.56-11.17 1.56-11.17z" fill="#5f5d51"/><ellipse cx="145.76" cy="112.14" rx="2.58" ry="3.22" fill="#5f5d51"/><path d="m155.93 116.31-14.18 8.31s4.67 1.83 8 .86 6.18-9.17 6.18-9.17z" fill="#5f5d51"/><ellipse cx="154.78" cy="94.76" rx="2.58" ry="3.22" fill="#5f5d51"/><path d="M179.27 80.23c-.14.57.72 13.29.72 13.29l6.86-2.52-4.71 5.16-5.88 1.84-3.87-1.21 4.87-2V81.37m-9.56 22.34h-3.98l-11.79 8.75-1.43 4.64 17.2-13.39zm23.99-8.88v12.69s2.56-1.71 3.31-3.63.21-2.88 1.28-2.72 2.56-.37 2 1.23a9 9 0 0 1-6.61 6.61c-4.8 1.17-9.6-.32-10.13-1.17s.53-2.35 1.39-2.35 1 1 1.6 1.17a7.83 7.83 0 0 0 4.69 1.17l.32-13" fill="#5f5d51"/><path d="M234.84 223.46s.51 3.91 2.87 5.44 10.66 3.71 9.35 6.77-6.68 3.49-9.35 2.84-11.91-6.65-11.91-6.65l1.46-13.22M221 232.15s.51 3.91 2.87 5.44 10.66 3.71 9.35 6.77-6.68 3.49-9.35 2.84-11.91-6.65-11.91-6.65l1.46-13.22" fill="#1e2128"/><path d="M198.93 139s4.77 4.6 3.32 7.34-7.24 3.78-7.24 3.78l-4.44-5.56 1.55-4.67" fill="#e88f80"/><path d="M205.77 165.29S229 173 232.84 183.42s4.85 40.76 2.08 42.79c0 0-10.66 1.26-14.63-7.26 0 0-.67-13.59-.11-22.87 0 0-12.06-.07-19.7-6.38-4.55-3.76-6.52-21.74-3.82-23.81s7.63-11.42 9.11-.6z" fill="#353942"/><path d="M202.08 169.87s16.38 6.25 20.21 16.69 4.18 48.06 1.41 50.09c0 0-9 3.58-13-4.94 0 0-2.88-24.25-2.32-33.53a64.16 64.16 0 0 1-17.38-9.69c-4.55-3.76-4.54-16.81-1.83-18.88s11.44-10.61 12.91.26z" fill="#353942"/><path d="M196.06 147.83s.21-3.36-2.1-5-8.08-4.1-9.57-3 1.74 5.7 1.74 5.7-4.85 4.12-5.84 7.6 3.84 19.42 5.47 22.14 22.11 10.42 23.31 10.06 6.56-6.72 5.8-7.4-12-4.77-11.7-5.71c0 0 7.06.3 6.76-1.69s-.86-4.08-.86-4.08 10.55 10.3 11.9 10 5.83-1.86 5.83-2.74S211 158.14 211 157.4s-2.8-16.72-4.56-18.36c-4.28-4-5.68-.77-5.86-1.93s-2.39 1-1.15 4.47.47 6.12-3.37 6.25z" fill="#754c24"/><path d="M197.4 149.23s-7.38 3.57-2 10.94c3.47 4.73-7.79 4.32-4.84 13.29s19.85 19.28 20.05 27.48 1.29 39.61 1.29 39.61-3.8 3.24-13.19 0-8.38-16-18.59-16.8S166.6 215 166.39 210s11.69-18.36 10.22-29.21.56-31.9 9.51-35.19zm2.45-.77c.46-.58 5.72-6.41 7.65-4.57s3.5 13.51 3.5 13.51l13.43 13.86a113.07 113.07 0 0 0-4.12-15.69c-2.42-6.47-11.4-17.38-16-18.77a23.18 23.18 0 0 0-6.63-.53" fill="#5e3615"/><path d="M200.31 129.25s2.31 11.8-2.91 14.26c-3.81 1.79-6.52-3.14-7.19-6.2a10.35 10.35 0 0 1 3.64-9.78c2.46-2.06 5.75-1.88 6.46 1.72z" fill="#ffac99"/><path d="M189.34 122.54c6.06-2.64 10.65-.73 12.19 5.26s.32 6.15-.67 7.63l-1.19-7.84a5.64 5.64 0 0 1-1.32 4l-.79-2.14a7.21 7.21 0 0 1-1.89 3.9 1.57 1.57 0 0 1-2.62-.23 4.27 4.27 0 0 0-.87 3.25 19.26 19.26 0 0 1-.23 3.15.46.46 0 0 0-.25.09c-.53-.36 1.23 1.67.14 1.51-11.33-1.61-10.34-15.12-2.5-18.58z" fill="#000101"/><path d="M188.16 135.16a2 2 0 0 1 2.95-.08 6.47 6.47 0 0 1 1.66 2.92c1.08.36.55 2.11-.65 1.88-1.78-.35-5.52-2.42-3.96-4.72z" fill="#ffac99"/><path d="M182.41 142.87a9 9 0 0 1 1.07 0 5 5 0 0 1-1.14-1.87c-.25-.8.53-1.34 1.23-1.23.26 0 .5.12.75.18a1.26 1.26 0 0 1 .27-.82c.84-1.13 2-.19 2.81.46l.11.1a1.13 1.13 0 0 1 1.51-.09c.51.48 1 1 1.43 1.5a1 1 0 0 1 1.56-.26 8.79 8.79 0 0 1 1.28 1.65 1 1 0 0 1 1.78-.17 12.32 12.32 0 0 1 1.26 5.24c2.21 0 3.91-.95 3.05-4.58a1 1 0 0 1 .61-1.14 1 1 0 0 1-.39-.61c1-1.23 1.09-2.94 1.07-4.58.59-.78 1.93-.06 1.71.93l-.21.93c.72 0 1.45.75.94 1.48l-1.34 1.89a1.17 1.17 0 0 1-.54.41.92.92 0 0 1 .08.17c.91 3.88-1.13 7.6-5.44 7.39-2.77-.14-5.22-1.74-7.83-2.51-2.36-.69-4.63-.78-6.35-2.72a1 1 0 0 1 .72-1.75z" fill="#a5744c"/><path d="M225.52 174.36 230 179c.8.83-.06 4.35-1.18 4.35s-3.3-2.78-3.3-2.78.38 2.16-.52 2.3-.56-2.85-.9-3.34a32.35 32.35 0 0 0-2.1-3.21l.31-.39a11.82 11.82 0 0 0 3.21-1.57zm-12.04 5.48c1.18.68 4.23 2.5 4.62 3.12s-1.64-.08-1.58.26 3 2.46 3 3.8.55 2-.43 2.47-3.7-1.43-4.77-2a32.08 32.08 0 0 1-4-3.58 14.33 14.33 0 0 0 3.16-4.07z" fill="#ffac99"/><path d="m207.67 171.84.63-.05c7.81 4.38 14.58 10.39 16.29 19.66 1.09 5.9.94 12.1 1.22 18.08l1 21.89c.06 1.29-1.94 1.28-2 0-.53-11.48-.86-23-1.62-34.47-.81-12.32-7.85-19.42-18.43-24.78h-.06a12.1 12.1 0 0 0 2.97-.33zm-55.8 46.32-.87-28.32 5.82.08s3.38 1.94 4.42-.8-4.22-1-4.22-1l-6.91-.18-.24-8.75.57-2.35-1-2a6 6 0 0 1 .62-2.58c.61-1-3.35-1.55-4.11-1s-.62 2.58-.62 2.58l1.56.75s-.83 2.91-.35 3.52.84 9.39.84 9.39l-7.9.33s-3.73-1-4 .65 4.43.7 4.43.7l7.32.53.5 37z" fill="#1e2128"/><path d="m173.58 223.48 3-31.62 6.46.89s3.5 2.62 5-.28-4.56-1.72-4.56-1.72l-7.66-1.16.94-9.77 1-2.53-.85-2.35a6.68 6.68 0 0 1 1.05-2.79c.81-1-3.51-2.19-4.43-1.67s-1.05 2.79-1.05 2.79l1.63 1s-1.32 3.12-.88 3.86-.37 10.56-.37 10.56L164 188s-4-1.66-4.55.17 4.83 1.39 4.83 1.39l8.08 1.6-.31 53.84z" fill="#1e2128"/><path d="m190.83 233.62 7.31-30.9 6.28 1.78s3.1 3.08 5 .42-4.28-2.33-4.28-2.33l-7.43-2.21 2.28-9.55 1.3-2.38-.52-2.44a6.68 6.68 0 0 1 1.43-2.61c.94-.87-3.17-2.66-4.16-2.27s-1.43 2.61-1.43 2.61l1.47 1.26s-1.74 2.9-1.41 3.7-1.83 10.41-1.83 10.41l-8.65-1.95s-3.74-2.19-4.53-.47 4.59 2 4.59 2l7.78 2.7-7.72 53.31z" fill="#1e2128"/><path d="m180.59 217.31 1.21-25.59 5.24.48s2.91 2 4-.41-3.74-1.22-3.74-1.22l-6.22-.65.39-7.91.68-2.08-.77-1.86a5.39 5.39 0 0 1 .74-2.28c.62-.83-2.91-1.64-3.63-1.18s-.74 2.28-.74 2.28l1.35.78s-.95 2.56-.56 3.15.1 8.53.1 8.53l-7.15-.26s-3.29-1.18-3.66.3 3.94.94 3.94.94l6.57 1 1.8 43.41z" fill="#1e2128"/><path d="M155.43 219.54 165.54 196l4.74 2.29s2 2.88 3.92 1-3.07-2.45-3.07-2.45l-5.6-2.79 3.14-7.27 1.36-1.71-.07-2a5.39 5.39 0 0 1 1.5-1.88c.87-.56-2.15-2.55-3-2.38s-1.5 1.88-1.5 1.88l1 1.21s-1.79 2.07-1.63 2.75-2.9 8-2.9 8l-6.6-2.75s-2.66-2.26-3.53-1 3.36 2.26 3.36 2.26l5.8 3.23-13.54 41.28zm33.43 5.46 1.21-25.59 5.24.48s2.91 2 4-.41-3.74-1.22-3.74-1.22l-6.22-.65.39-7.91.68-2.08-.77-1.86a5.39 5.39 0 0 1 .74-2.28c.62-.83-2.91-1.64-3.63-1.18s-.74 2.28-.74 2.28l1.35.78s-.95 2.56-.56 3.15.1 8.53.1 8.53l-7.15-.26s-3.29-1.18-3.66.3 3.94.94 3.94.94l6.57 1 1.8 43.41z" fill="#1e2128"/><path d="m163.17 234.74 1.08-45 5.79.61s3.19 2.24 4.47-.39-4.11-1.4-4.11-1.4l-6.87-.81.56-8.74.78-2.29-.83-2.07a6 6 0 0 1 .86-2.51c.69-.91-3.19-1.85-4-1.36s-.86 2.51-.86 2.51l1.48.89s-1.09 2.82-.67 3.47 0 9.43 0 9.43l-7.9-.4s-3.62-1.36-4 .28 4.34 1.1 4.34 1.1l7.25 1.19-2.88 36.9z" fill="#1e2128"/></g></svg>`
</script>

{@html svg(className, width, height)}
