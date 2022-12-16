package adelriorz.com.javalab3.Inheritance;

/**
 * @author Armando Del Río
 */
public class Animal {

    private float height;
    private float weight;
    private String type;
    private char bloodType;
    
    public Animal(float height, float weight, String type, char bloodType) {
        this.height = height;
        this.weight = weight;
        this.type = type;
        this.bloodType = bloodType;
    }
    
    public Animal(){}

    public String showInfo() {
        return "Animal{" + "height=" + height + ", weight=" + weight + ", type=" + type + ", bloodType=" + bloodType + '}';
    }
    
    public float getHeight() {
        return height;
    }

    public void setHeight(float height) {
        this.height = height;
    }

    public float getWeight() {
        return weight;
    }

    public void setWeight(float weight) {
        this.weight = weight;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public char getBloodType() {
        return bloodType;
    }

    public void setBloodType(char bloodType) {
        this.bloodType = bloodType;
    }
   
}
