// Create interface Post:
export interface PostInterface {
  title: string;
  mainImage: {
    _type: string;
    asset: { _ref: string; _type: string };
  };
  summary: string;
  publishedAt: string;
  categories: any;
}
