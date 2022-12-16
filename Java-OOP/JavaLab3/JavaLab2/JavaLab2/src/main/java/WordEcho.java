
import java.util.Scanner;

/**
 * @author PC
 */

public class WordEcho {
    private static Scanner input = new Scanner(System.in);
    
    public static void printWordEcho(String s){
        for(int i=0; i<s.length(); i++){
            System.out.println(s);
        }
    }
    
    public static void main(String[] args) {
        System.out.println("Enter a word: ");
        String word = input.nextLine();
        printWordEcho(word);
    }
}
