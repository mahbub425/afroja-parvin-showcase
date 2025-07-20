import PageLayout from "@/components/PageLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Brain, 
  Database, 
  Users, 
  TrendingUp, 
  Code, 
  MessageSquare, 
  Target,
  BookOpen,
  Heart,
  Mic,
  Network
} from "lucide-react";

const About = () => {
  const skills = [
    { name: "Data Analysis", icon: Database, category: "Technical" },
    { name: "Product Management", icon: Target, category: "Business" },
    { name: "Python Programming", icon: Code, category: "Technical" },
    { name: "R Programming", icon: TrendingUp, category: "Technical" },
    { name: "C Programming", icon: Code, category: "Technical" },
    { name: "Communication", icon: MessageSquare, category: "Soft Skills" },
    { name: "Growth Mindset", icon: Brain, category: "Soft Skills" },
    { name: "MS Office Suite", icon: Users, category: "Tools" },
  ];

  const timeline = [
    {
      year: "2025",
      title: "Product Management Certification",
      description: "Advanced certification from Simplilearn focusing on strategic product planning and execution",
      category: "Certification"
    },
    {
      year: "2025",
      title: "Introduction to Data Science",
      description: "Comprehensive data science program covering analytics, visualization, and machine learning basics",
      category: "Education"
    },
    {
      year: "2024",
      title: "Principle of Management",
      description: "Leadership and management fundamentals from Great Learning",
      category: "Certification"
    },
    {
      year: "2024",
      title: "Statistics for Data Science",
      description: "Advanced statistical methods and their applications in data analysis",
      category: "Education"
    },
    {
      year: "2023",
      title: "Mindshift: Break Through Obstacles",
      description: "Personal development course on Coursera focusing on learning strategies and overcoming challenges",
      category: "Personal Development"
    }
  ];

  const interests = [
    {
      title: "Social Impact Work",
      description: "Passionate about organizing community events and raising awareness for social causes",
      icon: Heart
    },
    {
      title: "Public Speaking",
      description: "Active speaker and seminar host, sharing knowledge on professional development",
      icon: Mic
    },
    {
      title: "Networking",
      description: "Building meaningful professional connections and mentoring emerging talents",
      icon: Network
    },
    {
      title: "Continuous Learning",
      description: "Committed to staying updated with latest industry trends and technologies",
      icon: BookOpen
    }
  ];

  return (
    <PageLayout title="About">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Introduction Section */}
        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 animate-fade-in">
              <h1 className="text-4xl font-bold text-foreground mb-6">
                About Afroja Parvin
              </h1>
              <div className="prose prose-lg text-muted-foreground leading-relaxed">
                <p className="mb-6">
                 Hi, I’m Afroja Parvin, currently working as a Junior Product Analyst at BD Jobs. I have an academic background in Statistics and a strong passion for using data to solve problems and improve product experiences.
                </p>
                <p className="mb-6">
                  I specialize in data-driven decision-making, product analysis, and project planning. At BD Jobs, I work with cross-functional teams to analyze user data, test new features, and help shape product strategies. I'm skilled in tools like Excel, Python, and R, and constantly seek opportunities to learn and grow.
                </p>
                <p>
                  With a growth mindset and a strong analytical approach, I aim to create meaningful impact through smart, insight-driven solutions.
                </p>
              </div>
            </div>
            <div className="order-1 lg:order-2 animate-scale-in">
              <div className="relative">
                <div className="w-80 h-80 mx-auto bg-gradient-card rounded-2xl shadow-strong p-8 flex items-center justify-center">
                  <div className="w-64 h-64 bg-primary/20 rounded-full flex items-center justify-center overflow-hidden">
                    <img 
                      src="https://i.ibb.co/ynSn8Mxw/download-1.jpg" 
                      alt="Afroja Parvin" 
                      className="w-full h-full object-cover rounded-full border-4 border-primary shadow-lg" 
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Skills & Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <Card 
                key={skill.name} 
                className="hover:shadow-medium transition-all duration-300 hover:scale-[1.02] animate-slide-in-up group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="mb-4 flex justify-center">
                    <div className="p-3 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors">
                      <skill.icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <h3 className="font-semibold mb-2">{skill.name}</h3>
                  <Badge variant="secondary" className="text-xs">
                    {skill.category}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Timeline Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Professional Journey</h2>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-primary/30"></div>
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <div 
                  key={`${item.year}-${item.title}`}
                  className="relative flex items-center animate-fade-in"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="flex-1 pr-8 text-right">
                    {index % 2 === 0 ? (
                      <Card className="hover:shadow-medium transition-all duration-300">
                        <CardContent className="p-6">
                          <div className="flex items-center justify-end mb-2">
                            <Badge variant="outline" className="mr-2">{item.category}</Badge>
                            <span className="text-xl font-bold text-primary">{item.year}</span>
                          </div>
                          <h3 className="font-semibold mb-2">{item.title}</h3>
                          <p className="text-muted-foreground">{item.description}</p>
                        </CardContent>
                      </Card>
                    ) : null}
                  </div>
                  
                  <div className="relative z-10 flex items-center justify-center w-4 h-4 bg-primary rounded-full shadow-glow"></div>
                  
                  <div className="flex-1 pl-8">
                    {index % 2 === 1 ? (
                      <Card className="hover:shadow-medium transition-all duration-300">
                        <CardContent className="p-6">
                          <div className="flex items-center mb-2">
                            <span className="text-xl font-bold text-primary mr-2">{item.year}</span>
                            <Badge variant="outline">{item.category}</Badge>
                          </div>
                          <h3 className="font-semibold mb-2">{item.title}</h3>
                          <p className="text-muted-foreground">{item.description}</p>
                        </CardContent>
                      </Card>
                    ) : null}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Interests Section */}
        <section>
          <h2 className="text-3xl font-bold text-center mb-12">Interests & Passions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {interests.map((interest, index) => (
              <Card 
                key={interest.title}
                className="hover:shadow-medium transition-all duration-300 hover:scale-[1.02] animate-fade-in group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-accent/10 rounded-full group-hover:bg-accent/20 transition-colors flex-shrink-0">
                      <interest.icon className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">{interest.title}</h3>
                      <p className="text-muted-foreground">{interest.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </PageLayout>
  );
};

export default About;