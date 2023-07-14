import { createClient } from 'next-sanity';

const projectId = process.env.Next_APP_SANITY_PROJECT_ID;
const token = process.env.NEXT_APP_SANITY_TOKEN;
const dataset = 'production';
const apiVersion = '2023-01-01';

export const client = createClient({
  projectId,
  token,
  dataset,
  apiVersion,
  useCdn: true,
  ignoreBrowserTokenWarning: true,
});
