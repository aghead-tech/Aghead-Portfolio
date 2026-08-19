import ArchitectureIcon from "@/public/images/icons/ArchitectureIcon";
import CodeMonitorIcon from "@/public/images/icons/CodeMonitorIcon";
import CryptoSecureIcon from "@/public/images/icons/CryptoSecureIcon";
import DashboardCardIcon from "@/public/images/icons/DashboardCardIcon";
import OptimizationIcon from "@/public/images/icons/OptimizationIcon";
import SupportIcon from "@/public/images/icons/SupportIcon";


/*--====-- Page Header Data   --====--*/
export const servicesPageHeader = {
  badgeText: 'My Services',
  watermarkText: 'SERVICES',
  mainText: 'I  Provide',
  highlightText: 'Services',
  description: 'Comprehensive development solutions tailored to your business needs',
};

/*--====-- Preview Section Data  --====--*/
export const servicesPreviewData = {
  watermarkText: 'SERVICES',
  badgeText: ' My Specialization',
  mainText: ' Provide',
  highlightText: ' Services I',
};


/*--====-- Services List Data --====--*/
export const servicesData = [
  {
    id: 1,
    title: 'SaaS Development',
    description: 'Build scalable subscription-based software with secure architecture, performance optimization, and long-term growth support.',
    icon: CodeMonitorIcon,
  },
  {
    id: 2,
    title: 'FinTech Solutions',
    description: 'Develop secure financial applications with payment processing, fraud prevention, compliance, and high reliability.',
    icon: CryptoSecureIcon,
  },
  {
    id: 3,
    title: 'Full-Stack Development',
    description: 'Complete end-to-end application development from database design to responsive frontend interfaces.',
    icon: DashboardCardIcon,
  },
  {
    id: 4,
    title: 'Performance Optimization',
    description: 'Enhance application speed, scalability, and user experience with advanced optimization techniques.',
    icon: OptimizationIcon,
  },
  {
    id: 5,
    title: 'System Architecture',
    description: 'Design robust, scalable system architectures with microservices, cloud-native solutions.',
    icon: ArchitectureIcon,
  },
  {
    id: 6,
    title: 'Consulting & Support',
    description: 'Technical consulting, code review, team mentoring, and ongoing maintenance for your applications.',
    icon: SupportIcon,
  },
];
