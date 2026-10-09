package com.tinhdau.backend.service;

import com.tinhdau.backend.dto.HomeResponse;
import com.tinhdau.backend.dto.ProductResponse;
import com.tinhdau.backend.entity.Product;
import com.tinhdau.backend.repository.ProductRepository;
import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.HashMap;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@Service
@Transactional(readOnly = true)
public class ProductService {

    private static final String ACTIVE = "ACTIVE";
    private static final Map<String, String> BEST_SELLER_TABS = new LinkedHashMap<>();

    static {
        BEST_SELLER_TABS.put("Tất cả", null);
        BEST_SELLER_TABS.put("Nước hoa", "PERFUME");
        BEST_SELLER_TABS.put("Tinh dầu", "ESSENTIAL_OIL");
        BEST_SELLER_TABS.put("Nến thơm", "CANDLE");
    }

    private final ProductRepository productRepository;

    @PersistenceContext
    private EntityManager em;

    public ProductService(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    public HomeResponse getHome() {
        Lookup lookup = loadLookup();

        List<ProductResponse> flashSales = toResponses(
                productRepository.findTop4ByStatusAndSalePriceIsNotNullOrderBySoldCountDesc(ACTIVE), lookup);

        List<ProductResponse> newProducts = toResponses(
                productRepository.findTop4ByStatusOrderByCreatedAtDescIdDesc(ACTIVE), lookup);

        Map<String, List<ProductResponse>> tabs = new LinkedHashMap<>();
        BEST_SELLER_TABS.forEach((label, type) -> {
            List<Product> products = (type == null)
                    ? productRepository.findTop8ByStatusOrderBySoldCountDesc(ACTIVE)
                    : productRepository.findTop8ByStatusAndProductTypeOrderBySoldCountDesc(ACTIVE, type);
            tabs.put(label, toResponses(products, lookup));
        });

        return new HomeResponse(flashSales, newProducts, tabs);
    }

    public List<ProductResponse> getProducts(String type) {
        Sort sort = Sort.by(Sort.Direction.DESC, "soldCount");
        List<Product> products = (type == null || type.isBlank())
                ? productRepository.findByStatus(ACTIVE, sort)
                : productRepository.findByStatusAndProductType(ACTIVE, type.trim().toUpperCase(), sort);
        return toResponses(products, loadLookup());
    }

    public Optional<ProductResponse> getProduct(Long id) {
        Lookup lookup = loadLookup();
        return productRepository.findDetailById(id)
                .map(p -> toResponse(p, true, lookup));
    }
    private List<ProductResponse> toResponses(List<Product> products, Lookup lookup) {
        return products.stream().map(p -> toResponse(p, false, lookup)).toList();
    }

    private ProductResponse toResponse(Product p, boolean withImages, Lookup lookup) {
        String[] workshop = lookup.workshops().get(p.getWorkshopId());
        return ProductResponse.from(
                p,
                withImages,
                workshop != null ? workshop[0] : null,
                workshop != null ? workshop[1] : null,
                lookup.ratings().get(p.getWorkshopId())
        );
    }
    private Lookup loadLookup() {
        Map<Long, String[]> workshops = new HashMap<>();
        Map<Long, Double> ratings = new HashMap<>();

        @SuppressWarnings("unchecked")
        List<Object[]> workshopRows = em
                .createNativeQuery("select id, workshop_name, province from workshops")
                .getResultList();
        for (Object[] row : workshopRows) {
            workshops.put(
                    ((Number) row[0]).longValue(),
                    new String[]{(String) row[1], (String) row[2]}
            );
        }

        @SuppressWarnings("unchecked")
        List<Object[]> ratingRows = em
                .createNativeQuery("select workshop_id, avg(rating) from reviews group by workshop_id")
                .getResultList();
        for (Object[] row : ratingRows) {
            double avg = ((Number) row[1]).doubleValue();
            ratings.put(((Number) row[0]).longValue(), Math.round(avg * 10.0) / 10.0);
        }

        return new Lookup(workshops, ratings);
    }

    private record Lookup(Map<Long, String[]> workshops, Map<Long, Double> ratings) {
    }
}