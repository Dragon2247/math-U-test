import java.util.*;
public class methods{
    public static double num1;
    public static double num2;
    public static void main(String[]args){
        Scanner sc = new Scanner(System.in);
        System.out.print("select two numbers:\n");
        num1 = sc.nextDouble();
        num2 = sc.nextDouble();sc.close();
        System.out.print("adding: "+addition(num1,num2)+"\nsubtraction: "+subtraction(num1,num2)+"\nmultiplication: "+multiplication(num1, num2)+"\ndevision: "+devision(num1, num2));
    }
    public static double devision(double num1,double num2){
        return(num1/num2);
    }
    public static  double multiplication(double num1,double num2){
        return(num1*num2);
    }
    public static double addition(double num1,double num2){
        return(num1+num2);
    }
    public static double subtraction(double num1,double num2){
        return(num1-num2);
    } 
}