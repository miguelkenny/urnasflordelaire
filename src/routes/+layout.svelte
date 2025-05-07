<script>
  import "../app.css";
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
    >
      ☰
    </button>

    <ul class:open={isOpen}>
      <li><a href="/">Inicio</a></li>
      <li><a href="/sobre-nosotros">Sobre Nosotros</a></li>
      <li><a href="/contacto">Contacto</a></li>
    </ul>
  </div>
</nav>
<div class="main-container">
  <slot />
</div>
