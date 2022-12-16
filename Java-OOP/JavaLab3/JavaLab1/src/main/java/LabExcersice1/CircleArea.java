/*
 Write a program that takes in a user's input of the radius and calculates the area of a circle. The radius should be read 
 as an integer from the keyboard. Sample of user dialog:
 */
package LabExcersice1;

import java.util.Scanner;

/**
 *
 * @author Armando Del Rio
 */
public class CircleArea {
    protected static Scanner input;
    protected static double PI;
        public static void main(String args[]){
            System.out.println("Please add the radius: ");
            input = new Scanner(System.in);
            int r = input.nextInt();
            System.out.println("Radius of circle: " + r);
            double area = Math.PI*(r*r);
            System.out.println("Area of circle is: " + area);
    }
}
