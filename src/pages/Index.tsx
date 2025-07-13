import PageLayout from "@/components/PageLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowRight, 
  User, 
  Briefcase, 
  Award, 
  Mail,
  Database,
  Target,
  Code,
  MessageSquare,
  CheckCircle
} from "lucide-react";
import { Link } from "react-router-dom";
import { useState, FormEvent } from "react";
import { useToast } from "@/hooks/use-toast";
import heroImage from "@/assets/hero-background.jpg";

const Index = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState("");

  const quickLinks = [
    {
      title: "About Me",
      description: "Learn about my background and expertise",
      icon: User,
      href: "/about",
      color: "primary"
    },
    {
      title: "Portfolio",
      description: "Explore my projects and achievements",
      icon: Briefcase,
      href: "/portfolio", 
      color: "accent"
    },
    {
      title: "Certifications",
      description: "View my professional credentials",
      icon: Award,
      href: "/certifications",
      color: "primary"
    },
    {
      title: "Contact",
      description: "Get in touch for collaboration",
      icon: Mail,
      href: "/contact",
      color: "accent"
    }
  ];

  const featuredProjects = [
    {
      title: "Churn Analysis Project",
      description: "Analyzed customer churn using the KKBox dataset to optimize retention strategies for e-commerce platforms.",
      technologies: ["Python", "Data Analysis", "Machine Learning"],
      category: "Data Science"
    },
    {
      title: "Product Management Framework", 
      description: "Developed comprehensive product strategy and roadmapping tools during certification program.",
      technologies: ["Strategy", "Planning", "Analytics"],
      category: "Product Management"
    }
  ];

  const skills = [
    { name: "Data Analysis", icon: Database },
    { name: "Product Management", icon: Target },
    { name: "Python Programming", icon: Code },
    { name: "Communication", icon: MessageSquare }
  ];

  const handleNewsletterSubmit = (e: FormEvent) => {
    e.preventDefault();
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Thank You!",
      description: "You've successfully subscribed to updates. I'll keep you posted on new projects and insights!",
    });

    setEmail("");
  };

  return (
    <PageLayout title="Home">
      {/* Hero Section */}
      <section 
        className="relative bg-gradient-hero text-primary-foreground py-24 lg:py-32 overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-primary/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Welcome to Afroja Parvin's Personal Website
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
              Data Analyst | Product Manager | Continuous Learner
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" asChild className="text-lg px-8 py-4">
                <Link to="/portfolio">
                  View My Portfolio
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="text-lg px-8 py-4 bg-white/10 border-white/30 text-white hover:bg-white/20">
                <Link to="/about">
                  Learn More About Me
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl font-bold text-foreground mb-4">Explore My World</h2>
            <p className="text-lg text-muted-foreground">Discover my journey, work, and achievements</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickLinks.map((link, index) => (
              <Card 
                key={link.title}
                className="hover:shadow-strong transition-all duration-300 hover:scale-[1.05] group animate-slide-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="mb-4 flex justify-center">
                    <div className={`p-4 rounded-full group-hover:scale-110 transition-transform duration-300 ${
                      link.color === 'primary' ? 'bg-primary/10 group-hover:bg-primary/20' : 'bg-accent/10 group-hover:bg-accent/20'
                    }`}>
                      <link.icon className={`w-8 h-8 ${
                        link.color === 'primary' ? 'text-primary' : 'text-accent'
                      }`} />
                    </div>
                  </div>
                  <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                    {link.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {link.description}
                  </p>
                  <Button variant="outline" size="sm" asChild className="w-full">
                    <Link to={link.href}>
                      Explore
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Work Section */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl font-bold text-foreground mb-4">Featured Work</h2>
            <p className="text-lg text-muted-foreground">Highlights from my recent projects</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredProjects.map((project, index) => (
              <Card 
                key={project.title}
                className="hover:shadow-strong transition-all duration-300 hover:scale-[1.02] group animate-slide-in-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      {project.title}
                    </CardTitle>
                    <Badge variant="secondary">
                      {project.category}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <Button variant="outline" asChild className="w-full">
                    <Link to="/portfolio">
                      View All Projects
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Preview */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Core Expertise</h2>
            <p className="text-lg text-muted-foreground">Key skills that drive my professional success</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            {skills.map((skill, index) => (
              <div 
                key={skill.name}
                className="flex flex-col items-center p-6 rounded-lg hover:bg-muted/50 transition-all duration-300 hover:scale-105 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="p-3 bg-primary/10 rounded-full mb-3">
                  <skill.icon className="w-6 h-6 text-primary" />
                </div>
                <span className="font-medium text-sm text-center">{skill.name}</span>
              </div>
            ))}
          </div>

          <Button variant="professional" size="lg" asChild>
            <Link to="/about">
              View All Skills
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gradient-accent text-accent-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
            <p className="text-lg mb-8 opacity-90">
              Subscribe to get updates on my latest projects, insights, and professional journey
            </p>

            <form onSubmit={handleNewsletterSubmit} className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="flex-grow bg-white/90 border-white/30 text-foreground"
                />
                <Button 
                  type="submit" 
                  variant="default" 
                  className="bg-foreground text-background hover:bg-foreground/90"
                >
                  Subscribe
                  <CheckCircle className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Index;
