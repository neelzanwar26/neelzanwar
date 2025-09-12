import { Mail, Phone, Linkedin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind? Let's work together to bring your ideas to life
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="text-center space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Let's Connect</h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                I'm always interested in hearing about new projects and opportunities. 
                Whether you're a company looking to hire, or you're a fellow developer 
                who wants to connect, I'd love to hear from you.
              </p>
            </div>

            <div className="space-y-4 max-w-md mx-auto">
              <ContactInfo
                icon={Mail}
                title="Email"
                info="neelzanwar04@gmail.com"
                href="mailto:neelzanwar04@gmail.com"
              />
              <ContactInfo
                icon={Phone}
                title="Phone"
                info="+91 8793914157"
                href="tel:+918793914157"
              />
              <ContactInfo
                icon={Linkedin}
                title="LinkedIn"
                info="Connect on LinkedIn"
                href="https://www.linkedin.com/in/neel-zanwar-04b371304/"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ContactInfo = ({ 
  icon: Icon, 
  title, 
  info, 
  href 
}: {
  icon: any;
  title: string;
  info: string;
  href: string;
}) => (
  <div className="flex items-center space-x-4 p-4 rounded-lg glass-card hover-lift">
    <div className="p-3 rounded-full bg-gradient-to-br from-primary to-secondary">
      <Icon className="w-5 h-5 text-white" />
    </div>
    <div className="text-left">
      <h4 className="font-medium text-left">{title}</h4>
      <a href={href} className="text-muted-foreground hover:text-primary transition-colors text-left block">
        {info}
      </a>
    </div>
  </div>
);

export default Contact;