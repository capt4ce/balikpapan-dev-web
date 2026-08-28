import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Users, Calendar, BookOpen, Github, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { SEO } from "@/components/SEO";
import { Reveal } from "@/components/Reveal";

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

const publishedDate = "2025-09-01T00:00:00+07:00";
const modifiedDate = "2025-09-28T10:30:00+07:00";

export default function Home() {
  return (
    <>
      <SEO
        title="Balikpapan.dev - Developer Community"
        description="Bergabunglah dengan komunitas developer Balikpapan untuk berkembang bersama, berbagi pengetahuan, dan membangun ekosistem teknologi yang kuat di Kalimantan Timur."
        type="website"
        articleMeta={{ publishedTime: publishedDate, modifiedTime: modifiedDate }}
      />
      <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32">
        <div className="absolute inset-0 mesh-gradient" />
        <div className="absolute inset-0 grid-pattern opacity-40" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background to-transparent" />

        <div className="container relative">
          <div className="mx-auto max-w-4xl text-center">
            <Reveal>
              <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-medium text-primary">
                <Star className="h-4 w-4" />
                Komunitas Developer Balikpapan
              </div>
            </Reveal>

            <Reveal delay={100}>
              <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                Wujudkan{" "}
                <span className="bg-gradient-hero bg-clip-text text-transparent">
                  Silicon Valley
                </span>{" "}
                di Balikpapan
              </h1>
            </Reveal>

            <Reveal delay={200}>
              <p className="mb-10 text-lg text-muted-foreground max-w-2xl mx-auto">
                Bergabunglah dengan komunitas developer Balikpapan untuk berkembang bersama,
                berbagi pengetahuan, dan membangun ekosistem teknologi yang kuat di Kalimantan Timur.
              </p>
            </Reveal>

            <Reveal delay={300}>
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
            </Reveal>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="border-y bg-muted/30 py-16">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <Reveal key={index} delay={index * 100} className="h-full">
                <div className="flex h-full flex-col items-center text-center p-6 rounded-xl bg-card border shadow-sm hover:shadow-elegant transition-shadow duration-300">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-ocean mb-4">
                    <stat.icon className="h-7 w-7 text-primary-foreground" />
                  </div>
                  <div className="text-3xl font-bold text-primary mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-16">
        <div className="container">
          <Reveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Artikel Terbaru</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Bacaan terkini dari komunitas developer Balikpapan
              </p>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {featuredPosts.map((post, index) => (
              <Reveal key={post.id} delay={index * 100} className="h-full">
                <Card className="group hover:shadow-elegant hover:-translate-y-1 transition-all duration-300 overflow-hidden h-full">
                  <div className="aspect-video bg-gradient-to-br from-primary/10 via-primary/5 to-accent/10 flex items-center justify-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-ocean opacity-80 group-hover:scale-110 transition-transform duration-300">
                      <BookOpen className="h-8 w-8 text-primary-foreground" />
                    </div>
                  </div>
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
                      <time dateTime={post.date} className="text-sm text-muted-foreground">{post.date}</time>
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
              </Reveal>
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
          <Reveal>
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
          </Reveal>
        </div>
      </section>
    </div>
    </>
  );
}