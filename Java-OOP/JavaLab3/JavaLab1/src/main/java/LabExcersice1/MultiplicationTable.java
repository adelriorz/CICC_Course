package LabExcersice1;

import java.util.Scanner;

/**
 * @author Armando Del Rio
 */
public class MultiplicationTable {
    protected static Scanner input;
    public static void main(String[] args) {
        System.out.println("Please add the radius: ");
            input = new Scanner(System.in);
            int num = input.nextInt();
        for(int i = 1; i <= 10; ++i){
            System.out.printf(num + " x " + i + " = " + (num * i));
        }
    }
}
