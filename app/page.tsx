import { client } from './lib/sanity';
import { Post } from './lib/Interface';

const getData = async () => {
  try {
    const query = `*[_type == 'post']`;
    const data = await client.fetch(query);
    return data;
  } catch (error) {
    console.log(error);
  }
};
export default async function IndexPage() {
  const data = (await getData()) as Post[];
  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl">
            all posts
          </h1>
        </div>
      </div>
    </>
  );
}
