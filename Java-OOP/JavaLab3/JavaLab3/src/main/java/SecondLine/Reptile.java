package SecondLine;

import adelriorz.com.javalab3.Inheritance.Animal;

/**
 * @author Armando Del Río
 */
public class Reptile extends Animal{

    private String skinType;
    private String bone;
    public String eggType;
    
    public String getSkinType() {
        return skinType;
    }

    public void setSkinType(String skinType) {
        this.skinType = skinType;
    }

    public String getBone() {
        return bone;
    }

    public void setBone(String bone) {
        this.bone = bone;
    }

    public String getEggType() {
        return eggType;
    }

    public void setEgeTypes(String eggType) {
        this.eggType = eggType;
    }

    public Reptile(String skinType, String bone, String eggType, float height, float weight, String type, char bloodType) {
        super(height, weight, type, bloodType);
        this.skinType = skinType;
        this.bone = bone;
        this.eggType = eggType;
    }

    public Reptile(String skinType, String bone, String eggType) {
        this.skinType = skinType;
        this.bone = bone;
        this.eggType = eggType;
    }
    
    @Override
    public String showInfo() {
        return "Animal{" + "height=" + getHeight() 
                + ", weight=" + getWeight() 
                + ", type=" + getType() 
                + ", bloodType=" + getBloodType()
                + ", skinType=" + getSkinType()
                + ", bone=" + getBone()
                + ", eggType=" + getEggType()
        + '}';
    }
    
}
