import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  Target,
  Users,
  Calendar,
  BookOpen,
  Github,
  Heart,
  Mail,
  Twitter,
  Linkedin,
  MessageCircle
} from "lucide-react";
import { SEO } from "@/components/SEO";
import { Reveal } from "@/components/Reveal";

const activities = [
  {
    icon: MessageCircle,
    title: "Tech Talks",
    description: "Regular meetups featuring industry experts and community members sharing knowledge"
  },
  {
    icon: BookOpen,
    title: "Workshops",
    description: "Hands-on learning sessions covering latest technologies and best practices"
  },
  {
    icon: Heart,
    title: "Mentorship",
    description: "One-on-one mentoring program connecting experienced developers with newcomers"
  },
  {
    icon: Github,
    title: "Open Source",
    description: "Collaborative projects that benefit both the community and open source ecosystem"
  },
  {
    icon: Users,
    title: "Networking",
    description: "Building connections between developers, entrepreneurs, and tech companies"
  },
  {
    icon: Calendar,
    title: "Events",
    description: "Hackathons, coding competitions, and social gatherings for the tech community"
  }
];

const teamMembers = [
  {
    name: "Ahmad Rizki",
    role: "Community Lead",
    bio: "Full-stack developer dengan 8+ tahun pengalaman. Passionate about building tech community.",
    skills: ["React", "Node.js", "Community Building"],
  },
  {
    name: "Sarah Aisyah",
    role: "Content Manager",
    bio: "Technical writer dan frontend developer. Suka berbagi knowledge melalui artikel dan tutorial.",
    skills: ["Technical Writing", "React", "UI/UX"],
  },
  {
    name: "Budi Santoso",
    role: "Event Coordinator",
    bio: "DevOps engineer yang aktif mengorganisir meetup dan workshop untuk komunitas.",
    skills: ["DevOps", "Docker", "Event Management"],
  },
  {
    name: "Indira Sari",
    role: "Mentorship Lead",
    bio: "Senior software engineer dengan passion untuk mentoring junior developers.",
    skills: ["Java", "Spring Boot", "Mentoring"],
  }
];

function getInitials(name: string) {
  return name.split(' ').map(n => n[0]).join('').slice(0, 2);
}

export default function About() {
  return (
    <>
      <SEO
        title="About Us"
        description="Learn about Balikpapan.dev community - our vision to transform Balikpapan into a thriving tech hub, our activities, and team members."
      />
      <div className="container py-12 min-h-screen">
      {/* Hero Section */}
      <Reveal>
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-6 font-heading">About Balikpapan.dev</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
            We're building the Silicon Valley of Indonesia, right here in Balikpapan.
            Join us in fostering a thriving tech ecosystem in East Kalimantan.
          </p>
        </div>
      </Reveal>

      {/* Vision & Mission */}
      <Reveal>
        <section className="mb-16">
          <Card className="bg-gradient-card">
            <CardHeader className="text-center">
              <div className="flex justify-center mb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-ocean">
                  <Target className="h-6 w-6 text-primary-foreground" />
                </div>
              </div>
              <CardTitle className="text-2xl font-heading">Our Vision & Mission</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-primary">Vision</h3>
                  <p className="text-muted-foreground">
                    To transform Balikpapan into a thriving tech hub, empowering local developers
                    and creating opportunities that rival Silicon Valley.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-primary">Mission</h3>
                  <p className="text-muted-foreground">
                    Help programmers grow their skills, foster innovation, and build a
                    sustainable tech ecosystem through collaboration and knowledge sharing.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </Reveal>

      {/* Activities */}
      <section className="mb-16">
        <Reveal>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 font-heading">What We Do</h2>
            <p className="text-lg text-muted-foreground">
              Our activities focus on learning, sharing, and growing together as a community
            </p>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {activities.map((activity, index) => (
            <Reveal key={index} delay={index * 80}>
              <Card className="group hover:shadow-elegant hover:-translate-y-1 transition-all duration-300 h-full">
                <CardHeader>
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-ocean mb-4 group-hover:scale-110 transition-transform duration-300">
                    <activity.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-lg font-heading">{activity.title}</CardTitle>
                  <CardDescription>{activity.description}</CardDescription>
                </CardHeader>
              </Card>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Team Members */}
      <section className="mb-16">
        <Reveal>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 font-heading">Meet Our Team</h2>
            <p className="text-lg text-muted-foreground">
              The passionate individuals driving Balikpapan's tech community forward
            </p>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <Reveal key={index} delay={index * 80}>
              <Card className="text-center group hover:shadow-elegant hover:-translate-y-1 transition-all duration-300 h-full">
                <CardHeader>
                  <Avatar className="h-20 w-20 mx-auto mb-4">
                    <AvatarFallback className="bg-gradient-ocean text-primary-foreground text-xl font-bold font-heading">
                      {getInitials(member.name)}
                    </AvatarFallback>
                  </Avatar>
                  <CardTitle className="text-lg font-heading">{member.name}</CardTitle>
                  <CardDescription className="text-primary font-medium">
                    {member.role}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    {member.bio}
                  </p>
                  <div className="flex flex-wrap gap-1 justify-center">
                    {member.skills.map((skill) => (
                      <Badge key={skill} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Contact & Join */}
      <Reveal>
        <section className="text-center">
          <Card className="bg-gradient-hero text-white overflow-hidden relative">
            <div className="absolute inset-0 grid-pattern opacity-10" />
            <CardHeader className="relative">
              <CardTitle className="text-3xl mb-4 font-heading">Join Our Community</CardTitle>
              <CardDescription className="text-white/80 text-lg">
                Ready to be part of Balikpapan's growing tech ecosystem? Get in touch with us!
              </CardDescription>
            </CardHeader>
            <CardContent className="relative">
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button variant="secondary" size="lg">
                  <Mail className="mr-2 h-5 w-5" />
                  hello@balikpapan.dev
                </Button>
                <div className="flex gap-2 justify-center">
                  <Button variant="secondary" size="icon">
                    <Twitter className="h-5 w-5" />
                  </Button>
                  <Button variant="secondary" size="icon">
                    <Github className="h-5 w-5" />
                  </Button>
                  <Button variant="secondary" size="icon">
                    <Linkedin className="h-5 w-5" />
                  </Button>
                </div>
              </div>

              <div className="max-w-2xl mx-auto space-y-4">
                <p className="text-white/90">
                  Whether you're a beginner looking to learn, an experienced developer wanting to share knowledge,
                  or someone interested in the tech scene in Balikpapan, we welcome you!
                </p>
                <Button variant="secondary" size="lg">
                  Join Our WhatsApp Group
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </Reveal>
    </div>
    </>
  );
}