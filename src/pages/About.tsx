import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
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
    avatar: "👨‍💻"
  },
  {
    name: "Sarah Aisyah",
    role: "Content Manager",
    bio: "Technical writer dan frontend developer. Suka berbagi knowledge melalui artikel dan tutorial.",
    skills: ["Technical Writing", "React", "UI/UX"],
    avatar: "👩‍💻"
  },
  {
    name: "Budi Santoso",
    role: "Event Coordinator",
    bio: "DevOps engineer yang aktif mengorganisir meetup dan workshop untuk komunitas.",
    skills: ["DevOps", "Docker", "Event Management"],
    avatar: "👨‍🔧"
  },
  {
    name: "Indira Sari",
    role: "Mentorship Lead",
    bio: "Senior software engineer dengan passion untuk mentoring junior developers.",
    skills: ["Java", "Spring Boot", "Mentoring"],
    avatar: "👩‍🏫"
  }
];

export default function About() {
  return (
    <>
      <SEO
        title="About Us"
        description="Learn about Balikpapan.dev community - our vision to transform Balikpapan into a thriving tech hub, our activities, and team members."
      />
      <div className="container py-8 min-h-screen">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-6">About Balikpapan.dev</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          We're building the Silicon Valley of Indonesia, right here in Balikpapan. 
          Join us in fostering a thriving tech ecosystem in East Kalimantan.
        </p>
      </div>

      {/* Vision & Mission */}
      <section className="mb-16">
        <Card className="bg-gradient-card">
          <CardHeader className="text-center">
            <div className="flex justify-center mb-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-ocean">
                <Target className="h-6 w-6 text-primary-foreground" />
              </div>
            </div>
            <CardTitle className="text-2xl">Our Vision & Mission</CardTitle>
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

      {/* Activities */}
      <section className="mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">What We Do</h2>
          <p className="text-lg text-muted-foreground">
            Our activities focus on learning, sharing, and growing together as a community
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {activities.map((activity, index) => (
            <Card key={index} className="group hover:shadow-card transition-shadow duration-300">
              <CardHeader>
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-ocean mb-4">
                  <activity.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <CardTitle className="text-lg">{activity.title}</CardTitle>
                <CardDescription>{activity.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

      {/* Team Members */}
      <section className="mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
          <p className="text-lg text-muted-foreground">
            The passionate individuals driving Balikpapan's tech community forward
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <Card key={index} className="text-center group hover:shadow-card transition-shadow duration-300">
              <CardHeader>
                <div className="text-4xl mb-4">{member.avatar}</div>
                <CardTitle className="text-lg">{member.name}</CardTitle>
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
          ))}
        </div>
      </section>

      {/* Contact & Join */}
      <section className="text-center">
        <Card className="bg-gradient-hero text-white">
          <CardHeader>
            <CardTitle className="text-3xl mb-4">Join Our Community</CardTitle>
            <CardDescription className="text-white/80 text-lg">
              Ready to be part of Balikpapan's growing tech ecosystem? Get in touch with us!
            </CardDescription>
          </CardHeader>
          <CardContent>
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
    </div>
    </>
  );
}