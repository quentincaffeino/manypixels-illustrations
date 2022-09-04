# @quentincaffeino/manypixels-illustrations-svelte

All the credit goes to awesome ManyPixels team for creating these awesome illustrations.

## Usage

Components export these props:

- class - Add class to svg element
- size - This would set width and height of an image
- width
- height

### Component

```svelte
<script>
  import Fortnite from "@quentincaffeino/manypixels-illustrations-svelte/isometric";
</script>

<Fortnite />
```

### Lazy loading

```svelte
<script>
  import { onMount } from "svelte";

  let component = null;

  onMount(async () => {
    try {
      component = (
        await import(
          "@quentincaffeino/manypixels-illustrations-svelte/flatline/Fortnite.svelte"
        )
      ).default;
    } catch (e) {
      console.error(e);
    }
  });
</script>

{#if component}
  <svelte:component this={component} />
{/if}
```

## Licensing

For information about licensing for ManyPixels Illustrations see [this page](https://www.manypixels.co/gallery).

Code is published under MIT license.
