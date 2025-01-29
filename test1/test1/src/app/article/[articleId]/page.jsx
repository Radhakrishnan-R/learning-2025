import React from 'react'
import Link from 'next/link';

const ArticlePage = async({params, searchParams}) => {

    console.log(await params);
    console.log(await searchParams);
    const id = (await params).articleId;
    const lang = (await searchParams).lang;


  return (
    <div>ArticlePage
        <div className='mt-10'>
            <h1>Article heading {id}</h1>
            <h3>Reading in {lang}</h3>
        </div>

        <Link href='/article/news-today-123?lang=en'>Read in English</Link>
        <Link href='/article/news-today-456?lang=fr'>Read in French</Link>
        <Link href='/article/news-today-789?lang=sp'>Read in Spanish</Link>
        
    </div>
  )
}

export default ArticlePage;