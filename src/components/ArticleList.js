import React from 'react';
// import Article from '../components/Article';

function ArticleList({posts}) {
    console.log({posts});
    return (
        <main>
            {posts.map(article => {
                console.log(article);
                return <div key={article.title}>{article.title}</div>;
                })
            }
        </main>
    
    );
}

export default ArticleList;