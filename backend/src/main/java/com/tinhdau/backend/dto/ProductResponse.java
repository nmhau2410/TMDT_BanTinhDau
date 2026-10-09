package com.tinhdau.backend.dto;

import com.tinhdau.backend.entity.Product;
import com.tinhdau.backend.entity.ProductImage;

import java.math.BigDecimal;
import java.math.RoundingMode;
import java.util.List;

public record ProductResponse(
        Long id,
        String sku,
        String name,
        String type,
        String description,
        String scentNotes,
        String volume,
        BigDecimal price,
        BigDecimal salePrice,
        Integer discountPercent,
        Integer stock,
        Integer sold,
        String image,
        Long workshopId,
        String workshopName,
        String workshopProvince,
        Double rating,
        List<String> images
) {

    public static ProductResponse from(Product p,
                                       boolean withImages,
                                       String workshopName,
                                       String workshopProvince,
                                       Double rating) {
        BigDecimal price = p.getPrice();
        BigDecimal sale = p.getSalePrice();
        Integer discount = null;

        if (sale != null && price != null && price.signum() > 0 && sale.compareTo(price) < 0) {
            discount = price.subtract(sale)
                    .multiply(BigDecimal.valueOf(100))
                    .divide(price, 0, RoundingMode.HALF_UP)
                    .intValue();
        } else {
            sale = null;
        }

        List<String> images = withImages
                ? p.getImages().stream().map(ProductImage::getImageUrl).toList()
                : List.of();

        return new ProductResponse(
                p.getId(),
                p.getSku(),
                p.getName(),
                p.getProductType(),
                p.getDescription(),
                p.getScentNotes(),
                p.getVolume(),
                price,
                sale,
                discount,
                p.getStockQuantity(),
                p.getSoldCount(),
                p.getThumbnailUrl(),
                p.getWorkshopId(),
                workshopName,
                workshopProvince,
                rating,
                images
        );
    }
}