import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Palette, Database, Brain, Award, Terminal, ExternalLink } from "lucide-react";
import { useEffect, useState } from "react";

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8 mb-16">
          <SkillCategory
            icon={Code}
            title="Frontend"
            skills={["React", "HTML", "CSS", "Tailwind CSS"]}
          />
          <SkillCategory
            icon={Database}
            title="Backend"
            skills={["JavaScript", "Python", "PostgreSQL", "MongoDB"]}
          />
          <SkillCategory
            icon={Brain}
            title="AI/ML"
            skills={["Python", "Numpy", "Pandas", "Socket"]}
          />
          <SkillCategory
            icon={Palette}
            title="Design"
            skills={["Figma", "Adobe XD", "Canva", "PosterMyWall", "Prototyping"]}
          />
          <SkillCategory
            icon={Terminal}
            title="DSA"
            skills={["C", "C++", "Java", "Python"]}
          />
        </div>

        {/* Achievements & Certifications */}
        <div id="achievements" className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-8">Achievements & Certifications</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
            <CertificationCard
              title="IBM CyberSecurity Analyst Certificate"
              issuer="IBM"
              date="2025"
              status="Active"
              url="https://coursera.org/share/febe310e1ccf7ec47d465b70c793d0ae"
            />
            <CertificationCard
              title="TuteDude Data Structures And Algorithms"
              issuer="TuteDude"
              date="2025"
              status="Active"
              url="https://drive.google.com/file/d/1NCweHUAL-xFegbxIfI6tg4Npolt3PFMO/view?usp=sharing"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const SkillCategory = ({ 
  icon: Icon, 
  title, 
  skills 
}: {
  icon: any;
  title: string;
  skills: string[];
}) => (
  <Card className="glass-card hover-lift p-6 text-center">
    <div className="p-4 rounded-full bg-gradient-to-br from-primary to-secondary w-fit mx-auto mb-4">
      <Icon className="w-8 h-8 text-white" />
    </div>
    <h3 className="text-xl font-semibold mb-4">{title}</h3>
    <div className="flex flex-wrap gap-2 justify-center">
      {skills.map((skill) => (
        <Badge key={skill} variant="secondary" className="hover:bg-primary/20">
          {skill}
        </Badge>
      ))}
    </div>
  </Card>
);

const CertificationCard = ({ 
  title, 
  issuer, 
  date, 
  status,
  url
}: {
  title: string;
  issuer: string;
  date: string;
  status: string;
  url?: string;
}) => (
  <Card className="glass-card hover-lift p-6">
    <div className="flex items-start gap-4">
      <div className="p-3 rounded-full bg-gradient-to-br from-primary to-secondary w-fit">
        <Award className="w-6 h-6 text-white" />
      </div>
      <div className="flex-1">
        <div className="flex items-start justify-between mb-2">
          <h4 className="text-lg font-semibold">{title}</h4>
          {url && (
            <a 
              href={url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:text-primary/80 transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>
        <p className="text-muted-foreground text-sm mb-2">{issuer}</p>
        <div className="flex justify-between items-center">
          <span className="text-xs text-muted-foreground">{date}</span>
          <Badge variant="secondary" className="text-xs">
            {status}
          </Badge>
        </div>
      </div>
    </div>
  </Card>
);

export default Skills;