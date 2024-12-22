"use client";

import {use, useState, useEffect} from "react";
import styles from "../../product.module.css";
import Link from "next/link";

export default function ImagePage({params}){
    const myParams = use(params);
    const name = myParams.name;
    const [similarImages, setSimilarImages] = useState([]);

    useEffect(() => {
        setSimilarImages(fetch("http://localhost:8000/similar/"+name)
        .then(response => response.json())
        .then(data => data.map((imgName, i) => 
            <Link key={i}  href={"/image/"+imgName} className={styles.box}>
                <img 
                className={styles.boxImg} 
                src={"http://localhost:3000/api/images/" + imgName}
                />
            </Link>)))

    }, [])
    

    return (
        <>
            <div className={styles.imgCon}>
                <img className={styles.myImg} src={"http://localhost:3000/api/images/" + name} alt={name}/>
            </div>
            <div className={styles.content}>
                {similarImages}
            </div>

        </>
    )
}

