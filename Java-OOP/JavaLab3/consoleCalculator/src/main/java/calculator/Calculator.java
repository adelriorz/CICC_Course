package calculator;

import java.util.Scanner;

/**
 * @author Armand Riviere
 */
public class Calculator implements IOperations{
    private static IOperations iops;
    private static Scanner input = new Scanner(System.in);
    private static double result;
    private static double input2;

    public static double subMenu(double d, String s) {
        switch(s){
            case "-":
                System.out.println("Please type the second number: ");
                input2 = input.nextDouble();
                result = IOperations.subtraction(d, input2);
                break;
            case "+":
                System.out.println("Please type the second number: ");
                input2 = input.nextDouble();
                result = IOperations.sum(d, input2);
                break;
            case "*":
                System.out.println("Please type the second number: ");
                input2 = input.nextDouble();
                result = IOperations.multiplication(d, input2);
                break;
            case "/":
                System.out.println("Please type the second number: ");
                input2 = input.nextDouble();
                if(input2 != 0 || d != 0){
                    result = IOperations.division(d, input2);
                } else {
                    System.out.println("Can´t divide by zero");
                }
                break;
            default: 
                System.out.println("Invalid key!");
                break;
        }
        System.out.println(d + "" + s + "" + input2 + " = " + result);
        return result;
    }
    
    public static void menu() {
        String choice, operation;
        double input1;
        
        do{
            System.out.println("Please type the fist number: ");
            input1 = input.nextDouble();
            System.out.println("""
                               Choose an operation:
                               Type + for addition
                               Type - for substraction
                               Type * for multiplication
                               Type / for division
            """);
            operation = input.next();
            result = subMenu(input1, operation);
            System.out.println("Do you like to continue or quit?");
            choice = input.next().toLowerCase();
        }while(!choice.equals("quit"));
        System.out.println("Bye!");
        input.close();
    }
    
    public static void main(String[] args) {
        menu();
    }
        
}
