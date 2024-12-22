import Image from 'next/image';
import React from 'react';

type BlogData = {
    title: string;
    author: string;
    date: string;
    time: string;
    image: string;
    content: string;
};

type SingleBlogPageProps = {
    params: {
        blogData: BlogData;
    };
};

const SingleBlogPage = ({ params: { blogData } }: SingleBlogPageProps) => {
    const { title, author, date, time, image, content } = blogData;

    return (
        <>
            <h4 className="h4 font-bold heading-font">{title}</h4>
            <p className="my-3">
                By<span className="underline generic-viridian"> {author} </span>
                {date} at {time}
            </p>

            <div className="w-full flex flex-col items-start">
                <div className="relative w-full aspect-[16/9]">
                    <Image src={image} alt="blog image" fill className="object-cover" />
                </div>
            </div>

            <p className="my-10">{content}</p>

            <div className="w-full flex flex-col items-start">
                <div className="relative w-full aspect-[16/9]">
                    <Image src={image} alt="blog image" fill className="object-cover" />
                </div>
            </div>

            <p className="my-10">{content}</p>

            <hr className="border border-gray-500" />
        </>
    );
};

export default SingleBlogPage;
