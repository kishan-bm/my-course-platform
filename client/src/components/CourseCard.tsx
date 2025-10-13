import Link from 'next/link';
import { ReactNode } from 'react';

// Define the properties the card will accept
interface CourseCardProps {
  icon: ReactNode;
  title: string;
  href: string;
}

export default function CourseCard({ icon, title, href }: CourseCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-8 flex flex-col items-center text-center transition-transform transform hover:-translate-y-2">
      <div className="text-blue-600 text-6xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-800 mb-6 h-16">{title}</h3>
      <Link
        href={href}
        className="mt-auto bg-transparent border-2 border-blue-600 text-blue-600 px-6 py-2 rounded-full font-semibold hover:bg-blue-600 hover:text-white transition-colors"
      >
        Learn More
      </Link>
    </div>
  );
}