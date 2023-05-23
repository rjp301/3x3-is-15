<script lang="ts">
  export let value: number;

  const handleDrop = (event) => {
    console.log("dropping");
    value = parseInt(event.dataTransfer.getData("text/plain"));
  };

  const handleDragStart = (event) => {
    event.dataTransfer.setData("text/plain", value.toString());
  };

  const handleDragEnd = (event) => {
    value = 0;
  };
</script>

<div
  class={"flex items-center justify-center border-2 rounded-full w-12 h-12 text-3xl select-none " +
    (value > 0 ? "bg-sky-300 border-sky-300" : "")}
  draggable={value > 0}
  on:dragover|preventDefault
  on:drop|preventDefault={handleDrop}
  on:dragstart={handleDragStart}
  on:dragend={handleDragEnd}
>
  {value}
</div>
