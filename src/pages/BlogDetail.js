import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function BlogDetail () {
    const params = useParams();
    const [ article, setArticle ] = useState({});
    const [ loading, setLoading ] = useState(true);
    const [ notFound, setNotFound ] = useState(false);

    useEffect(() => {
        async function getArticle () {
            const request = await fetch(
                `https://api.spaceflightnewsapi.net/v3/articles/${ params.id }`
            );

            if (!request.ok) {
                return setNotFound(true);
            }

            const response = await request.json();

            document.title = response.title;
            setArticle(response);
            setLoading(false);
        }

        getArticle();
    }, [ params ]);

    if (notFound) {
        return <h3>Artikel tidak di temukan ❌</h3>;
    }

    return (
        <section className="section">
            { loading ? (
                <p>Tunggu sebentar yaa.. 😁</p>
            ) : (
                <article className="article">
                    <h3 className="article-title">{ article.title }</h3>
                    <img
                        src={ article.imageUrl }
                        alt={ article.title }
                        className="article-image"
                    />
                    <time className="article-time">
                        { new Date(article.publishedAt).toLocaleDateString() }
                    </time>
                    <p className="article-summary">{ article.summary }</p>
                    <p className="article-source">
                        Sumber:{ ' ' }
                        <a href={ article.url } target="_blank">
                            { article.newsSite }
                        </a>
                    </p>
                </article>
            ) }
        </section>
    );
}
