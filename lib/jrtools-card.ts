export const jrtoolsCard = {
  phone: "+14049825807",
  smsPhone: "+14049825807",
  whatsapp: "+14049825807",
  email: "sales@jrtoolsusa.com",
  shopUrl: "https://www.jrtoolsusa.com/products",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://card.jrtoolsusa.com/jrtools",
  content: {
    en: {
      eyebrow: "LIVE EXAMPLE",
      headline: "Pro-Grade Power Tools at Contractor Prices",
      subheadline: "Tap to call, text, WhatsApp, save contact, shop products, or request pricing and availability instantly.",
      actions: { call: "Call Now", text: "Text Us", whatsapp: "WhatsApp", save: "Save Contact", shop: "Shop Now" },
      trust: ["Below Retail Pricing", "Same-Day Response", "Local Pickup", "Pick up locally in Alpharetta, GA", "New & Open Box", "Over 20,000 tools sold"],
      info: {
        title: "Built for real buying action",
        text: "This standalone tap card is designed for fast mobile conversion. Customers can call, text, message on WhatsApp, save JR Tools USA as a contact, shop inventory, or submit a lead in seconds.",
        actionsLabel: "ACTIONS",
        actionsItems: ["Call for availability", "Text for quick response", "Open WhatsApp chat", "Save contact instantly", "Go directly to shop"],
        useLabel: "USE CASE",
        useItems: ["Milwaukee", "DeWalt", "Makita", "Local pickup", "Pick up locally in Alpharetta, GA", "Fast quote requests"]
      },
      lead: {
        title: "LEAD CAPTURE",
        text: "Get Instant Pricing & Availability",
        name: "Your name",
        phone: "Phone number",
        need: "What do you need?",
        message: "Tell us what you need",
        button: "Request a Quote",
        success: "Thanks — your request was sent.",
        note: ""
      },
      placeholder: ""
    },
    es: {
      eyebrow: "EJEMPLO REAL",
      headline: "Herramientas Profesionales a Precios de Contratista",
      subheadline: "Toca para llamar, enviar texto, usar WhatsApp, guardar contacto, comprar productos o pedir precio y disponibilidad al instante.",
      actions: { call: "Llamar", text: "Enviar Texto", whatsapp: "WhatsApp", save: "Guardar Contacto", shop: "Comprar" },
      trust: ["Precios Bajo Retail", "Respuesta el Mismo Día", "Recogida Local", "Recoge localmente en Alpharetta, GA", "Nuevo y Open Box", "Más de 20,000 herramientas vendidas"],
      info: {
        title: "Hecho para compra real",
        text: "Esta tarjeta inteligente está diseñada para conversión rápida en móvil. Los clientes pueden llamar, enviar texto, escribir por WhatsApp, guardar JR Tools USA como contacto, comprar inventario o enviar un lead en segundos.",
        actionsLabel: "ACCIONES",
        actionsItems: ["Llamar para disponibilidad", "Enviar texto para respuesta rápida", "Abrir chat de WhatsApp", "Guardar contacto al instante", "Ir directo a la tienda"],
        useLabel: "USO",
        useItems: ["Milwaukee", "DeWalt", "Makita", "Recogida local", "Recoge localmente en Alpharetta, GA", "Solicitudes rápidas"]
      },
      lead: {
        title: "CAPTURA DE LEADS",
        text: "Obtén Precio y Disponibilidad al Instante",
        name: "Tu nombre",
        phone: "Número de teléfono",
        need: "¿Qué necesitas?",
        message: "Cuéntanos qué necesitas",
        button: "Solicitar Cotización",
        success: "Gracias — tu solicitud fue enviada.",
        note: ""
      },
      placeholder: ""
    }
  }
} as const;
