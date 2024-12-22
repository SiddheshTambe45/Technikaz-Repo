// Bloglist.tsx
import BloglistClient from "./bloglistClientSidePart";

type BlogCardStruct = {
  title: string;
  description: string;
  slug: string;
  imageUrl: string;
};

const fetchBlogs = async (type?: string, filter?: string): Promise<BlogCardStruct[]> => {
  const allBlogs: BlogCardStruct[] = [
    { title: "Understanding Next.js", description: "Learn Next.js basics", slug: "understanding-nextjs", imageUrl: "/assets/images/image15.png" },
    { title: "React vs Vue", description: "Compare React and Vue.js", slug: "react-vs-vue", imageUrl: "/assets/images/image15.png" },
    { title: "Advanced TypeScript", description: "Deep dive into TypeScript", slug: "advanced-typescript", imageUrl: "/assets/images/image15.png" },
    { title: "Understanding Next.js", description: "Learn Next.js basics", slug: "understanding-nextjs", imageUrl: "/assets/images/image15.png" },
    { title: "React vs Vue", description: "Compare React and Vue.js", slug: "react-vs-vue", imageUrl: "/assets/images/image15.png" },
    { title: "Advanced TypeScript", description: "Deep dive into TypeScript", slug: "advanced-typescript", imageUrl: "/assets/images/image15.png" },
  ];

  // if (filter === "popular") return allBlogs.slice(0, 2);
  // if (filter === "sidebar") return allBlogs.slice(1);

  return allBlogs;
};

const Bloglist = async ({params}: { params: { type: string , selectedSubType:string } }) => {
  const type = params.type;
  const selectedSubType = params.selectedSubType;
  // Fetch server-side data
  const popularBlogs = await fetchBlogs("homepage", "popular");
  // const sidebarBlogs = await fetchBlogs("homepage", "sidebar");

  // Pass server-side data to the client component
  return (
    <BloglistClient
      initialPopularBlogs={popularBlogs}
      // initialSidebarBlogs={sidebarBlogs}
      type={type}
      selectedSubType={selectedSubType}
    />
  );
};

export default Bloglist;
