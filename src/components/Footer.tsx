import { Link } from "react-router-dom";
import { Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Afroja Parvin</h3>
            <p className="text-background/80 text-sm">
              Data Analyst | Product Manager | Continuous Learner
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <div className="space-y-2">
              <Link to="/about" className="block text-background/80 hover:text-background transition-colors text-sm">
                About Me
              </Link>
              <Link to="/portfolio" className="block text-background/80 hover:text-background transition-colors text-sm">
                Portfolio
              </Link>
              <Link to="/certifications" className="block text-background/80 hover:text-background transition-colors text-sm">
                Certifications
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Connect</h3>
            <div className="flex space-x-4">
              <a
                href="https://linkedin.com/in/afroja-parvin"
                target="_blank"
                rel="noopener noreferrer"
                className="text-background/80 hover:text-background transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:afrojaparvin0000@gmail.com"
                className="text-background/80 hover:text-background transition-colors"
                aria-label="Email Contact"
              >
                <Mail size={20} />
              </a>
            </div>
            <p className="text-background/80 text-sm">
              afrojaparvin0000@gmail.com
            </p>
          </div>
        </div>

        <div className="border-t border-background/20 mt-8 pt-8 text-center">
          <p className="text-background/80 text-sm">
            © 2025 Afroja Parvin. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;