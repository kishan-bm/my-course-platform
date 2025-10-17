import Image from 'next/image';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';

const testimonialsData = [
  {
    quote: "This was the best investment I've made in my career. The hands-on projects and mentor support were incredible. I landed my dream job at Google within 6 months!",
    name: "Priya Sharma",
    role: "Software Engineer at Google",
    avatar: "/images/avatar1.jpg",
    rating: 5,
    course: "Full-Stack Web Development",
    // salary: "₹18 LPA"
  },
  {
    quote: "I went from zero coding knowledge to landing my first developer job in six months. The live training sessions and project-based learning made all the difference.",
    name: "Rajesh Kumar",
    role: "Data Scientist at Microsoft",
    avatar: "/images/avatar2.jpg",
    rating: 5,
    course: "Data Science & ML",
    // salary: "₹22 LPA"
  },
  {
    quote: "The curriculum is up-to-date with industry standards, which made the transition from learning to working seamless. The placement support was outstanding!",
    name: "Anita Patel",
    role: "Cloud Solutions Architect at AWS",
    avatar: "/images/avatar3.jpg",
    rating: 5,
    course: "Cloud Computing",
    // salary: "₹25 LPA"
  },
  // {
  //   quote: "The instructors are world-class and the hands-on approach helped me understand complex concepts easily. I'm now working on cutting-edge AI projects at Tesla.",
  //   name: "Vikram Singh",
  //   role: "AI Engineer at Tesla",
  //   avatar: "/images/team1.jpg",
  //   rating: 5,
  //   course: "Artificial Intelligence",
  //   salary: "₹28 LPA"
  // },
  // {
  //   quote: "The mobile app development course was comprehensive and practical. I built real apps during the course and now I'm developing apps for millions of users at Uber.",
  //   name: "Sneha Reddy",
  //   role: "Mobile Developer at Uber",
  //   avatar: "/images/team2.jpg",
  //   rating: 5,
  //   course: "Mobile App Development",
  //   salary: "₹20 LPA"
  // },
  // {
  //   quote: "The cybersecurity training was intense but incredibly rewarding. The practical labs and real-world scenarios prepared me perfectly for my role at IBM.",
  //   name: "Arjun Mehta",
  //   role: "Security Analyst at IBM",
  //   avatar: "/images/team3.jpg",
  //   rating: 5,
  //   course: "Cybersecurity",
  //   salary: "₹16 LPA"
  // }
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Success Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear from our graduates who transformed their careers and landed their dream jobs at top companies
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonialsData.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 p-6 relative overflow-hidden">
              {/* Quote Icon */}
              <div className="absolute top-4 right-4 text-blue-100 text-4xl">
                <FaQuoteLeft />
              </div>

              {/* Rating */}
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400 text-sm" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-600 italic mb-6 text-sm leading-relaxed">
                &quot;{testimonial.quote}&quot;
              </p>

              {/* Profile */}
              <div className="flex items-center mb-4">
                <div className="relative w-16 h-16 mr-4 flex-shrink-0">
                  <Image
                    src={testimonial.avatar}
                    alt={`Avatar of ${testimonial.name}`}
                    fill
                    className="rounded-full object-cover border-2 border-blue-100"
                  />
                </div>
                <div className="flex-1">
                  <p className="font-bold text-gray-900 text-lg">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                  {/* <p className="text-xs text-green-600 font-semibold">{testimonial.salary}</p> */}
                </div>
              </div>

              {/* Course Badge */}
              <div className="flex justify-between items-center">
                <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full">
                  {testimonial.course}
                </span>
                <div className="text-xs text-gray-500">
                  Verified Graduate
                </div>
              </div>

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-blue-50/50 to-transparent pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        {/* <div className="mt-20 bg-white rounded-2xl shadow-lg p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">10K+</div>
              <div className="text-gray-600">Happy Students</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">95%</div>
              <div className="text-gray-600">Placement Rate</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-600 mb-2">500+</div>
              <div className="text-gray-600">Partner Companies</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-600 mb-2">₹18L</div>
              <div className="text-gray-600">Average Salary</div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
}