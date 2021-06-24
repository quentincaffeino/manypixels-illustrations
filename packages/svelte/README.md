# @quentincaffeino/manypixels-svelte

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
