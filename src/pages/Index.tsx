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
import { Dialog } from "@/components/ui/dialog";
// Removed duplicate useState import

const Index = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [cvOpen, setCvOpen] = useState(false);

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
      title: "Product Analyst Framework", 
      description: "Developed comprehensive product strategy and roadmapping tools during certification program.",
      technologies: ["Strategy", "Planning", "Analytics"],
      category: "Product Analyst"
    }
  ];

  const skills = [
    { name: "Data Analyst", icon: Database },
    { name: "Product Analyst", icon: Target },
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
        className="relative bg-gradient-hero text-primary-foreground dark:text-white py-24 lg:py-32 overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-primary/20 dark:bg-black/70"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Welcome to Afroja Parvin's Personal Website
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
              Data Analyst | Product Analyst | Continuous Learner
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" className="text-lg px-8 py-4" onClick={() => setCvOpen(true)}>
                View My CV
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
        {/* CV Preview Popup Modal */}
        {cvOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-2" style={{pointerEvents: 'auto'}}>
            <div className="bg-[#18181b] rounded-lg shadow-strong max-w-2xl w-full p-4 sm:p-6 relative text-white flex flex-col" style={{minHeight: '300px'}}>
              {/* Close (X) button at top-right */}
              <button
                onClick={() => setCvOpen(false)}
                className="absolute top-4 right-4 z-10 text-gray-400 hover:text-white text-2xl font-bold focus:outline-none"
                aria-label="Close CV Preview"
              >
                &times;
              </button>
              <h2 className="text-2xl font-bold mb-2 sm:mb-4 text-center">CV Preview</h2>
              {/* CV Preview from Google Drive */}
              <div className="flex flex-col items-center justify-center flex-1 mb-4 w-full">
                <iframe
                  src="https://drive.google.com/file/d/1CUfui-hnYb-GSpNh7V5IPTbqhrheULNL/preview"
                  title="CV Preview"
                  className="w-full h-[400px] sm:h-[500px] border rounded"
                  allow="autoplay"
                ></iframe>
              </div>
              {/* Download button at bottom-right */}
              <div className="relative w-full mt-2" style={{ minHeight: '48px' }}>
                <Button 
                  variant="default" 
                  className="absolute right-4 bottom-2"
                  onClick={() => {
                    // Google Drive direct download link
                    const fileId = '1CUfui-hnYb-GSpNh7V5IPTbqhrheULNL';
                    const downloadUrl = `https://drive.google.com/uc?export=download&id=${fileId}`;
                    // Open in new tab for direct download (works for Google Drive public files)
                    window.open(downloadUrl, '_blank');
                  }}
                >
                  Download CV
                </Button>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* About Me Section - Open Layout, No Card, More Gap */}
      <section className="py-20 bg-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center md:items-center gap-16 md:gap-28">
            {/* Left: Profile Image */}
            <div className="flex-shrink-0 flex items-center justify-start w-full md:w-auto md:mr-0 md:ml-0">
              <img 
                src="https://i.ibb.co/ynSn8Mxw/download-1.jpg" 
                alt="Afroja Parvin" 
                className="w-40 h-40 md:w-56 md:h-56 rounded-full object-cover border-4 border-primary shadow-2xl shadow-primary/30 transition-transform duration-300 hover:scale-105 md:ml-0 md:mr-0" 
                style={{marginLeft: 0, marginRight: 0}}
              />
            </div>
            {/* Right: Content */}
            <div className="flex-1 flex flex-col justify-center md:pl-10 md:pr-0">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">About Me</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed max-w-2xl">
                Hi, I'm <span className="font-semibold text-primary">Afroja Parvin</span>, a passionate <span className="font-semibold">Data Analyst</span> and <span className="font-semibold">Product Analyst</span> with a knack for uncovering insights and driving business growth. I love working with data, collaborating with teams, and continuously learning new things to stay ahead in the tech world.
              </p>
              {/* Job Experience - No Card, Just Text */}
              <div className="mb-6">
                {/* Experience Card Style with Hover Animation */}
                <div className="flex items-center gap-4 bg-muted/40 dark:bg-white/5 rounded-2xl shadow-lg px-5 py-4 border border-primary/10 transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl hover:shadow-primary/20 cursor-pointer">
                  <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary">
                    <Briefcase className="w-7 h-7" />
                  </div>
                  <div>
                    <span className="font-semibold text-primary text-base mb-1 block">Product Analyst</span>
                    <span className="text-sm text-muted-foreground block">Junior Product Analyst, BDJobs</span>
                    <span className="text-sm text-muted-foreground block">Junly 2025-Present</span>
                  </div>
                </div>
              </div>
              <Button asChild variant="accent" size="lg" className="mt-2">
                <Link to="/about">
                  Learn More About Me
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>


      {/* Quick Links Section - Modern & Unique UI */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl font-bold text-foreground mb-4">Explore My World</h2>
            <p className="text-lg text-muted-foreground">Discover my journey, work, and achievements</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {quickLinks.map((link, index) => (
              <div
                key={link.title}
                className="relative group bg-gradient-to-br from-primary/10 via-background to-accent/10 rounded-3xl shadow-2xl hover:shadow-strong overflow-hidden p-0 animate-slide-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Decorative floating shape */}
                <div className="absolute -top-8 -right-8 w-24 h-24 bg-gradient-to-tr from-primary/30 to-accent/30 rounded-full blur-2xl opacity-40 pointer-events-none"></div>
                {/* Icon with glass effect */}
                <div className="flex justify-center items-center mt-8">
                  <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-5 shadow-md transition-transform group-hover:scale-110">
                    <link.icon className={`w-10 h-10 ${link.color === 'primary' ? 'text-primary' : 'text-accent'} drop-shadow-lg`} />
                  </div>
                </div>
                {/* Card Content */}
                <div className="px-6 py-8 flex flex-col items-center text-center">
                  <h3 className="font-bold text-xl mb-2 group-hover:text-primary transition-colors tracking-tight">
                    {link.title}
                  </h3>
                  <p className="text-muted-foreground text-base mb-6 leading-relaxed">
                    {link.description}
                  </p>
                  <Link to={link.href} className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-primary to-accent text-white font-semibold shadow-lg hover:scale-105 hover:from-accent hover:to-primary transition-all duration-300">
                    Explore
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
                {/* Unique bottom accent */}
                <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-primary/40 via-accent/40 to-primary/40 rounded-b-3xl"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Preview - Modern & Aesthetic */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-accent/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Core Expertise</h2>
            <p className="text-lg md:text-xl text-muted-foreground/80 max-w-2xl mx-auto">Key skills that drive my professional success</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            {skills.map((skill, index) => (
              <div
                key={skill.name}
                className="group flex flex-col items-center justify-center p-8 rounded-3xl bg-white/10 dark:bg-black/30 backdrop-blur-md border border-primary/10 shadow-lg hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300 hover:scale-105 animate-scale-in relative overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Decorative floating gradient blob */}
                <div className="absolute -top-8 -right-8 w-24 h-24 bg-gradient-to-tr from-primary/30 to-accent/30 rounded-full blur-2xl opacity-30 pointer-events-none"></div>
                <div className="flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 mb-5 shadow-lg group-hover:scale-110 transition-transform">
                  <skill.icon className="w-10 h-10 md:w-12 md:h-12 text-primary drop-shadow-md" />
                </div>
                <span className="font-semibold text-lg md:text-xl text-foreground mb-1 tracking-tight drop-shadow-sm">{skill.name}</span>
              </div>
            ))}
          </div>

          <Button variant="professional" size="lg" asChild className="px-8 py-4 text-lg font-semibold shadow-xl bg-gradient-to-r from-primary to-accent text-white hover:from-accent hover:to-primary transition-all duration-300">
            <Link to="/about">
              View All Skills
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Featured Work Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-accent/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Featured Work</h2>
            <p className="text-lg md:text-xl text-muted-foreground/80 max-w-2xl mx-auto">Highlights from my recent projects</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {featuredProjects.map((project, index) => (
              <div
                key={project.title}
                className="relative group rounded-3xl bg-white/10 dark:bg-black/30 backdrop-blur-md border border-primary/10 shadow-lg hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300 hover:scale-[1.03] animate-slide-in-up overflow-hidden"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Floating accent shape */}
                <div className="absolute -top-8 -left-8 w-32 h-32 bg-gradient-to-tr from-primary/30 to-accent/30 rounded-full blur-2xl opacity-30 pointer-events-none z-0"></div>
                <div className="relative z-10 p-8 flex flex-col h-full">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors tracking-tight">{project.title}</h3>
                    <span className="px-4 py-1 rounded-full bg-gradient-to-r from-primary to-accent text-white text-xs font-semibold shadow-md ml-2">{project.category}</span>
                  </div>
                  <p className="text-muted-foreground mb-6 leading-relaxed text-base">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="px-3 py-1 rounded-full bg-background/80 border border-primary/10 text-xs font-medium text-primary/90 shadow-sm">{tech}</span>
                    ))}
                  </div>
                  <div className="mt-auto">
                    <Button variant="outline" asChild className="w-full font-semibold text-base border-primary/20 hover:bg-primary/10 hover:text-primary transition-all duration-300">
                      <Link to="/portfolio">
                        View All Projects
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gradient-accent text-accent-foreground dark:bg-[#18181b] dark:text-white dark:border dark:border-primary/10 dark:backdrop-blur-md">
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
                  className="flex-grow bg-white/90 border-white/30 text-foreground dark:bg-black/70 dark:border-primary/20 dark:text-white placeholder:text-muted-foreground dark:placeholder:text-gray-400"
                />
                <Button 
                  type="submit" 
                  variant="default" 
                  className="bg-foreground text-background hover:bg-foreground/90 dark:bg-primary dark:text-white dark:hover:bg-primary/80"
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
