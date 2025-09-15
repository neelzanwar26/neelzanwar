import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FileText, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Book Exchange Website",
      description: "The Book Exchange Website is a platform designed to encourage sustainable reading habits by allowing users to exchange, donate, or borrow books online. The system provides features like browsing available books, searching by title/genre, and directly contacting book owners. It aims to create a community-driven space where readers can recycle and share books, reducing waste while making literature more accessible.",
      tags: ["HTML", "CSS", "JavaScript", "Bootstrap", "Django", "SQLite", "MySQL"],
      reportUrl: "https://docs.google.com/document/d/16ICXks848vrKYb39wKiusuL9s0YgT7Ui/edit"
    },
    {
      title: "Text Analysis for Indian Sentiment",
      description: "This project focuses on sentiment analysis of Hindi and Hinglish text using Natural Language Processing (NLP) and Machine Learning. It classifies text into Positive, Negative, and Neutral categories, leveraging custom datasets and pre-trained transformer models. The system is equipped with a user-friendly GUI and visualizations to present sentiment trends, making it useful for applications in media, e-commerce, government policy analysis, and research.",
      tags: ["Python", "PyQt5", "Hugging Face", "TensorFlow", "Keras", "Pandas", "Matplotlib"],
      reportUrl: "https://drive.google.com/file/d/1-x9gONMLyQ0EGhOkv41u-rXV0IADJXaB/view?usp=sharing"
    },
    {
      title: "Chat-With-Neel",
      description: "🤖 Neel — A Python-based personal chatbot assistant with voice recognition, conversational AI, and smart task handling. Neel is a Python-powered chatbot assistant built to act like a personal AI companion. It integrates speech recognition, text-to-speech, and API-driven intelligence to provide an interactive experience, similar to Alexa or Google Assistant.",
      tags: ["Python", "SpeechRecognition", "PyAudio", "NewsAPI", "OpenAI API", "WebBrowser"],
      githubUrl: "https://github.com/neelzanwar26/Chat-with-Neel"
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work and creative solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ project }: { project: any }) => (
  <Card className="glass-card hover-lift overflow-hidden group">
    <div className="relative overflow-hidden">
      <div className="w-full h-48 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
        <div className="text-6xl font-bold text-muted-foreground/30">
          {project.title.split(' ').map((word: string) => word[0]).join('')}
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
    </div>
    
    <div className="p-6">
      <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
      <p className="text-muted-foreground mb-4 leading-relaxed">
        {project.description}
      </p>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tags.map((tag: string) => (
          <Badge key={tag} variant="secondary" className="hover:bg-primary/20">
            {tag}
          </Badge>
        ))}
      </div>
      
      <div className="flex gap-3">
        {project.reportUrl && (
          <Button 
            size="sm" 
            className="bg-gradient-to-r from-primary to-secondary"
            onClick={() => window.open(project.reportUrl, '_blank')}
          >
            <FileText className="w-4 h-4 mr-2" />
            Report
          </Button>
        )}
        {project.githubUrl && (
          <Button 
            variant="outline" 
            size="sm"
            onClick={() => window.open(project.githubUrl, '_blank')}
          >
            <Github className="w-4 h-4 mr-2" />
            GitHub
          </Button>
        )}
      </div>
    </div>
  </Card>
);

export default Projects;