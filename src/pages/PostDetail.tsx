import { useParams } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, Calendar, User, Clock, Share2, Bookmark } from "lucide-react";
import { Link } from "react-router-dom";

// Mock data - in real app this would come from API/MDX files
const mockPosts = {
  "1": {
    id: 1,
    title: "Kickoff: Balikpapan.dev",
    content: `
# Selamat datang di **Balikpapan.dev**!

Kami sangat excited untuk meluncurkan komunitas developer pertama di Balikpapan! 🎉

## Mengapa Balikpapan.dev?

Balikpapan sebagai kota industri dan ekonomi terbesar di Kalimantan Timur memiliki potensi besar untuk menjadi hub teknologi. Namun, selama ini ekosistem tech di sini masih belum berkembang optimal.

**Balikpapan.dev** hadir untuk:

- 🤝 **Membangun komunitas** developer yang solid dan saling support
- 📚 **Berbagi pengetahuan** melalui meetup, workshop, dan mentoring
- 🚀 **Mendorong inovasi** dengan project-project open source
- 🌊 **Menciptakan opportunities** untuk berkembang di industri tech

## Apa yang Kami Lakukan?

### Tech Talks & Meetups
Setiap bulan kami mengadakan meetup dengan topik yang relevan dengan perkembangan teknologi terkini.

### Workshop & Bootcamp
Pelatihan hands-on untuk meningkatkan skill teknis, dari basic programming hingga advanced topics.

### Mentorship Program
Menghubungkan senior developer dengan junior untuk saling belajar dan berkembang.

### Open Source Projects
Kolaborasi dalam mengembangkan project yang bermanfaat untuk komunitas dan masyarakat.

## Cara Bergabung

1. **Join WhatsApp Group** - Link akan dibagikan di social media kami
2. **Follow Social Media** - Instagram, Twitter, dan LinkedIn @balikpapandev
3. **Attend Meetups** - Check calendar events di website ini
4. **Contribute** - Share knowledge, participate in discussions

## Visi Kami

> "Menjadikan Balikpapan sebagai Silicon Valley-nya Indonesia Timur"

Ini bukan hanya mimpi. Dengan semangat gotong royong khas Indonesia dan dukungan dari semua stakeholder, kami yakin Balikpapan bisa menjadi pusat inovasi teknologi yang dikenal secara nasional bahkan internasional.

## Next Steps

- 📅 **First Meetup**: Coming soon! (Stay tuned)
- 💻 **Website Enhancement**: Kami terus improve website ini
- 🤝 **Partnership**: Mencari kerjasama dengan perusahaan dan institusi
- 📝 **Content Creation**: More articles dan tutorials

---

**Mari bersama-sama membangun masa depan teknologi Balikpapan!**

Kalau kamu developer, designer, product manager, atau siapapun yang passionate dengan teknologi di Balikpapan, kami tunggu kamu di komunitas ini.

*Together, we build the future of tech in Balikpapan* 🌊
    `,
    author: "Team Balikpapan.dev",
    date: "2025-09-01",
    readTime: "5 min read",
    tags: ["community", "announcement", "kickoff"],
    pinned: true,
  }
};

export default function PostDetail() {
  const { id } = useParams();
  const post = mockPosts[id as keyof typeof mockPosts];

  if (!post) {
    return (
      <div className="container py-8 min-h-screen">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Post Not Found</h1>
          <p className="text-muted-foreground mb-6">The article you're looking for doesn't exist.</p>
          <Button asChild>
            <Link to="/posts">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Posts
            </Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="container py-8 min-h-screen">
      {/* Navigation */}
      <div className="mb-8">
        <Button variant="ghost" asChild>
          <Link to="/posts">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Posts
          </Link>
        </Button>
      </div>

      {/* Article Header */}
      <article className="max-w-4xl mx-auto">
        <header className="mb-8">
          {/* Tags */}
          <div className="flex items-center gap-2 mb-4">
            {post.pinned && (
              <Badge variant="secondary">
                Pinned
              </Badge>
            )}
            {post.tags.map((tag) => (
              <Badge key={tag} variant="outline">
                {tag}
              </Badge>
            ))}
          </div>

          {/* Title */}
          <h1 className="text-4xl font-bold mb-6 leading-tight">
            {post.title}
          </h1>

          {/* Metadata */}
          <div className="flex flex-wrap items-center gap-6 text-muted-foreground mb-6">
            <div className="flex items-center gap-2">
              <User className="h-4 w-4" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>{post.readTime}</span>
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-4 mb-8">
            <Button variant="outline" size="sm">
              <Share2 className="mr-2 h-4 w-4" />
              Share
            </Button>
            <Button variant="outline" size="sm">
              <Bookmark className="mr-2 h-4 w-4" />
              Bookmark
            </Button>
          </div>

          <Separator />
        </header>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none dark:prose-invert">
          <Card className="bg-gradient-card p-8">
            <CardContent className="p-0">
              <div 
                className="space-y-6"
                dangerouslySetInnerHTML={{
                  __html: post.content
                    .split('\n')
                    .map(line => {
                      // Simple markdown parsing for demo
                      if (line.startsWith('# ')) {
                        return `<h1 class="text-3xl font-bold mb-4 text-primary">${line.slice(2)}</h1>`;
                      }
                      if (line.startsWith('## ')) {
                        return `<h2 class="text-2xl font-semibold mt-8 mb-4 text-primary">${line.slice(3)}</h2>`;
                      }
                      if (line.startsWith('### ')) {
                        return `<h3 class="text-xl font-semibold mt-6 mb-3">${line.slice(4)}</h3>`;
                      }
                      if (line.startsWith('> ')) {
                        return `<blockquote class="border-l-4 border-primary pl-4 italic text-lg my-6">${line.slice(2)}</blockquote>`;
                      }
                      if (line.startsWith('- ')) {
                        return `<li class="ml-4">${line.slice(2)}</li>`;
                      }
                      if (line.startsWith('**') && line.endsWith('**')) {
                        return `<p class="font-semibold text-lg mb-4">${line.slice(2, -2)}</p>`;
                      }
                      if (line.startsWith('*') && line.endsWith('*')) {
                        return `<p class="italic mb-4 text-center text-primary">${line.slice(1, -1)}</p>`;
                      }
                      if (line.trim() === '') {
                        return '<br>';
                      }
                      if (line.startsWith('---')) {
                        return '<hr class="my-8 border-border">';
                      }
                      return `<p class="mb-4 leading-relaxed">${line}</p>`;
                    })
                    .join('')
                }}
              />
            </CardContent>
          </Card>
        </div>

        {/* Article Footer */}
        <footer className="mt-12 pt-8 border-t">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground">Share this article:</span>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">Twitter</Button>
                <Button variant="outline" size="sm">LinkedIn</Button>
                <Button variant="outline" size="sm">Facebook</Button>
              </div>
            </div>
            
            <Button variant="ocean" asChild>
              <Link to="/posts">
                More Articles
              </Link>
            </Button>
          </div>
        </footer>
      </article>
    </div>
  );
}