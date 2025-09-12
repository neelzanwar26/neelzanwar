import { Card } from "@/components/ui/card";
import { GraduationCap, School } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Learn more about my background, education, and passion for technology
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* About Text */}
          <div className="space-y-6 animate-fade-in-up">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a third-year IT student at PICT with a strong interest in Artificial Intelligence, 
              Machine Learning, and Cybersecurity. Alongside my academic journey, I've also developed 
              skills in frontend development, allowing me to combine logic with design to create 
              meaningful digital experiences.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm always curious about how technology shapes the world around us, and I enjoy 
              exploring innovative solutions to real-world problems. Beyond academics, I love 
              experimenting with new tools, working on projects that challenge my skills, and 
              continuously learning to stay aligned with the latest industry trends.
            </p>
          </div>

          {/* Education Cards */}
          <div className="space-y-6">
            <EducationCard
              icon={GraduationCap}
              title="Bachelor in Information Technology"
              institution="Pune Institute Of Computer Technology"
              period="2023 - 2027 Batch"
              description="Currently pursuing BTech in Information Technology"
            />
            <EducationCard
              icon={School}
              title="Higher Secondary Education (12th)"
              institution="Kasturbai Walchand College, Sangli"
              period="2023 Batch"
              description="PCM with Computer Science"
            />
            <EducationCard
              icon={School}
              title="Secondary Education (10th)"
              institution="Appasaheb Birnale Public School, Sangli"
              period="2021 Batch"
              description="Secondary School Certificate"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const EducationCard = ({ 
  icon: Icon, 
  title, 
  institution, 
  period, 
  description 
}: {
  icon: any;
  title: string;
  institution: string;
  period: string;
  description: string;
}) => (
  <Card className="glass-card hover-lift p-6">
    <div className="flex items-start space-x-4">
      <div className="p-3 rounded-lg bg-gradient-to-br from-primary to-secondary">
        <Icon className="w-6 h-6 text-white" />
      </div>
      <div className="flex-1">
        <h3 className="text-xl font-semibold mb-1">{title}</h3>
        <p className="text-primary font-medium mb-1">{institution}</p>
        <p className="text-sm text-muted-foreground mb-2">{period}</p>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </div>
  </Card>
);

export default About;