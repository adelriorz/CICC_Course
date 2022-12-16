package com.mycompany.javalab5;

import java.util.ArrayList;

/**
 * @author Armand Riviere
 */
public class Q2 {

    public static void main(String[] args) {
        ArrayList<Integer> arrL = new ArrayList<>(9);
        ArrayList<Integer> arrL2 = new ArrayList<>(arrL);
        int min = 1, max = 50;
        
        for(int i=0; i<=9; i++){
            arrL.add((int)Math.floor(Math.random()*(max-min+1)+min));
        }
        
        arrL2 = (ArrayList<Integer>) arrL.clone();
        
        arrL.set(9, -5);
        
        System.out.println(arrL);
        System.out.println(arrL2);
        
    }
}
