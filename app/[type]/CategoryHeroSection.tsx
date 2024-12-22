import Link from "next/link";
import Image from "next/image";
import imgrec from "./Untitled.jpg";

type BlogCardStruct = {
    title: string;
    description: string;
    slug: string;
    imageUrl: string;
};

const fetchBlogs = async (type?: string, filter?: string): Promise<BlogCardStruct[]> => {
    // Mock fetching blog data (replace with actual API call in production)
    const allBlogs: BlogCardStruct[] = [
        { title: 'Understanding Next.js sdfdfdfdmfd df df dfd fd fd fd fd fdf df df d fd fd fd fd d', description: 'Learn Next.js basics d ', slug: 'understanding-nextjsd', imageUrl: "/assets/images/image15.png" },
        { title: 'Understanding Next.js sdfdfdfdmfd df df dfd fd fd fd fd fdf df df d fd fd fd fd ', description: 'Learn Next.js basics', slug: 'understanding-nextjs', imageUrl: "/assets/images/image15.png" },
        { title: 'React vs Vue sdfdfdfdmfd df df dfd fd fd fd fd fdf df df d fd fd fd fd ', description: 'Compare React and Vue.js', slug: 'react-vs-vue2', imageUrl: "/assets/images/image15.png" },
        { title: 'Advanced TypeScript sdfdfdfdmfd df df dfd fd fd fd fd fdf df df d fd fd fd fd ', description: 'Deep dive into TypeScript', slug: 'advanced-typescript2', imageUrl: "/assets/images/image15.png" },
        { title: 'React vs Vue sdfdfdfdmfd df df dfd fd fd fd fd fdf df df d fd fd fd fd ', description: 'Compare React and Vue.js', slug: 'react-vs-vue', imageUrl: "/assets/images/image15.png" },
        { title: 'Advanced TypeScript sdfdfdfdmfd df df dfd fd fd fd fd fdf df df d fd fd fd fd ', description: 'Deep dive into TypeScript', slug: 'advanced-typescript', imageUrl: "/assets/images/image15.png" },
        { title: 'Advanced TypeScript sdfdfdfdmfd df df dfd fd fd fd fd fdf df df d fd fd fd fd ', description: 'Deep dive into TypeScript', slug: 'advanced-typescriptv', imageUrl: "/assets/images/image15.png" },
    ];

    // Filter blogs based on the `type` parameter if provided
    // if (type) {
    //     return allBlogs.filter((blog) => blog.title.toLowerCase().includes(type.toLowerCase()));
    // }
    if (filter === "sidebar") {
        return allBlogs.slice(1)
    }

    return allBlogs;
};

const CategoryHeroSection = async ({ params }: { params: { type: string , selectedSubType:string } }) => {
    const type = params.type
    const selectedSubType = params.selectedSubType;
    const blogs = await fetchBlogs(params.type, 'popular');

    const firstTwoBlogs = blogs.slice(0, 3);
    const remainingBlogs = blogs.slice(3);

    return (
        <div className="hero-section featured-blogs w-full p-3">
            {/* First two cards */}
            <div className="featured-blogs-upper grid grid-cols-1 lg:grid-cols-3 gap-4 h-auto">
                {/* {selectedSubType} */}
                {/* First card with 16:9 aspect ratio */}
                <Link
                    href={`/blogs/${firstTwoBlogs[0]?.slug}`}
                    className="p-0 m-0 col-span-2 flex flex-col items-start"
                    style={{ flex: "0 0 70%" }}
                >
                    <div className="relative  w-full">
                    <div className="relative w-full h-full aspect-[16/9]" >
                        <Image
                                src="/assets/images/image15.png"
                            alt={firstTwoBlogs[0]?.title}
                            layout="fill"
                            objectFit="cover"
                            className="rounded-t-lg"
                        />
                    </div>
                    </div>
                    <p className="mt-2 text-left text-lg font-semibold leading-tight h-5 overflow-hidden">{firstTwoBlogs[0]?.title}</p>
                        {/* <p className="text-gray-600">{firstTwoBlogs[0]?.description}</p> */}
                </Link>

                {/* Second card with 1:1 aspect ratio */}
                <div className="lg:col-span-1 gird grid-cols-1 items-start gap-4">
                    <Link
                        href={`/blogs/${firstTwoBlogs[1]?.slug}`}
                        className="flex flex-col items-start p-0 mt-5  lg:mx-4 lg:m-0"
                    // style={{ flex: "0 0 30%" }}
                    >
                        <div className="relative w-full aspect-[16/9]" >
                            <Image
                                src="/assets/images/image16.png"
                                alt={firstTwoBlogs[1]?.title}
                                layout="fill"
                                objectFit="cover"
                                className="object-cover"
                            />
                        </div>
                        {/* <div className="flex-grow flex flex-col p-4"> */}
                        <p className="mt-2 lg:mt-1 text-left text-xl lg:text-sm font-semibold">{firstTwoBlogs[1]?.title}</p>
                        {/* <p className="text-gray-600">{firstTwoBlogs[1]?.description}</p> */}
                        {/* </div> */}
                    </Link>
                    <Link
                        href={`/blogs/${firstTwoBlogs[2]?.slug}`}
                        className="flex flex-col items-start p-0 mt-5  lg:mx-4 lg:m-0"
                   
                    >
                        <div className="relative w-full aspect-[16/9]" >
                            <Image
                                src="/assets/images/image16.png"
                                alt={firstTwoBlogs[1]?.title}
                                layout="fill"
                                objectFit="cover"
                                className="object-cover"
                            />
                        </div>
                        
                        <p className="mt-2 lg:mt-1 text-left text-xl lg:text-sm font-semibold">{firstTwoBlogs[1]?.title}</p>
                        
                    </Link>

        </div>
            </div>

            {/* Remaining blogs */}
            <div className="featured-blogs-lower grid grid-cols-1 lg:grid-cols-4 gap-4 lg:mt-10 mt-5">
                {remainingBlogs.map((blog) => (
                    <Link
                        key={blog.slug}
                        href={`/blogs/${blog.slug}`}
                        className="flex flex-col items-start p-0 m-0"
                    >
                        <div className="relative w-full aspect-[16/9]">
                            <Image
                                src={blog.imageUrl}
                                alt={blog.title}
                                layout="fill"
                                objectFit="cover"
                                className="object-cover"
                            />
                        </div>
                        {/* <div className="p-4"> */}
                            <p className="mt-2 text-left text-lg font-semibold">{blog.title}</p>
                            {/* <p className="text-gray-600">{blog.description}</p> */}
                        {/* </div> */}
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default CategoryHeroSection;
