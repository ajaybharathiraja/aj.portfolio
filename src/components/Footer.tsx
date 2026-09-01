export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t py-8 bg-background">
      <div className="container mx-auto px-4 max-w-6xl flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-muted-foreground text-sm text-center md:text-left">
          &copy; {currentYear} Ajay R. All rights reserved.
        </p>
        <div className="flex items-center gap-6">
          <a href="https://github.com/ajaybharathiraja" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            GitHub
          </a>
          <a href="mailto:ajaybharathiraja@gmail.com" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Email
          </a>
          <a href="tel:6369180490" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Phone
          </a>
        </div>
      </div>
    </footer>
  );
}
