import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden z-10">
      {/* Background gradient animation */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center animate-fade-in-up">

          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="gradient-text">Neel Zanwar</span>
          </h1>
          
          <h2 className="text-2xl md:text-3xl text-muted-foreground mb-6">
            Third year IT Engineering student at PICT, Pune
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
            Passionate about creating beautiful, functional web experiences. 
            Aspiring AI/ML Engineer and Cyber Security Enthusiast.
          </p>

          {/* CTA Button */}
          <div className="flex justify-center mb-12">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-primary to-secondary hover:from-primary-glow hover:to-secondary-glow glow-primary"
              asChild
            >
              <a href="https://drive.google.com/file/d/1Gtvw3Bb5f276hkLIw68rPLW6T52fxYr5/view?usp=drive_link">
                My Resume
              </a>
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-16">
            <SocialLink href="https://github.com/neelzanwar26" icon={Github} label="GitHub" />
            <SocialLink href="https://www.linkedin.com/in/neel-zanwar-04b371304/" icon={Linkedin} label="LinkedIn" />
            <SocialLink href="mailto:neelzanwar04@gmail.com" icon={Mail} label="Email" />
          </div>

          {/* Scroll indicator */}
          <div className="animate-bounce">
            <ArrowDown className="w-6 h-6 mx-auto text-muted-foreground" />
          </div>
        </div>
      </div>
    </section>
  );
};

const SocialLink = ({ href, icon: Icon, label }: { href: string; icon: any; label: string }) => (
  <a
    href={href}
    className="p-3 rounded-full glass-card hover-lift group"
    aria-label={label}
  >
    <Icon className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
  </a>
);

export default Hero;
