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

<style>
  .slider {
    position: relative;
    max-width: 100%;
    margin-bottom: 1.5rem;
    text-align: center;
  }

  .slide-image {
    width: 100%;
    height: auto;
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
    object-fit: contain;
  }

  .controls {
    margin-top: 0.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
  }

  .controls button {
    background: #ddd;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 6px;
    font-size: 1.2rem;
    cursor: pointer;
  }

  .controls button:hover {
    background: #ccc;
  }
</style>
