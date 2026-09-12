import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";
import { ArrowDown, ArrowRight, ChevronRight, Clock3, Instagram, MapPin, Menu, MessageCircle, Quote, X } from "lucide-react";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { CacaoPod, Hummingbird, LeafCluster, PinkJaguar, Sparkles } from "@/components/theobroma/Decorations";
import { messages, products, siteConfig, whatsappUrl, type Language } from "@/lib/theobroma-config";

const seo = {
  es: { title: "Theobroma Minca | Cacao, Bebidas y Regalos Artesanales", description: "Descubre Theobroma, una tienda de cacao, bebidas, trufas y maravillas naturales en Minca. Prueba la fruta detrás del chocolate." },
  en: { title: "Theobroma Minca | Cacao Drinks, Handmade Treats & Gifts", description: "Discover Theobroma, a cacao shop with drinks, handmade treats, gifts and natural wonders in Minca. Taste the fruit behind chocolate." },
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: seo.es.title },
      { name: "description", content: seo.es.description },
      { property: "og:title", content: seo.es.title },
      { property: "og:description", content: seo.es.description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify({ "@context": "https://schema.org", "@type": ["LocalBusiness", "Store"], name: siteConfig.name, description: seo.es.description, address: { "@type": "PostalAddress", streetAddress: "Calle 5 #2-54", addressLocality: "Minca", addressRegion: "Magdalena", addressCountry: "CO" } }) }],
  }),
  component: TheobromaPage,
});

const copy = {
  es: {
    nav: ["Inicio", "El cacao", "Bebidas y productos", "Experiencias", "Visítanos"],
    hero: { eyebrow: "MINCA · SIERRA NEVADA DE SANTA MARTA", subtitle: "La magia del cacao en Minca.", lead: "Prueba la fruta que se esconde detrás del chocolate.", body: "Bebidas de cacao, dulces artesanales, sabores inesperados y pequeñas maravillas naturales de la Sierra Nevada.", directions: "Cómo llegar", whatsapp: "Consultar por WhatsApp", discover: "Descubre el cacao de otra manera" },
    more: { title: "No es solo chocolate.", body: "El cacao es una fruta tropical, una bebida, una semilla, una historia y una puerta a sabores inesperados. En Theobroma celebramos sus muchas formas: una bebida tibia para bajar el ritmo, la pulpa fresca de una mazorca, trufas hechas a mano y pequeños recuerdos para llevar de Minca." },
    discovery: [
      ["La fruta", "Dulce, fresca y tropical. La pulpa blanca que rodea la semilla y que casi nadie conoce."],
      ["El cacao", "Intenso, cálido, cremoso y hecho para disfrutar sin prisa."],
      ["La transformación", "De la mazorca a la bebida, del grano a la trufa, de Minca a tu maleta."],
      ["El recuerdo", "Un sabor, un regalo y una historia para llevar contigo."],
    ],
    fruit: { title: "La fruta detrás del chocolate.", body: "Dentro de cada mazorca de cacao hay semillas cubiertas por una pulpa blanca, dulce y tropical. Es el comienzo de una historia que puede terminar en una bebida, una trufa, una barra o un recuerdo de Minca.", prompt: "¿Listo para probar algo inesperado?", cta: "Ver qué hay hoy" },
    products: { title: "Empieza por algo inesperado.", sub: "Los sabores, productos y preparaciones pueden cambiar cada día.", available: "Consultar disponibilidad" },
    wonders: { title: "Más que una tienda de cacao.", body: "Theobroma es un pequeño universo de sabores, bebidas, regalos y curiosidades naturales en el corazón de Minca. Aquí el cacao se encuentra con la selva, la creatividad y los pequeños descubrimientos que hacen especial un viaje.", line: "Tienda de cacao y otras maravillas naturales de Minca.", cta: "Descubre las maravillas de Theobroma" },
    experiences: { title: "Entra. Prueba. Descubre.", body: "Theobroma es una parada para personas curiosas. Ven a tomar algo, descubre nuevos sabores y pregunta por degustaciones, experiencias privadas o pequeños talleres de cacao.", items: ["Degustación de cacao", "Cata para dos", "Taller de trufas", "Experiencia privada"], status: "Disponible bajo consulta.", cta: "Consultar experiencias" },
    take: { title: "Pequeñas maravillas para tu maleta.", body: "Después de Minca, llévate un sabor, un regalo o una pequeña historia de la Sierra Nevada.", kits: ["Kit de cacao caliente", "Caja de trufas", "Barras de cacao", "Sabores de Minca", "Regalo para alguien especial", "Productos naturales"], seals: ["Hecho en Minca", "Para probar aquí o llevar lejos", "Un recuerdo comestible de la Sierra", "Pequeñas maravillas naturales"], cta: "Ver productos disponibles" },
    minca: { title: "Cacao, montaña y curiosidad.", body: "Minca es agua, vegetación, caminatas, aves, lluvia, montaña y sabores que crecen cerca del bosque. Theobroma nace de ese entorno: una invitación a detenerse, probar algo inesperado y descubrir nuevas formas de conocer el cacao." },
    visit: { title: "Encuentra la magia en el centro de Minca.", body: "Ven por una bebida, quédate por el cacao y llévate una pequeña maravilla de Minca.", note: "Antes de visitarnos, escríbenos para conocer las bebidas, productos y experiencias disponibles hoy.", hours: "Horario de hoy", map: "Ver mapa", instagram: "Instagram", reviews: "Reseñas" },
    reviews: { title: "Lo que descubrieron quienes pasaron por aquí.", empty: "Las historias reales de nuestros visitantes vivirán aquí muy pronto.", cta: "Déjanos una reseña" },
    faqTitle: "Antes de venir",
    faqs: [
      ["¿Dónde queda Theobroma?", `En ${siteConfig.address}, en el centro de Minca.`],
      ["¿Qué productos tienen disponibles?", "La selección cambia. Escríbenos para conocer lo que hay hoy."],
      ["¿Puedo probar la fruta de cacao?", "La disponibilidad de fruta fresca cambia; consúltanos antes de venir."],
      ["¿Tienen bebidas frías y calientes?", "Consulta el menú disponible del día por WhatsApp."],
      ["¿Venden regalos para llevar?", "Sí, pregunta por la selección disponible para llevar."],
      ["¿Se puede pagar con tarjeta?", "Confirma los medios de pago disponibles antes de tu visita."],
      ["¿Ofrecen experiencias para grupos?", "Las experiencias y grupos se coordinan bajo consulta."],
      ["¿Puedo reservar una degustación?", "Escríbenos con la fecha y el número de personas."],
      ["¿Hablan inglés?", "Podemos atender consultas en español e inglés."],
      ["¿Cuál es el horario de atención?", "Confirma el horario actualizado antes de venir."],
    ],
    final: { title: "Ven por una bebida. Quédate por el cacao.", body: "Hay sabores que se toman una vez.\nY hay lugares que viajan contigo después." },
    footerLine: "Cacao, bebidas y maravillas naturales desde Minca.", privacy: "Política de privacidad", legal: "Aviso legal",
  },
  en: {
    nav: ["Home", "Cacao", "Drinks & products", "Experiences", "Visit us"],
    hero: { eyebrow: "MINCA · SIERRA NEVADA DE SANTA MARTA", subtitle: "The magic of cacao in Minca.", lead: "Taste the fruit behind chocolate.", body: "Cacao drinks, handmade treats, unexpected flavors and little natural wonders from the Sierra Nevada.", directions: "Get directions", whatsapp: "Message us on WhatsApp", discover: "Discover cacao in a different way" },
    more: { title: "It’s more than chocolate.", body: "Cacao is a tropical fruit, a drink, a seed, a story and a doorway to unexpected flavors. At Theobroma, we celebrate its many forms: a warm drink to slow down, fresh pulp from a cacao pod, handmade truffles and little treasures to take from Minca." },
    discovery: [
      ["The fruit", "Sweet, fresh and tropical. The white pulp around the seed that most people have never tasted."],
      ["The cacao", "Deep, warm, creamy and made to be enjoyed slowly."],
      ["The transformation", "From pod to drink, from bean to truffle, from Minca to your suitcase."],
      ["The memory", "A flavor, a gift and a story to take with you."],
    ],
    fruit: { title: "The fruit behind chocolate.", body: "Inside every cacao pod are seeds covered in sweet, white tropical pulp. It is the beginning of a story that can become a drink, a truffle, a bar or a memory from Minca.", prompt: "Ready to taste something unexpected?", cta: "See what’s available today" },
    products: { title: "Start with something unexpected.", sub: "Flavors, products and preparations may change every day.", available: "Check availability" },
    wonders: { title: "More than a cacao shop.", body: "Theobroma is a small universe of flavors, drinks, gifts and natural curiosities in the heart of Minca. Here, cacao meets the jungle, creativity and the small discoveries that make a journey special.", line: "Magic Cacao Shop & Natural Wonders from Minca.", cta: "Discover Theobroma’s natural wonders" },
    experiences: { title: "Walk in. Taste. Discover.", body: "Theobroma is a stop for curious people. Come for a drink, discover new flavors and ask about tastings, private experiences or small cacao workshops.", items: ["Cacao tasting", "Tasting for two", "Truffle workshop", "Private experience"], status: "Available upon request.", cta: "Ask about experiences" },
    take: { title: "Little natural wonders for your suitcase.", body: "After Minca, take home a flavor, a gift or a little story from the Sierra Nevada.", kits: ["Hot cacao kit", "Truffle box", "Cacao bars", "Flavors of Minca", "A gift for someone special", "Natural products"], seals: ["Made in Minca", "Taste it here. Take it with you", "An edible memory from the Sierra", "Little natural wonders"], cta: "See available products" },
    minca: { title: "Cacao, mountains and curiosity.", body: "Minca is water, greenery, hikes, birds, rain, mountains and flavors that grow close to the forest. Theobroma was born from this setting: an invitation to slow down, taste something unexpected and discover new ways to experience cacao." },
    visit: { title: "Find the magic in the heart of Minca.", body: "Come for a drink, stay for the cacao and take a little wonder from Minca with you.", note: "Before visiting, message us to discover the drinks, products and cacao experiences available today.", hours: "Today’s hours", map: "View map", instagram: "Instagram", reviews: "Reviews" },
    reviews: { title: "What visitors discovered here.", empty: "Real stories from our visitors will live here very soon.", cta: "Leave us a review" },
    faqTitle: "Before you visit",
    faqs: [
      ["Where is Theobroma located?", `At ${siteConfig.address}, in central Minca.`],
      ["What products are available?", "The selection changes. Message us to discover what is available today."],
      ["Can I taste cacao fruit?", "Fresh fruit availability changes; please ask before visiting."],
      ["Do you have hot and cold drinks?", "Ask for today’s available menu on WhatsApp."],
      ["Do you sell gifts to take home?", "Yes, ask about the current take-home selection."],
      ["Can I pay by card?", "Please confirm available payment methods before your visit."],
      ["Do you offer experiences for groups?", "Experiences and groups are arranged upon request."],
      ["Can I book a tasting?", "Message us with your date and number of guests."],
      ["Do you speak English?", "We can answer questions in Spanish and English."],
      ["What are your opening hours?", "Please confirm current hours before visiting."],
    ],
    final: { title: "Come for a drink. Stay for the cacao.", body: "Some flavors are tasted once.\nSome places travel with you afterwards." },
    footerLine: "Cacao, drinks and natural wonders from Minca.", privacy: "Privacy policy", legal: "Legal notice",
  },
};

const sectionIds = ["home", "cacao", "products", "experiences", "visit"];

function TheobromaPage() {
  const [language, setLanguage] = useState<Language>("es");
  const [menuOpen, setMenuOpen] = useState(false);
  const t = copy[language];

  useEffect(() => {
    const saved = window.localStorage.getItem("theobroma-language");
    if (saved === "en" || saved === "es") setLanguage(saved);
  }, []);

  useEffect(() => {
    window.localStorage.setItem("theobroma-language", language);
    document.documentElement.lang = language;
    document.title = seo[language].title;
    document.querySelector('meta[name="description"]')?.setAttribute("content", seo[language].description);
  }, [language]);

  const switchLanguage = (next: Language) => setLanguage(next);

  return (
    <main className="overflow-hidden bg-background text-foreground">
      <Header language={language} t={t} menuOpen={menuOpen} setMenuOpen={setMenuOpen} switchLanguage={switchLanguage} />
      <section id="home" className="hero-grid relative min-h-[calc(100svh-5rem)] overflow-hidden border-b-4 border-cacao bg-primary pt-24">
        <LeafCluster className="float-soft absolute -left-16 top-24 w-56 rotate-12 text-leaf-light opacity-80 sm:w-72" />
        <CacaoPod className="float-soft absolute -right-7 bottom-10 w-32 rotate-12 text-pod sm:right-6 sm:w-44" />
        <Hummingbird className="drift absolute right-[8%] top-28 hidden w-32 text-pink md:block" />
        <div className="relative mx-auto grid min-h-[calc(100svh-5rem)] max-w-7xl items-center gap-8 px-5 pb-12 pt-8 md:grid-cols-[1.08fr_.92fr] md:px-10 lg:px-16">
          <div className="z-10 max-w-3xl">
            <p className="mb-4 text-xs font-extrabold uppercase tracking-[.18em] text-cacao sm:text-sm">{t.hero.eyebrow}</p>
            <h1 className="font-display text-[clamp(4.4rem,18vw,10rem)] leading-[.72] text-cacao drop-shadow-retro">THEO<br/><span className="text-cream">BROMA</span></h1>
            <p className="mt-7 font-editorial text-2xl italic text-cacao sm:text-3xl">{t.hero.subtitle}</p>
            <p className="mt-5 max-w-xl text-xl font-extrabold text-cacao sm:text-2xl">{t.hero.lead}</p>
            <p className="mt-2 max-w-xl text-base leading-relaxed text-cacao/85 sm:text-lg">{t.hero.body}</p>
            <div className="mt-6 grid gap-3 sm:flex">
              <Action href={siteConfig.mapsUrl} primary><MapPin />{t.hero.directions}</Action>
              <Action href={whatsappUrl(messages.general[language])}><MessageCircle />{t.hero.whatsapp}</Action>
            </div>
            <div className="mt-6 grid gap-1 text-sm font-bold text-cacao"><span>{siteConfig.address}</span><span className="flex items-center gap-2"><Clock3 className="h-4 w-4" />{siteConfig.hours[language]}</span></div>
            <a href="#cacao" className="mt-7 inline-flex items-center gap-2 text-sm font-extrabold text-cacao underline decoration-2 underline-offset-4">{t.hero.discover}<ArrowDown className="h-4 w-4" /></a>
          </div>
          <div className="relative mx-auto hidden aspect-[4/5] w-full max-w-md md:block">
            <div className="absolute inset-4 rotate-3 border-4 border-cacao bg-cream shadow-retro" />
            <div className="absolute inset-0 -rotate-2 overflow-hidden border-4 border-cacao bg-yellow p-8 shadow-retro">
              <div className="grid h-full place-items-center rounded-full border-4 border-dashed border-cacao/40 bg-pink/45">
                <CacaoPod className="w-44 text-orange" /><span className="absolute bottom-10 font-editorial text-xl italic text-cacao">cacao · fruta · Minca</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="cacao" className="bg-cream px-5 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionTitle eyebrow="01 · CACAO" title={t.more.title} body={t.more.body} />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {t.discovery.map(([title, body], index) => <DiscoveryCard key={title} index={index} title={title} body={body} />)}
          </div>
        </div>
      </section>

      <section className="relative bg-primary px-5 py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2">
          <div className="relative min-h-[380px] overflow-hidden border-4 border-cacao bg-leaf-light shadow-retro sm:min-h-[520px]">
            <LeafCluster className="absolute -bottom-10 -left-6 w-64 text-leaf" />
            <CacaoPod className="absolute left-1/2 top-1/2 w-44 -translate-x-1/2 -translate-y-1/2 rotate-6 text-pod sm:w-56" />
            <div className="absolute right-6 top-6 rounded-full border-2 border-cacao bg-cream px-4 py-2 text-xs font-black uppercase tracking-widest text-cacao">Theobroma cacao</div>
            <Sparkles className="absolute bottom-8 right-8 text-yellow" />
          </div>
          <div>
            <SectionTitle eyebrow="02 · DESCUBRE / DISCOVER" title={t.fruit.title} body={t.fruit.body} />
            <div className="mt-8 border-4 border-cacao bg-orange p-6 shadow-retro sm:p-8">
              <p className="font-editorial text-2xl italic text-cacao">{t.fruit.prompt}</p>
              <Action href={whatsappUrl(messages.general[language])} className="mt-5">{t.fruit.cta}<ArrowRight /></Action>
            </div>
          </div>
        </div>
      </section>

      <section id="products" className="bg-mint px-5 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionTitle eyebrow="03 · BEBIDAS & PRODUCTOS" title={t.products.title} body={t.products.sub} />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product, index) => <ProductCard key={product.id} product={product} index={index} language={language} cta={t.products.available} />)}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-yellow px-5 py-20 sm:py-28">
        <PinkJaguar className="absolute -bottom-12 -right-8 w-56 text-pink opacity-95 sm:w-72" />
        <LeafCluster className="absolute -bottom-10 right-28 w-52 text-leaf" />
        <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.1fr_.9fr] lg:items-center">
          <div>
            <SectionTitle eyebrow="04 · NATURAL WONDERS" title={t.wonders.title} body={t.wonders.body} />
            <p className="mt-6 max-w-2xl border-l-4 border-cacao pl-5 font-editorial text-2xl italic text-cacao">{t.wonders.line}</p>
            <Action href="#products" className="mt-7">{t.wonders.cta}<ArrowDown /></Action>
          </div>
          <div className="relative z-10 aspect-[4/3] overflow-hidden border-4 border-cacao bg-pink/70 shadow-retro">
            <div className="absolute inset-7 grid place-items-center border-2 border-dashed border-cacao/50 bg-cream/40">
              <CacaoPod className="w-32 -rotate-12 text-orange" />
            </div>
          </div>
        </div>
      </section>

      <section id="experiences" className="bg-violet px-5 py-20 text-cream sm:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionTitle eyebrow="05 · EXPERIENCIAS" title={t.experiences.title} body={t.experiences.body} light />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {t.experiences.items.map((item, index) => <div key={item} className="border-2 border-cream/60 bg-cacao/30 p-6 transition-transform hover:-translate-y-1"><span className="text-xs font-black text-yellow">0{index + 1}</span><h3 className="mt-8 font-display text-3xl leading-none">{item}</h3><p className="mt-4 text-sm text-cream/75">{t.experiences.status}</p></div>)}
          </div>
          <Action href={whatsappUrl(messages.experience[language])} className="mt-8" light><MessageCircle />{t.experiences.cta}</Action>
        </div>
      </section>

      <section className="bg-cacao px-5 py-20 text-cream sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[.85fr_1.15fr] lg:items-center">
          <div><SectionTitle eyebrow="06 · PARA LLEVAR" title={t.take.title} body={t.take.body} light /><Action href={whatsappUrl(messages.general[language])} className="mt-8" light>{t.take.cta}<ArrowRight /></Action></div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">{t.take.kits.map((kit, i) => <div key={kit} className="aspect-square border-2 border-cream/40 bg-jungle p-4 flex flex-col justify-between"><CacaoPod className={`w-12 ${i % 2 ? "text-pink" : "text-yellow"}`} /><span className="text-sm font-bold leading-tight">{kit}</span></div>)}</div>
        </div>
        <div className="mx-auto mt-12 flex max-w-7xl flex-wrap gap-3">{t.take.seals.map((seal) => <span key={seal} className="rotate-[-1deg] rounded-full border-2 border-yellow px-4 py-2 text-xs font-black uppercase text-yellow even:rotate-[1deg]">{seal}</span>)}</div>
      </section>

      <section className="relative overflow-hidden bg-primary px-5 py-20 sm:py-28">
        <PinkJaguar className="reveal-jaguar absolute -bottom-20 -left-16 w-64 text-pink sm:w-80" />
        <Hummingbird className="drift absolute right-4 top-10 w-28 text-orange sm:right-16 sm:w-40" />
        <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:items-center">
          <div className="min-h-[380px] border-4 border-cacao bg-leaf shadow-retro hero-grid"><div className="flex h-full items-end p-8"><p className="max-w-xs font-editorial text-3xl italic text-cream">Minca · lluvia · montaña · selva</p></div></div>
          <div className="lg:pl-8"><SectionTitle eyebrow="07 · MINCA" title={t.minca.title} body={t.minca.body} /></div>
        </div>
      </section>

      <section id="visit" className="bg-cream px-5 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionTitle eyebrow="08 · VISÍTANOS / VISIT US" title={t.visit.title} body={t.visit.body} />
          <div className="mt-12 grid border-4 border-cacao bg-primary shadow-retro lg:grid-cols-2">
            <div className="p-6 sm:p-10"><p className="font-display text-4xl text-cacao">THEOBROMA</p><p className="mt-1 font-editorial text-xl italic text-cacao">{siteConfig.subtitle[language]}</p><div className="mt-8 space-y-5 text-cacao"><p className="flex gap-3"><MapPin className="mt-1 h-5 w-5 shrink-0" />{siteConfig.address}</p><p className="flex gap-3"><Clock3 className="mt-1 h-5 w-5 shrink-0" />{siteConfig.hours[language]}</p></div><div className="mt-8 flex flex-wrap gap-3"><Action href={siteConfig.mapsUrl} primary>{t.hero.directions}</Action><Action href={whatsappUrl(messages.general[language])}><MessageCircle />WhatsApp</Action></div><p className="mt-8 border-t-2 border-cacao/20 pt-5 text-sm font-semibold text-cacao/80">{t.visit.note}</p></div>
            <a href={siteConfig.mapsUrl} target="_blank" rel="noreferrer" aria-label={t.visit.map} className="group relative min-h-80 overflow-hidden border-t-4 border-cacao bg-yellow lg:border-l-4 lg:border-t-0"><div className="absolute inset-5 border-2 border-dashed border-cacao/50 hero-grid"/><div className="absolute inset-0 grid place-items-center"><div className="rounded-full border-4 border-cacao bg-pink p-5 shadow-retro transition-transform group-hover:-translate-y-1"><MapPin className="h-10 w-10 text-cacao" /></div></div><span className="absolute bottom-5 left-5 bg-cacao px-4 py-2 text-sm font-bold text-cream">{t.visit.map} ↗</span></a>
          </div>
        </div>
      </section>

      <section className="bg-guava px-5 py-20 sm:py-28"><div className="mx-auto max-w-7xl"><SectionTitle eyebrow="09 · RESEÑAS / REVIEWS" title={t.reviews.title} /><div className="mt-10 grid gap-5 sm:grid-cols-3">{[0,1,2].map(i => <div key={i} className="min-h-52 border-3 border-cacao bg-cream p-6 shadow-retro"><Quote className="h-8 w-8 text-pink"/><p className="mt-8 font-editorial text-xl italic text-cacao/70">{t.reviews.empty}</p></div>)}</div>{siteConfig.reviewsUrl ? <Action href={siteConfig.reviewsUrl} className="mt-8">{t.reviews.cta}</Action> : null}</div></section>

      <section className="bg-cream px-5 py-20 sm:py-28"><div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[.65fr_1.35fr]"><SectionTitle eyebrow="10 · FAQ" title={t.faqTitle} /><Accordion type="single" collapsible className="border-t-2 border-cacao">{t.faqs.map(([question, answer], i) => <AccordionItem key={question} value={`item-${i}`} className="border-cacao"><AccordionTrigger className="py-5 text-base font-extrabold text-cacao hover:no-underline">{question}</AccordionTrigger><AccordionContent className="pr-8 text-base leading-relaxed text-cacao/75">{answer}</AccordionContent></AccordionItem>)}</Accordion></div></section>

      <section className="relative overflow-hidden bg-violet px-5 py-20 text-center text-cream sm:py-28"><CacaoPod className="absolute -left-8 bottom-0 w-32 -rotate-12 text-yellow sm:w-44"/><LeafCluster className="absolute -right-12 bottom-0 w-56 text-leaf-light"/><PinkJaguar className="absolute -bottom-24 right-[12%] hidden w-56 text-pink lg:block"/><div className="relative mx-auto max-w-3xl"><Sparkles className="mb-6 text-yellow"/><h2 className="font-display text-5xl leading-none sm:text-7xl">{t.final.title}</h2><p className="mt-6 whitespace-pre-line font-editorial text-2xl italic text-cream/85">{t.final.body}</p><div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row"><Action href={siteConfig.mapsUrl} light><MapPin />{t.hero.directions}</Action><Action href={whatsappUrl(messages.general[language])} light><MessageCircle />{t.hero.whatsapp}</Action></div></div></section>

      <Footer language={language} t={t} switchLanguage={switchLanguage} />
      <a href={whatsappUrl(messages.general[language])} target="_blank" rel="noreferrer" aria-label={t.hero.whatsapp} className="fixed bottom-5 right-5 z-50 grid h-14 w-14 place-items-center rounded-full border-3 border-cacao bg-leaf-light text-cacao shadow-retro transition-transform hover:-translate-y-1 focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-cacao"><MessageCircle className="h-7 w-7" /></a>
    </main>
  );
}

function Header({ language, t, menuOpen, setMenuOpen, switchLanguage }: { language: Language; t: typeof copy.es; menuOpen: boolean; setMenuOpen: (open: boolean) => void; switchLanguage: (language: Language) => void }) {
  return <header className="fixed inset-x-0 top-0 z-50 border-b-3 border-cacao bg-cream/95 backdrop-blur"><div className="mx-auto grid h-20 max-w-7xl grid-cols-[minmax(0,1fr)_auto_auto] items-center gap-3 px-4 sm:px-6"><a href="#home" className="min-w-0"><span className="block truncate font-display text-2xl leading-none text-cacao">THEOBROMA</span><span className="block truncate text-[10px] font-black uppercase text-cacao/70">{siteConfig.subtitle[language]}</span></a><nav aria-label="Main navigation" className="hidden items-center gap-5 lg:flex">{t.nav.map((label, index) => <a key={label} href={`#${sectionIds[index]}`} className="text-sm font-bold text-cacao hover:text-leaf">{label}</a>)}</nav><div className="flex shrink-0 items-center gap-2"><LanguageToggle language={language} switchLanguage={switchLanguage}/><Button onClick={() => setMenuOpen(!menuOpen)} variant="ghost" size="icon" className="h-11 w-11 text-cacao lg:hidden" aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen}>{menuOpen ? <X/> : <Menu/>}</Button><Button asChild className="hidden h-11 bg-leaf text-cream hover:bg-leaf/90 lg:inline-flex"><a href={whatsappUrl(messages.general[language])} target="_blank" rel="noreferrer"><MessageCircle/>WhatsApp</a></Button></div></div>{menuOpen && <nav aria-label="Mobile navigation" className="relative border-t-2 border-cacao bg-yellow px-5 py-6 lg:hidden"><CacaoPod className="absolute -bottom-8 right-3 w-20 text-pink opacity-70"/><div className="relative grid gap-1">{t.nav.map((label, index) => <a key={label} href={`#${sectionIds[index]}`} onClick={() => setMenuOpen(false)} className="flex items-center justify-between border-b border-cacao/25 py-3 font-display text-2xl text-cacao">{label}<ChevronRight className="h-5 w-5"/></a>)}</div></nav>}</header>;
}

function LanguageToggle({ language, switchLanguage }: { language: Language; switchLanguage: (language: Language) => void }) {
  return <div className="flex h-10 items-center rounded-full border-2 border-cacao bg-background p-1" aria-label="Language"><button onClick={() => switchLanguage("es")} className={`h-7 rounded-full px-2 text-xs font-black ${language === "es" ? "bg-cacao text-cream" : "text-cacao"}`} aria-pressed={language === "es"}>ES</button><button onClick={() => switchLanguage("en")} className={`h-7 rounded-full px-2 text-xs font-black ${language === "en" ? "bg-cacao text-cream" : "text-cacao"}`} aria-pressed={language === "en"}>EN</button></div>;
}

function Action({ href, children, primary = false, light = false, className = "" }: { href: string; children: ReactNode; primary?: boolean; light?: boolean; className?: string }) {
  return <Button asChild className={`h-auto min-h-12 whitespace-normal border-2 px-5 py-3 text-center font-extrabold shadow-retro transition-transform hover:-translate-y-1 ${primary ? "border-cacao bg-cacao text-cream hover:bg-jungle" : light ? "border-cream bg-yellow text-cacao hover:bg-orange" : "border-cacao bg-cream text-cacao hover:bg-yellow"} ${className}`}><a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noreferrer" : undefined}>{children}</a></Button>;
}

function SectionTitle({ eyebrow, title, body, light = false }: { eyebrow: string; title: string; body?: string; light?: boolean }) {
  return <div className="max-w-3xl"><p className={`text-xs font-black uppercase tracking-[.18em] ${light ? "text-yellow" : "text-leaf"}`}>{eyebrow}</p><h2 className={`mt-4 font-display text-5xl leading-[.95] sm:text-7xl ${light ? "text-cream" : "text-cacao"}`}>{title}</h2>{body && <p className={`mt-6 text-base leading-relaxed sm:text-lg ${light ? "text-cream/80" : "text-cacao/80"}`}>{body}</p>}</div>;
}

function DiscoveryCard({ index, title, body }: { index: number; title: string; body: string }) {
  const colors = ["bg-pink", "bg-yellow", "bg-leaf-light", "bg-primary"];
  return <article className={`min-h-64 border-3 border-cacao p-6 shadow-retro transition-transform hover:-translate-y-1 ${colors[index]}`}><span className="font-display text-5xl text-cacao/25">0{index + 1}</span><h3 className="mt-8 font-display text-3xl leading-none text-cacao">{title}</h3><p className="mt-4 text-sm leading-relaxed text-cacao/80">{body}</p></article>;
}

function ProductCard({ product, index, language, cta }: { product: (typeof products)[number]; index: number; language: Language; cta: string }) {
  const item = product[language];
  const color = ["bg-orange", "bg-primary", "bg-pink", "bg-yellow", "bg-leaf-light", "bg-guava"][index];
  const message = language === "es" ? `Hola, quiero saber si hoy tienen disponible ${item.name}.` : `Hello, I would like to know if ${item.name} is available today.`;
  return <article className="group overflow-hidden border-3 border-cacao bg-cream shadow-retro"><div className={`relative aspect-[4/3] ${color}`}><div className="absolute inset-5 grid place-items-center rounded-[50%] border-2 border-dashed border-cacao/40 bg-cream/25"><CacaoPod className="w-24 text-pod transition-transform group-hover:rotate-6 group-hover:scale-105"/></div><span className="absolute left-4 top-4 border-2 border-cacao bg-cream px-3 py-1 text-[11px] font-black uppercase text-cacao">{item.label}</span></div><div className="p-5"><h3 className="font-display text-3xl leading-none text-cacao">{item.name}</h3><p className="mt-3 min-h-12 text-sm leading-relaxed text-cacao/75">{item.description}</p><a href={whatsappUrl(message)} target="_blank" rel="noreferrer" className="mt-5 flex min-h-11 items-center justify-between border-t-2 border-cacao pt-4 text-sm font-extrabold text-cacao">{cta}<ArrowRight className="h-4 w-4"/></a></div></article>;
}

function Footer({ language, t, switchLanguage }: { language: Language; t: typeof copy.es; switchLanguage: (language: Language) => void }) {
  return <footer className="relative overflow-hidden bg-jungle px-5 py-14 text-cream"><CacaoPod className="absolute -bottom-14 right-8 w-32 text-yellow opacity-80"/><div className="relative mx-auto grid max-w-7xl gap-10 md:grid-cols-[1fr_auto]"><div><p className="font-display text-5xl">THEOBROMA</p><p className="mt-2 font-editorial text-xl italic text-pink">{siteConfig.subtitle[language]}</p><p className="mt-5 max-w-md text-sm text-cream/70">{t.footerLine}</p></div><div className="grid gap-3 text-sm"><a href={siteConfig.mapsUrl} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-yellow"><MapPin className="h-4 w-4"/>{siteConfig.address}</a>{siteConfig.instagram && <a href={siteConfig.instagram} className="flex items-center gap-2"><Instagram className="h-4 w-4"/>Instagram</a>}<LanguageToggle language={language} switchLanguage={switchLanguage}/></div></div><div className="relative mx-auto mt-12 flex max-w-7xl flex-wrap justify-between gap-4 border-t border-cream/20 pt-5 text-xs text-cream/55"><span>© {new Date().getFullYear()} THEOBROMA · Minca, Colombia</span><span>{t.privacy} · {t.legal}</span></div></footer>;
}