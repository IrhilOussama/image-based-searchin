"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import styles from "./page.module.css";
import { useRouter } from "next/navigation";

export default function Home() {
  const [images, setImages] = useState([]);
  const [filteredImages, setFilteredImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();

  async function fetchImages() {
    try {
      const response = await fetch("http://localhost:3000/api/images/");
      if (!response.ok) {
        throw new Error('Failed to fetch images');
      }
      const data = await response.json();
      setImages(data);
      setFilteredImages(data);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  }

  function handleSearch(e) {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    const filtered = images.filter(img => 
      img['image-name'].toLowerCase().includes(term)
    );
    setFilteredImages(filtered);
  }

  // Fetch images on component mount
  useEffect(() => {
    fetchImages();
  }, []);

  if (loading) return <div className={styles.loadingContainer}>Loading images...</div>;
  if (error) return <div className={styles.errorContainer}>Error: {error}</div>;

  return (
    <main className={styles.main}>
      <div className={styles.searchContainer}>
        <input 
          type="text" 
          placeholder="Search images..." 
          value={searchTerm}
          onChange={handleSearch}
          className={styles.searchInput}
        />
      </div>
      <div className={styles.images}>
        {filteredImages.length === 0 ? (
          <div className={styles.noResults}>No images found</div>
        ) : (
          filteredImages.map((img, i) => (
            <div key={i} className={styles.imgCon}>
              <Image 
                className={styles.myImg} 
                src={`http://localhost:3000/api/images/${img['image-name']}`}
                onClick={() => router.push("/image/" + img["image-name"])}
                alt={img['image-name']} 
                fill 
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          ))
        )}
      </div>
    </main>
  );
}
