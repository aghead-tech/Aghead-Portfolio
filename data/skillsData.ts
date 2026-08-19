//--====-- Skills Data --====--//
import APIsIcon from "@/public/images/icons/APIsIcon";
import CloudIcon from "@/public/images/icons/CloudIcon";
import DatabaseIcon from "@/public/images/icons/DatabaseIcon";
import FrontendIcon from "@/public/images/icons/FrontendIcon";
import MobilecodeIcon from "@/public/images/icons/MobilecodeIcon";
import SettingsIcon from "@/public/images/icons/SettingsIcon";


export const skillsData = [
  {
    id: 1,
    category: 'Frontend Development',
    icon: FrontendIcon,
    skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Vue.js', 'Angular'],
  },
  {
    id: 2,
    category: 'Backend & APIs',
    icon: APIsIcon,
    skills: ['Node.js', 'Express', 'Python', 'Django', 'FastAPI', 'GraphQL'],
  },
  {
    id: 3,
    category: 'Databases',
    icon: DatabaseIcon,
    skills: ['PostgreSQL', 'MongoDB', 'Redis', 'MySQL', 'Supabase', 'Firebase'],
  },
  {
    id: 4,
    category: 'Cloud & DevOps',
    icon: CloudIcon,
    skills: ['AWS', 'Docker', 'Kubernetes', 'CI/CD', 'Vercel', 'Netlify'],
  },
  {
    id: 5,
    category: 'Mobile Development',
    icon: MobilecodeIcon,
    skills: ['React Native', 'Flutter', 'iOS', 'Android', 'Expo', 'App Store'],
  },
  {
    id: 6,
    category: 'Security & Payments',
    icon: SettingsIcon,
    skills: ['OAuth', 'JWT', 'Stripe', 'PayPal', 'SSL/TLS', 'Encryption'],
  },
];
