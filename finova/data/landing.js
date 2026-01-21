import {
  BarChart3,
  Receipt,
  PieChart,
  CreditCard,
  Globe,
  Zap,
} from "lucide-react";

// Stats Data
export const statsData = [
  {
    value: "50K+",
    label: "Active Users",
  },
  {
    value: "₹2M+",
    label: "Transactions Tracked",
  },
  {
    value: "99.9%",
    label: "Uptime",
  },
  {
    value: "4.8/5",
    label: "User Rating",
  },
];

// Features Data
export const featuresData = [
  {
    icon: <BarChart3 className="h-8 w-8 text-blue-600" />,
    title: "Advanced Analytics",
    description:
      "Get detailed insights into your spending patterns with AI-powered analytics",
  },
  {
    icon: <Receipt className="h-8 w-8 text-blue-600" />,
    title: "Smart Receipt Scanner",
    description:
      "Extract data automatically from receipts using advanced AI technology",
  },
  {
    icon: <PieChart className="h-8 w-8 text-blue-600" />,
    title: "Budget Planning",
    description: "Create and manage budgets with intelligent recommendations",
  },
  {
    icon: <CreditCard className="h-8 w-8 text-blue-600" />,
    title: "Multi-Account Support",
    description: "Manage multiple accounts and credit cards in one place",
  },
  {
    icon: <Globe className="h-8 w-8 text-blue-600" />,
    title: "Multi-Currency",
    description: "Support for multiple currencies with real-time conversion",
  },
  {
    icon: <Zap className="h-8 w-8 text-blue-600" />,
    title: "Automated Insights",
    description: "Get automated financial insights and recommendations",
  },
];

// How It Works Data
export const howItWorksData = [
  {
    icon: <CreditCard className="h-8 w-8 text-blue-600" />,
    title: "1. Create Your Account",
    description:
      "Get started in minutes with our simple and secure sign-up process",
  },
  {
    icon: <BarChart3 className="h-8 w-8 text-blue-600" />,
    title: "2. Track Your Spending",
    description:
      "Automatically categorize and track your transactions in real-time",
  },
  {
    icon: <PieChart className="h-8 w-8 text-blue-600" />,
    title: "3. Get Insights",
    description:
      "Receive AI-powered insights and recommendations to optimize your finances",
  },
];

// Testimonials Data
export const testimonialsData = [
  {
  name: "Saurav Kumar Srivastava",
  role: "Bridge Designer",
  image: "/saurav_srivastava.jpeg",
  quote:
    "Handling multiple project budgets and vendor payments used to be messy. Finova helped me track expenses precisely and plan cash flow better across long-term infrastructure projects.",
},
{
  name: "Prachi Mittal",
  role: "Student at MNIT",
  image: "https://randomuser.me/api/portraits/women/75.jpg",
  quote:
    "As a student managing limited funds, Finova makes budgeting simple and clear. I can track my spending, control unnecessary expenses, and plan better month by month.",
},
{
  name: "Dikshit Raj Sharma",
  role: "Student at NITH",
  image: "/dikshit_raj_sharma.jpeg",
  quote:
    "The receipt scanning feature is a game changer. I no longer worry about losing bills or manually tracking expenses—everything is organized automatically.",
},
{
  name: "Ajay Grol",
  role: "Student at NITH",
  image: "/ajay_grol.jpeg",
  quote:
    "Finova gives me a clear picture of where my money goes. The analytics help me understand my spending habits and improve my financial discipline.",
},
{
  name: "Hritik Mangal",
  role: "Student at NITH",
  image: "/Hritik.jpg",
  quote:
    "What I like most about Finova is how clean and structured everything feels. From expense tracking to insights, it’s practical and actually useful for daily use.",
},


];