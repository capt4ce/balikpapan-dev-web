import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search, Filter, Calendar, User, Star, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { SEO } from "@/components/SEO";

// Mock data
const allPosts = [
  {
    id: 1,
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
        description="Kumpulan artikel, tutorial, dan insights dari komunitas developer Balikpapan tentang programming, teknologi, dan pengembangan software."
      />
      <div className="container py-8 min-h-screen">
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4">Articles & Tutorials</h1>
        <p className="text-lg text-muted-foreground">
          Kumpulan artikel, tutorial, dan insights dari komunitas developer Balikpapan
        </p>
      </div>

      {/* Search and Filters */}
      <div className="space-y-6 mb-8">
        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Cari artikel, author, atau topik..."
            className="pl-10"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {/* Tags Filter */}
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <Filter className="h-4 w-4" />
            <span className="text-sm font-medium">Filter by tags:</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {allTags.map((tag) => (
              <Badge
                key={tag}
                variant={selectedTags.includes(tag) ? "default" : "outline"}
                className="cursor-pointer transition-colors hover:bg-primary hover:text-primary-foreground"
                onClick={() => toggleTag(tag)}
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
            >
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
            >
              <Calendar className="h-4 w-4 mr-1" />
              Date
            </Button>
            <Button
              variant={sortBy === "title" ? "default" : "outline"}
              size="sm"
              onClick={() => setSortBy("title")}
            >
              Title
            </Button>
          </div>
        </div>
      </div>

      {/* Posts Grid */}
      <div className="grid gap-6">
        {filteredPosts.map((post) => (
          <Card key={post.id} className="group hover:shadow-card transition-all duration-300">
            <CardHeader>
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    {post.pinned && (
                      <Badge variant="secondary" className="text-xs">
                        <Star className="w-3 h-3 mr-1" />
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
                  
                  <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors">
                    <Link to={`/posts/${post.id}`}>
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
                    <User className="h-4 w-4" />
                    {post.author}
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {post.date}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {post.readTime}
                  </div>
                </div>
                
                <Button variant="ghost" size="sm" asChild>
                  <Link to={`/posts/${post.id}`}>
                    Read more →
                  </Link>
                </Button>
              </div>
            </CardHeader>
          </Card>
        ))}
      </div>

      {filteredPosts.length === 0 && (
        <div className="text-center py-12">
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