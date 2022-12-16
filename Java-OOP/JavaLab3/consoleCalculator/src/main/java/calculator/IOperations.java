package calculator;

/**
 * @Armand Rivere
 */
public interface IOperations {

    /**
     * @param x
     * @param y
     * @return sum
     */
    public static double sum(double x, double y){
        return x + y;
    }
    /**
     * @param x
     * @param y
     * @return subtraction
     */
    public static double subtraction(double x, double y){
        return x - y;
    }
    /**
     * @param x
     * @param y
     * @return multiplication
     */
    public static double multiplication(double x, double y){
        return x * y;
    }
    /**
     * @param x
     * @param y
     * @return division
     */
    public static double division(double x, double y){
        return x / y;
    }
}
