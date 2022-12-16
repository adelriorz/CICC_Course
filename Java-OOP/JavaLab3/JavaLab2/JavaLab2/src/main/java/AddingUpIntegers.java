import java.util.ArrayList;
import java.util.Scanner;

/**
 * @author Armando Del Rio
 */

public class AddingUpIntegers {
    private static Scanner input = new Scanner(System.in);
    SumOfSequentialNumbers sosn = new SumOfSequentialNumbers();
    
    public static ArrayList<Integer> getValues(){
        ArrayList<Integer> a = new ArrayList<>();
        int tempNum, itemsAdded;
        System.out.println("How many integers will be added?\n");
        itemsAdded = input.nextInt();
        do{
            System.out.println("\nEnter an integer: ");
            tempNum = input.nextInt();
            a.add(tempNum);
            itemsAdded--;
        }while(itemsAdded!=0);
        return a;
    }
    
    public static int printSum(ArrayList<Integer> arr){
        int sum = 0, i = 0;
        System.out.println("\n"); //Formatting purposes
        for(int n:arr){
            sum += arr.get(i);
            i++;
        }
        return sum;
    }
    
    public static void main(String[] args) {
        ArrayList<Integer> numbers = new ArrayList<>();
        numbers = getValues();
        System.out.println("The sum is " + printSum(numbers));        
    }
}
