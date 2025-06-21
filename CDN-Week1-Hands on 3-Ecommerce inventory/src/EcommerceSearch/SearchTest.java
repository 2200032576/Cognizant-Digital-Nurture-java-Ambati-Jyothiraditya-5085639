package EcommerceSearch;

public class SearchTest {
    public static void main(String[] args) {
        Product[] products = {
            new Product(101, "Laptop", "Electronics"),
            new Product(102, "Shoes", "Fashion"),
            new Product(103, "Keyboard", "Electronics"),
            new Product(104, "Book", "Education"),
            new Product(105, "Mobile", "Electronics")
        };

        String target1 = "Book";
        Product result1 = SearchUtility.linearSearch(products, target1);
        System.out.println("Linear Search Result: " + result1);

        String target2 = "Mobile";
        Product result2 = SearchUtility.binarySearch(products, target2);
        System.out.println("Binary Search Result: " + result2);
    }
}

