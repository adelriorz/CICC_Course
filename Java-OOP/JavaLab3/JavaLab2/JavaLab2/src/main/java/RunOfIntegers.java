
import java.util.Scanner;

/**
 * @author Armando Del Río
 */
public class RunOfIntegers {
    private static Scanner input = new Scanner(System.in);
    
    public static void runInts(int x, int y){
        for(int i=x; i<y+1; i++){
            System.out.println("i = " + i);
        }
    }
    
    public static void main(String[] args) {
        int start, end;
        System.out.println("Input the start: ");
        start = input.nextInt();
        System.out.println("Input the end: ");
        end = input.nextInt();
        runInts(start, end);
    }
}
