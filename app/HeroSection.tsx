import Link from "next/link";
import Image from "next/image";
import axios from "axios";
// import axiosInstance from '@/lib/HelperFns/axiosInstance'

type BlogCardStruct = {
  title: string;
  description: string;
  slug: string;
  imageUrl: string;
  category: string;
};

interface BlogData {
  attributes: {
    Title: string;
    Description?: string;
    Slug: string;
    FeaturedImage?: {
      data?: {
        attributes?: {
          formats?: {
            medium?: {
              url?: string;
            };
          };
        };
      };
    };
    category?: string;
  };
}

// const fetchBlogs = async (): Promise<BlogCardStruct[]> => {
//   // Mock fetching blog data (replace with actual API call in production)
//   const allBlogs: BlogCardStruct[] = [
//     {
//       title: 'Understanding Next.js sdfdfdfdmfd df df dfd fd fd fd fd fdf df df d fd fd fd fd d',
//       description: 'Learn Next.js basics d ',
//       slug: 'understanding-nextjsd understanding-nextjsd understanding-nextjsd understanding-nextjsd understanding-nextjsd understanding-nextjsd overflow-hidden overflow-hidden overflow-hidden overflow-hidden overflow-hidden overflow-hidden overflow-hidden overflow-hidden overflow-hidden overflow-hiddenoverflow-hiddenoverflow-hiddenoverflow-hidden overflow-hidden overflow-hidden overflow-hidden overflow-hidden overflow-hidden overflow-hidden overflow-hidden',
//       imageUrl: '/assets/images/image15.png',
//       category: 'games',
//     },
//     {
//       title: 'Understanding Next.js sdfdfdfdmfd df df dfd fd fd fd fd fdf df df d fd fd fd fd ',
//       description: 'Learn Next.js basics',
//       slug: 'understanding-nextjs',
//       imageUrl: '/assets/images/image15.png',
//       category: 'games',
//     },
//     {
//       title: 'React vs Vue sdfdfdfdmfd df df dfd fd fd fd fd fdf df df d fd fd fd fd ',
//       description: 'Compare React and Vue.js',
//       slug: 'react-vs-vue2',
//       imageUrl: '/assets/images/image15.png',
//       category: 'games',
//     },
//     {
//       title: 'Advanced TypeScript sdfdfdfdmfd df df dfd fd fd fd fd fdf df df d fd fd fd fd ',
//       description: 'Deep dive into TypeScript',
//       slug: 'advanced-typescript2',
//       imageUrl: '/assets/images/image15.png',
//       category: 'games',
//     },
//     {
//       title: 'React vs Vue sdfdfdfdmfd df df dfd fd fd fd fd fdf df df d fd fd fd fd ',
//       description: 'Compare React and Vue.js',
//       slug: 'react-vs-vue',
//       imageUrl: '/assets/images/image15.png',
//       category: 'games',
//     },
//     {
//       title: 'Advanced TypeScript sdfdfdfdmfd df df dfd fd fd fd fd fdf df df d fd fd fd fd ',
//       description: 'Deep dive into TypeScript',
//       slug: 'advanced-typescript',
//       imageUrl: '/assets/images/image15.png',
//       category: 'games',
//     },
//     // { title: 'Advanced TypeScript sdfdfdfdmfd df df dfd fd fd fd fd fdf df df d fd fd fd fd ', description: 'Deep dive into TypeScript', slug: 'advanced-typescriptv', imageUrl: "/assets/images/image15.png" },
//   ]

//   // Filter blogs based on the `type` parameter if provided
//   // if (type) {
//   //     return allBlogs.filter((blog) => blog.title.toLowerCase().includes(type.toLowerCase()));
//   // }

//   return allBlogs
// }

// Function to fetch new blogs

// const allBlogs: BlogCardStruct[] = [
//   {
//     title:
//       "Understanding Next.js sdfdfdfdmfd df df dfd fd fd fd fd fdf df df d fd fd fd fd d",
//     description: "Learn Next.js basics d ",
//     slug: "understanding-nextjsd understanding-nextjsd understanding-nextjsd understanding-nextjsd understanding-nextjsd understanding-nextjsd overflow-hidden overflow-hidden overflow-hidden overflow-hidden overflow-hidden overflow-hidden overflow-hidden overflow-hidden overflow-hidden overflow-hiddenoverflow-hiddenoverflow-hiddenoverflow-hidden overflow-hidden overflow-hidden overflow-hidden overflow-hidden overflow-hidden overflow-hidden overflow-hidden",
//     imageUrl: "/assets/images/image15.png",
//     category: "games",
//   },
//   {
//     title:
//       "Understanding Next.js sdfdfdfdmfd df df dfd fd fd fd fd fdf df df d fd fd fd fd ",
//     description: "Learn Next.js basics",
//     slug: "understanding-nextjs",
//     imageUrl: "/assets/images/image15.png",
//     category: "games",
//   },
//   {
//     title:
//       "React vs Vue sdfdfdfdmfd df df dfd fd fd fd fd fdf df df d fd fd fd fd ",
//     description: "Compare React and Vue.js",
//     slug: "react-vs-vue2",
//     imageUrl: "/assets/images/image15.png",
//     category: "games",
//   },
//   {
//     title:
//       "Advanced TypeScript sdfdfdfdmfd df df dfd fd fd fd fd fdf df df d fd fd fd fd ",
//     description: "Deep dive into TypeScript",
//     slug: "advanced-typescript2",
//     imageUrl: "/assets/images/image15.png",
//     category: "games",
//   },
//   {
//     title:
//       "React vs Vue sdfdfdfdmfd df df dfd fd fd fd fd fdf df df d fd fd fd fd ",
//     description: "Compare React and Vue.js",
//     slug: "react-vs-vue",
//     imageUrl: "/assets/images/image15.png",
//     category: "games",
//   },
//   {
//     title:
//       "Advanced TypeScript sdfdfdfdmfd df df dfd fd fd fd fd fdf df df d fd fd fd fd ",
//     description: "Deep dive into TypeScript",
//     slug: "advanced-typescript",
//     imageUrl: "/assets/images/image15.png",
//     category: "games",
//   },
//   // { title: 'Advanced TypeScript sdfdfdfdmfd df df dfd fd fd fd fd fdf df df d fd fd fd fd ', description: 'Deep dive into TypeScript', slug: 'advanced-typescriptv', imageUrl: "/assets/images/image15.png" },
// ];

/*
const fetchBlogs = async (): Promise<BlogCardStruct[]> => {
  const res = await axios.get(
    "https://technikaz-strapi-backend-ae717b9babac.herokuapp.com/api/landing-page-info-blocks?populate=deep&filters[isFeatured][$eq]=true&filters[featuredType][$eq]=Featured 1&pagination[pageSize]=1"
  ); // Replace with your API URL

  // const newBlogs = res.data.data.map((item: any) => ({
  //   title: item.attributes.Title,
  //   description: item.attributes.Description || "",
  //   slug: item.attributes.Slug,
  //   imageUrl:
  //     item.attributes.FeaturedImage?.data?.attributes?.formats?.medium?.url ||
  //     "",
  //   category: item.attributes.category,
  // }));

  const newBlogs = res.data.data.map((item: unknown) => {
    // Check if item is an object and has the expected structure
    if (
      typeof item === "object" &&
      item !== null &&
      "attributes" in item &&
      typeof item.attributes === "object" &&
      item.attributes !== null &&
      "Title" in item.attributes &&
      "Slug" in item.attributes
    ) {
      const attributes = item.attributes as {
        Title: string;
        Description?: string;
        Slug: string;
        FeaturedImage?: {
          data?: {
            attributes?: {
              formats?: {
                medium?: {
                  url?: string;
                };
              };
            };
          };
        };
        category?: string;
      };

      return {
        title: attributes.Title,
        description: attributes.Description || "",
        slug: attributes.Slug,
        imageUrl:
          attributes.FeaturedImage?.data?.attributes?.formats?.medium?.url ||
          "",
        category: attributes.category || "",
      };
    }

    // If the structure is unexpected, throw an error
    throw new Error("Unexpected data structure");
  });

  const res2 = await axios.get(
    "https://technikaz-strapi-backend-ae717b9babac.herokuapp.com/api/landing-page-info-blocks?filters[isFeatured][$eq]=true&filters[featuredType][$eq]=Featured 2&pagination[pageSize]=1"
  );

  const newBlogs2 = res2.data.data.map((item: unknown) => {
    // Check if item is an object and has the expected structure
    if (
      typeof item === "object" &&
      item !== null &&
      "attributes" in item &&
      typeof item.attributes === "object" &&
      item.attributes !== null &&
      "Title" in item.attributes &&
      "Slug" in item.attributes
    ) {
      const attributes = item.attributes as {
        Title: string;
        Description?: string;
        Slug: string;
        FeaturedImage?: {
          data?: {
            attributes?: {
              formats?: {
                medium?: {
                  url?: string;
                };
              };
            };
          };
        };
        category?: string;
      };

      return {
        title: attributes.Title,
        description: attributes.Description || "",
        slug: attributes.Slug,
        imageUrl:
          attributes.FeaturedImage?.data?.attributes?.formats?.medium?.url ||
          "",
        category: attributes.category || "",
      };
    }

    // If the structure is unexpected, throw an error
    throw new Error("Unexpected data structure");
  });

  const res3 = await axios.get(
    "https:technikaz-strapi-backend-ae717b9babac.herokuapp.com/api/landing-page-info-blocks?filters[isFeatured][$eq]=true&filters[featuredType][$eq]=normal&pagination[pageSize]=1"
  );

  const newBlogs3 = res3.data.data.map((item: unknown) => {
    // Check if item is an object and has the expected structure
    if (
      typeof item === "object" &&
      item !== null &&
      "attributes" in item &&
      typeof item.attributes === "object" &&
      item.attributes !== null &&
      "Title" in item.attributes &&
      "Slug" in item.attributes
    ) {
      const attributes = item.attributes as {
        Title: string;
        Description?: string;
        Slug: string;
        FeaturedImage?: {
          data?: {
            attributes?: {
              formats?: {
                medium?: {
                  url?: string;
                };
              };
            };
          };
        };
        category?: string;
      };

      return {
        title: attributes.Title,
        description: attributes.Description || "",
        slug: attributes.Slug,
        imageUrl:
          attributes.FeaturedImage?.data?.attributes?.formats?.medium?.url ||
          "",
        category: attributes.category || "",
      };
    }

    // If the structure is unexpected, throw an error
    throw new Error("Unexpected data structure");
  });

  // Use newBlogs for the top-left blog and oldBlogs for the rest
  return [newBlogs[0], newBlogs2[0], ...newBlogs3.slice(1)];
};
*/

const fetchBlogs = async (): Promise<BlogCardStruct[]> => {
  // Helper function to parse blog data
  const parseBlogs = (data: BlogData[]): BlogCardStruct[] => {
    return data.map((item) => {
      const {
        Title,
        Description = "",
        Slug,
        FeaturedImage,
        category = "",
      } = item.attributes;

      return {
        title: Title,
        description: Description,
        slug: Slug,
        imageUrl: FeaturedImage?.data?.attributes?.formats?.medium?.url || "",
        category,
      };
    });
  };

  try {
    const urls = [
      "https://technikaz-strapi-backend-ae717b9babac.herokuapp.com/api/landing-page-info-blocks?populate=deep&filters[isFeatured][$eq]=true&filters[featuredType][$eq]=Featured%201&pagination[pageSize]=1",
      "https://technikaz-strapi-backend-ae717b9babac.herokuapp.com/api/landing-page-info-blocks?filters[isFeatured][$eq]=true&filters[featuredType][$eq]=Featured%202&pagination[pageSize]=1",
      "https://technikaz-strapi-backend-ae717b9babac.herokuapp.com/api/landing-page-info-blocks?filters[isFeatured][$eq]=true&filters[featuredType][$eq]=normal&pagination[pageSize]=1",
    ];

    // Fetch all responses in parallel
    const responses = await Promise.all(
      urls.map((url) => axios.get<{ data: BlogData[] }>(url))
    );

    // Parse each response data using the helper function
    const [featured1, featured2, normal] = responses.map((res) =>
      parseBlogs(res.data.data)
    );

    // Combine results as needed
    return [featured1[0], featured2[0], ...normal];
  } catch (error) {
    console.error("Error fetching blogs:", error);
    throw new Error("Failed to fetch blog data");
  }
};
const HomepageHeroSection = async () => {
  // const type = params.type
  const blogs = await fetchBlogs();

  // console.log(blogs);

  // console.log(blogs);

  const firstTwoBlogs = blogs.slice(0, 2);

  // console.log(firstTwoBlogs);

  const remainingBlogs = blogs.slice(2);

  return (
    <div className="hero-section featured-blogs w-full p-3">
      {/* First two cards */}
      <div className="featured-blogs-upper grid grid-cols-1 lg:grid-cols-3 gap-4 h-auto">
        {/* First card with 16:9 aspect ratio */}
        <Link
          href={`/${firstTwoBlogs[0].category}/${firstTwoBlogs[0]?.slug}`}
          className="p-0 m-0 col-span-2 flex flex-col items-start"
          style={{ flex: "0 0 70%" }}
        >
          <div className="relative h-[400px] w-full">
            <div className="relative w-full h-full aspect-[16/9]">
              <Image
                src={
                  firstTwoBlogs[0].imageUrl
                    ? firstTwoBlogs[0].imageUrl
                    : "/assets/images/image15.png"
                }
                alt={firstTwoBlogs[0]?.title}
                fill
                className="rounded-t-lg object-cover rounded-lg"
              />
            </div>
          </div>
          <p className="mt-2 text-left text-lg font-semibold leading-tight">
            {firstTwoBlogs[0]?.slug}
          </p>
          {/* <p className="text-gray-600">{firstTwoBlogs[0]?.description}</p> */}
        </Link>

        {/* Second card with 1:1 aspect ratio */}
        <div className="col-span-1 flex flex-col items-start">
          <Link
            className="relative w-full h-[400px]"
            href={`/${firstTwoBlogs[1].category}/${firstTwoBlogs[1]?.slug}`}
          >
            <Image
              src={
                firstTwoBlogs[1].imageUrl
                  ? firstTwoBlogs[1].imageUrl
                  : "/assets/images/image16.png"
              }
              alt={firstTwoBlogs[1]?.title}
              fill
              className="object-cover object-right rounded-lg"
            />
          </Link>
          <p className="mt-2 text-left text-lg font-semibold">
            {firstTwoBlogs[1]?.slug}
          </p>
        </div>
      </div>

      {/* Remaining blogs */}
      <div className="featured-blogs-lower grid grid-cols-1 lg:grid-cols-4 gap-4 mt-10">
        {remainingBlogs.map((blog) => (
          <Link
            key={blog.slug}
            href={`/${blog.category}/${blog.slug}`}
            className="flex flex-col items-start p-0 m-0"
          >
            <div className="relative w-full aspect-[16/9]">
              <Image
                src={
                  blog.imageUrl ? blog.imageUrl : "/assets/images/image15.png"
                }
                alt={blog.title}
                fill
                objectFit="cover"
                className="object-cover rounded-lg"
              />
            </div>
            {/* <div className="p-4"> */}
            <p className="mt-2 text-left text-lg font-semibold">{blog.slug}</p>
            {/* <p className="text-gray-600">{blog.description}</p> */}
            {/* </div> */}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HomepageHeroSection;
