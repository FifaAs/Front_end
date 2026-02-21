export interface Course {
    id: number;
    title: string;
    instructor: string;
    description: string;
}

export const courses: Course[] = [
    {
        id: 1,
        title: "Introduction to React",
        instructor: "Alice Johnson",
        description: "Learn the fundamentals of React including components, props, state, and hooks.",
    },
    {
        id: 2,
        title: "Advanced TypeScript",
        instructor: "Bob Smith",
        description: "Deep dive into TypeScript generics, decorators, and utility types.",
    },
    {
        id: 3,
        title: "CSS & Tailwind Mastery",
        instructor: "Carol White",
        description: "Master modern CSS techniques and the Tailwind CSS framework.",
    },
    {
        id: 4,
        title: "Node.js & Express",
        instructor: "David Brown",
        description: "Build RESTful APIs with Node.js and Express.",
    },
    {
        id: 5,
        title: "React Router v6",
        instructor: "Eva Green",
        description: "Complete guide to React Router v6: nested routes, dynamic segments, loaders.",
    },
];

export function getCourseById(id: number): Course | undefined {
    return courses.find((c) => c.id === id);
}