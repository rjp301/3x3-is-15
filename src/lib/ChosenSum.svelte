<script>
  export let value;
</script>

<div
  class={"flex items-center justify-center w-12 h-12 text-3xl select-none " +
    (value === 15 ? "text-green-500 " : "text-red-500 ")}
>
  {value}
</div>
