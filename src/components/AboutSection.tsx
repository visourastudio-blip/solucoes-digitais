import { ScrollReveal } from "./ScrollReveal";

export const AboutSection = () => {
  return (
    <section id="sobre" className="py-24 sm:py-32 px-6 lg:px-8">
      <div className="container max-w-3xl">
        <ScrollReveal>
          <h2 className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">
            Sobre Mim
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed mb-6">
            Ajudo negócios locais a venderem mais e se organizarem melhor através de sistemas digitais simples, funcionais e sem taxas abusivas.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed mb-6">
            Sou especializado na criação de cardápios digitais próprios, landing pages e sistemas de pedidos, focando em reduzir a bagunça do WhatsApp, eliminar dependência de marketplaces e melhorar a experiência do cliente.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <p className="text-lg sm:text-xl text-foreground leading-relaxed font-medium">
            Trabalho com soluções práticas, entrega rápida e foco total no que realmente impacta o faturamento do negócio.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
};
