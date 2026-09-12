export type Language = "es" | "en";

export const siteConfig = {
  name: "THEOBROMA",
  subtitle: { es: "La Magia del Cacao", en: "The Magic of Cacao" },
  address: "Calle 5 #2-54, Minca, Magdalena, Colombia",
  whatsapp: "",
  phone: "",
  instagram: "",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Calle%205%20%232-54%2C%20Minca%2C%20Magdalena%2C%20Colombia",
  reviewsUrl: "",
  hours: { es: "Confirma el horario de hoy por WhatsApp", en: "Confirm today’s hours on WhatsApp" },
  domain: "",
  paymentMethods: [] as string[],
};

export const products = [
  {
    id: "hot-cacao",
    icon: "cup",
    es: { name: "Cacao caliente de la Sierra", description: "Intenso, cálido y hecho para bajar el ritmo.", label: "Favorito de la casa" },
    en: { name: "Sierra cacao drink", description: "Deep, warm and made to slow down.", label: "House favorite" },
  },
  {
    id: "cold-fruit",
    icon: "fruit",
    es: { name: "Bebida fría de fruta de cacao", description: "Fresca, tropical y hecha con la pulpa blanca que casi nadie prueba.", label: "Descubre la fruta" },
    en: { name: "Cold cacao fruit drink", description: "Fresh, tropical and made with the white cacao pulp most people never taste.", label: "Taste the fruit" },
  },
  {
    id: "truffles",
    icon: "truffle",
    es: { name: "Trufas artesanales", description: "Pequeños bocados de cacao para probar, regalar o llevar de viaje.", label: "Hecho a mano" },
    en: { name: "Handmade truffles", description: "Little cacao bites to taste, gift or take on your journey.", label: "Handmade" },
  },
  {
    id: "bars",
    icon: "bar",
    es: { name: "Barras de cacao", description: "Un recuerdo comestible de Minca y la Sierra Nevada.", label: "Para llevar" },
    en: { name: "Cacao bars", description: "An edible memory from Minca and the Sierra Nevada.", label: "Take it with you" },
  },
  {
    id: "nibs",
    icon: "nibs",
    es: { name: "Nibs y bocados de cacao", description: "Textura, intensidad y sabor puro para personas curiosas.", label: "Para curiosos" },
    en: { name: "Cacao nibs and bites", description: "Texture, intensity and pure flavor for curious people.", label: "For the curious" },
  },
  {
    id: "gifts",
    icon: "gift",
    es: { name: "Regalos de Minca", description: "Una selección de cacao y pequeñas maravillas para alguien especial.", label: "Regalo" },
    en: { name: "Gifts from Minca", description: "A selection of cacao and little wonders for someone special.", label: "Gift" },
  },
];

export const messages = {
  general: {
    es: "Hola, estoy en Minca y quiero saber qué bebidas, productos o experiencias de cacao tienen disponibles hoy.",
    en: "Hello, I’m in Minca and would like to know what cacao drinks, products or experiences are available today.",
  },
  experience: {
    es: "Hola, quiero información sobre las experiencias de cacao de Theobroma. Somos [número] personas y estaremos en Minca el [fecha].",
    en: "Hello, I would like information about Theobroma cacao experiences. We are [number] people and will be in Minca on [date].",
  },
};

export function whatsappUrl(message: string) {
  const number = siteConfig.whatsapp.replace(/\D/g, "");
  return number ? `https://wa.me/${number}?text=${encodeURIComponent(message)}` : `https://wa.me/?text=${encodeURIComponent(message)}`;
}