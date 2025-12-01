import {
  Search,
  Users,
  FileText,
  MessageSquare,
  BarChart3,
  Shield,
  Clock,
  Award,
  Briefcase,
  Building2,
  LayoutDashboard,
  Plus,
} from "lucide-react";

export const jobSeekerFeatures = [
  {
    icon: Search,
    title: "Smart Job Matching",
    description: "AI-powered algorithm matches you with relevant opportunities based on your skills and preferences.",
  },
  {
    icon: FileText,
    title: "Resume Builder",
    description: "Create a professional resumes with our intuitive builder and templates designed by experts."
  },
  {
    icon: MessageSquare,
    title: "Direct communication",
    description: "Connect directly with hiring managers and recruiters through our secure messaging platform."
  },
  {
    icon: Award,
    title: "Skill Assessments",
    description: "Showcase your abilities with verified skill tests and earn badges that employers trust."
  },
];


export const employerFeatures = [
  {
    icon: Users,
    title: "Talent Pool Access",
    description: "Access our vast database of pre-scanned candidates and find the perfect fit for your team."
  },
  {
    icon: BarChart3,
    title: "Analytics Dashboard",
    description: "Track your hiring performance with detailed analytics and insight on candidate engagement."
  },
  {
    icon: Shield,
    title: "Verified Candidates",
    description: "All candidates undergo background verification to ensure you hire trustworthy professionals.",
  },
  {
    icon: Clock,
    title: "Quick Hiring",
    description: "Streamlined hiring process reduced time-to-hire by 60% with automated screening tools."
  }
];

// Navigation items configurations
export const NAVIGATION_MENU = [
  {id: "employer-dashboard", name: "Dashboard", icon: LayoutDashboard},
  {id: "post-job", name: "Post Job", icon: Plus},
  {id: "manage-jobs", name: "Manage Jobs", icon: Briefcase},
  {id: "company-profile", name: "Company Profile", icon: Building2},
];

// Categories and job types
export const CATEGORIES = [
  { value: "Engineering", label: "Engineering"},
  { value: "Design", label: "Design"},
  { value: "Marketing", label: "Marketing"},
  { value: "Sales", label: "Sales"},
  { value: "IT & Software", label: "IT & Software"},
  { value: "Customer-service", label: "Customer-service"},
  { value: "Product", label: "Product"},
  { value: "Operations", label: "Operations"},
  { value: "Finance", label: "Finance"},
  { value: "HR", label: "HR"},
  { value: "Other", label: "Other"}
];

export const JOB_TYPES = [
  { value: "Remote", label: "Remote"},
  { value: "Full-time", label: "Full-time"},
  { value: "Part-Time", label: "Part-time"},
  { value: "Contract", label: "Contract"},
  { value: "Internship", label: "Internship"}
];

export const SALARY_RANGES = [
  "Less than $1000",
  "$1000 - $15,000",
  "More than $15,000",
];