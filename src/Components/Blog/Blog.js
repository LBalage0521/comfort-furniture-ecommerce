import React, { useEffect, useState } from 'react';
import { db } from '../../Firebase/Database';
import BlogItem from './BlogItem';

export default function BlogSite() {

  const GetBlogData = (collection) => {
    const [docs, setDocs] = useState([]);
    useEffect(() => {
      const unsub = db.collection(collection)
        .onSnapshot(snap => {
          let documents = [];
          snap.forEach(doc => {
            documents.push({...doc.data(), id: doc.id});
          });
          setDocs(documents);
        });
      return () => unsub();
    }, [collection]);
    return { docs };
  }

  const { docs } = GetBlogData('blog-articles');

  return (
    <>
    <section className="blog-section">
      <h1 className="text-center py-5 mb-0">Blog Articles</h1>
      {docs && docs.map((doc, index) => (
        <BlogItem
          article={doc.article}
          comments={doc.comments}
          content={doc.summary}
          datetime={doc.datetime}
          img={doc.url}
          key={index}
          time={doc.time}
          value={doc.id}
        />
      ))}
    </section>
    </>
  )
}
