public class Main {
    public static void main(String[] args) {
        double initialValue = 10000.0;
        double growthRate = 0.05; // 5% annual growth
        int year = 5;

        double valueRecursive = FinancialForecast.forecastRecursive(year, initialValue, growthRate);
        double valueIterative = FinancialForecast.forecastIterative(year, initialValue, growthRate);
        double valueMath = FinancialForecast.forecastMath(year, initialValue, growthRate);

        System.out.printf("Future Value (Recursive) after %d years: %.2f\n", year, valueRecursive);
        System.out.printf("Future Value (Iterative) after %d years: %.2f\n", year, valueIterative);
        System.out.printf("Future Value (Math Formula) after %d years: %.2f\n", year, valueMath);
    }
}
