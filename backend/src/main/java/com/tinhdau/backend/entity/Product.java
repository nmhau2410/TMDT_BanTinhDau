package com.tinhdau.backend.entity;

import jakarta.persistence.*;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "products")
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "workshop_id", nullable = false)
    private Long workshopId;

    @Column(name = "category_id")
    private Long categoryId;

    @Column(name = "sku", nullable = false, unique = true, length = 50)
    private String sku;

    @Column(name = "name", nullable = false, length = 200)
    private String name;

    @Column(name = "product_type", nullable = false)
    private String productType;

    @Column(name = "description", columnDefinition = "TEXT")
    private String description;

    @Column(name = "scent_notes")
    private String scentNotes;

    @Column(name = "volume", length = 50)
    private String volume;

    @Column(name = "price", nullable = false, precision = 15, scale = 2)
    private BigDecimal price;

    @Column(name = "sale_price", precision = 15, scale = 2)
    private BigDecimal salePrice;

    @Column(name = "stock_quantity")
    private Integer stockQuantity;

    @Column(name = "sold_count")
    private Integer soldCount;

    @Column(name = "thumbnail_url", length = 500)
    private String thumbnailUrl;
    @Column(name = "status")
    private String status;

    @Column(name = "created_at", insertable = false, updatable = false)
    private LocalDateTime createdAt;

    @OneToMany(mappedBy = "product", fetch = FetchType.LAZY)
    @OrderBy("displayOrder ASC")
    private List<ProductImage> images = new ArrayList<>();

    public Long getId() { return id; }
    public Long getWorkshopId() { return workshopId; }
    public Long getCategoryId() { return categoryId; }
    public String getSku() { return sku; }
    public String getName() { return name; }
    public String getProductType() { return productType; }
    public String getDescription() { return description; }
    public String getScentNotes() { return scentNotes; }
    public String getVolume() { return volume; }
    public BigDecimal getPrice() { return price; }
    public BigDecimal getSalePrice() { return salePrice; }
    public Integer getStockQuantity() { return stockQuantity; }
    public Integer getSoldCount() { return soldCount; }
    public String getThumbnailUrl() { return thumbnailUrl; }
    public String getStatus() { return status; }
    public LocalDateTime getCreatedAt() { return createdAt; }
    public List<ProductImage> getImages() { return images; }
}