<script lang="ts">
  // Your selected Skeleton theme:
  import "@skeletonlabs/skeleton/themes/theme-skeleton.css";
  import "@skeletonlabs/skeleton/styles/skeleton.css";
  import "./app.css";

  import ChosenItem from "./lib/ChosenItem.svelte";

  let choices = Array.from({ length: 9 }, (_, index) => index + 1);
  const chosen = { a: 0, b: 0, c: 0, d: 0, e: 0, f: 0, g: 0, h: 0, i: 0 };
</script>

<main>
  <h1 class="text-3xl">3 x 3 = 15</h1>
  <section id="game-grid" class="chosen-grid">
    <ChosenItem bind:value={chosen.a} />
    <ChosenItem bind:value={chosen.b} />
    <ChosenItem bind:value={chosen.c} />
    <ChosenItem value={chosen.a + chosen.b + chosen.c} sum={true} />
    <ChosenItem bind:value={chosen.d} />
    <ChosenItem bind:value={chosen.e} />
    <ChosenItem bind:value={chosen.f} />
    <ChosenItem value={chosen.d + chosen.e + chosen.f} sum={true} />
    <ChosenItem bind:value={chosen.g} />
    <ChosenItem bind:value={chosen.h} />
    <ChosenItem bind:value={chosen.i} />
    <ChosenItem value={chosen.g + chosen.h + chosen.i} sum={true} />
    <ChosenItem value={chosen.a + chosen.d + chosen.g} sum={true} />
    <ChosenItem value={chosen.b + chosen.e + chosen.h} sum={true} />
    <ChosenItem value={chosen.c + chosen.f + chosen.i} sum={true} />
    <ChosenItem value={chosen.a + chosen.e + chosen.i} sum={true} />
  </section>
  <section class="flex gap-2 text-xl">
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

<style>
  main {
    @apply flex items-center font-[bungee] flex-col gap-2;
  }

  .chosen-grid {
    @apply grid grid-cols-4 gap-4 outline p-4 rounded-[2.5rem];
  }
</style>
