import React from "react";

function CourseDetails() {
  const courses = [
    { id: 1, name: "React Fundamentals", duration: "4 weeks" },
    { id: 2, name: "Advanced React", duration: "6 weeks" }
  ];

  return (
    <div>
      <h2>Course Details</h2>
      {courses.length > 0 ? (
        <ul>
          {courses.map((course) => (
            <li key={course.id}>
              {course.name} - {course.duration}
            </li>
          ))}
        </ul>
      ) : (
        <p>No courses available</p>
      )}
    </div>
  );
}

export default CourseDetails;
