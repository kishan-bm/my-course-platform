import CourseCard from './CourseCard';
// Import some example icons from the library
import { FaCode, FaDatabase, FaCloud } from 'react-icons/fa';

export default function FeaturedCourses() {
  // An array of course data to keep things organized
  const courses = [
    {
      title: "Full-Stack Web Development",
      href: "/courses/full-stack",
      icon: <FaCode />,
    },
    {
      title: "Data Science with Python",
      href: "/courses/data-science",
      icon: <FaDatabase />,
    },
    {
      title: "Cloud Computing & DevOps",
      href: "/courses/cloud-computing",
      icon: <FaCloud />,
    },
  ];

  return (
    <section className="bg-gray-100 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
          Featured Courses
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <CourseCard
              key={course.title}
              title={course.title}
              href={course.href}
              icon={course.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
}