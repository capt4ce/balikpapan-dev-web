import { Github, Twitter, Mail } from "lucide-react";
import bpnDevLogo from "@/assets/bpn-dev-logo.png";

export function Footer() {
  return (
    <footer className="border-t bg-muted/50">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img src={bpnDevLogo} alt="Balikpapan.dev Logo" className="h-8 w-8 dark:invert" />
              <span className="text-lg font-bold bg-gradient-hero bg-clip-text text-transparent">
                Balikpapan.dev
              </span>
            </div>
            <p className="text-sm text-muted-foreground max-w-xs">
              Helping programmers grow and fostering Balikpapan tech ecosystem into Silicon Valley of Indonesia.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/" className="text-muted-foreground hover:text-primary transition-colors">Home</a></li>
              <li><a href="/posts" className="text-muted-foreground hover:text-primary transition-colors">Posts</a></li>
              <li><a href="/about" className="text-muted-foreground hover:text-primary transition-colors">About</a></li>
            </ul>
          </div>

          {/* Community */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold">Community</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Join Us</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Events</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Mentorship</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold">Connect</h3>
            <div className="flex space-x-4">
              <a href="mailto:info@balikpapan.dev" className="text-muted-foreground hover:text-primary transition-colors">
                <Mail className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t">
          <p className="text-center text-sm text-muted-foreground">
            © 2025 Balikpapan.dev. Built by the community.
          </p>
        </div>
      </div>
    </footer>
  );
}