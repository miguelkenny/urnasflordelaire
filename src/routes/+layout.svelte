<script>
  import "../app.css";
  import "../navBar.css";
  import "../contacto.css";
  import "../imageSlider.css";
  import "../resenias.css";
  import "../footer.css";
  import WhatsAppButton from "../components/WhatsAppButton.svelte";
  import Footer from "../components/Footer.svelte";
  let isOpen = false;
</script>

<nav class="navbar">
  <div class="navbar-container">
    <a href="/" class="logo">
      <img
        src="/images/icon400x400.png"
        alt="Urnas Flor del Aire"
        class="logo-img"
      />
      <div class="slogan-container">
        <div class="slogan-principal">CASITAS PARA ALMAS</div>
        <div class="slogan-secundario">
          Un refugio eterno, donde los recuerdos florecen y las almas encuentran
          paz.
        </div>
      </div>
    </a>

    <button
      class="hamburger"
      on:click={() => (isOpen = !isOpen)}
      aria-label="Abrir menú"
      aria-expanded={isOpen}
    >
      ☰
    </button>

    <ul class:open={isOpen}>
      <li><a href="/" on:click={() => (isOpen = false)}>Inicio</a></li>
      <li>
        <a href="/sobre-nosotros" on:click={() => (isOpen = false)}
          >Sobre Nosotros</a
        >
      </li>
      <li>
        <a href="/contacto" on:click={() => (isOpen = false)}>Contacto</a>
      </li>
    </ul>
  </div>
</nav>

<div class="main-container">
  <slot />
  <WhatsAppButton />
  <div class="linea"></div>
  <Footer />
</div>
