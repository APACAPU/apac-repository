import Link from "next/link";
import Image from "next/image";
import { slugify } from "../utils";

export default function ItemPost({ post: { post } }) {
  return (
    <div>
      <div className="card mb-4">
        <a href={`/posts/${post.slug}`}>
          <Image
            className="card-img-top"
            width={400}
            height={235}
            alt={post.title}
            src={`/${post.socialImage}`}
          />
        </a>
        <div className="card-body">
          <div className="small text-muted">{post.date}</div>
          <div>
            {post.categories.map((cetegory) => {
              const slug = slugify(cetegory);

              return (
                <Link key={cetegory} href={`/category/${slug}`} legacyBehavior>
                  <a className="btn">
                    <h6 className="post-title">#{cetegory}</h6>
                  </a>
                </Link>
              );
            })}
          </div>
          <Link href={`/project/${post.slug}`} legacyBehavior>
            <h2 className="card-title">{post.metaTitle}</h2>
          </Link>
          <p className="card-text">{post.metaDesc}</p>
          <Link href={`/project/${post.slug}`} legacyBehavior>
            <a className="btn">Read More</a>
          </Link>
        </div>
      </div>
    </div>
  );
}
