<script>
  export let imagenes = [];
  let current = 0;

  function prev() {
    current = (current - 1 + imagenes.length) % imagenes.length;
  }

  function next() {
    current = (current + 1) % imagenes.length;
  }
</script>

<div class="slider">
  {#if imagenes.length > 0}
    <img src={imagenes[current]} alt="Imagen urna" class="slide-image" />

    {#if imagenes.length > 1}
      <div class="controls">
        <button on:click={prev}>&laquo;</button>
        <span>{current + 1} / {imagenes.length}</span>
        <button on:click={next}>&raquo;</button>
      </div>
    {/if}
  {/if}
</div>
