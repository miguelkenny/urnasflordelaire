<script>
  import { goto } from "$app/navigation";
</script>

<div class="about-wrapper">
  <!-- Imagen destacada -->
  <div class="about-hero">
    <img
      src="/images/sobre-nosotros.jpg"
      alt="Urna cerámica artesanal"
      class="hero-image"
    />
    <div class="hero-overlay">
      <h1 class="about-title">Sobre Nosotros</h1>
      <p class="about-subtitle">Cerámica con alma para honrar la memoria</p>
    </div>
  </div>

  <!-- Texto institucional -->
  <section class="about-content">
    <p>
      En <strong>Urnas Flor del Aire</strong> somos un emprendimiento artesanal dedicado
      a crear urnas cerámicas únicas que resguardan las cenizas de seres queridos.
    </p>

    <p>
      Cada urna es moldeada a mano con amor, cuidado y un profundo respeto por
      la naturaleza y los ciclos de la vida. Fusionamos el arte con el espíritu,
      buscando que cada pieza sea un refugio simbólico, lleno de significado,
      belleza y memoria.
    </p>

    <p>
      Nos inspira la tierra que nos sostiene, la poesía de los rituales, y la
      conexión con lo esencial. Por eso, cada urna es más que un objeto: es una <em
        >casita para el alma</em
      >.
    </p>

    <blockquote class="about-quote">
      “Honramos lo que permanece. Creamos para quienes aman.”
    </blockquote>
  </section>

  <!-- Línea de tiempo -->
  <section class="timeline-section">
    <h2 class="timeline-title">Nuestra Historia</h2>
    <div class="timeline">
      <div class="timeline-item">
        <div class="timeline-date">2021</div>
        <div class="timeline-content">
          <h3>Primeras urnas</h3>
          <p>
            Nacemos desde lo íntimo: una necesidad personal que se transforma en
            obra artesanal.
          </p>
        </div>
      </div>
      <div class="timeline-item">
        <div class="timeline-date">2022</div>
        <div class="timeline-content">
          <h3>Primeras ventas</h3>
          <p>
            Las urnas comienzan a encontrar hogar en distintas provincias. Cada
            historia nos emociona.
          </p>
        </div>
      </div>
      <div class="timeline-item">
        <div class="timeline-date">2023</div>
        <div class="timeline-content">
          <h3>Presencia online</h3>
          <p>
            Consolidamos nuestra identidad y lanzamos nuestro sitio web para
            compartir esta misión.
          </p>
        </div>
      </div>
      <div class="timeline-item">
        <div class="timeline-date">2024</div>
        <div class="timeline-content">
          <h3>Proyectos conmemorativos</h3>
          <p>
            Comenzamos a colaborar con familias, ceremonias y rituales para
            honrar la memoria.
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- Botón de contacto -->
  <div class="contact-cta">
    <button on:click={() => goto("/contacto")}>Contactanos</button>
  </div>
</div>
