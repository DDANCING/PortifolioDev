export interface Project {
  title: string;
  description: string;
  technologies: string[];
  githubLink: string;
  demoLink: string;
  image: string;
}

export interface Certification {
  title: string;             
  institution: string;       
  instructor?: string;      
  duration: string;          
  completionDate: string;   
  certificateLink: string;  
  description?: string;     
  topics: string[];         
  technologies: string[];   
}