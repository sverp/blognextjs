import Link from 'next/link'
import getPostData from '@/component/getPostData';

export default function Home() {
  
  const postData = getPostData();
  console.log(postData)

  return (
    <>
      <div>
        { postData && postData.map((post,i) => {
          return (
            <div className='border mt-5'>  
              <Link href={`/post/${post.slug}`}>
                <h2 className='font-bold text-cyan-600'>{post.title}</h2>
              </Link>
              <p>{post.date}</p>
            </div>
          )
        })}
      </div>
    </>
  )
}
