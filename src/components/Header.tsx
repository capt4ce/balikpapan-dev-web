import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./ThemeToggle";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import bpnDevLogo from "@/assets/bpn-dev-logo.png";

export function Header() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Posts", href: "/posts" },
    { name: "About", href: "/about" },
  ];

  const isActive = (href: string) => location.pathname === href;

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <img src={bpnDevLogo} alt="Balikpapan.dev Logo" className="h-8 w-8 dark:invert" />
          <span className="text-xl font-bold bg-gradient-hero bg-clip-text text-transparent">
            Balikpapan.dev
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={`relative text-sm font-medium transition-colors hover:text-primary after:absolute after:bottom-[-20px] after:left-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 ${
                isActive(item.href)
                  ? "text-primary after:w-full"
                  : "text-muted-foreground after:w-0 hover:after:w-full"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center space-x-2">
          <ThemeToggle />
          
          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden border-t bg-background animate-in fade-in slide-in-from-top-4 duration-200">
          <nav className="container py-4 space-y-3">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`block text-sm font-medium transition-colors hover:text-primary ${
                  isActive(item.href)
                    ? "text-primary"
                    : "text-muted-foreground"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}