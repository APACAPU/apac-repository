import Post from "../components/Post";
import Banner from "../components/Banner";
import search from "../search.json";
import { useRouter } from "next/router";

export default function Search() {
  const { query } = useRouter();
  const TempPosts = [];

  search.map((post) => {
    if (post.frontmatter.status === false) {
      let categories = post.frontmatter.categories;
      let string = categories.join(", ");

      if (
        post.frontmatter.title.toLowerCase().includes(query.q) ||
        post.frontmatter.metaDesc.toLowerCase().includes(query.q) ||
        string.toLowerCase().includes(query.q)
      ) {
        TempPosts.push(post);
      } else {
        TempPosts.push(null);
      }
    }
  });

  //   remove null in posts
  const posts = TempPosts.filter((path) => {
    return path && path;
  });

  return (
    <div>
      <Banner />
      <div className="container">
        <div className="row">
          {posts.length > 0 ? (
            posts.map((post, index) => (
              <div className="col-lg-4">
                <Post key={index} post={post} />
              </div>
            ))
          ) : (
            <div className="m-auto p-5 mx-5 ">
              <h2 className="text-center">
                {query.q
                  ? `Couldn't find any post about ${query.q} `
                  : "Loading.. "}
              </h2>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
