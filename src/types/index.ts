export interface Service {
  id: string;
  name: string;
  description: string;
  idealFor: string;
  turnaround: string;
  price: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  text: string;
  image?: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
}