import { Check, Flame } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";
import { motion } from "framer-motion";

interface Service {
  title: string;
  price: string;
  description: string;
  deliverables: string[];
  featured?: boolean;
  badge?: string;
}

const services: Service[] = [
  {
    title: "Cardápio Digital Automatizado",
    price: "A partir de R$ 297",
    description: "Sistema próprio de pedidos com opção de pagamento online (Pix e Cartão), sem taxas por pedido e sem dependência de marketplaces.",
    deliverables: [
      "Cardápio online com link ou QR Code",
      "Sistema de pedidos organizado",
      "Opção de pagamento online (se desejar)",
      "Layout responsivo",
      "Painel simples para controle de pedidos",
    ],
  },
  {
    title: "Landing Page Profissional (LP)",
    price: "A partir de R$ 197",
    description: "Página focada em conversão para apresentar cardápio, serviços ou ofertas de forma clara, rápida e adaptada para celular.",
    deliverables: [
      "Estrutura focada em conversão",
      "Design moderno e profissional",
      "Botões de ação (Pedido, WhatsApp, Orçamento)",
      "Otimizada para celular e carregamento rápido",
    ],
  },
  {
    title: "Criação de Logo Profissional",
    price: "A partir de R$ 97",
    description: "Logo profissional pensado para uso digital, ideal para negócios que precisam de identidade visual funcional e objetiva.",
    deliverables: [
      "Logo principal + variação simples",
      "Arquivos prontos para uso digital",
      "Aplicação básica em redes sociais",
    ],
  },
  {
    title: "Pacote Completo – Presença Digital",
    price: "R$ 497",
    description: "Aqui está o ponto de alavancagem do seu negócio.",
    featured: true,
    badge: "Recomendado",
    deliverables: [
      "Cardápio Digital Automatizado",
      "Landing Page Profissional",
      "Logo Profissional",
      "Integração com WhatsApp ou Pagamento Online",
      "Layout unificado (mesma identidade visual)",
      "Padronização visual entre LP, cardápio e logo",
      "Entrega pensada para o cliente usar no mesmo dia",
    ],
  },
];

export const ServicesSection = () => {
  return (
    <section id="servicos" className="py-24 sm:py-32 px-6 lg:px-8">
      <div className="container max-w-5xl">
        <ScrollReveal>
          <h2 className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">
            Serviços
          </h2>
          <p className="text-3xl sm:text-4xl font-bold text-foreground mb-16">
            Soluções que Funcionam
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <ScrollReveal key={service.title} delay={index * 0.1}>
              <motion.article
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
                className={`relative h-full p-8 rounded-2xl border transition-all duration-300 ${
                  service.featured 
                    ? "bg-primary/5 border-primary/30 glow-primary" 
                    : "bg-card border-border hover:border-primary/50"
                }`}
              >
                {service.badge && (
                  <div className="absolute -top-3 left-8">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-primary text-primary-foreground">
                      <Flame className="w-3 h-3" />
                      {service.badge}
                    </span>
                  </div>
                )}

                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {service.title}
                </h3>
                <p className="text-2xl font-bold text-primary mb-4">
                  {service.price}
                </p>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-3">
                  {service.deliverables.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm">
                      <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
