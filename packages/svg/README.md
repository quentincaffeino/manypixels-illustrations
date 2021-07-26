# @quentincaffeino/manypixels-svg

All the credit goes to awesome ManyPixels team for creating these awesome illustrations.

## Using with Svelte

```svelte
<script>
  import Fortnite from "@quentincaffeino/manypixels-svg/src/flatline/Fortnite.svg";
</script>

<Fortnite />
```

> Note: For svelte you might need to add something like `rollup-plugin-svelte-svg` to your bundling process.


## File Naming

All illustrations are renamed to UpperCamelCase (spaces and symbols are removed). For example `Online report` is renamed to `OnlineReport`.

There are couple of illustrations which name begins with numbers such as `3D` and `404`, those are moved to the end of the name. For example original icon `3D Model` is renamed to `Model3D`

## Licensing

For information about licensing for ManyPixels Illustrations see [this page](https://www.manypixels.co/gallery).

Code is published under MIT license.
