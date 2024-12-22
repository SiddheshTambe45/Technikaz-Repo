"use client";

import React, { useState, useEffect } from "react";
import BlogCard from "./cardComp";
import Upcomings from "@/components/Upcomings";

type BlogCardStruct = {
    title: string;
    description: string;
    slug: string;
    imageUrl: string;
};

const fetchBlogs = async (type?: string, section?: string): Promise<BlogCardStruct[]> => {
    // Mock API fetching (replace with real API in production)
    const allBlogs: BlogCardStruct[] = [
        { title: "Understanding Next.js", description: "Learn Next.js basics", slug: "understanding-nextjs", imageUrl: "/assets/images/image15.png" },
        { title: "React vs Vue", description: "Compare React and Vue.js", slug: "react-vs-vue", imageUrl: "/assets/images/image15.png" },
        { title: "Advanced TypeScript", description: "Deep dive into TypeScript", slug: "advanced-typescript", imageUrl: "/assets/images/image15.png" },
    ];

    if (section === "popular") return allBlogs.slice(0, 2);
    if (section === "recent") return allBlogs.slice(1, 3);
    if (section === "upcoming") return allBlogs.slice(2, 3);

    return allBlogs;
};

const BloglistClient = ({
    initialPopularBlogs,
    type,
    selectedSubType
    // initialSidebarBlogs,
}: {
        initialPopularBlogs: BlogCardStruct[],
        type: string,
        selectedSubType : string
    // initialSidebarBlogs: BlogCardStruct[];
    }) => {
    
    // const type = type;
    // const selectedSubType = selectedSubType;

    const [activeSection, setActiveSection] = useState<string>("popular");
    const [displayedBlogs, setDisplayedBlogs] = useState<BlogCardStruct[]>(initialPopularBlogs);



    useEffect(() => {
        // Fetch blogs based on the active section
        const fetchSectionBlogs = async () => {
            const blogs = await fetchBlogs("homepage", activeSection);
            setDisplayedBlogs(blogs);
        };

        fetchSectionBlogs();
    }, [activeSection]);

    return (
        <section className="popular-recent mt-10 lg:grid lg:grid-cols-3">
            {/* Main Blogs */}
            <section className="lg:col-span-2 px-3">
                <div className="border border-y-2 border-x-0 border-black flex flex-row gap-8 my-4 py-2">
                    {["popular", "recent", "upcoming"].map((section) => (
                        <button
                            key={section}
                            type="button"
                            className={`h6 generic-viridian font-bold ${activeSection === section ? "border-b-4 b-generic-viridian" : ""
                                }`}
                            onClick={() => setActiveSection(section)}
                        >
                            {section.charAt(0).toUpperCase() + section.slice(1)}
                        </button>
                    ))}
                </div>
                {displayedBlogs.length > 0 ? (
                    <BlogCard blogs={displayedBlogs} />
                ) : (
                    <p className="text-gray-600">No blogs found for this section.</p>
                )}
            </section>

            {/* Sidebar Blogs */}
            <section className="lg:col-span-1 px-3">
                {/* <div className="border-gray-400 border w-full h-[230px] my-4"></div> */}
                {/* {initialSidebarBlogs.length > 0 ? ( */}
                    {/* // <UpcomingNavBar initialBlogs={initialSidebarBlogs} /> */}
                    <Upcomings initialCategory="Games" />
                {/* ) : ( */}
                    {/* <p className="text-gray-600">No sidebar blogs found.</p> */}
                {/* )} */}
                {/* <div className="border-gray-400 border w-full h-[230px] my-4"></div> */}
            </section>
        </section>
    );
};

export default BloglistClient;
