// import Link from 'next/link';
// import { Post } from './lib/Interface';
// import { client } from './lib/sanity';

// async function getData() {
//   const query = `*[_type == "post"]`;

//   const data = await client.fetch(query);

//   return data;
// }

// export default async function IndexPage() {
//   const data = (await getData()) as Post[];

//   return (
//     <div className="divide-y divide-gray-200 dark:divide-gray-700">
//       <div className="space-y-2 pt-6 pb-8 md:space-y-5">
//         <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
//           All Posts
//         </h1>
//       </div>

//       <ul>
//         {data.map((post) => (
//           <li key={post._id} className="py-4">
//             <article className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
//               <div>
//                 <p className="text-base font-medium leading-6 text-teal-500">
//                   {new Date(post._createdAt).toISOString().split('T')[0]}
//                 </p>
//               </div>

//               <Link
//                 href={`/post/${post.slug.current}`}
//                 prefetch
//                 className="space-y-3 xl:col-span-3"
//               >
//                 <div>
//                   <h3 className="text-2xl font-bold leading-8 tracking-tight text-gray-900 dark:text-gray-100">
//                     {post.title}
//                   </h3>
//                 </div>

//                 <p className="prose max-w-none text-gray-500 dark:text-gray-400 line-clamp-2">
//                   {post.overview}
//                 </p>
//               </Link>
//             </article>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

import Link from 'next/link';
import Image from 'next/image';
import { Post } from './lib/Interface';
import { client } from './lib/sanity';

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
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 ">
        {data.map((post) => (
          <div
            key={post._id}
            className="bg-white dark:bg-gray-800 p-4 rounded-md shadow-md lg:w-72 my-5"
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
          </div>
        ))}
      </div>
    </div>
  );
}
