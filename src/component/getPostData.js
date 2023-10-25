import fs from 'fs'
import matter from 'gray-matter'
import Markdown from 'markdown-to-jsx';

  export default function getPostData(){
    const folder = '/home/sverp/gith/next/myapp/src/post'
    const files = fs.readdirSync(folder)
    const mdpost = files.filter((file) => file.endsWith(".md"))

    const posts = mdpost.map((fileName) => {

      const fileContent = fs.readFileSync(`${folder}/${fileName}`,"utf-8");
      const matterResult = matter(fileContent)

      return {
        title : matterResult.data.title,
        date: matterResult.data.date,
        subtitles : matterResult.data.subtitles,
        slug : fileName.replace(".md",""),
      };
    });

    return posts;
  }