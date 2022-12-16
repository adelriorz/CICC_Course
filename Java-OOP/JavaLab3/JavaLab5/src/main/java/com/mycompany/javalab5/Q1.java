package com.mycompany.javalab5;

import java.util.ArrayList;
import java.util.Scanner;

/**
 * @author Armand Riviere
 */
public class Q1 {

    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        ArrayList<Integer> arrL = new ArrayList<>(9);
        ArrayList<Integer> tempA = new ArrayList<>(9);
        int prompt;
        int min = 1, max = 50;
        
        for(int i=0; i<=9; i++){
            arrL.add((int)Math.floor(Math.random()*(max-min+1)+min));
        }
        System.out.println(arrL);
        System.out.println("Please type an int: ");
        prompt = input.nextInt();
        
        if(arrL.contains(prompt)){
            System.out.println("The number is on the list");
        } else {
            System.out.println("The number isn't on the list");
        }
    }
}
