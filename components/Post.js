import Link from "next/link";
import { slugify } from "../utils";
import { AspectRatio, Flex, Image } from "@chakra-ui/react";

export default function Post({ post }) {
  return (
    <Flex>
      <Link href={`/project/${post.slug}`}>
        <AspectRatio ratio="1" w={52}>
          <Image
            alt={post.frontmatter.title}
            src={`/${post.frontmatter.socialImage}`}
          />
        </AspectRatio>
      </Link>
      <div className="card-body">
        <div className="small text-muted">{post.frontmatter.date}</div>
        <div>
          {post.frontmatter.categories.map((cetegory) => {
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
          <h2 className="card-title">{post.frontmatter.metaTitle}</h2>
        </Link>
        <p className="card-text">{post.frontmatter.metaDesc}</p>
        <Link href={`/project/${post.slug}`} legacyBehavior>
          <a className="btn">Read More</a>
        </Link>
      </div>
    </Flex>
  );
}
