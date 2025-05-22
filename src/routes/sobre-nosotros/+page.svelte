<script>
  import timelineData from "$lib/data/sobre-nosotros.json";
  import testimoniosData from "$lib/data/testimonios.json";
  import { goto } from "$app/navigation";
</script>

<div class="about-wrapper">
  <!-- Hero -->
  <div class="about-hero">
    <img
      src="/images/sobre-nosotros.jpg"
      alt="Urnas Flor del Aire"
      class="hero-image"
    />
    <div class="hero-overlay">
      <h1 class="about-title">Sobre Nosotros</h1>
      <p class="about-subtitle">Cerámica con alma para honrar la memoria</p>
    </div>
  </div>

  <!-- Presentación -->
  <section class="about-content">
    <p>
      En <strong>Urnas Flor del Aire</strong> somos un emprendimiento artesanal dedicado
      a crear urnas cerámicas únicas que resguardan las cenizas de seres queridos.
    </p>
    <p>
      Cada urna es moldeada a mano con amor, cuidado y un profundo respeto por
      la naturaleza y los ciclos de la vida.
    </p>
    <p>
      Nos inspira la tierra, la poesía de los rituales y la conexión con lo
      esencial. Por eso, cada urna es más que un objeto: es una <em
        >casita para el alma</em
      >.
    </p>
  </section>

  <!-- Línea de tiempo -->
  <section class="timeline-section">
    <h2 class="timeline-title">Nuestra Historia</h2>
    <div class="timeline">
      {#each timelineData as evento}
        <div class="timeline-item">
          <div class="timeline-date">{evento.anio}</div>
          <div class="timeline-content">
            <h3>{evento.titulo}</h3>
            <p>{evento.descripcion}</p>
          </div>
        </div>
      {/each}
    </div>
  </section>

  <!-- Testimonios -->
  <section class="testimonios-section">
    <h2 class="testimonios-title">Testimonios</h2>
    <div class="testimonios-container">
      {#each testimoniosData as t}
        <div class="testimonio">
          <p class="testimonio-text">“{t.texto}”</p>
          <p class="testimonio-autor">– {t.nombre}</p>
        </div>
      {/each}
    </div>
  </section>

  <!-- CTA -->
  <div class="contact-cta">
    <button on:click={() => goto("/contacto")}>Contactanos</button>
  </div>
</div>
