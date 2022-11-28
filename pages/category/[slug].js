import fs from "fs";
import matter from "gray-matter";
import { slugify } from "../../utils";
import ItemPost from "../../components/ItemPost";

export async function getStaticPaths() {
  const files = fs.readdirSync("posts");

  let tempStorage = [];

  const temppaths = files.map((filename) => {
    const markdownWithMeta = fs.readFileSync(`posts/${filename}`, "utf-8");

    const { data: frontmatter } = matter(markdownWithMeta);

    if (frontmatter.status === false) {
      // get all category
      frontmatter.categories.map((category) => {
        // convert category into slug
        let slug = slugify(category);
        tempStorage.push({ params: { slug } });
      });
    } else {
      return null;
    }
  });

  const paths = tempStorage.filter((item, index) => {
    return tempStorage.indexOf(item) === index;
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  // Get files from the posts dir
  const files = fs.readdirSync("posts");

  let tempStorage = [];

  // Get slug and frontmatter from posts
  const tempPosts = files.map((filename) => {
    // Get frontmatter
    const markdownWithMeta = fs.readFileSync(`posts/${filename}`, "utf-8");

    const { data: frontmatter } = matter(markdownWithMeta);

    // get publish post
    if (frontmatter.status === false) {
      frontmatter.categories.map((category) => {
        let categroySlug = slugify(category);
        if (slug === categroySlug) {
          tempStorage.push({ post: frontmatter });
        }
      });
    } else {
      return null;
    }
  });

  //  remove null in tempPosts
  const posts = tempStorage.filter((post) => {
    return post && post;
  });
  return { props: { posts } };
}

export default function Category({ posts }) {
  return (
    <div className="container my-3">
      <div className="row">
        <div className="col-lg-4 post-date m-1 p-2m-auto">
          {posts.map((post, index) => {
            return <ItemPost key={index} post={post} />;
          })}
        </div>
      </div>
    </div>
  );
}
