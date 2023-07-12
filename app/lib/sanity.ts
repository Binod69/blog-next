import { createClient } from 'next-sanity';

const projectId = process.env.Next_APP_SANITY_PROJECT_ID;
const dataset = 'production';
const apiVersion = '2021-10-21';

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
});
