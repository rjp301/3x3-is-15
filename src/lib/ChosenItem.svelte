<script lang="ts">
  export let setValue: (value: number) => void;

  let items = [];

  function handleDnd(e) {
    items = e.detail.items;
    setValue(items[0].value);
  }

  $: options = {
    dropFromOthersDisabled: Boolean(items.length),
    items,
    dropTargetStyle: {},
    flipDurationMs: 100,
  };

  import { dndzone } from "svelte-dnd-action";
  import { flip } from "svelte/animate";

  const flipDurationMs = 200;
</script>

<div
  class={"flex items-center justify-center border-2 rounded-full w-10 h-10 text-xl select-none " +
    (items.length > 0 ? "bg-sky-300 border-sky-300" : "")}
  use:dndzone={options}
  on:consider={handleDnd}
  on:finalize={handleDnd}
>
  {items.length > 0 ? items[0].value : 0}
</div>
