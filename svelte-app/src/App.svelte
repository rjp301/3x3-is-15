<script lang="ts">
  import "./app.css";

  import ChosenItem from "./lib/ChosenItem.svelte";
  import ChosenSum from "./lib/ChosenSum.svelte";

  let choices = Array.from({ length: 9 }, (_, index) => index + 1);
  const chosen = { a: 0, b: 0, c: 0, d: 0, e: 0, f: 0, g: 0, h: 0, i: 0 };
</script>

<header class="text-center mb-4">
  <h1 class="text-4xl text-sky-300">3 x 3 = 15</h1>
</header>
<main class="flex flex-col items-center gap-2 mb-4">
  <section
    id="game-grid"
    class="grid grid-cols-[1fr_1fr_1fr_auto] gap-3 bg-slate-800 p-2 rounded"
  >
    <ChosenItem bind:value={chosen.a} />
    <ChosenItem bind:value={chosen.b} />
    <ChosenItem bind:value={chosen.c} />
    <ChosenSum value={chosen.a + chosen.b + chosen.c} orientation="h" />
    <ChosenItem bind:value={chosen.d} />
    <ChosenItem bind:value={chosen.e} />
    <ChosenItem bind:value={chosen.f} />
    <ChosenSum value={chosen.d + chosen.e + chosen.f} orientation="h" />
    <ChosenItem bind:value={chosen.g} />
    <ChosenItem bind:value={chosen.h} />
    <ChosenItem bind:value={chosen.i} />
    <ChosenSum value={chosen.g + chosen.h + chosen.i} orientation="h" />
    <ChosenSum value={chosen.a + chosen.d + chosen.g} orientation="v" />
    <ChosenSum value={chosen.b + chosen.e + chosen.h} orientation="v" />
    <ChosenSum value={chosen.c + chosen.f + chosen.i} orientation="v" />
    <ChosenSum value={chosen.a + chosen.e + chosen.i} orientation="d" />
  </section>
  <section class="flex gap-2">
    {#each choices
      .filter((value) => !Object.values(chosen).includes(value))
      .sort() as choice}
      <div
        draggable={true}
        on:dragstart={(event) => {
          console.log("dragging choice with the value", choice);
          event.dataTransfer.setData("text/plain", choice.toString());
        }}
      >
        {choice}
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
</footer>
