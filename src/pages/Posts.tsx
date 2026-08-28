import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search, Filter, Calendar, User, Star, Clock, BookOpen, X } from "lucide-react";
import { Link } from "react-router-dom";
import { SEO } from "@/components/SEO";
import { Reveal } from "@/components/Reveal";

const allPosts = [
  {
    id: 1,
    slug: "kickoff-balikpapan-dev",
    title: "Kickoff: Balikpapan.dev",
    excerpt: "Kenapa komunitas ini ada dan cara ikut bergabung dengan kami.",
    author: "Team Balikpapan.dev",
    date: "2025-09-01",
    readTime: "3 min read",
    tags: ["community", "announcement"],
    pinned: true,
  },
  {
    id: 2,
    slug: "getting-started-react-2025",
    title: "Getting Started with React in 2025",
    excerpt: "Panduan lengkap memulai development dengan React untuk pemula.",
    author: "Sarah Aisyah",
    date: "2025-09-15",
    readTime: "8 min read",
    tags: ["react", "tutorial", "beginner"],
    pinned: false,
  },
  {
    id: 3,
    slug: "building-scalable-apis-nodejs",
    title: "Building Scalable APIs with Node.js",
    excerpt: "Best practices untuk membangun REST API yang scalable dan maintainable.",
    author: "Rizki Pratama",
    date: "2025-09-20",
    readTime: "12 min read",
    tags: ["nodejs", "api", "backend"],
    pinned: false,
  },
  {
    id: 4,
    slug: "typescript-tips-javascript-developers",
    title: "TypeScript Tips untuk Developer JavaScript",
    excerpt: "Tips dan trik menggunakan TypeScript untuk meningkatkan kualitas kode JavaScript.",
    author: "Ahmad Fauzi",
    date: "2025-09-25",
    readTime: "6 min read",
    tags: ["typescript", "javascript", "tips"],
    pinned: false,
  },
  {
    id: 5,
    slug: "introduction-docker-web-developers",
    title: "Introduction to Docker untuk Web Developers",
    excerpt: "Pelajari containerization dengan Docker dan bagaimana menerapkannya dalam development workflow.",
    author: "Indira Sari",
    date: "2025-09-28",
    readTime: "10 min read",
    tags: ["docker", "devops", "containerization"],
    pinned: false,
  },
];

const allTags = Array.from(new Set(allPosts.flatMap(post => post.tags)));

export default function Posts() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState<"date" | "title">("date");

  const filteredPosts = allPosts
    .filter(post => {
      const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           post.author.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesTags = selectedTags.length === 0 ||
                         selectedTags.some(tag => post.tags.includes(tag));

      return matchesSearch && matchesTags;
    })
    .sort((a, b) => {
      if (sortBy === "date") {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      }
      return a.title.localeCompare(b.title);
    });

  const toggleTag = (tag: string) => {
    setSelectedTags(prev =>
      prev.includes(tag)
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };

  return (
    <>
      <SEO
        title="Articles & Tutorials"
        description="Kumpulan artikel, tutorial, dan insights dari komunitas developer Balikpapan tentang programming, teknologi, dan pengembangan software di Kalimantan Timur."
      />
      <div className="container py-12 min-h-screen">
      <Reveal>
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4 font-heading">Articles & Tutorials</h1>
          <p className="text-lg text-muted-foreground">
            Kumpulan artikel, tutorial, dan insights dari komunitas developer Balikpapan
          </p>
        </div>
      </Reveal>

      {/* Search and Filters */}
      <Reveal delay={100}>
        <div className="space-y-6 mb-8">
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" aria-hidden="true" />
            <Input
              placeholder="Cari artikel, author, atau topik..."
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              aria-label="Search articles"
            />
          </div>

          {/* Tags Filter */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Filter className="h-4 w-4" aria-hidden="true" />
              <span className="text-sm font-medium">Filter by tags:</span>
            </div>
            <div className="flex flex-wrap gap-2" role="group" aria-label="Tag filters">
              {allTags.map((tag) => (
                <Badge
                  key={tag}
                  variant={selectedTags.includes(tag) ? "default" : "outline"}
                  className="cursor-pointer transition-colors hover:bg-primary hover:text-primary-foreground"
                  onClick={() => toggleTag(tag)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => e.key === "Enter" && toggleTag(tag)}
                >
                  {tag}
                </Badge>
              ))}
            </div>
            {selectedTags.length > 0 && (
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setSelectedTags([])}
                className="text-muted-foreground"
                aria-label="Clear all tag filters"
              >
                <X className="h-3 w-3 mr-1" aria-hidden="true" />
                Clear filters
              </Button>
            )}
          </div>

          {/* Sort */}
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">
              {filteredPosts.length} artikel ditemukan
            </span>
            <div className="flex items-center gap-2">
              <span className="text-sm">Sort by:</span>
              <Button
                variant={sortBy === "date" ? "default" : "outline"}
                size="sm"
                onClick={() => setSortBy("date")}
                aria-pressed={sortBy === "date"}
              >
                <Calendar className="h-4 w-4 mr-1" aria-hidden="true" />
                Date
              </Button>
              <Button
                variant={sortBy === "title" ? "default" : "outline"}
                size="sm"
                onClick={() => setSortBy("title")}
                aria-pressed={sortBy === "title"}
              >
                Title
              </Button>
            </div>
          </div>
        </div>
      </Reveal>

      {/* Posts Grid */}
      <div className="grid gap-6" role="feed" aria-label="Articles list">
        {filteredPosts.map((post, index) => (
          <Reveal key={post.id} delay={index * 60}>
            <Card className="group hover:shadow-elegant hover:-translate-y-1 transition-all duration-300 overflow-hidden">
              <div className="flex">
                {/* Cover */}
                <div className="hidden sm:flex w-32 shrink-0 bg-gradient-to-br from-primary/10 via-primary/5 to-accent/10 items-center justify-center" aria-hidden="true">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-ocean opacity-80 group-hover:scale-110 transition-transform duration-300">
                    <BookOpen className="h-6 w-6 text-primary-foreground" />
                  </div>
                </div>

                <CardHeader className="flex-1">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        {post.pinned && (
                          <Badge variant="secondary" className="text-xs">
                            <Star className="w-3 h-3 mr-1" aria-hidden="true" />
                            Pinned
                          </Badge>
                        )}
                        <div className="flex gap-2">
                          {post.tags.map((tag) => (
                            <Badge key={tag} variant="outline" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors font-heading">
                        <Link to={`/posts/${post.id}`} aria-label={`Read article: ${post.title}`}>
                          {post.title}
                        </Link>
                      </CardTitle>

                      <CardDescription className="text-base">
                        {post.excerpt}
                      </CardDescription>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-sm text-muted-foreground pt-4">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <User className="h-4 w-4" aria-hidden="true" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" aria-hidden="true" />
                        <time dateTime={post.date}>{post.date}</time>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" aria-hidden="true" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>

                    <Button variant="ghost" size="sm" asChild>
                      <Link to={`/posts/${post.id}`} aria-label={`Read more about ${post.title}`}>
                        Read more →
                      </Link>
                    </Button>
                  </div>
                </CardHeader>
              </div>
            </Card>
          </Reveal>
        ))}
      </div>

      {filteredPosts.length === 0 && (
        <div className="text-center py-12" role="status">
          <p className="text-muted-foreground">No articles found matching your criteria.</p>
          <Button
            variant="ghost"
            onClick={() => {
              setSearchQuery("");
              setSelectedTags([]);
            }}
            className="mt-4"
          >
            Clear all filters
          </Button>
        </div>
      )}
    </div>
    </>
  );
}