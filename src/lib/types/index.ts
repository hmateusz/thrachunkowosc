export interface ContactForm {
  name: string;
  email: string;
  phone?: string;
  message: string;
  subject: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  features: string[];
  price?: string;
  icon?: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  recommended?: boolean;
}

export interface TeamMember {
  id: string;
  name: string;
  position: string;
  bio: string;
  image?: string;
  email?: string;
  phone?: string;
}

export interface CompanyInfo {
  name: string;
  tagline: string;
  description: string;
  address: {
    street: string;
    city: string;
    postalCode: string;
    country: string;
  };
  contact: {
    phone: string;
    email: string;
    website: string;
  };
  hours: {
    [key: string]: string;
  };
} 