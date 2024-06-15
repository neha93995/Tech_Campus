import java.util.LinkedHashMap;
import java.util.TreeMap;

public class Hello{
    public static void main(String[] args) {
        TreeMap hm = new TreeMap();

        hm.put(1, null);
        hm.put(2, null);
        hm.put(3, null);
        hm.put(4, 6767);

        System.out.println(hm);
    }
}