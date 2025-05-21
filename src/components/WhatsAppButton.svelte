<!-- src/lib/components/WhatsAppButton.svelte -->
<a
  class="whatsapp-float"
  href="https://wa.me/5492644036921"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Escribinos por WhatsApp"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 32"
    width="28"
    height="28"
    fill="white"
  >
    <path
      d="M16 2C8.28 2 2 8.28 2 16c0 2.84.84 5.48 2.3 7.72L2 30l6.5-2.2C10.5 29 13.16 30 16 30c7.72 0 14-6.28 14-14S23.72 2 16 2zm0 26c-2.56 0-4.92-.84-6.84-2.24l-.48-.36-3.86 1.32 1.28-3.94-.32-.5C5.56 20.24 5 18.16 5 16c0-6.08 4.92-11 11-11s11 4.92 11 11-4.92 11-11 11zm6.04-8.16c-.32-.16-1.92-.92-2.22-1.02-.3-.1-.52-.16-.74.16s-.86 1.02-1.06 1.22c-.2.2-.38.22-.7.06-.32-.16-1.34-.5-2.56-1.6-.94-.84-1.58-1.88-1.76-2.2-.18-.32-.02-.48.14-.64.14-.14.32-.36.48-.54.16-.18.2-.3.3-.5.1-.2.04-.38-.02-.54-.06-.16-.72-1.74-.98-2.38-.26-.64-.52-.54-.74-.54-.2 0-.42 0-.64 0s-.58.08-.88.38c-.3.3-1.16 1.12-1.16 2.74s1.2 3.18 1.38 3.4c.18.22 2.34 3.6 5.72 4.9 2.66 1.04 3.7 1.12 4.52 1.06.72-.06 2.22-.9 2.54-1.76.32-.86.32-1.6.22-1.76-.1-.16-.28-.22-.6-.38z"
    />
  </svg>
</a>

<style>
  .whatsapp-float {
    position: fixed;
    bottom: 1.5rem;
    right: 1.5rem;
    background-color: #25d366;
    color: white;
    width: 56px;
    height: 56px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.25);
    z-index: 1000;
    cursor: pointer;
    transition: transform 0.2s ease;
    text-decoration: none;
  }

  .whatsapp-float:hover {
    transform: scale(1.1);
  }

  svg {
    display: block;
  }
</style>
