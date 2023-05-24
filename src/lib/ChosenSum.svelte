<script lang="ts">
  type Orientations = {
    v: string;
    h: string;
    d: string;
  };

  const orientations: Orientations = {
    v: "w-10 h-6 ",
    h: "w-6 h-10 ",
    d: "w-6 h-6 ",
  };

  export let value;
  export let orientation: keyof Orientations;
</script>

<div
  class={"flex items-center justify-center select-none self-center " +
    (value === 15 ? "text-green-500 " : "text-red-500 ") +
    orientations[orientation]}
>
  {value}
</div>
