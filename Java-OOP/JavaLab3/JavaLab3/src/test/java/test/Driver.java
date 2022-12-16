package test;

import adelriorz.com.javalab3.Inheritance.Animal;
import SecondLine.Reptile;
import SecondLine.Bird;
import SecondLine.Fish;
import ThirdLine.Crocodile;
import ThirdLine.Eel;
import ThirdLine.Eagle;

/**
 * @author Armando Del Rio
 */
public class Driver {
    private static Animal animal;
    private static Reptile reptile;
    private static Bird bird;
    private static Fish fish;
    private static Crocodile croco;
    private static Eel eel;
    private static Eagle eagle;
        
    public static void printAbstractClass(){   
        animal = new Animal(52, 7, "living", 'A');
        System.out.println("Animal = " + animal.showInfo());
    }
    
    public static void printSecondLineClass(){
        bird = new Bird(true, true, 52, 7, "living", 'A');
        System.out.println("Bird = " + bird.showInfo());
        
        fish = new Fish("Lake", true ,52, 4, "dead", 'B');
        System.out.println("Fish = " + fish.showInfo());
        
        reptile = new Reptile("great quality", "857 bones", "small eggs", 85, 42, "living", 'C');
        System.out.println("Reptile = " + reptile.showInfo());
    }
    
    
    public static void printThirdLineClass(){
        eagle = new Eagle(true, true, 52, 7, "living", 'A');
        System.out.println("Bird = " + eagle.showInfo());
        
        eel = new Eel("Lake", true ,52, 4, "dead", 'B', true);
        System.out.println("Fish = " + eel.showInfo());
        
        croco = new Crocodile("great quality", "857 bones", "big eggs", 85, 42, "living", 'C', true);
        System.out.println("Crocodile = " + croco.showInfo());
    }
    
    public static void main(String[] args) {
        
        //Abstract class Animal
        System.out.println("Abstract class Animal");
        printAbstractClass();
        //Second Line from Animal -> Bird, Fish & Reptile
        System.out.println("\nSecond Line from Animal -> Bird, Fish & Reptile");
        printSecondLineClass();
        System.out.println("\nThird Line from Animal & Second Line -> Cocodrile, Eagle & Eel");
        //Third Line from Animal & Second Line -> Cocodrile, Eagle & Eel
        printThirdLineClass();
    }
}
