import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center max-w-md mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
          <h2 className="text-2xl font-semibold mb-4">Page Not Found</h2>
          <p className="text-muted-foreground mb-8">
            Halaman yang Anda cari tidak ditemukan. Mungkin halaman telah dipindahkan atau URL salah.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="hero" asChild>
            <a href="/">
              <Home className="mr-2 h-4 w-4" />
              Back to Home
            </a>
          </Button>
          <Button variant="outline" asChild>
            <a href="/posts">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Browse Articles
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
