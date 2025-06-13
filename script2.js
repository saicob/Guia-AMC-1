document.addEventListener("DOMContentLoaded", () => {
  // Funcionalidad de pestañas
  const tabTriggers = document.querySelectorAll(".tab-trigger")
  const tabContents = document.querySelectorAll(".tab-content")

  tabTriggers.forEach((trigger) => {
    trigger.addEventListener("click", () => {
      // Desactivar todas las pestañas
      tabTriggers.forEach((t) => t.classList.remove("active"))
      tabContents.forEach((c) => c.classList.remove("active"))

      // Activar la pestaña seleccionada
      trigger.classList.add("active")
      const tabId = trigger.getAttribute("data-tab")
      document.getElementById(tabId).classList.add("active")
    })
  })

  // Crear placeholders para imágenes
  function createPlaceholderImages() {
    const placeholders = [
      { selector: 'img[src="placeholder-horno.jpg"]', width: 400, height: 200, text: "Microprocesador - Horno" },
      {
        selector: 'img[src="placeholder-refrigerador.jpg"]',
        width: 400,
        height: 200,
        text: "Microprocesador - Refrigerador",
      },
      { selector: 'img[src="placeholder-lavadora.jpg"]', width: 400, height: 200, text: "Microprocesador - Lavadora" },
      {
        selector: 'img[src="placeholder-lavavajillas.jpg"]',
        width: 400,
        height: 200,
        text: "Microprocesador - Lavavajillas",
      },
      {
        selector: 'img[src="placeholder-aire.jpg"]',
        width: 400,
        height: 200,
        text: "Microprocesador - Aire Acondicionado",
      },
      {
        selector: 'img[src="placeholder-calefactor.jpg"]',
        width: 400,
        height: 200,
        text: "Microprocesador - Calefactor",
      },
      {
        selector: 'img[src="placeholder-asistente.jpg"]',
        width: 400,
        height: 200,
        text: "Microprocesador - Asistente",
      },
      {
        selector: 'img[src="placeholder-iluminacion.jpg"]',
        width: 400,
        height: 200,
        text: "Microprocesador - Iluminación",
      },
    ]

    placeholders.forEach((placeholder) => {
      const images = document.querySelectorAll(placeholder.selector)
      images.forEach((img) => {
        img.src = generatePlaceholderSVG(placeholder.width, placeholder.height, placeholder.text)
      })
    })
  }

  // Función para generar SVG placeholder
  function generatePlaceholderSVG(width, height, text) {
    const svg = `
      <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
        <rect width="100%" height="100%" fill="#e0e0e0"/>
        <text x="50%" y="50%" font-family="Arial" font-size="16" fill="#666" text-anchor="middle" dominant-baseline="middle">${text}</text>
      </svg>
    `
    return "data:image/svg+xml;charset=utf-8," + encodeURIComponent(svg)
  }

  // Inicializar placeholders
  createPlaceholderImages()
})
