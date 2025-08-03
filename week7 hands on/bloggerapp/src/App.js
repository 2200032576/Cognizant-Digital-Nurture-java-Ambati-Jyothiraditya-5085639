import React, { useState } from "react";
import BookDetails from "./BookDetails";
import BlogDetails from "./BlogDetails";
import CourseDetails from "./CourseDetails";

function App() {
  const [selected, setSelected] = useState("book");

  const renderComponent = () => {
    // if-else conditional rendering
    if (selected === "book") return <BookDetails />;
    else if (selected === "blog") return <BlogDetails />;
    else if (selected === "course") return <CourseDetails />;
    else return <p>Select a valid option.</p>;
  };

  const options = [
    { id: "book", label: "Book Details" },
    { id: "blog", label: "Blog Details" },
    { id: "course", label: "Course Details" }
  ];

  return (
    <div>
      <h1>Blogger App</h1>
      <select onChange={(e) => setSelected(e.target.value)} value={selected}>
        {options.map((opt) => (
          <option key={opt.id} value={opt.id}>
            {opt.label}
          </option>
        ))}
      </select>

      <div style={{ marginTop: "20px" }}>
        {/* short-circuit rendering example */}
        {selected && renderComponent()}
      </div>
    </div>
  );
}

export default App;
