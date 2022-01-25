// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Home, Gender } = initSchema(schema);

export {
  Home,
  Gender
};