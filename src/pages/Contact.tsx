import PageLayout from "@/components/PageLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { 
  Mail, 
  Phone, 
  Linkedin, 
  MessageSquare, 
  Send,
  Clock,
  MapPin,
  ChevronDown,
  ChevronUp
} from "lucide-react";
import { useState, FormEvent } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: "How can I collaborate with you?",
      answer: "I'm open to collaborating on data analysis projects, product management initiatives, and research opportunities. Please reach out via email with details about your project, and I'll get back to you within 24-48 hours."
    },
    {
      question: "What is your experience in data analysis?",
      answer: "I have experience in statistical analysis, Python programming, and data visualization. My recent work includes churn analysis projects and I'm currently pursuing advanced certifications in data science through Simplilearn."
    },
    {
      question: "Do you offer consulting services?",
      answer: "Yes, I provide consulting services in data analysis, product strategy, and project planning. I can help with data interpretation, strategic planning, and process optimization for small to medium-sized projects."
    },
    {
      question: "What programming languages do you work with?",
      answer: "I'm proficient in Python, R, and C programming languages. I also have experience with data analysis libraries like Pandas, NumPy, and visualization tools for creating meaningful insights from data."
    },
    {
      question: "Are you available for speaking engagements?",
      answer: "Absolutely! I have experience hosting seminars on LinkedIn optimization, professional networking, and career development. I'm passionate about sharing knowledge and would be happy to speak at educational events or professional gatherings."
    },
    {
      question: "What's your typical response time?",
      answer: "I typically respond to emails within 24-48 hours during business days. For urgent matters, please mention 'URGENT' in the subject line, and I'll prioritize your message."
    }
  ];

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name.trim() || formData.name.length < 2) {
      toast({
        title: "Invalid Name",
        description: "Please enter a name with at least 2 characters.",
        variant: "destructive"
      });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive"
      });
      return;
    }

    if (!formData.message.trim() || formData.message.length < 10) {
      toast({
        title: "Invalid Message",
        description: "Please enter a message with at least 10 characters.",
        variant: "destructive"
      });
      return;
    }

    // Create mailto link
    const subject = encodeURIComponent(formData.subject || `Message from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    const mailtoLink = `mailto:afrojaparvin0000@gmail.com?subject=${subject}&body=${body}`;
    
    window.location.href = mailtoLink;

    toast({
      title: "Message Prepared",
      description: "Your email client should open with the prepared message. Thank you for reaching out!",
    });

    // Reset form
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <PageLayout title="Contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <section className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl font-bold text-foreground mb-6">Get In Touch</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            I'd love to hear from you! Whether you have a project in mind, want to collaborate, 
            or just want to say hello, feel free to reach out.
          </p>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <section className="animate-slide-in-up">
            <h2 className="text-2xl font-bold mb-8">Contact Information</h2>
            
            <div className="space-y-6 mb-8">
              <Card className="hover:shadow-medium transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-primary/10 rounded-full">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Email</h3>
                      <a 
                        href="mailto:afrojaparvin0000@gmail.com"
                        className="text-primary hover:text-primary-dark transition-colors"
                      >
                        afrojaparvin0000@gmail.com
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-medium transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-primary/10 rounded-full">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Phone</h3>
                      <p className="text-muted-foreground">01521491543</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-medium transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-primary/10 rounded-full">
                      <Linkedin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold">LinkedIn</h3>
                      <a 
                        href="https://linkedin.com/in/afroja-parvin"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:text-primary-dark transition-colors"
                      >
                        linkedin.com/in/afroja-parvin
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-medium transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-primary/10 rounded-full">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Location</h3>
                      <p className="text-muted-foreground">Dhaka, Bangladesh</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-medium transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-accent/10 rounded-full">
                      <Clock className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Response Time</h3>
                      <p className="text-muted-foreground">Within 24-48 hours</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Contact Form */}
          <section className="animate-slide-in-up" style={{ animationDelay: "0.2s" }}>
            <Card className="shadow-strong">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MessageSquare className="w-5 h-5 mr-2 text-primary" />
                  Send Message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Name *</Label>
                      <Input
                        id="name"
                        type="text"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        placeholder="Your full name"
                        required
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        placeholder="your.email@example.com"
                        required
                        className="mt-1"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      type="text"
                      value={formData.subject}
                      onChange={(e) => handleInputChange("subject", e.target.value)}
                      placeholder="What's this about?"
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      placeholder="Tell me about your project or how I can help..."
                      rows={5}
                      required
                      className="mt-1 resize-none"
                    />
                  </div>

                  <Button type="submit" variant="hero" className="w-full" size="lg">
                    Send Message
                    <Send className="ml-2 w-4 h-4" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </section>
        </div>

        {/* FAQ Section */}
        <section className="mt-16">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <Card 
                key={index}
                className="hover:shadow-medium transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-0">
                  <button
                    onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                    className="w-full p-6 text-left flex items-center justify-between hover:bg-muted/50 transition-colors"
                  >
                    <h3 className="font-semibold">{faq.question}</h3>
                    {expandedFaq === index ? (
                      <ChevronUp className="w-5 h-5 text-primary flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-primary flex-shrink-0" />
                    )}
                  </button>
                  {expandedFaq === index && (
                    <div className="px-6 pb-6 animate-fade-in">
                      <p className="text-muted-foreground leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </PageLayout>
  );
};

export default Contact;