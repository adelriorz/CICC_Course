package ThirdLine;

import SecondLine.Bird;

/**
 * @author Armando Del Rio
 */
public class Eagle extends Bird{
    
    public Eagle(boolean animalWithFeathers, boolean canFly, float height, float weight, String type, char bloodType) {
        super(animalWithFeathers, canFly, height, weight, type, bloodType);
    }
    
    @Override
    public String showInfo() {
        return "Eagle{" + "height=" + getHeight() 
                + ", weight=" + getWeight() 
                + ", type=" + getType() 
                + ", bloodType=" + getBloodType()
                + ", animalWithFeathers=" + isAnimalWithFeathers()
                + ", canFly=" + isCanFly()
        + '}';
    }
    
}
