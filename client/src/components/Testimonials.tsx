import Image from 'next/image';

// We'll keep the testimonial data in an array for easy management
const testimonialsData = [
  {
    quote: "This was the best investment I've made in my career. The hands-on projects and mentor support were incredible.",
    name: "Pawan Sharma",
    role: "Software Engineer at TechCorp",
    avatar: "/images/avatar1.jpg"
  },
  {
    quote: "I went from zero coding knowledge to landing my first developer job in six months. I couldn't have done it without this platform.",
    name: "Anjali Mehta",
    role: "Frontend Developer at WebSolutions",
    avatar: "/images/avatar2.jpg"
  },
  {
    quote: "The curriculum is up-to-date with industry standards, which made the transition from learning to working seamless.",
    name: "Rohan Verma",
    role: "Cloud Engineer at Cloudways",
    avatar: "/images/avatar3.jpg"
  }
];

export default function Testimonials() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
          What Our Students Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonialsData.map((testimonial) => (
            <div key={testimonial.name} className="bg-gray-50 p-6 rounded-lg shadow-sm border border-gray-200">
              <p className="text-gray-600 italic mb-6">"{testimonial.quote}"</p>
              <div className="flex items-center">
                <div className="relative w-14 h-14 mr-4">
                  <Image
                    src={testimonial.avatar}
                    alt={`Avatar of ${testimonial.name}`}
                    fill
                    className="rounded-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}