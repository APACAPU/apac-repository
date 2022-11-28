// import Link from "next/link";
// import Search from "../search.json";
// import { slugify } from "../utils";

export default function Sidebar() {
  return (
    <div className="col-lg-12 mb-2">
      <div className="card mb-12 mb-2">
        <div className="card-header">Categories</div>
        <div className="card-body">
          <div className="row">
            <div className="col-sm-0">
              <a href="/category/next" class="btn">
                Next
              </a>
              <a href="/category/react" class="btn">
                React
              </a>
              {/* {Search?.map((post) => {
                return post.frontmatter.categories.map((item) => {
                  const slug = slugify(item);
                  return (
                    <Link key={item} href={`/category/${slug}`}>
                      <button className="btn"> {item} </button>
                    </Link>
                  );
                });
              })} */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
