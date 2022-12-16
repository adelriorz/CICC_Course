package ThirdLine;

import SecondLine.Fish;

/**
 * @author Armando Del Rio
 */
public class Eel extends Fish{
    
    private boolean releaseElectricCharge;

    public Eel(String livesIn, boolean hasGills, float height, float weight, String type, char bloodType) {
        super(livesIn, hasGills, height, weight, type, bloodType);
    }
        
    public Eel(String livesIn, boolean hasGills, float height, float weight, String type, char bloodType, boolean releaseElectricCharge) {
        super(livesIn, hasGills, height, weight, type, bloodType);
        this.releaseElectricCharge = releaseElectricCharge;
    }

    public boolean isReleaseElectricCharge() {
        return releaseElectricCharge;
    }

    public void setReleaseElectricCharge(boolean releaseElectricCharge) {
        this.releaseElectricCharge = releaseElectricCharge;
    }
    
    @Override
    public String showInfo() {
        return "Animal{" + "height=" + getHeight() 
                + ", weight=" + getWeight() 
                + ", type=" + getType() 
                + ", bloodType=" + getBloodType()
                + ", livesIn=" + getLivesIn()
                + ", hasGills=" + isHasGills()
                + ", releaseElectricCharge=" + isReleaseElectricCharge()
        + '}';
    }
}
