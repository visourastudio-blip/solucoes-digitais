import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";
import projectCardapio from "@/assets/project-cardapio.jpg";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Cardápio Modelo Demonstrativo",
    description: "Projeto criado para apresentação comercial, usado como vitrine para novos clientes entenderem o funcionamento antes de contratar.",
    image: projectCardapio,
    category: "Cardápio Digital",
  },
];

export const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <>
      <section id="projetos" className="py-24 sm:py-32 px-6 lg:px-8 bg-secondary/30">
        <div className="container max-w-4xl">
          <ScrollReveal>
            <h2 className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">
              Projetos
            </h2>
            <p className="text-3xl sm:text-4xl font-bold text-foreground mb-16">
              Cases de Sucesso
            </p>
          </ScrollReveal>

          <div className="space-y-12">
            {projects.map((project, index) => (
              <ScrollReveal key={project.id} delay={index * 0.1}>
                <article 
                  onClick={() => setSelectedProject(project)}
                  className="group cursor-pointer"
                >
                  <div className="relative overflow-hidden rounded-xl mb-6">
                    <motion.div
                      whileHover={{ scale: 1.03 }}
                      transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
                    >
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full aspect-video object-cover"
                      />
                      <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-500 flex items-center justify-center">
                        <motion.div
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileHover={{ opacity: 1, scale: 1 }}
                          className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        >
                          <div className="bg-background/90 backdrop-blur-sm rounded-full p-4">
                            <ExternalLink className="w-6 h-6 text-primary" />
                          </div>
                        </motion.div>
                      </div>
                    </motion.div>
                  </div>

                  <span className="text-xs font-medium text-primary uppercase tracking-wider">
                    {project.category}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-semibold text-foreground mt-2 mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm flex items-center justify-center p-4 sm:p-8"
          >
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              onClick={() => setSelectedProject(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-secondary hover:bg-secondary/80 transition-colors"
            >
              <X className="w-6 h-6 text-foreground" />
            </motion.button>

            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-5xl w-full"
            >
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full rounded-xl shadow-2xl"
              />
              <div className="mt-6 text-center">
                <span className="text-xs font-medium text-primary uppercase tracking-wider">
                  {selectedProject.category}
                </span>
                <h3 className="text-2xl font-semibold text-foreground mt-2">
                  {selectedProject.title}
                </h3>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
