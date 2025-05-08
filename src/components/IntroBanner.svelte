<script>
  export let imageUrls = [
    "/images/LuzPlateada-1700.png",
    "/images/gota.png",
    "/images/Horizonte.png",
  ];

  let currentIndex = 0;
  let interval;

  function startSlider() {
    stopSlider(); // por si ya estaba corriendo
    interval = setInterval(() => {
      currentIndex = (currentIndex + 1) % imageUrls.length;
    }, 4000); // 4 segundos
  }

  function stopSlider() {
    if (interval) clearInterval(interval);
  }

  function goTo(index) {
    currentIndex = index;
    startSlider();
  }

  // iniciar al montar
  import { onMount, onDestroy } from "svelte";
  onMount(() => {
    startSlider();
  });

  onDestroy(() => {
    stopSlider();
  });
</script>

<section class="intro-banner">
  <div class="intro-banner__image">
    <div class="slider-container">
      <img
        src={imageUrls[currentIndex]}
        alt="Modelo de urna"
        class="slider-image"
      />
      <div class="dots">
        {#each imageUrls as _, index}
          <span
            class:active={index === currentIndex}
            on:click={() => goTo(index)}
          ></span>
        {/each}
      </div>
    </div>
  </div>

  <div class="intro-banner__text">
    <h2 class="bebas-neue-regular">URNAS FLOR DEL AIRE</h2>
    <p>
      “Desde el primer día, nuestro deseo con Urnas Flor del Aire ha sido crear
      algo más que urnas; queríamos ofrecer un refugio para las almas, un
      espacio donde el amor y los recuerdos pudieran florecer...”
    </p>
    <p class="signature">— Natalia Gema Godoy, dueña de Urnas Flor del Aire</p>
  </div>
</section>

<style>
  .slider-container {
    position: relative;
    width: 100%;
    max-width: 400px;
    aspect-ratio: 2 / 3; /* Mantiene relación 400x600 sin hardcodear */
    margin: auto;
    overflow: hidden;
    border-radius: 8px;
  }

  .slider-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    transition: opacity 0.5s ease-in-out;
  }

  /* Dots */
  .dots {
    position: absolute;
    bottom: 8px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    gap: 8px;
  }

  .dots span {
    width: 10px;
    height: 10px;
    background: #ccc;
    border-radius: 50%;
    cursor: pointer;
  }

  .dots span.active {
    background: #555;
  }

  /* Responsive tweaks */
  @media (max-width: 768px) {
    .slider-container {
      max-width: 300px;
    }
  }

  @media (max-width: 480px) {
    .slider-container {
      max-width: 90%;
    }
  }
</style>
