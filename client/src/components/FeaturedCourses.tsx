import CourseCard from './CourseCard';
import { FaCode, FaDatabase, FaCloud, FaMobile, FaBrain, FaShieldAlt } from 'react-icons/fa';

export default function FeaturedCourses() {
  const courses = [
    {
      title: "Full-Stack Web Development",
      href: "/courses",
      icon: <FaCode />,
      description: "Master modern web development with React, Node.js, and databases",
      duration: "6 months",
      students: "2.5K",
      rating: 4.9,
      price: "₹49,999"
    },
    {
      title: "Data Science with Python",
      href: "/courses",
      icon: <FaDatabase />,
      description: "Learn Python, statistics, and ML algorithms with real datasets",
      duration: "8 months",
      students: "1.8K",
      rating: 4.8,
      price: "₹59,999"
    },
    {
      title: "Cloud Computing & DevOps",
      href: "/courses",
      icon: <FaCloud />,
      description: "Master AWS, Docker, Kubernetes, and CI/CD pipelines",
      duration: "5 months",
      students: "1.2K",
      rating: 4.9,
      price: "₹44,999"
    },
    {
      title: "Mobile App Development",
      href: "/courses",
      icon: <FaMobile />,
      description: "Build iOS and Android apps using React Native and Flutter",
      duration: "6 months",
      students: "1.6K",
      rating: 4.7,
      price: "₹39,999"
    },
    {
      title: "Artificial Intelligence",
      href: "/courses",
      icon: <FaBrain />,
      description: "Deep dive into AI, neural networks, and deep learning",
      duration: "10 months",
      students: "900",
      rating: 4.9,
      price: "₹79,999"
    },
    {
      title: "Cybersecurity",
      href: "/courses",
      icon: <FaShieldAlt />,
      description: "Learn ethical hacking, penetration testing, and security",
      duration: "7 months",
      students: "1.1K",
      rating: 4.8,
      price: "₹54,999"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Featured Courses
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our most popular courses designed by industry experts. 
            Choose from a wide range of programs and start your journey to success.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group">
              {/* Course Icon */}
              <div className="h-32 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                <div className="text-white text-5xl group-hover:scale-110 transition-transform duration-300">
                  {course.icon}
                </div>
              </div>

              {/* Course Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
                  {course.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {course.description}
                </p>

                {/* Course Stats */}
                <div className="flex justify-between items-center mb-4 text-sm text-gray-500">
                  <span>{course.duration}</span>
                  <span>{course.students} students</span>
                  <div className="flex items-center">
                    <span className="text-yellow-400">★</span>
                    <span className="ml-1">{course.rating}</span>
                  </div>
                </div>

                {/* Price */}
                <div className="flex justify-between items-center mb-4">
                  <span className="text-2xl font-bold text-gray-800">{course.price}</span>
                  <span className="text-sm text-green-600 font-semibold">Popular</span>
                </div>

                {/* CTA Button */}
                <a
                  href={course.href}
                  className="block w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                >
                  Learn More
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <a
            href="/courses"
            className="inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-2 border-blue-600 hover:bg-blue-600 hover:text-white"
          >
            View All Courses
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}