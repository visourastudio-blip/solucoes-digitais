export const Footer = () => {
  return (
    <footer className="py-8 px-6 lg:px-8 border-t border-border">
      <div className="container flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} Nicolas. Todos os direitos reservados.</p>
        <p>Desenvolvido com foco em resultados.</p>
      </div>
    </footer>
  );
};
