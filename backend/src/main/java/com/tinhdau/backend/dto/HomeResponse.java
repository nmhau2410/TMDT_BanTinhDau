package com.tinhdau.backend.dto;

import java.util.List;
import java.util.Map;

public record HomeResponse(
        List<ProductResponse> flashSales,
        List<ProductResponse> newProducts,
        Map<String, List<ProductResponse>> bestSellerTabs
) {
}