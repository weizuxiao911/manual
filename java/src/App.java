public class App {
    public static void main(String[] args) throws Exception {
        String s = String.format("%12s", "1234567890").replace(' ', '0');
        System.out.println(s);
    }
}
