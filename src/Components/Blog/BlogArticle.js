import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { db, projectStorage } from '../../Firebase/Database';
import BlogArticleContent from './BlogArticleContent';

export default function BlogArticle() {

    let { id } = useParams();
    const [currentBlogData, setCurrentBlogData] = useState({});
    const [currentImage, setCurrentImage] = useState('');

    useEffect(() => {
        const currentBlogData = db.collection("blog-articles").doc(id);
        currentBlogData
        .get()
        .then((doc) => {
          setCurrentBlogData({...doc.data(), id: doc.id});
          getCurrentPicture(id);
        })
        .catch((error) => {
          console.log("Error getting document:", error);
        });
    },[id])

    async function getCurrentPicture(id) {
      let imageReference = projectStorage.refFromURL(`gs://photogallerylb.appspot.com/blog-articles/${id}.jpg`);
      await imageReference.getDownloadURL()
      .then((image) => {
        setCurrentImage(image);
      })
      .catch((error) => {
        console.log(error);
      })
    }

    return (
      <>
      <BlogArticleContent
        article={currentBlogData.article}
        comments={currentBlogData.comments}
        content={currentBlogData.content}
        currentImage={currentImage}
        datetime={currentBlogData.datetime}
        time={currentBlogData.time}
      />
      </>
    );
  }
