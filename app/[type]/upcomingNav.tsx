import BlogCard from "./cardComp";

type BlogCardStruct = {
    title: string;
    description: string;
    slug: string;
    imageUrl: string; // Add image URL property for dynamic image loading
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
    ];

    // Filter blogs based on the `type` parameter if provided
    // if (type) {
    //     return allBlogs.filter((blog) => blog.title.toLowerCase().includes(type.toLowerCase()));
    // }


    return allBlogs;
};

const UpcomingNavBar = async () => {
    const blogs = await fetchBlogs('games','upcoming')

    return (
        <>
            {/* <div className="googleadvertisement "> */}
                {/* <h3>advertisement comes here</h3> */}
            {/* </div> */}
            <div>


            <div>
                <div className="p-0 m-0 border-b-4 b-generic-viridian">
                    <button className="bg-generic-viridian text-white px-6 py-2">Upcomings</button>
                </div>
                <div className="flex flex-row justify-around items-center my-4">
                    {['Games', 'Phone', 'Movies', 'More'].map((e) => (
                        <button type="button" key={e} className="generic-viridian font-bold">
                            <span className={`${e === 'Games' ? 'border-b-4 b-generic-viridian' : ''}`}>
                                {e}
                            </span>
                        </button>
                    ))}
                </div>
            </div>

            <div className="border-2 b-generic-viridian p-2">


                {/* <Ads /> */}
                {/* <TypeSideBar params={{ blogs: sidebarBlogs.slice(1) }} /> */}
            <div className="sidebarblogs  b-generic-viridian p-0">
                <BlogCard blogs={blogs} />
            </div>
            </div>

           

            </div>

            {/* // <div className="googleadvertisement"> */}
                {/* // <h3>advertisement comes here</h3> */}
            {/* // </div> */}

        </>
    )
}

export default UpcomingNavBar