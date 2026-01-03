import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

export const ContactSection = () => {
  return (
    <section id="contato" className="py-24 sm:py-32 px-6 lg:px-8 bg-secondary/30">
      <div className="container max-w-2xl text-center">
        <ScrollReveal>
          <h2 className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">
            Contato
          </h2>
          <p className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
            Pronto para Transformar seu Negócio?
          </p>
          <p className="text-lg text-muted-foreground mb-10">
            Entre em contato e vamos conversar sobre como posso ajudar seu negócio a vender mais e se organizar melhor.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <motion.a
            href="https://wa.me/5500000000000"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-xl hover:bg-primary/90 transition-colors glow-primary"
          >
            <MessageCircle className="w-5 h-5" />
            Fale Comigo no WhatsApp
          </motion.a>
        </ScrollReveal>
      </div>
    </section>
  );
};
