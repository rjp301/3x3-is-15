<script lang="ts">
  import "./app.css";

  import Tile from "./lib/Tile.svelte";
  import Square from "./lib/Square.svelte";

  import ChosenItem from "./lib/ChosenItem.svelte";
  import ChosenSum from "./lib/ChosenSum.svelte";

  import { dndzone } from "svelte-dnd-action";
  import { flip } from "svelte/animate";

  let chosen = { a: 0, b: 0, c: 0, d: 0, e: 0, f: 0, g: 0, h: 0, i: 0 };

  let items = Array.from({ length: 9 }, (_, index) => ({
    id: index,
    value: index + 1,
  }));

  function handleDnd(e) {
    items = e.detail.items;
  }

  // of type { id: number }[][];
  const boardGrid = Array.from({ length: 3 }, (_, i) =>
    Array.from({ length: 3 }, (_, j) => ({ id: i * 3 + j }))
  );

  const flipDurationMs = 300;

  $: options = {
    items,
    flipDurationMs,
    morphDisabled: true,
  };
</script>

<div class="game-container">
  <div class="grid">
    {#each boardGrid as col}
      <div class="col">
        {#each col as square}
          <Square />
        {/each}
      </div>
    {/each}
  </div>

  <div
    class="rack"
    use:dndzone={options}
    on:consider={handleDnd}
    on:finalize={handleDnd}
  >
    {#each items as item (item.id)}
      <div animate:flip={{ duration: flipDurationMs }}>
        <Tile value={item.value} />
      </div>
    {/each}
  </div>
</div>

<!-- <header class="text-center mb-4">
  <h1 class="text-4xl text-sky-300">3 x 3 = 15</h1>
</header>
<main class="flex flex-col items-center gap-2 mb-4">
  <section
    id="game-grid"
    class="grid grid-cols-[1fr_1fr_1fr_auto] gap-3 bg-slate-800 p-2 rounded"
  >
    <ChosenItem setValue={(value) => (chosen.a = value)} />
    <ChosenItem setValue={(value) => (chosen.b = value)} />
    <ChosenItem setValue={(value) => (chosen.c = value)} />
    <ChosenSum value={chosen.a + chosen.b + chosen.c} orientation="h" />
    <ChosenItem setValue={(value) => (chosen.d = value)} />
    <ChosenItem setValue={(value) => (chosen.e = value)} />
    <ChosenItem setValue={(value) => (chosen.f = value)} />
    <ChosenSum value={chosen.d + chosen.e + chosen.f} orientation="h" />
    <ChosenItem setValue={(value) => (chosen.g = value)} />
    <ChosenItem setValue={(value) => (chosen.h = value)} />
    <ChosenItem setValue={(value) => (chosen.i = value)} />
    <ChosenSum value={chosen.g + chosen.h + chosen.i} orientation="h" />
    <ChosenSum value={chosen.a + chosen.d + chosen.g} orientation="v" />
    <ChosenSum value={chosen.b + chosen.e + chosen.h} orientation="v" />
    <ChosenSum value={chosen.c + chosen.f + chosen.i} orientation="v" />
    <ChosenSum value={chosen.a + chosen.e + chosen.i} orientation="d" />
  </section>
  <section
    id="rack"
    class="flex gap-2"
    use:dndzone={{ items: items, morphDisabled: true }}
  >
    {#each items as choice}
      <div>
        {choice.value}
      </div>
    {/each}
  </section>
</main>
<footer class="text-sm">
  <div class="container flex justify-center mb-4">
    <button
      class="bg-slate-800 px-4 py-1 rounded w-full"
      on:click={() => Object.keys(chosen).forEach((key) => (chosen[key] = 0))}
    >
      Reset
    </button>
  </div>
  <details>
    <summary>How to play</summary>
    <ol class="list-decimal">
      <li class="mx-4">Drag the numbers 1 through 9 onto the board</li>
      <li class="mx-4">Try to arrange them such that each axis sums to 15</li>
      <li class="mx-4">It is possible! Don't give up</li>
    </ol>
  </details>
</footer> -->

<style>
  :global(body *) {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  .game-container {
    display: flex;
    height: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #272727;
  }

  .grid {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
  .col {
    display: flex;
    flex-direction: column;
  }

  .rack {
    display: flex;
    justify-content: flex-start;
    flex-grow: 0;
  }
  .rack > * {
    margin: 2px;
  }
</style>
