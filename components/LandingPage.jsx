import React, { useState } from 'react';
import { 
  Phone, Send, ShoppingBag, Plus, Minus, ArrowRight, Sparkles, 
  CheckCircle2, Star, Truck, Leaf, Sprout, Zap, ShieldCheck, 
  HeartPulse, Check, Lock, BookOpen, Eye, MessageCircle, 
  Clock, Shield, MapPin, ExternalLink, ChevronDown, Instagram, X,
  Menu, ShoppingCart, ChevronRight
} from 'lucide-react';

// Catálogo de datos basado en los recursos reales de CLAU Nutriflow
const PRODUCTS = [
  {
    id: 'mix-premium',
    category: 'mixes',
    name: 'Mix Premium',
    subtitle: 'Mix de Autor',
    desc: 'Nuez Chandler, almendras Non Pareil, avellanas tostadas y castañas de cajú.',
    price: 23000,
    tag: '★ El Más Vendido',
    tagColor: 'bg-amber-500',
    unit: '1 KG',
    image: 'https://images.unsplash.com/photo-1543158181-1274e5362710?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'mix-energetico',
    category: 'mixes',
    name: 'Mix Energético',
    subtitle: 'Mix Deportivo',
    desc: 'Nuez, almendras, pasas de uva, castañas de cajú y chips de bananas naturales.',
    price: 19500,
    tag: '⚡ Energía Pura',
    tagColor: 'bg-emerald-600',
    unit: '1 KG',
    image: 'https://images.unsplash.com/photo-1543158181-1274e5362710?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'mix-economico',
    category: 'mixes',
    name: 'Mix Económico',
    subtitle: 'Snack Diario',
    desc: 'Nuez, maní tostado sin sal, castaña de cajú, almendra, pasas de uva y bananas.',
    price: 13000,
    tag: '💰 Mejor Precio',
    tagColor: 'bg-stone-800',
    unit: '1 KG',
    image: 'https://plus.unsplash.com/premium_photo-1726863184656-ee0eb26fadc4?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'almendra-non-pareil',
    category: 'frutos',
    name: 'Almendra Non Pareil',
    subtitle: 'Fruto Puro',
    desc: 'Calibre grande seleccionado, textura crujiente y sabor suave no amargo.',
    price: 26000,
    unit: '1 KG',
    image: 'https://images.unsplash.com/photo-1508061253366-f7da158b6d46?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'nuez-chandler',
    category: 'frutos',
    name: 'Nuez Chandler Extra Light',
    subtitle: 'Cosecha Nueva',
    desc: 'Mariposas enteras y mitades de pulpa dorada clara, sin sabor rancio.',
    price: 20000,
    tag: 'Mariposa Extra Light',
    tagColor: 'bg-amber-600',
    unit: '1 KG',
    image: 'https://images.unsplash.com/photo-1626012109496-21f579f648dd?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'castana-caju',
    category: 'frutos',
    name: 'Castaña de Cajú Tostada',
    subtitle: 'Tostado Artesanal',
    desc: 'Tostado en seco al punto justo, cremosas y sin sal añadida.',
    price: 24000,
    unit: '1 KG',
    image: 'https://images.unsplash.com/photo-1509358271058-acd22cc93898?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'chia',
    category: 'semillas-miel',
    name: 'Semilla de Chía',
    subtitle: 'Superalimento',
    desc: 'Limpias y tamizadas, alta concentración de Omega 3 y mucílago soluble.',
    price: 9000,
    unit: '1 KG',
    image: 'https://plus.unsplash.com/premium_photo-1726729281152-4d3d387baf87?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'miel-pura',
    category: 'semillas-miel',
    name: 'Miel Pura de Flores',
    subtitle: 'Apicultura Natural',
    desc: 'Sin jarabes ni adulteración. Disponible líquida o sólida cremosa.',
    price: 5500,
    tag: '🍯 100% Pura',
    tagColor: 'bg-amber-500',
    unit: 'Pote',
    image: 'https://images.unsplash.com/photo-1665473052284-164335672208?auto=format&fit=crop&w=600&q=80',
  }
];

export default function NutriflowLanding() {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('todos');
  const [selectedZone, setSelectedZone] = useState('caba-norte');
  const [openFaq, setOpenFaq] = useState(null);

  // Delivery zone data
  const zoneInfo = {
    'caba-norte': {
      time: 'Entrega Express en 24hs (Mismo día según horario)',
      detail: 'Mensajería local directa para Palermo, Belgrano, Colegiales y Nuñez.'
    },
    'caba-centro': {
      time: 'Entrega Express en 24hs garantizada',
      detail: 'Despacho diario para Centro, Recoleta, Caballito y Almagro.'
    },
    'caba-sur': {
      time: 'Entrega en 24hs a 48hs hábiles',
      detail: 'Ruta regular en Devoto, Villa Urquiza, Flores y Parque Patricios.'
    },
    'gba-norte': {
      time: 'Entrega en 24hs a 48hs hábiles',
      detail: 'Envíos diarios a Vicente López, San Isidro, San Fernando y Tigre.'
    },
    'gba-oeste': {
      time: 'Entrega en 48hs hábiles',
      detail: 'Cobertura en Morón, Ramos Mejía, Castelar e intermediaciones.'
    },
    'gba-sur': {
      time: 'Entrega en 48hs hábiles',
      detail: 'Cobertura en Avellaneda, Lanús, Quilmes y alrededores.'
    },
    'interior': {
      time: 'Despacho en 24hs • Llega en 3 a 5 días',
      detail: 'Envíos por Vía Cargo, OCA o Andreani con código de seguimiento.'
    }
  };

  const addToCart = (product) => {
    setCart(prev => {
      const exists = prev.find(item => item.id === product.id);
      if (exists) {
        return prev.map(item => item.id === product.id ? { ...item, qty: item.qty + 1 } : item);
      }
      return [...prev, { ...product, qty: 1 }];
    });
  };

  const updateQty = (id, delta) => {
    setCart(prev => prev.map(item => {
      if (item.id === id) {
        const newQty = item.qty + delta;
        return newQty > 0 ? { ...item, qty: newQty } : null;
      }
      return item;
    }).filter(Boolean));
  };

  const totalItems = cart.reduce((acc, item) => acc + item.qty, 0);
  const totalPrice = cart.reduce((acc, item) => acc + (item.price * item.qty), 0);

  const handleWhatsAppCheckout = () => {
    if (cart.length === 0) return;
    const phone = "5491139131904";
    let text = "Hola CLAU Nutriflow! Quiero encargar el siguiente pedido:%0A%0A";
    cart.forEach(item => {
      text += `• ${item.qty}x ${item.name} ($${(item.price * item.qty).toLocaleString('es-AR')})%0A`;
    });
    text += `%0ATotal estimado: $${totalPrice.toLocaleString('es-AR')}%0A%0A¿Tiempo estimado para mi zona?`;
    window.open(`https://wa.me/${phone}?text=${text}`, '_blank');
  };

  const filteredProducts = selectedCategory === 'todos' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === selectedCategory);

  return (
    <div className="bg-[#FDFBF7] text-stone-800 font-sans selection:bg-[#1B4332] selection:text-white min-h-screen">
      
      {/* 1. TOP GEO ANNOUNCEMENT BAR */}
      <aside aria-label="Aviso de envíos locales" className="bg-[#0F291E] text-stone-200 text-xs sm:text-sm py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-1.5 sm:gap-4 text-center sm:text-left">
          <div className="flex items-center justify-center gap-2 font-medium">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>📍 <strong>Envío Express en CABA</strong> | Entrega en 24hs en Palermo, Belgrano, Caballito y toda la ciudad</span>
          </div>
          <div className="flex items-center gap-4 text-stone-300 text-xs">
            <span className="hidden md:inline">🌱 Venta Minorista & Mayorista para Dietéticas</span>
            <a href="https://wa.me/5491139131904" target="_blank" rel="noreferrer" className="hover:text-emerald-400 transition-colors inline-flex items-center gap-1 font-semibold text-white">
              <Phone className="w-3.5 h-3.5 text-emerald-400" /> 11 3913-1904
            </a>
          </div>
        </div>
      </aside>

      {/* 2. STICKY HEADER CON BLUR */}
      <header className="sticky top-0 z-40 bg-[#FDFBF7]/90 backdrop-blur-md border-b border-stone-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <a href="#hero" className="flex items-center gap-3 group">
            <div className="w-12 h-12 rounded-2xl bg-[#1B4332] text-emerald-300 flex items-center justify-center shadow-md group-hover:scale-105 transition-transform duration-300">
              <Sprout className="w-6 h-6" />
            </div>
            <div>
              <span className="font-extrabold text-xl sm:text-2xl tracking-tight text-[#1B4332] block leading-tight">
                CLAU <span className="text-[#B07D3E] font-light">Nutriflow</span>
              </span>
              <span className="text-[10px] tracking-widest uppercase font-semibold text-stone-500 block">Alimentos Reales & Naturales</span>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-stone-700">
            <a href="#beneficios" className="hover:text-[#1B4332] transition-colors">Beneficios</a>
            <a href="#productos" className="hover:text-[#1B4332] transition-colors">Packs & Catálogo</a>
            <a href="#geo-envios" className="hover:text-[#1B4332] transition-colors">Zonas de Entrega</a>
            <a href="#testimonios" className="hover:text-[#1B4332] transition-colors">Opiniones</a>
            <a href="#faq" className="hover:text-[#1B4332] transition-colors">Preguntas Frecuentes</a>
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <button 
              onClick={() => setIsCartOpen(true)}
              className="relative p-2.5 rounded-xl text-[#1B4332] hover:bg-emerald-100/50 transition-colors"
            >
              <ShoppingBag className="w-6 h-6" />
              <span className="absolute top-1 right-1 w-5 h-5 bg-[#B07D3E] text-white text-xs font-bold rounded-full flex items-center justify-center">
                {totalItems}
              </span>
            </button>

            <a 
              href="#productos" 
              className="hidden sm:inline-flex items-center gap-2 bg-[#1B4332] hover:bg-[#2D6A4F] text-white text-sm font-bold py-3 px-6 rounded-2xl shadow-md hover:-translate-y-0.5 active:translate-y-0 transition-all"
            >
              <ShoppingCart className="w-4 h-4 text-emerald-300" />
              <span>Comprar Ahora</span>
            </a>

            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
              className="md:hidden p-2.5 rounded-xl text-[#1B4332] hover:bg-emerald-100/50 transition-colors"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Menú Móvil Desplegable */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-[#FDFBF7]/98 backdrop-blur-lg border-b border-stone-200 px-6 py-5 space-y-4 shadow-xl">
            <nav className="flex flex-col space-y-3 font-semibold text-stone-700 text-base">
              <a href="#beneficios" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[#1B4332] py-1 flex items-center justify-between border-b border-stone-100 pb-2">
                <span>Beneficios</span> <ChevronRight className="w-4 h-4 text-stone-400" />
              </a>
              <a href="#productos" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[#1B4332] py-1 flex items-center justify-between border-b border-stone-100 pb-2">
                <span>Packs & Catálogo</span> <ChevronRight className="w-4 h-4 text-stone-400" />
              </a>
              <a href="#geo-envios" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[#1B4332] py-1 flex items-center justify-between border-b border-stone-100 pb-2">
                <span>Zonas de Entrega</span> <ChevronRight className="w-4 h-4 text-stone-400" />
              </a>
              <a href="#testimonios" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[#1B4332] py-1 flex items-center justify-between border-b border-stone-100 pb-2">
                <span>Opiniones</span> <ChevronRight className="w-4 h-4 text-stone-400" />
              </a>
              <a href="#faq" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[#1B4332] py-1 flex items-center justify-between border-b border-stone-100 pb-2">
                <span>Preguntas Frecuentes</span> <ChevronRight className="w-4 h-4 text-stone-400" />
              </a>
            </nav>
            <div className="pt-2 flex flex-col gap-2">
              <a href="#productos" onClick={() => setIsMobileMenuOpen(false)} className="w-full text-center bg-[#1B4332] text-white font-bold py-3 rounded-2xl shadow-sm text-sm">
                Comprar Ahora
              </a>
              <a href="https://wa.me/5491139131904" target="_blank" rel="noreferrer" className="w-full text-center bg-stone-100 text-[#1B4332] font-bold py-3 rounded-2xl border border-stone-200 text-sm flex items-center justify-center gap-2">
                <Phone className="w-4 h-4 text-emerald-600" /> WhatsApp 11 3913-1904
              </a>
            </div>
          </div>
        )}
      </header>

      {/* 3. HERO SECTION */}
      <section id="hero" className="relative pt-16 pb-20 md:py-28 overflow-hidden scroll-mt-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
          
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 text-[#1B4332] text-xs sm:text-sm font-bold tracking-wide uppercase shadow-sm">
            <span className="w-2.5 h-2.5 rounded-full bg-[#1B4332] animate-pulse"></span>
            Cosecha Seleccionada • Stock Fresco 2026 en CABA
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-stone-900 tracking-tight leading-[1.14] max-w-4xl mx-auto">
            Frutos secos puros, <br className="hidden sm:inline" />
            <span className="text-[#1B4332] underline decoration-emerald-400 decoration-wavy decoration-2">energía natural</span> en cada bocado.
          </h1>

          <h2 className="text-lg sm:text-xl text-stone-600 font-normal max-w-2xl mx-auto leading-relaxed">
            Sin azúcar añadida, sin conservantes y directo a tu hogar. Mixes energéticos, nueces Chandler, almendras premium y semillas para tu bienestar diario o para revender en tu dietética.
          </h2>

          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-xs sm:text-sm font-semibold text-stone-700 pt-2">
            <span className="inline-flex items-center gap-1.5 bg-white/90 px-4 py-2 rounded-xl border border-stone-200/80 shadow-sm"><CheckCircle2 className="w-4 h-4 text-emerald-600" /> Calidad de exportación</span>
            <span className="inline-flex items-center gap-1.5 bg-white/90 px-4 py-2 rounded-xl border border-stone-200/80 shadow-sm"><CheckCircle2 className="w-4 h-4 text-emerald-600" /> Envíos express en el día</span>
            <span className="inline-flex items-center gap-1.5 bg-white/90 px-4 py-2 rounded-xl border border-stone-200/80 shadow-sm"><CheckCircle2 className="w-4 h-4 text-emerald-600" /> Packs herméticos de 1 KG</span>
          </div>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#productos" className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#1B4332] hover:bg-[#2D6A4F] text-white font-bold py-4 px-8 rounded-2xl shadow-lg hover:-translate-y-0.5 transition-all text-base">
              <span>Ver Packs & Catálogo</span>
              <ArrowRight className="w-5 h-5 text-emerald-300" />
            </a>

            <a href="#beneficios" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-[#F7F3E9] text-stone-800 border border-stone-200 font-semibold py-4 px-7 rounded-2xl hover:-translate-y-0.5 transition-all text-base shadow-sm">
              <Sparkles className="w-4 h-4 text-[#B07D3E]" />
              <span>¿Por qué CLAU Nutriflow?</span>
            </a>
          </div>

          {/* Social Proof */}
          <div className="pt-6 flex items-center justify-center gap-4">
            <div className="text-left">
              <div className="flex items-center text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400" />
                ))}
                <span className="ml-2 text-xs font-bold text-stone-800">4.9 / 5.0</span>
              </div>
              <p className="text-xs text-stone-500 font-medium">+1.400 envíos completados en Buenos Aires</p>
            </div>
          </div>

        </div>
      </section>

      {/* 4. BENTO GRID: BENEFICIOS */}
      <section id="beneficios" className="py-20 bg-white border-y border-stone-200/60 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold tracking-widest uppercase text-[#1B4332] bg-emerald-100/70 px-3.5 py-1.5 rounded-full inline-block">
              La Diferencia Nutriflow
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight">
              Calidad visible, frescura real y nutrición auténtica
            </h2>
            <p className="text-stone-600 text-base sm:text-lg">
              No todos los frutos secos son iguales. Seleccionamos el calibre exacto, sin aditivos ni aceites refinados.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {/* Card 1 */}
            <article className="md:col-span-7 bg-[#FDFBF7] rounded-3xl p-8 border border-stone-200/70 flex flex-col justify-between">
              <div className="space-y-4 max-w-md">
                <div className="w-12 h-12 rounded-2xl bg-[#1B4332] text-emerald-300 flex items-center justify-center shadow">
                  <Leaf className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-stone-900">1. Origen 100% Natural y Cosecha Nueva</h3>
                <p className="text-stone-600 leading-relaxed text-sm sm:text-base">
                  Trabajamos con productores directos de Mendoza y Río Negro. Nueces Chandler extra light de pulpa clara y almendras Non Pareil crocantes.
                </p>
              </div>
            </article>

            {/* Card 2 */}
            <article className="md:col-span-5 bg-[#0F291E] text-white rounded-3xl p-8 border border-emerald-950 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-white/10 text-emerald-400 flex items-center justify-center">
                  <Zap className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-white">2. Logística Ágil & Envíos CABA</h3>
                <p className="text-stone-300 text-sm leading-relaxed">
                  Despachamos de forma inmediata. Si estás en CABA o primer cordón de GBA, recibís tu pedido fresco en tu puerta en 24 a 48 hs.
                </p>
              </div>
            </article>

            {/* Card 3 */}
            <article className="md:col-span-5 bg-[#F7F3E9] rounded-3xl p-8 border border-stone-200/70 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-[#B07D3E] text-white flex items-center justify-center shadow">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-stone-900">3. Pack Resellable Hermético</h3>
                <p className="text-stone-600 text-sm leading-relaxed">
                  Bolsas de alta barrera contra la humedad y el oxígeno. Abrí, comé tu porción diaria y volvé a sellar manteniendo el crocante intacto.
                </p>
              </div>
            </article>

            {/* Card 4 */}
            <article className="md:col-span-7 bg-stone-900 text-white rounded-3xl p-8 border border-stone-800 flex flex-col justify-between">
              <div className="space-y-4 max-w-lg">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                  <HeartPulse className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-white">4. Sin Azúcares Añadidos ni Grasas Trans</h3>
                <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
                  Ideal para deportistas, planes keto, personas con diabetes o quienes buscan un combustible limpio y libre de ingredientes ocultos.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* 5. PRODUCT SHOWCASE */}
      <section id="productos" className="py-20 bg-[#FDFBF7] scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div className="space-y-3">
              <span className="text-xs font-bold tracking-widest uppercase text-[#1B4332] bg-emerald-100 px-3.5 py-1.5 rounded-full inline-block">
                Catálogo Oficial 2026
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight">
                Nuestros Packs & Frutos Seleccionados
              </h2>
              <p className="text-stone-600 text-base max-w-xl">
                Precios minoristas por kilogramo. Consultanos por lista mayorista para dietéticas.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2 bg-white p-1.5 rounded-2xl border border-stone-200 shadow-sm">
              {['todos', 'mixes', 'frutos', 'semillas-miel'].map(cat => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                    selectedCategory === cat ? 'bg-[#1B4332] text-white' : 'text-stone-600 hover:text-stone-900'
                  }`}
                >
                  {cat === 'todos' ? 'Todos' : cat === 'mixes' ? 'Mixes Energéticos' : cat === 'frutos' ? 'Frutos Secos' : 'Semillas & Miel'}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map(product => (
              <div 
                key={product.id}
                className="bg-white rounded-3xl p-5 border border-stone-200/80 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="relative overflow-hidden rounded-2xl bg-[#F7F3E9] aspect-square mb-4">
                    <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    {product.tag && (
                      <span className={`absolute top-3 left-3 text-white text-[11px] font-extrabold px-3 py-1 rounded-full shadow ${product.tagColor}`}>
                        {product.tag}
                      </span>
                    )}
                    <span className="absolute top-3 right-3 bg-white/90 text-stone-700 text-[10px] font-bold px-2 py-0.5 rounded-md">
                      {product.unit}
                    </span>
                  </div>

                  <div className="space-y-1">
                    <span className="text-[11px] font-semibold text-emerald-700 uppercase tracking-wider">{product.subtitle}</span>
                    <h3 className="text-lg font-bold text-stone-900 group-hover:text-[#1B4332] transition-colors">{product.name}</h3>
                    <p className="text-xs text-stone-500 line-clamp-2">{product.desc}</p>
                  </div>
                </div>

                <div className="pt-4 mt-2 border-t border-stone-100 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-stone-400 block font-medium">Precio por {product.unit}</span>
                    <span className="text-xl font-extrabold text-stone-900">${product.price.toLocaleString('es-AR')}</span>
                  </div>
                  <button 
                    onClick={() => addToCart(product)}
                    className="inline-flex items-center gap-1.5 bg-[#1B4332] hover:bg-[#2D6A4F] text-white text-xs font-bold py-2.5 px-4 rounded-xl shadow-sm hover:scale-105 transition-all"
                  >
                    <Plus className="w-4 h-4" /> Añadir
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. GEO SECTION: ENVIOS EN CABA */}
      <section id="geo-envios" className="py-20 bg-[#F7F3E9]/60 border-t border-stone-200/70 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold tracking-widest uppercase text-[#1B4332] bg-emerald-100 px-3.5 py-1.5 rounded-full inline-block">
                Logística & Cobertura Local
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight">
                Recibí tus frutos secos en el día en CABA y GBA
              </h2>
              <p className="text-stone-600 leading-relaxed text-base">
                Contamos con logística propia y alianzas con motomensajería rápida para que nunca te quedes sin tus snacks saludables ni esperes semanas.
              </p>

              <div className="bg-white rounded-3xl p-6 border border-stone-200 shadow-sm space-y-4">
                <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider">
                  Calculá el tiempo estimado para tu barrio / zona:
                </label>
                <select 
                  value={selectedZone} 
                  onChange={(e) => setSelectedZone(e.target.value)}
                  className="bg-[#FDFBF7] border border-stone-300 rounded-xl px-4 py-3 text-sm font-semibold text-stone-800 focus:outline-none focus:ring-2 focus:ring-[#1B4332] w-full"
                >
                  <option value="caba-norte">CABA (Palermo, Belgrano, Nuñez, Colegiales)</option>
                  <option value="caba-centro">CABA (Centro, Recoleta, Almagro, Caballito)</option>
                  <option value="caba-sur">CABA (Villa Urquiza, Devoto, Flores, Parque Patricios)</option>
                  <option value="gba-norte">GBA Norte (Vicente López, San Isidro, Tigre)</option>
                  <option value="gba-oeste">GBA Oeste (Morón, Ramos Mejía, Haedo)</option>
                  <option value="gba-sur">GBA Sur (Avellaneda, Lanús, Quilmes)</option>
                  <option value="interior">Interior del País (Vía Cargo / Correo)</option>
                </select>

                <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-start gap-3">
                  <Clock className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-bold text-emerald-900">{zoneInfo[selectedZone].time}</p>
                    <p className="text-xs text-emerald-700 font-medium">{zoneInfo[selectedZone].detail}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 bg-white rounded-3xl p-6 border border-stone-200 shadow-xl space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-[#1B4332] flex items-center justify-center font-bold">
                  📍
                </div>
                <div>
                  <h3 className="text-base font-bold text-stone-900">Centro de Despacho CABA</h3>
                  <p className="text-xs text-stone-500">Distribución diaria a toda Capital Federal</p>
                </div>
              </div>
              <p className="text-xs text-stone-600 leading-relaxed">
                Empaquetamos cada pedido al vacío o en atmósfera controlada para garantizar que llegue con la textura y humedad óptimas a tu mesa.
              </p>
              <div className="pt-2 border-t border-stone-100 flex items-center justify-between text-xs">
                <span className="font-semibold text-stone-700">Atención WhatsApp 24/7</span>
                <a href="https://wa.me/5491139131904" target="_blank" rel="noreferrer" className="text-[#1B4332] font-bold hover:underline">
                  11 3913-1904
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. FAQ SECTION */}
      <section id="faq" className="py-20 bg-[#FDFBF7] border-t border-stone-200/60 scroll-mt-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 space-y-3">
            <span className="text-xs font-bold tracking-widest uppercase text-[#1B4332] bg-emerald-100 px-3.5 py-1.5 rounded-full inline-block">
              Dudas Comunes
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight">
              Preguntas Frecuentes
            </h2>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "¿Cómo funcionan los envíos en CABA y Gran Buenos Aires?",
                a: "Realizamos envíos en 24hs a 48hs en toda la Ciudad Autónoma de Buenos Aires mediante motomensajería o flete express según el volumen del pedido."
              },
              {
                q: "¿Tienen lista de precios mayorista para dietéticas y revendedores?",
                a: "¡Sí! Abastecemos dietéticas, gimnasios y emprendedores. Podés acceder a nuestra escala mayorista por bultos de 5kg, 10kg o cajas cerradas con importantes descuentos al 11 3913-1904."
              },
              {
                q: "¿Cuánto tiempo se conservan los frutos secos crujientes?",
                a: "Nuestros paquetes de 1 KG están termosellados. Al abrir el cierre hermético, conservándolos en un lugar fresco y seco, mantienen su frescura por más de 6 meses."
              }
            ].map((faq, idx) => (
              <div key={idx} className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-sm">
                <button 
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 font-bold text-stone-900 hover:text-[#1B4332]"
                >
                  <span className="text-base sm:text-lg">{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-stone-400 transition-transform ${openFaq === idx ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === idx && (
                  <div className="px-6 pb-5 text-stone-600 text-sm leading-relaxed border-t border-stone-100 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. CARRITO / DRAWER */}
      {isCartOpen && (
        <div className="fixed inset-0 z-50 flex justify-end">
          <div className="fixed inset-0 bg-stone-900/60 backdrop-blur-sm" onClick={() => setIsCartOpen(false)}></div>
          <div className="relative w-full max-w-md bg-white shadow-2xl p-6 flex flex-col justify-between z-10">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-stone-200">
                <div className="flex items-center gap-2">
                  <ShoppingBag className="w-5 h-5 text-[#1B4332]" />
                  <h3 className="text-lg font-bold text-stone-900">Tu Pedido</h3>
                  <span className="text-xs font-semibold bg-emerald-100 text-[#1B4332] px-2 py-0.5 rounded-full">{totalItems} items</span>
                </div>
                <button onClick={() => setIsCartOpen(false)} className="p-2 text-stone-400 hover:text-stone-800 rounded-lg">
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="py-4 space-y-4 max-h-[55vh] overflow-y-auto">
                {cart.length === 0 ? (
                  <p className="text-center py-12 text-stone-400 text-sm">Tu carrito está vacío.</p>
                ) : (
                  cart.map(item => (
                    <div key={item.id} className="flex items-center justify-between gap-3 p-3 rounded-2xl bg-[#FDFBF7] border border-stone-200/60">
                      <div className="flex-1 min-w-0">
                        <h4 className="text-xs font-bold text-stone-800 truncate">{item.name}</h4>
                        <span className="text-xs text-[#1B4332] font-extrabold">${(item.price * item.qty).toLocaleString('es-AR')}</span>
                      </div>
                      <div className="flex items-center gap-1.5 bg-white border border-stone-200 rounded-lg p-1">
                        <button onClick={() => updateQty(item.id, -1)} className="w-6 h-6 flex items-center justify-center font-bold text-stone-500">-</button>
                        <span className="text-xs font-bold w-4 text-center">{item.qty}</span>
                        <button onClick={() => updateQty(item.id, 1)} className="w-6 h-6 flex items-center justify-center font-bold text-stone-500">+</button>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>

            <div className="pt-4 border-t border-stone-200 space-y-4">
              <div className="flex items-center justify-between text-lg font-black text-stone-900">
                <span>Total:</span>
                <span className="text-[#1B4332]">${totalPrice.toLocaleString('es-AR')}</span>
              </div>
              <button 
                onClick={handleWhatsAppCheckout}
                className="w-full bg-[#1B4332] hover:bg-[#2D6A4F] text-white font-bold py-4 px-6 rounded-2xl flex items-center justify-center gap-2 shadow-lg transition-all"
              >
                <Send className="w-4 h-4 text-emerald-300" />
                <span>Enviar Pedido a WhatsApp</span>
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
