"use client";

import CourseCard from '@/components/CourseCard';
import { useAuthModal } from '@/hooks/userAuthModal';
import { useUserStore } from '@/hooks/useUserStore';
import { FaCode, FaDatabase, FaCloud, FaMobile, FaBrain, FaShieldAlt, FaRocket, FaChartLine } from 'react-icons/fa';

export default function CoursesPage() {
  const { openModal } = useAuthModal();
  const { isLoggedIn } = useUserStore();
  const courses = [
    {
      title: "Full-Stack Web Development",
      description: "Master modern web development with React, Node.js, and databases. Build real-world projects and deploy them to production.",
      duration: "6 months",
      level: "Beginner to Advanced",
      // price: "₹49,999",
      // originalPrice: "₹79,999",
      rating: 4.9,
      // students: 2500,
      instructor: "Dr. Sarah Smith",
      icon: <FaCode />,
      features: ["Live Projects", "Job Guarantee", "Mentorship", "Certification"],
      category: "Web Development"
    },
    {
      title: "Data Science & Machine Learning",
      description: "Learn Python, statistics, and ML algorithms. Work with real datasets and build predictive models.",
      duration: "8 months",
      level: "Intermediate",
      // price: "₹59,999",
      // originalPrice: "₹99,999",
      rating: 4.8,
      // students: 1800,
      instructor: "Prof. Michael Chen",
      icon: <FaDatabase />,
      features: ["Real Datasets", "Portfolio Projects", "Industry Mentors", "Job Placement"],
      category: "Data Science"
    },
    {
      title: "Cloud Computing & DevOps",
      description: "Master AWS, Docker, Kubernetes, and CI/CD pipelines. Learn infrastructure as code and cloud security.",
      duration: "5 months",
      level: "Intermediate to Advanced",
      // price: "₹44,999",
      // originalPrice: "₹69,999",
      rating: 4.9,
      // students: 1200,
      instructor: "Alex Johnson",
      icon: <FaCloud />,
      features: ["AWS Certified", "Hands-on Labs", "Industry Projects", "Career Support"],
      category: "Cloud & DevOps"
    },
    {
      title: "Mobile App Development",
      description: "Build iOS and Android apps using React Native and Flutter. Learn app store deployment and monetization.",
      duration: "6 months",
      level: "Beginner to Intermediate",
      // price: "₹39,999",
      // originalPrice: "₹64,999",
      rating: 4.7,
      // students: 1600,
      instructor: "Emma Wilson",
      icon: <FaMobile />,
      features: ["Cross-platform", "App Store Ready", "UI/UX Design", "Monetization"],
      category: "Mobile Development"
    },
    {
      title: "Artificial Intelligence",
      description: "Deep dive into AI, neural networks, and deep learning. Build intelligent systems and chatbots.",
      duration: "10 months",
      level: "Advanced",
      // price: "₹79,999",
      // originalPrice: "₹129,999",
      rating: 4.9,
      // students: 900,
      instructor: "Dr. Raj Patel",
      icon: <FaBrain />,
      features: ["Deep Learning", "NLP & Computer Vision", "Research Projects", "PhD Mentorship"],
      category: "Artificial Intelligence"
    },
    {
      title: "Cybersecurity",
      description: "Learn ethical hacking, penetration testing, and security architecture. Get certified in cybersecurity.",
      duration: "7 months",
      level: "Intermediate to Advanced",
      // price: "₹54,999",
      // originalPrice: "₹89,999",
      rating: 4.8,
      // students: 1100,
      instructor: "Captain James Lee",
      icon: <FaShieldAlt />,
      features: ["Ethical Hacking", "Security Certifications", "Penetration Testing", "Industry Labs"],
      category: "Cybersecurity"
    },
    {
      title: "Blockchain Development",
      description: "Master blockchain technology, smart contracts, and DeFi. Build decentralized applications.",
      duration: "6 months",
      level: "Intermediate",
      // price: "₹49,999",
      // originalPrice: "₹79,999",
      rating: 4.6,
      // students: 800,
      instructor: "Vikram Singh",
      icon: <FaRocket />,
      features: ["Smart Contracts", "DeFi Projects", "NFT Development", "Crypto Trading"],
      category: "Blockchain"
    },
    {
      title: "Digital Marketing & Analytics",
      description: "Learn SEO, SEM, social media marketing, and data analytics. Master growth hacking techniques.",
      duration: "4 months",
      level: "Beginner to Intermediate",
      // price: "₹29,999",
      // originalPrice: "₹49,999",
      rating: 4.7,
      // students: 2200,
      instructor: "Lisa Rodriguez",
      icon: <FaChartLine />,
      features: ["SEO & SEM", "Social Media", "Analytics Tools", "Growth Hacking"],
      category: "Digital Marketing"
    }
  ];

  const categories = ["All", "Web Development", "Data Science", "Cloud & DevOps", "Mobile Development", "Artificial Intelligence", "Cybersecurity", "Blockchain", "Digital Marketing"];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 via-blue-800 to-purple-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Master In-Demand
              <span className="block text-blue-300">Tech Skills</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Choose from our comprehensive range of courses designed by industry experts. 
              Get job-ready with hands-on projects and guaranteed placement support.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="bg-blue-600/30 px-4 py-2 rounded-full">✓ Job Guarantee</span>
              <span className="bg-green-600/30 px-4 py-2 rounded-full">✓ Live Mentorship</span>
              <span className="bg-purple-600/30 px-4 py-2 rounded-full">✓ Industry Projects</span>
              <span className="bg-orange-600/30 px-4 py-2 rounded-full">✓ Lifetime Access</span>
            </div>
          </div>
        </div>
      </section>

      {/* Course Categories */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  category === "All" 
                    ? "bg-blue-600 text-white shadow-lg" 
                    : "bg-gray-100 text-gray-700 hover:bg-blue-100 hover:text-blue-700"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Courses</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive, industry-relevant courses designed to get you job-ready
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
                {/* Course Image Placeholder */}
                <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                  <div className="text-white text-6xl opacity-80">
                    {course.icon}
                  </div>
                </div>

                {/* Course Content */}
                <div className="p-6">
                  {/* Category Badge */}
                  <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full mb-3">
                    {course.category}
                  </span>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{course.title}</h3>

                  {/* Description */}
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">{course.description}</p>

                  {/* Features */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {course.features.map((feature, idx) => (
                      <span key={idx} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* Instructor & Rating */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-gray-300 rounded-full mr-2"></div>
                      <span className="text-sm text-gray-600">{course.instructor}</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-yellow-400">★</span>
                      <span className="text-sm text-gray-600 ml-1">{course.rating}</span>
                    </div>
                  </div>

                  {/* Duration & Students */}
                  <div className="flex justify-between text-sm text-gray-500 mb-4">
                    <span>{course.duration}</span>
                    <span>{course.students} students</span>
                  </div>

                  {/* Price */}
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <span className="text-2xl font-bold text-gray-800">{course.price}</span>
                      <span className="text-sm text-gray-500 line-through ml-2">{course.originalPrice}</span>
                    </div>
                    {/* <span className="text-sm text-green-600 font-semibold">Save 37%</span> */}
                  </div>

                  {/* CTA Button */}
                  <button
                    type="button"
                    onClick={() => {
                      if (!isLoggedIn) return openModal('login');
                      // TODO: navigate to enrollment / purchase flow for logged-in users
                      alert('Enrollment flow for logged-in users');
                    }}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition-colors duration-300"
                  >
                    Enroll Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Why Choose CareerFastrack?</h2>
            <p className="text-xl text-gray-600">We're committed to your success</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaCode className="text-2xl text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Industry Experts</h3>
              <p className="text-gray-600">Learn from professionals with 10+ years of industry experience</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaRocket className="text-2xl text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Job Guarantee</h3>
              <p className="text-gray-600">100% placement assistance with our partner companies</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaChartLine className="text-2xl text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Live Projects</h3>
              <p className="text-gray-600">Work on real-world projects that add value to your portfolio</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaShieldAlt className="text-2xl text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Lifetime Support</h3>
              <p className="text-gray-600">Get lifetime access to course materials and community support</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
