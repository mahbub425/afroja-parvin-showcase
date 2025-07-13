import PageLayout from "@/components/PageLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Award, Calendar, Building, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Certifications = () => {
  const certifications = [
    {
      title: "Product Management",
      provider: "Simplilearn",
      period: "Jun-Jul 2025",
      status: "In Progress",
      description: "Comprehensive program covering product strategy, roadmapping, user research, and agile methodologies. Learning key frameworks for product development and market analysis.",
      skills: ["Product Strategy", "Roadmapping", "User Research", "Agile Methodologies", "Market Analysis"],
      category: "Business"
    },
    {
      title: "Introduction to Data Science",
      provider: "Simplilearn", 
      period: "Apr-May 2025",
      status: "In Progress",
      description: "Foundational course in data science covering statistical analysis, machine learning basics, data visualization, and Python programming for data analysis.",
      skills: ["Python", "Statistical Analysis", "Machine Learning", "Data Visualization", "Pandas"],
      category: "Technical"
    },
    {
      title: "Principle of Management",
      provider: "Great Learning",
      period: "Jul 2024",
      status: "Completed",
      description: "Leadership and management fundamentals including organizational behavior, strategic planning, team management, and decision-making frameworks.",
      skills: ["Leadership", "Strategic Planning", "Team Management", "Decision Making", "Organizational Behavior"],
      category: "Business"
    },
    {
      title: "Statistics for Data Science",
      provider: "Great Learning",
      period: "2024",
      status: "Completed", 
      description: "Advanced statistical methods and their applications in data science including hypothesis testing, regression analysis, and statistical modeling.",
      skills: ["Hypothesis Testing", "Regression Analysis", "Statistical Modeling", "Probability", "Data Interpretation"],
      category: "Technical"
    },
    {
      title: "Effective Communication",
      provider: "Great Learning",
      period: "2024",
      status: "Completed",
      description: "Professional communication skills including presentation techniques, written communication, interpersonal skills, and cross-cultural communication.",
      skills: ["Presentation Skills", "Written Communication", "Interpersonal Skills", "Public Speaking", "Cross-cultural Communication"],
      category: "Soft Skills"
    },
    {
      title: "Mindshift: Break Through Obstacles",
      provider: "Coursera",
      period: "2023",
      status: "Completed",
      description: "Personal development course focusing on learning strategies, overcoming obstacles, mindset transformation, and building resilience.",
      skills: ["Growth Mindset", "Learning Strategies", "Resilience", "Problem Solving", "Self-awareness"],
      category: "Personal Development"
    }
  ];

  const providers = [
    { name: "Simplilearn", count: 2, focus: "Technology & Business" },
    { name: "Great Learning", count: 3, focus: "Professional Skills" },
    { name: "Coursera", count: 1, focus: "Personal Development" }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed":
        return "bg-green-100 text-green-800 border-green-200";
      case "In Progress":
        return "bg-blue-100 text-blue-800 border-blue-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Technical":
        return "bg-primary/10 text-primary border-primary/20";
      case "Business":
        return "bg-accent/10 text-accent border-accent/20";
      case "Soft Skills":
        return "bg-purple-100 text-purple-800 border-purple-200";
      case "Personal Development":
        return "bg-green-100 text-green-800 border-green-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  return (
    <PageLayout title="Certifications">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <section className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl font-bold text-foreground mb-6">Professional Certifications</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            My commitment to continuous learning and professional development through industry-recognized 
            certifications and courses.
          </p>
        </section>

        {/* Stats Cards */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {providers.map((provider, index) => (
              <Card 
                key={provider.name}
                className="text-center hover:shadow-medium transition-all duration-300 hover:scale-[1.02] animate-slide-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <Building className="w-8 h-8 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold text-lg mb-2">{provider.name}</h3>
                  <p className="text-2xl font-bold text-primary mb-1">{provider.count}</p>
                  <p className="text-sm text-muted-foreground">Certifications</p>
                  <p className="text-xs text-muted-foreground mt-2">{provider.focus}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Certifications Grid */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">All Certifications</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {certifications.map((cert, index) => (
              <Card 
                key={cert.title}
                className="hover:shadow-strong transition-all duration-300 hover:scale-[1.01] animate-fade-in group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-grow">
                      <CardTitle className="text-xl group-hover:text-primary transition-colors mb-2">
                        {cert.title}
                      </CardTitle>
                      <div className="flex items-center space-x-2 text-muted-foreground mb-2">
                        <Building className="w-4 h-4" />
                        <span className="font-medium">{cert.provider}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        <span>{cert.period}</span>
                      </div>
                    </div>
                    <div className="flex flex-col space-y-2">
                      <Badge className={getStatusColor(cert.status)}>
                        {cert.status}
                      </Badge>
                      <Badge className={getCategoryColor(cert.category)}>
                        {cert.category}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {cert.description}
                  </p>
                  <div className="space-y-3">
                    <h4 className="font-semibold text-sm">Skills Developed:</h4>
                    <div className="flex flex-wrap gap-2">
                      {cert.skills.map((skill) => (
                        <Badge key={skill} variant="outline" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Professional Development Section */}
        <section className="text-center">
          <Card className="bg-gradient-card hover:shadow-strong transition-all duration-300 animate-scale-in">
            <CardContent className="p-12">
              <Award className="w-16 h-16 text-primary mx-auto mb-6" />
              <h2 className="text-3xl font-bold mb-6">Commitment to Continuous Learning</h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
                I am dedicated to continuous learning and professional growth, regularly updating my skills 
                in data analysis, product management, and communication through industry-leading platforms 
                like Simplilearn, Great Learning, and Coursera. This commitment ensures I stay current with 
                emerging trends and technologies.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hero" size="lg" asChild>
                  <Link to="/about">
                    View My Skills
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/portfolio">
                    See My Work
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </PageLayout>
  );
};

export default Certifications;