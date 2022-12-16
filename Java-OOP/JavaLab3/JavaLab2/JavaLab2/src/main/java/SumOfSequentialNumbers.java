
import java.util.Scanner;

/**
 * @author Armando Del Rio
 */
public class SumOfSequentialNumbers {
    
    private static Scanner input = new Scanner(System.in);
    
    public SumOfSequentialNumbers(){}
    
    public static int sequentialPrint(int n){
        if(n == 0){
            return 0;
	}
	if(n == 1 || n == 2)
            return 1;
        else{
            return sequentialPrint(n-2) + sequentialPrint(n-1);
        }
    }
    
    public static void main(String[] args) {
        int number, finalNumber;
        System.out.println("Input the N: ");
        number = input.nextInt();
        finalNumber = sequentialPrint(number);
        System.out.println("The sum of 1 to " + number + " is " + finalNumber);
    }
}
