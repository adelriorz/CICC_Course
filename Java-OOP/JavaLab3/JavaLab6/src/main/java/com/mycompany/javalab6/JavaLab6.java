package com.mycompany.javalab6;

import java.util.Arrays;

/**
 * @author Armand Riviere
 */
public class JavaLab6 {

    public static void main(String[] args) {
        //Input 1
        Integer arr_i[] = {2,8,20,3,4};
        System.out.println("arr_i_size = " + arrLength(arr_i));
        System.out.println("Max value in 'arr_i' is: " + maximum(arr_i));

        //Input 2
        Double arr_d[] = {2.7,3.8,5.5,6.7,9.7};
        System.out.println("\narr__d_size = " + arrLength(arr_d));
        System.out.println("Max value in 'arr_i' is: " + maximum(arr_d));
    }
    
    /*
    * Determines max number for any type. Not suitable for String usage.
    */
    public static <T extends Comparable<T>> T maximum(T[] x){
        Object maxNum = null;
        Arrays.sort(x);
        maxNum = x[x.length-1];
        return (T) maxNum;
    }
    
    /*
    * Returns lenght of array no matter the typs declared
    */
    public static <T extends Comparable<T>> int arrLength(T[] x){
        int len = x.length;
        return len;
    }
    
}
