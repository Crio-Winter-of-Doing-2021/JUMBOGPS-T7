import java.util.*;

public class Temperatures {
    public static final int FREEZE_POINT = 32;

    public static int high, secondHigh;
    public static int negativeCount = 0, belowFreezeCount = 0;

    public static void main(String[] args) {
        try (Scanner sc = new Scanner(System.in)) {
            System.out.print("Enter the first temperature Fahrenheit: ");
            high = sc.nextInt();
            updateCounts(high);
            System.out.print("Enter the second temperature Fahrenheit: ");
            secondHigh = sc.nextInt();
            updateCounts(secondHigh);
            if (secondHigh > high)
                swapTwoHighest();

            int temp;
            System.out.print("Enter another temperature Fahrenheit or Q to quit:");

            while (sc.hasNextInt()) {

                System.out.print("Enter another temperature Fahrenheit or Q to quit:");
                temp = sc.nextInt();
                updateCounts(temp);
                if (temp > secondHigh)
                    secondHigh = temp;
                if (secondHigh > high)
                    swapTwoHighest();
            }
            System.out.println("Number of negative temperatures: " + negativeCount);
            System.out.println("Number of below freezing point temperatures: " + belowFreezeCount);
            System.out.println("The highest temperature: " + high);
            System.out.println("The second highest temperature: " + secondHigh);

        }
    }

    // Swaps the two highest temperatures stored in high and secondHigh
    private static void swapTwoHighest() {
        int temp = high;
        high = secondHigh;
        secondHigh = temp;
    }

    private static void updateCounts(int value) {
        if (value < 32)
            belowFreezeCount += 1;
        if (value < 0)
            negativeCount += 1;
    }
}