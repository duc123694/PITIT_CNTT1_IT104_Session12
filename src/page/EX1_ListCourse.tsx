import React from "react";

interface Course {
  id: number;
  title: string;
  description: string;
  image: string;
}

const courses: Course[] = [
  {
    id: 1,
    title: "React Cơ Bản",
    description: "Học cách tạo component, JSX, props và state.",
    image: "https://via.placeholder.com/200x120?text=React+Basic",
  },
  {
    id: 2,
    title: "TypeScript + React",
    description: "Nắm vững TypeScript khi làm việc với React.",
    image: "https://via.placeholder.com/200x120?text=TS+React",
  },
  {
    id: 3,
    title: "Redux Cơ Bản",
    description: "Quản lý state với Redux, áp dụng trong dự án thực tế.",
    image: "https://via.placeholder.com/200x120?text=Redux",
  },
];

const  EX1_ListCourse: React.FC = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Danh sách khóa học</h2>
      <div style={{ display: "flex", gap: "20px" }}>
        {courses.map((course) => (
          <div
            key={course.id}
            style={{
              border: "1px solid #ccc",
              borderRadius: "8px",
              padding: "10px",
              width: "220px",
              textAlign: "center",
            }}
          >
            <img src={course.image} alt={course.title} style={{ width: "100%", borderRadius: "4px" }} />
            <h3>{course.title}</h3>
            <p>{course.description}</p>
            <button style={{ background: "blue", color: "white", padding: "6px 12px", border: "none", borderRadius: "4px" }}>
              Đăng ký
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EX1_ListCourse;
