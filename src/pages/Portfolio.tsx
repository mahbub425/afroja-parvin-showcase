import PageLayout from "@/components/PageLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Users, Award, Briefcase } from "lucide-react";
import { useState } from "react";

const Portfolio = () => {
  const [filter, setFilter] = useState("all");

  const projects = [
    {
      title: "Churn Analysis for Product Performance",
      description: "Analyzed customer churn using the KKBox dataset to optimize retention strategies for e-commerce platforms. Implemented advanced statistical models to identify key factors driving customer attrition and developed actionable insights for product teams.",
      category: "Data Analysis",
      technologies: ["Python", "Pandas", "Scikit-learn", "Data Visualization"],
      type: "academic",
      year: "2025",
      image: "/api/placeholder/400/250"
    },
    {
      title: "Product Strategy Framework",
      description: "Developed a comprehensive product management framework during certification program. Created strategic planning tools, user journey maps, and metrics dashboards for product performance tracking.",
      category: "Product Management", 
      technologies: ["Strategic Planning", "User Research", "Analytics", "Roadmapping"],
      type: "certification",
      year: "2025",
      image: "/api/placeholder/400/250"
    },
    {
      title: "Statistical Analysis Portfolio",
      description: "Collection of statistical analysis projects demonstrating proficiency in hypothesis testing, regression analysis, and data interpretation. Applied statistical methods to real-world datasets.",
      category: "Data Analysis",
      technologies: ["R", "Statistical Modeling", "Hypothesis Testing", "Data Visualization"],
      type: "academic",
      year: "2024",
      image: "/api/placeholder/400/250"
    }
  ];

  const achievements = [
    {
      title: "Model Youth COP X",
      year: "2024",
      description: "Demonstrated leadership in climate action planning and environmental awareness initiatives",
      type: "Leadership",
      icon: Award
    },
    {
      title: "Help PUST General Member", 
      year: "2021-2024",
      description: "Organized social awareness programs and community engagement activities",
      type: "Social Impact",
      icon: Users
    },
    {
      title: "Skills Canvas Campus Ambassador",
      year: "2023", 
      description: "Hosted seminars on LinkedIn optimization and professional networking strategies",
      type: "Education",
      icon: Briefcase
    },
    {
      title: "Sevogbondhu Educational Consultant",
      year: "2020-2022",
      description: "Organized inter-school debate competitions and educational development programs",
      type: "Education",
      icon: Users
    }
  ];

  const testimonials = [
    {
      quote: "Afroja's analytical skills and attention to detail made our project analysis incredibly insightful. Her ability to translate complex data into actionable strategies is remarkable.",
      author: "Project Supervisor",
      role: "Academic Mentor"
    },
    {
      quote: "Her leadership during the climate action planning sessions was inspiring. Afroja has a natural ability to bring people together and drive meaningful change.",
      author: "Colleague",
      role: "Model Youth COP X"
    },
    {
      quote: "As a campus ambassador, Afroja's seminars on professional networking were both informative and engaging. She has a gift for teaching complex concepts simply.",
      author: "Attendee",
      role: "Skills Canvas Seminar"
    }
  ];

  const categories = ["all", "Data Analysis", "Product Management", "Leadership"];

  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <PageLayout title="Portfolio">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <section className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl font-bold text-foreground mb-6">Portfolio</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Showcasing my work in data analysis, product management, and leadership initiatives. 
            Each project represents my commitment to excellence and continuous learning.
          </p>
        </section>

        {/* Filter Buttons */}
        <section className="mb-12">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category}
                variant={filter === category ? "default" : "outline"}
                onClick={() => setFilter(category)}
                className="capitalize"
              >
                {category}
              </Button>
            ))}
          </div>
        </section>

        {/* Projects Grid */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <Card 
                key={project.title}
                className="hover:shadow-strong transition-all duration-300 hover:scale-[1.02] animate-slide-in-up group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="aspect-video bg-gradient-card rounded-t-lg flex items-center justify-center">
                  <div className="text-4xl font-bold text-primary/20">
                    {project.category === "Data Analysis" ? "📊" : "🎯"}
                  </div>
                </div>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <CardTitle className="text-lg group-hover:text-primary transition-colors">
                      {project.title}
                    </CardTitle>
                    <Badge variant="secondary" className="ml-2 flex-shrink-0">
                      {project.year}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <Badge className="mb-4">
                    {project.category}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Achievements Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Key Achievements</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <Card 
                key={achievement.title}
                className="hover:shadow-medium transition-all duration-300 hover:scale-[1.01] animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-accent/10 rounded-full flex-shrink-0">
                      <achievement.icon className="w-6 h-6 text-accent" />
                    </div>
                    <div className="flex-grow">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-semibold">{achievement.title}</h3>
                        <Badge variant="outline">{achievement.year}</Badge>
                      </div>
                      <p className="text-muted-foreground text-sm mb-2">
                        {achievement.description}
                      </p>
                      <Badge variant="secondary" className="text-xs">
                        {achievement.type}
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Testimonials Section */}
        <section>
          <h2 className="text-3xl font-bold text-center mb-12">What Others Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index}
                className="hover:shadow-medium transition-all duration-300 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <blockquote className="text-muted-foreground italic mb-4">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="border-t pt-4">
                    <p className="font-semibold">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
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

export default Portfolio;