package EcommerceSearch;

import java.util.Arrays;
import java.util.Comparator;

public class SearchUtility {

    public static Product linearSearch(Product[] products, String productName) {
        for (Product product : products) {
            if (product.productName.equalsIgnoreCase(productName)) {
                return product;
            }
        }
        return null;
    }

    public static Product binarySearch(Product[] products, String productName) {
        Arrays.sort(products, Comparator.comparing(p -> p.productName.toLowerCase()));
        int left = 0, right = products.length - 1;
        while (left <= right) {
            int mid = left + (right - left) / 2;
            int comparison = products[mid].productName.compareToIgnoreCase(productName);
            if (comparison == 0) return products[mid];
            else if (comparison < 0) left = mid + 1;
            else right = mid - 1;
        }
        return null;
    }
}

