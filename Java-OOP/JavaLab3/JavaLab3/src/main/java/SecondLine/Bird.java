package SecondLine;

import adelriorz.com.javalab3.Inheritance.Animal;

/**
 * @author Armando Del Rio
 */
public class Bird extends Animal{

    private boolean animalWithFeathers;
    private boolean canFly;
    
    public Bird(boolean animalWithFeathers, boolean canFly, float height, float weight, String type, char bloodType) {
        super(height, weight, type, bloodType);
        this.animalWithFeathers = animalWithFeathers;
        this.canFly = canFly;
    }

    public Bird(boolean animalWithFeathers, boolean canFly) {
        this.animalWithFeathers = animalWithFeathers;
        this.canFly = canFly;
    }

    public boolean isAnimalWithFeathers() {
        return animalWithFeathers;
    }

    public void setAnimalWithFeathers(boolean animalWithFeathers) {
        this.animalWithFeathers = animalWithFeathers;
    }

    public boolean isCanFly() {
        return canFly;
    }

    public void setCanFly(boolean canFly) {
        this.canFly = canFly;
    }
    
    @Override
    public String showInfo() {
        return "Bird{" + "height=" + getHeight() 
                + ", weight=" + getWeight() 
                + ", type=" + getType() 
                + ", bloodType=" + getBloodType()
                + ", animalWithFeathers=" + isAnimalWithFeathers()
                + ", canFly=" + isCanFly()
        + '}';
    }
    
}
