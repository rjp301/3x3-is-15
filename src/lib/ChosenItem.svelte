<script lang="ts">
  export let value: number;
  export let sum: boolean = false;

  const handleDrop = (event) => {
    if (sum) return;
    console.log("dropping");
    value = parseInt(event.dataTransfer.getData("text/plain"));
  };

  const handleDragStart = (event) => {
    if (sum) return;
    event.dataTransfer.setData("text/plain", value.toString());
  };

  const handleDragEnd = (event) => {
    if (sum) return;
    value = 0;
  };
</script>

<div
  class={"flex items-center justify-center border-2 rounded-full w-12 h-12 text-3xl select-none " +
    (sum ? "text-red-500 border-none " : "") +
    (value === 15 ? "text-green-500 " : "")}
  draggable={!sum && value > 0}
  on:dragover|preventDefault
  on:drop|preventDefault={handleDrop}
  on:dragstart={handleDragStart}
  on:dragend={handleDragEnd}
>
  {value}
</div>
