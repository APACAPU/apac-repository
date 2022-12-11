import { Box } from "@chakra-ui/react";
import Head from "next/head";
import Banner from "../components/Banner";
import fs from "fs";
import Post from "../components/Post";
import matter from "gray-matter";
import { sortByDate, slugify } from "../utils";
import Sidebar from "../components/Sidebar";

export default function Home({ posts }) {
  return (
    <div>
      <Head>
        <title>APAC</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Banner />

      <div className="container">
        <Sidebar />
        <div className="row">
          {posts.map((post, index) => (
            <div className="col-md-4">
              <Post key={index} post={post} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// access files in the page folder
export async function getStaticProps() {
  // get lists of markdown files from posts folder
  const files = fs.readdirSync("posts");

  // Get slug and frontmatter from posts
  const tempposts = files.map((fileName) => {
    // create slug
    const slug = fileName.replace(".md", "");

    // get frontmatter
    const readFile = fs.readFileSync(`posts/${fileName}`, "utf-8");

    // convert data into json
    const { data: frontmatter } = matter(readFile);

    // check the project status
    if (frontmatter.status == false) {
      return {
        slug,
        frontmatter,
      };
    } else {
      return null;
    }
  });

  // remove null in tempposts
  const posts = tempposts.filter((post) => {
    return post && post;
  });

  // convert json into strings
  const jsonString = JSON.stringify(posts);
  // write a search.json file
  fs.writeFileSync("./search.json", jsonString, (err) => {
    if (err) {
      console.log("Error", err);
    } else {
      console.log("Successfully wrote file");
    }
  });

  return {
    props: {
      posts: posts.sort(sortByDate),
    },
  };
}
