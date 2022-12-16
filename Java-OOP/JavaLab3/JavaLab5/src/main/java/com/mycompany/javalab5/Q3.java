package com.mycompany.javalab5;

import com.mycompany.javalab5.Car;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.Comparator;

/**
 * @author Armand Riviere
 */
public class Q3{
    private static Car car, car2, car3;
    private static ArrayList<Car> carList;
    
    public static void main(String[] args) {
        car = new Car("Hyundai", "i10", 2020);
        car2 = new Car("Honda", "Accord", 2022);
        car3 = new Car("Nissan", "Sentra", 2019);
        carList = new ArrayList<>(Arrays.asList(car, car2,car3));
        
        Collections.sort(carList, Comparator.comparing(Car::getYear).reversed());
        for(Car car: carList){
            System.out.println("car = " + car.getYear());
        }
    }
}
