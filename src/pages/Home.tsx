import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Users, Calendar, BookOpen, Github, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { SEO } from "@/components/SEO";
import heroImage from "@/assets/hero-balikpapan.jpg";

// Mock data for demonstration
const featuredPosts = [
  {
    id: 1,
    title: "Kickoff: Balikpapan.dev",
    excerpt: "Kenapa komunitas ini ada dan cara ikut bergabung dengan kami.",
    author: "Team Balikpapan.dev",
    date: "2025-09-01",
    tags: ["community", "announcement"],
    pinned: true,
  },
  {
    id: 2,
    title: "Getting Started with React in 2025",
    excerpt: "Panduan lengkap memulai development dengan React untuk pemula.",
    author: "Sarah Aisyah",
    date: "2025-09-15",
    tags: ["react", "tutorial", "beginner"],
    pinned: false,
  },
  {
    id: 3,
    title: "Building Scalable APIs with Node.js",
    excerpt: "Best practices untuk membangun REST API yang scalable dan maintainable.",
    author: "Rizki Pratama",
    date: "2025-09-20",
    tags: ["nodejs", "api", "backend"],
    pinned: false,
  },
];

const stats = [
  { icon: Users, label: "Active Members", value: "150+" },
  { icon: BookOpen, label: "Articles Published", value: "25+" },
  { icon: Calendar, label: "Events Held", value: "12+" },
  { icon: Github, label: "Open Source Projects", value: "8+" },
];

export default function Home() {
  return (
    <>
      <SEO
        title="Balikpapan.dev - Developer Community"
        description="Bergabunglah dengan komunitas developer Balikpapan untuk berkembang bersama, berbagi pengetahuan, dan membangun ekosistem teknologi yang kuat di Kalimantan Timur."
      />
      <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
          style={{ backgroundImage: `url(${heroImage})` }}
        ></div>
        <div className="absolute inset-0 bg-gradient-hero opacity-5"></div>
        <div className="container relative">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-8 flex justify-center">
              <Badge variant="secondary" className="px-4 py-2 text-sm">
                <Star className="mr-2 h-4 w-4" />
                Komunitas Developer Balikpapan
              </Badge>
            </div>
            
            <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
              Wujudkan{" "}
              <span className="bg-gradient-hero bg-clip-text text-transparent">
                Silicon Valley
              </span>{" "}
              di Balikpapan
            </h1>
            
            <p className="mb-10 text-xl text-muted-foreground max-w-2xl mx-auto">
              Bergabunglah dengan komunitas developer Balikpapan untuk berkembang bersama, 
              berbagi pengetahuan, dan membangun ekosistem teknologi yang kuat di Kalimantan Timur.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" asChild>
                <Link to="/about">
                  Bergabung Sekarang
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/posts">Baca Artikel</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/50">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-ocean">
                    <stat.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                </div>
                <div className="text-2xl font-bold text-primary">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-16">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Artikel Terbaru</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Bacaan terkini dari komunitas developer Balikpapan
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredPosts.map((post) => (
              <Card key={post.id} className="group hover:shadow-card transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      {post.pinned && (
                        <Badge variant="secondary" className="text-xs">
                          <Star className="w-3 h-3 mr-1" />
                          Pinned
                        </Badge>
                      )}
                    </div>
                    <span className="text-sm text-muted-foreground">{post.date}</span>
                  </div>
                  <CardTitle className="group-hover:text-primary transition-colors">
                    <Link to={`/posts/${post.id}`}>
                      {post.title}
                    </Link>
                  </CardTitle>
                  <CardDescription>{post.excerpt}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">by {post.author}</span>
                    <div className="flex gap-2">
                      {post.tags.slice(0, 2).map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button variant="ocean" size="lg" asChild>
              <Link to="/posts">
                Lihat Semua Artikel
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-card">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Join Us?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Mari bersama-sama membangun ekosistem teknologi yang lebih baik di Balikpapan. 
            Bergabunglah dengan komunitas kami sekarang!
          </p>
          <Button variant="cta" size="lg" asChild>
            <Link to="/about">
              Bergabung dengan Komunitas
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
    </>
  );
}