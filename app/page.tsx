import Link from 'next/link';
import { Post } from './lib/Interface';
import { client } from './lib/sanity';
// import Loading from './Loading';

async function getData() {
  const query = `*[_type == "post"]`;

  const data = await client.fetch(query);

  return data;
}

export default async function IndexPage() {
  const data = (await getData()) as Post[];

  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-700">
      <div className="space-y-2 pt-6 pb-8 md:space-y-5">
        <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
          All Posts
        </h1>
        {/* <Loading /> */}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 ">
        {data.map((post) => (
          <div
            key={post._id}
            className="bg-white dark:bg-gray-800 p-4 rounded-md shadow-md lg:w-72 my-5 md:me-4"
          >
            <p className="text-base font-medium leading-6 text-teal-500 mb-2">
              {new Date(post._createdAt).toISOString().split('T')[0]}
            </p>
            <Link href={`/post/${post.slug.current}`} prefetch>
              <h3 className="text-xl font-bold leading-8 tracking-tight text-gray-900 dark:text-gray-100 mb-2">
                {post.title}
              </h3>
              <p className="text-gray-500 dark:text-gray-400 line-clamp-2">
                {post.overview}
              </p>
            </Link>
            <Link href={`/post/${post.slug.current}`} prefetch>
              <button className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white  rounded-lg bg-teal-500 hover:bg-teal-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-gray-600  dark:hover:bg-gray-700 dark:focus:ring-blue-800 mt-5">
                Read More
                <svg
                  className="w-3.5 h-3.5 ml-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
