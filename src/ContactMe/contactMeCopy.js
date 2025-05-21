import { Mail, Github, Linkedin } from 'lucide-react';

export const contacts = [
  {
    type: 'linkedin',
    label: 'Connect on LinkedIn',
    url: 'https://www.linkedin.com/in/georgeostercodes/',
    icon: Linkedin
  },
  {
    type: 'github',
    label: 'View GitHub Projects',
    url: 'https://github.com/georgeoster?tab=repositories',
    icon: Github
  },
  {
    type: 'email',
    label: 'Email Me',
    url: 'mailto:georgeostercodes@gmail.com',
    icon: Mail
  },  
];