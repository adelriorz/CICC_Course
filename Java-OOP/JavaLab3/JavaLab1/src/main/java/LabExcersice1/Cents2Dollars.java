/*
*  
*/
package LabExcersice1;

import java.util.Scanner;

/**
 * @author Armando Del Rio
 */
public class Cents2Dollars {
    protected static Scanner input;
    
    private static Money calculateCents(int amountInCents){
        Money m = new Money();
        m.dollar = amountInCents/100;
        m.cent = amountInCents % 100;
        return m;
    }
    
    public static void main(String args[]){
        Money m = new Money();
        int amount;
        System.out.println("Input the cents: ");
        input = new Scanner(System.in);
        amount = input.nextInt();
        m = calculateCents(amount);
        System.out.println("The value is " + m.getDollar() + " dollars, and " + m.getCent() + " cents");
    }
}

class Money{

    public int getCent() {
        return cent;
    }

    public void setCent(int cent) {
        this.cent = cent;
    }

    public int getDollar() {
        return dollar;
    }

    public void setDollar(int dollar) {
        this.dollar = dollar;
    }
    int cent;
    int dollar;
    
    public Money(int cent, int dollar){
        this.cent = cent;
        this.dollar = dollar;
    }
    
    public Money(){}
}
