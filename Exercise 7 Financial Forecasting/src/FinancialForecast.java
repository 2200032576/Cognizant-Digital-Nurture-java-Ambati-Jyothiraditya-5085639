public class FinancialForecast {


    public static double forecastRecursive(int year, double initialValue, double growthRate) {
        if (year == 0) {
            return initialValue;
        }
        return forecastRecursive(year - 1, initialValue, growthRate) * (1 + growthRate);
    }


    public static double forecastIterative(int year, double initialValue, double growthRate) {
        double result = initialValue;
        for (int i = 1; i <= year; i++) {
            result *= (1 + growthRate);
        }
        return result;
    }


    public static double forecastMath(int year, double initialValue, double growthRate) {
        return initialValue * Math.pow(1 + growthRate, year);
    }
}
