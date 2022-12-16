package ThirdLine;

import SecondLine.Reptile;

/**
 * @author Armando Del Rio
 */
public class Crocodile extends Reptile{

    private boolean hasShelledEggs;

    public Crocodile(String skinType, String bone, String eggType, float height, float weight, String type, char bloodType) {
        super(skinType, bone, eggType, height, weight, type, bloodType);
    }
    
    public Crocodile(String skinType, String bone, String eggType, float height, float weight, String type, char bloodType, boolean hasShelledEggs) {
        super(skinType, bone, eggType, height, weight, type, bloodType);
        this.hasShelledEggs = hasShelledEggs;
    }
    
    public boolean isHasShelledEggs() {
        return hasShelledEggs;
    }

    public void setHasShelledEggs(boolean hasShelledEggs) {
        this.hasShelledEggs = hasShelledEggs;
    }
    
    @Override
    public String showInfo() {
        return "Cocodile{" + "height=" + getHeight() 
                + ", weight=" + getWeight() 
                + ", type=" + getType() 
                + ", bloodType=" + getBloodType()
                + ", skinType=" + getSkinType()
                + ", bone=" + getBone()
                + ", eggType=" + getEggType()
                + ", HasShelledEggs=" + isHasShelledEggs()
        + '}';
    }
}
