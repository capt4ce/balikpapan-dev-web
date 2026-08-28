import { useParams } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, Calendar, User, Clock, Share2, Bookmark, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import { SEO } from "@/components/SEO";
import { Reveal } from "@/components/Reveal";

const postSlugMap: Record<number, string> = {
  1: "kickoff-balikpapan-dev",
  2: "getting-started-react-2025",
  3: "building-scalable-apis-nodejs",
  4: "typescript-tips-javascript-developers",
  5: "introduction-docker-web-developers",
};

const mockPosts = {
  "1": {
    id: 1,
    slug: "kickoff-balikpapan-dev",
    title: "Kickoff: Balikpapan.dev",
    content: `
# Selamat datang di **Balikpapan.dev**!

Kami sangat excited untuk meluncurkan komunitas developer pertama di Balikpapan!

## Mengapa Balikpapan.dev?

Balikpapan sebagai kota industri dan ekonomi terbesar di Kalimantan Timur memiliki potensi besar untuk menjadi hub teknologi. Namun, selama ini ekosistem tech di sini masih belum berkembang optimal.

**Balikpapan.dev** hadir untuk:

- **Membangun komunitas** developer yang solid dan saling support
- **Berbagi pengetahuan** melalui meetup, workshop, dan mentoring
- **Mendorong inovasi** dengan project-project open source
- **Menciptakan opportunities** untuk berkembang di industri tech

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

- **First Meetup**: Coming soon! (Stay tuned)
- **Website Enhancement**: Kami terus improve website ini
- **Partnership**: Mencari kerjasama dengan perusahaan dan institusi
- **Content Creation**: More articles dan tutorials

---

**Mari bersama-sama membangun masa depan teknologi Balikpapan!**

Kalau kamu developer, designer, product manager, atau siapapun yang passionate dengan teknologi di Balikpapan, kami tunggu kamu di komunitas ini.

*Together, we build the future of tech in Balikpapan*
    `,
    author: "Team Balikpapan.dev",
    date: "2025-09-01",
    readTime: "5 min read",
    tags: ["community", "announcement", "kickoff"],
    pinned: true,
    publishedAt: "2025-09-01T08:00:00+07:00",
    modifiedAt: "2025-09-28T10:30:00+07:00",
  },
  "2": {
    id: 2,
    slug: "getting-started-react-2025",
    title: "Getting Started with React in 2025",
    content: `
# Getting Started with React in 2025

React terus berevolusi setiap tahunnya. Di 2025, ada beberapa perubahan signifikan yang perlu kamu ketahui sebagai developer.

## Apa Baru di React 2025?

### Server Components
React Server Components kini menjadi standar untuk aplikasi modern. Komponen ini berjalan di server dan mengurangi bundle size secara signifikan.

### React Compiler
Compiler baru ini mengoptimalkan re-render secara otomatis, mengurangi kebutuhan akan \`memo\` dan \`useCallback\` secara manual.

### Enhanced Suspense
Suspense kini lebih powerful dengan granular loading states yang lebih halus.

## Setup Project

Untuk memulai project React baru di 2025, gunakan Vite:

\`\`\`bash
npm create vite@latest my-app -- --template react-ts
cd my-app
npm install
\`\`\`

## Best Practices

1. **Gunakan TypeScript** — type safety adalah wajib
2. **Server Components** — untuk data fetching dan layout
3. **Client Components** — hanya untuk interaktivitas
4. **Suspense boundaries** — untuk graceful loading states

## Kesimpulan

React 2025 membawa banyak improvement yang membuat development lebih produktif. Fokus pada Server Components dan compiler optimizations untuk hasil terbaik.
    `,
    author: "Sarah Aisyah",
    date: "2025-09-15",
    readTime: "8 min read",
    tags: ["react", "tutorial", "beginner"],
    pinned: false,
    publishedAt: "2025-09-15T09:00:00+07:00",
    modifiedAt: "2025-09-20T14:00:00+07:00",
  },
  "3": {
    id: 3,
    slug: "building-scalable-apis-nodejs",
    title: "Building Scalable APIs with Node.js",
    content: `
# Building Scalable APIs with Node.js

Membangun REST API yang scalable dan maintainable adalah skill penting untuk backend developer.

## Arsitektur yang Direkomendasikan

### Layered Architecture
Pisahkan business logic dari HTTP handling untuk kemudahan testing dan maintenance.

### Database Patterns
Gunakan repository pattern dan dependency injection untuk flexibility.

## Tools & Libraries

- **Express/Fastify** — untuk HTTP layer
- **Prisma/TypeORM** — untuk database abstraction
- **Zod** — untuk input validation
- **Winston/Pino** — untuk logging

## Scaling Strategies

1. **Horizontal scaling** — tambah instance, bukan upgrade server
2. **Connection pooling** — kelola koneksi database efisien
3. **Caching** — Redis untuk frequently accessed data
4. **Rate limiting** — proteksi dari abuse
    `,
    author: "Rizki Pratama",
    date: "2025-09-20",
    readTime: "12 min read",
    tags: ["nodejs", "api", "backend"],
    pinned: false,
    publishedAt: "2025-09-20T10:00:00+07:00",
    modifiedAt: "2025-09-20T10:00:00+07:00",
  },
  "4": {
    id: 4,
    slug: "typescript-tips-javascript-developers",
    title: "TypeScript Tips untuk Developer JavaScript",
    content: `
# TypeScript Tips untuk Developer JavaScript

Beralih dari JavaScript ke TypeScript bisa intimidatif. Berikut tips praktis untuk transisi yang mulus.

## Mulai Bertahap

1. Rename \`.js\` ke \`.ts\`
2. Fix type errors satu per satu
3. Gunakan \`// @ts-ignore\` hanya untuk library tanpa types
4. Aktifkan \`strict: true\` di tsconfig setelah stabil

## Type Patterns yang Sering Digunakan

- \`Record<K, V>\` untuk object mappings
- \`Omit<T, K>\` untuk mengurangi properties
- \`Partial<T>\` untuk optional properties
- \`Pick<T, K>\` untuk memilih properties spesifik
    `,
    author: "Ahmad Fauzi",
    date: "2025-09-25",
    readTime: "6 min read",
    tags: ["typescript", "javascript", "tips"],
    pinned: false,
    publishedAt: "2025-09-25T11:00:00+07:00",
    modifiedAt: "2025-09-25T11:00:00+07:00",
  },
  "5": {
    id: 5,
    slug: "introduction-docker-web-developers",
    title: "Introduction to Docker untuk Web Developers",
    content: `
# Introduction to Docker untuk Web Developers

Containerization telah mengubah cara developer deploying aplikasi. Docker membuat environment consistency terjamin.

##基本概念

Container vs VM: Container share host OS kernel, lebih lightweight.

## Dockerfile Best Practices

- Gunakan multi-stage builds
- Minimize layer count
- Use .dockerignore
- Pin base image versions
    `,
    author: "Indira Sari",
    date: "2025-09-28",
    readTime: "10 min read",
    tags: ["docker", "devops", "containerization"],
    pinned: false,
    publishedAt: "2025-09-28T08:00:00+07:00",
    modifiedAt: "2025-09-28T08:00:00+07:00",
  },
};

export default function PostDetail() {
  const { id } = useParams<{ id: string }>();
  const post = mockPosts[id ?? ""];

  if (!post) {
    return (
      <div className="container py-8 min-h-screen">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Post Not Found</h1>
          <p className="text-muted-foreground mb-6">The article you're looking for doesn't exist.</p>
          <Button asChild>
            <Link to="/posts">
              <ArrowLeft className="mr-2 h-4 w-4" aria-hidden="true" />
              Back to Posts
            </Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <>
      <SEO
        title={post.title}
        description={post.content.slice(0, 160).replace(/[#*`>\-]/g, "").trim()}
        type="article"
        articleMeta={{
          publishedTime: post.publishedAt,
          modifiedTime: post.modifiedAt,
          author: post.author,
          tagName: post.tags,
        }}
      />
      <div className="min-h-screen">
        {/* Cover */}
        <div className="relative h-48 sm:h-64 bg-gradient-to-br from-primary/15 via-primary/5 to-accent/10 overflow-hidden" aria-hidden="true">
          <div className="absolute inset-0 grid-pattern opacity-30" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-ocean shadow-glow">
              <BookOpen className="h-10 w-10 text-primary-foreground" />
            </div>
          </div>
        </div>

        <div className="container py-8">
          {/* Navigation */}
          <div className="mb-8">
            <Button variant="ghost" asChild>
              <Link to="/posts" aria-label="Back to articles listing">
                <ArrowLeft className="mr-2 h-4 w-4" aria-hidden="true" />
                Back to Posts
              </Link>
            </Button>
          </div>

          {/* Article */}
          <article className="max-w-3xl mx-auto">
            <Reveal>
              <header className="mb-8">
                {/* Tags */}
                <div className="flex items-center gap-2 mb-4" role="group" aria-label="Article tags">
                  {post.pinned && (
                    <Badge variant="secondary">
                      <span className="sr-only">Pinned</span> Pinned
                    </Badge>
                  )}
                  {post.tags.map((tag) => (
                    <Badge key={tag} variant="outline">{tag}</Badge>
                  ))}
                </div>

                {/* Title */}
                <h1 className="text-4xl font-bold mb-6 leading-tight">
                  {post.title}
                </h1>

                {/* Metadata */}
                <div className="flex flex-wrap items-center gap-6 text-muted-foreground mb-6">
                  <div className="flex items-center gap-2">
                    <User className="h-4 w-4" aria-hidden="true" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" aria-hidden="true" />
                    <time dateTime={post.date}>{post.date}</time>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" aria-hidden="true" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-4 mb-8">
                  <Button variant="outline" size="sm">
                    <Share2 className="mr-2 h-4 w-4" aria-hidden="true" />
                    Share
                  </Button>
                  <Button variant="outline" size="sm">
                    <Bookmark className="mr-2 h-4 w-4" aria-hidden="true" />
                    Bookmark
                  </Button>
                </div>

                <Separator />
              </header>
            </Reveal>

            {/* Article Content */}
            <Reveal delay={100}>
              <div className="prose prose-lg max-w-none dark:prose-invert">
                <div
                  className="space-y-6"
                  dangerouslySetInnerHTML={{
                    __html: post.content
                      .split('\n')
                      .map(line => {
                        if (line.startsWith('# ')) {
                          return `<h1 class="text-3xl font-bold mb-4 mt-8 text-primary">${line.slice(2)}</h1>`;
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
              </div>
            </Reveal>

            {/* Article Footer */}
            <footer className="mt-12 pt-8 border-t">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <span className="text-sm text-muted-foreground">Share this article:</span>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">Twitter</Button>
                    <Button variant="outline" size="sm">LinkedIn</Button>
                    <Button variant="outline" size="sm">Facebook</Button>
                  </div>
                </div>

                <Button variant="ocean" asChild>
                  <Link to="/posts" aria-label="Browse more articles">
                    More Articles
                  </Link>
                </Button>
              </div>
            </footer>
          </article>
        </div>
      </div>
    </>
  );
}