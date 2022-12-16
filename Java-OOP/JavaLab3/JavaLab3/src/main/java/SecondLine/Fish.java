package SecondLine;

import adelriorz.com.javalab3.Inheritance.Animal;

/**
 * @author Armando Del Rio
 */
public class Fish extends Animal{

    private String livesIn;
    private boolean hasGills;
    
    public Fish(String livesIn, boolean hasGills, float height, float weight, String type, char bloodType) {
        super(height, weight, type, bloodType);
        this.livesIn = livesIn;
        this.hasGills = hasGills;
    }

    public Fish(String livesIn, boolean hasGills) {
        this.livesIn = livesIn;
        this.hasGills = hasGills;
    }

    public String getLivesIn() {
        return livesIn;
    }

    public void setLivesIn(String livesIn) {
        this.livesIn = livesIn;
    }

    public boolean isHasGills() {
        return hasGills;
    }

    public void setHasGills(boolean hasGills) {
        this.hasGills = hasGills;
    }
    
    @Override
    public String showInfo() {
        return "Animal{" + "height=" + getHeight() 
                + ", weight=" + getWeight() 
                + ", type=" + getType() 
                + ", bloodType=" + getBloodType()
                + ", livesIn=" + getLivesIn()
                + ", hasGills=" + isHasGills()
        + '}';
    }
        
}
