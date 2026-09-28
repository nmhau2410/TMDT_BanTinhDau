import React from "react";
import "./SkeletonProductCard.css";
export default function SkeletonProductCard() {
  return (
    <article className="skeleton-product-card">
      <div className="skeleton skeleton-image" />
      <div className="skeleton-body">
        <div className="skeleton skeleton-line short" />
        <div className="skeleton skeleton-line title" />
        <div className="skeleton skeleton-line" />
        <div className="skeleton skeleton-line tiny" />
        <div className="skeleton-row">
          <div className="skeleton skeleton-price" />
          <div className="skeleton skeleton-button" />
        </div>
      </div>
    </article>
  );
}
