import fs from 'fs'
import matter from 'gray-matter';
import Markdown from 'markdown-to-jsx';
import getPostData from '@/component/getPostData';

function getPostContent(slug){
    const folder = '/home/sverp/gith/next/myapp/src/post'
    const files = `${folder}/${slug}.md`
    const content = fs.readFileSync(files,'utf-8');
    const matterResult = matter(content)
    return matterResult;
}

export async function generateStaticParams(){
    const posts = getPostData()
    return (
        posts.map((post) => {
            slug : post.slug;
        })
    )
}

export default function PostPage( props ){

    const filename = props.params.slug;
    const filedata = getPostContent(filename);
    return(
        <>  
            <div className='text-left'>
                <h1 className='bg-blue-300'>{filedata.data.title}</h1>
                <article className='prose lg:prose-xl'>
                    <Markdown>{filedata.content}</Markdown>
                </article>
            </div>
        </>
    )
}