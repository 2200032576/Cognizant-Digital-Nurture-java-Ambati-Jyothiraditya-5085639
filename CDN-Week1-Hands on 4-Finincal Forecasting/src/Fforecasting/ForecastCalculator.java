package Fforecasting;

public class ForecastCalculator {

    public static double calculateFutureValue(double currentValue, double growthRate, int years) {
        if (years == 0) {
            return currentValue;
        }

        double newValue = currentValue * (1 + growthRate / 100);
        return calculateFutureValue(newValue, growthRate, years - 1);
    }

    public static void main(String[] args) {
        double initialInvestment = 10000.0;  
        double annualGrowthRate = 5.0;      
        int years = 10;

        double futureValue = calculateFutureValue(initialInvestment, annualGrowthRate, years);
        System.out.printf("Future value after %d years: ₹%.2f%n", years, futureValue);
    }
}
