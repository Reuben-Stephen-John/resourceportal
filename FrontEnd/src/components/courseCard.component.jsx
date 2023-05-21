import { Link } from "react-router-dom";

const CourseCard = ({ courseCode, courseTitle, courseId }) => {
  return (
    <Link to={`/courses/coursePage/${courseId}`} className="">
      <div
        className="transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-80 hover:bg-violet-100 duration-50 sm:max-w-xs px-4 py-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
      >
        <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
          {courseTitle}
        </h5>
        <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
          {courseCode}
        </p>
      </div>
    </Link>
  );
};

export default CourseCard;
