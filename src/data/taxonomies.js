import __taxonomies from './jsons/__taxonomies.json';

const DEMO_CATEGORIES = __taxonomies.map((item) => ({
  ...item,
  taxonomy: 'category'
}));

const DEMO_TAGS = __taxonomies.map((item) => ({
  ...item,
  taxonomy: 'tag'
}));

export { DEMO_CATEGORIES, DEMO_TAGS };
