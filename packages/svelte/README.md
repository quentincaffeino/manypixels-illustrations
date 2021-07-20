# @quentincaffeino/manypixels-svelte

All the credit goes to awesome ManyPixels team for creating these awesome illistrations.

## Usage

Svelte components export these props:

- class - Add class to svg element
- size - This would set width and height of an image
- width
- height

### Component

```svelte
<script>
  import Fortnite from "@quentincaffeino/manypixels-svelte/src/flatline/Fortnite.svelte";
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
          "@quentincaffeino/manypixels-svelte/src/flatline/Fortnite.svelte"
        )
      ).default;
    } catch (e) {
      console.error(e);
    }
  });
</script>

<svelte:component this={component} />
```

## File Naming

All illustrations are renamed to UpperCamelCase (spaces and symbols are removed). For example `Online report` is renamed to `OnlineReport`.

There are couple of illustrations which name begins with numbers such as `3D` and `404`, those are moved to the end of the name. For example original icon `3D Model` is renamed to `Model3D`

## Licensing

For information about licensing for ManyPixels Illustrations see [this page](https://www.manypixels.co/gallery).

Code is published under MIT license.
