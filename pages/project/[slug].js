import fs from "fs";
import matter from "gray-matter";
import { slugify } from "../../utils";
import md from "markdown-it";
import { Image } from "@chakra-ui/react";
import Link from "next/link";

export async function getStaticPaths() {
  const files = fs.readdirSync("posts");

  const temppaths = files.map((filename) => {
    const fileName = fs.readFileSync(`posts/${filename}`, "utf-8");

    const { data: frontmatter } = matter(fileName);

    if (frontmatter.status === false) {
      return {
        params: {
          slug: filename.replace(".md", ""),
        },
      };
    } else {
      return null;
    }
  });

  const paths = temppaths.filter((path) => {
    return path && path;
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const fileName = fs.readFileSync(`posts/${slug}.md`, "utf-8");

  const { data: frontmatter, content } = matter(fileName);

  return {
    props: {
      frontmatter,
      content,
    },
  };
}

export default function PostPage({ content, frontmatter }) {
  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-lg-12 m-auto">

            <Image
              className="card-img-top m-auto"
              width={650}
              height={340}
              alt={frontmatter.coverImageAlt}
              src={`/${frontmatter.socialImage}`}
            />

            <h1 className="post-title mt-1 p-2 m-auto">{frontmatter.title}</h1>
            <h6 className="post-date m-auto p-2">{frontmatter.date}</h6>
            <div className="post-category m-auto p-2">
              {frontmatter.categories.map((category) => {
                const slug = slugify(category);

                return (
                  <Link
                    key={category}
                    href={`/category/${slug}`}
                    legacyBehavior
                  >
                    <a className="btn">
                      <h6 className="post-title">#{category}</h6>
                    </a>
                  </Link>
                );
              })}
            </div>

            <div
              className="post-body p-5 m-auto"
              dangerouslySetInnerHTML={{ __html: md().render(content) }}
            ></div>
          </div>
        </div>
      </div>
  );
}
