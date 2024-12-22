import React from 'react';
import styles from '../../ai-features.module.css';

export default function AIFeaturesPage() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.sectionTitle}>AI-Powered Image Search Technology</h1>
      </header>

      <section className={styles.algorithmSection}>
        <h2 className={styles.sectionTitle}>Understanding AI and Machine Learning</h2>
        <div className={styles.algorithmDescription}>
          <p>
            Artificial Intelligence (AI) is a transformative technology that enables machines to mimic human intelligence, 
            learning from data and making intelligent decisions. Machine Learning, a subset of AI, focuses on developing 
            algorithms that can learn and improve from experience without being explicitly programmed.
          </p>
        </div>
      </section>

      <section className={styles.algorithmSection}>
        <h2 className={styles.sectionTitle}>K-Means Clustering Algorithm</h2>
        <div className={styles.algorithmDescription}>
          <p>
            K-Means is an unsupervised machine learning algorithm used for partitioning a dataset into K distinct clusters. 
            In our image search application, K-Means helps group similar images together based on their visual features.
          </p>
          <div className={styles.codeSnippet}>
            {`# Conceptual K-Means Clustering
def kmeans_cluster(images, k_clusters):
    # Group images into k clusters based on visual similarities
    clusters = {}
    for image in images:
        closest_cluster = find_closest_cluster(image, clusters)
        clusters[closest_cluster].append(image)
    return clusters`}
          </div>
        </div>
      </section>

      <section className={styles.algorithmSection}>
        <h2 className={styles.sectionTitle}>K-Nearest Neighbors (KNN) Algorithm</h2>
        <div className={styles.algorithmDescription}>
          <p>
            KNN is a machine learning algorithm used for classification and regression. In our image search, 
            KNN helps rank and find the most similar images within a cluster by measuring their feature distances.
          </p>
          <div className={styles.codeSnippet}>
            {`# Conceptual KNN Distance Calculation
def knn_similarity(target_image, cluster_images, k=5):
    # Calculate distances between target image and cluster images
    distances = [calculate_image_distance(target_image, img) for img in cluster_images]
    # Return k most similar images
    return sorted(cluster_images, key=distances)[:k]`}
          </div>
        </div>
      </section>

      <section className={styles.algorithmSection}>
        <h2 className={styles.sectionTitle}>Image Similarity Search Workflow</h2>
        <div className={styles.imageClassificationFlow}>
          <div className={styles.flowStep}>
            <h3>1. Image Upload</h3>
            <p>User clicks and uploads an image</p>
          </div>
          <div className={styles.flowStep}>
            <h3>2. K-Means Clustering</h3>
            <p>Image grouped into similar clusters</p>
          </div>
          <div className={styles.flowStep}>
            <h3>3. KNN Ranking</h3>
            <p>Most similar images identified</p>
          </div>
          <div className={styles.flowStep}>
            <h3>4. Results Display</h3>
            <p>Similar images presented to user</p>
          </div>
        </div>
      </section>
    </div>
  );
}