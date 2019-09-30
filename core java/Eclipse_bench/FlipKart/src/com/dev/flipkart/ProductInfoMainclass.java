package com.dev.flipkart;
import java.util.Scanner;

public class ProductInfoMainclass {

	public static void main(String[] args) {
		ProductInfoImplementation pi =new ProductInfoImplementation();
		Scanner scr=new Scanner(System.in);
		
		
		ProductInfo p1 =new ProductInfo();
		p1.setProductID(101);
		p1.setProductName("Jeans");
		p1.setProductCost(1500.00);
		p1.setProductColor("Blue");
		p1.setDescription(" Blue jeans from flipkartstore  with good quality");
	
		ProductInfo p2 =new ProductInfo();
		p2.setProductID(201);
		p2.setProductName("Washing machine");
		p2.setProductCost(46000.00);
		p2.setProductColor("Gray");
		p2.setDescription(" Gray Washing machine from flipkartstore  with good quality");
	
		ProductInfo p3 =new ProductInfo();
		p3.setProductID(301);
		p3.setProductName("Sofa");
		p3.setProductCost(25500.00);
		p3.setProductColor("Brown & Black");
		p3.setDescription(" Brown & Black Sofa's from flipkartstore  with good quality");
	
		ProductInfo p4 =new ProductInfo();
		p4.setProductID(401);
		p4.setProductName("Pressure cooker");
		p4.setProductCost(4900.00);
		p4.setProductColor("Silver");
		p4.setDescription(" Silver Color Pressure cooker from flipkartstore  with good quality");
		
		
		System.out.println("*********************WELCOME TO FLIPKARTSTORE***************************");
		System.out.println("_________________________________________________________________________");
		System.out.println("Press 1 to display the productsDetails");
		int buttonPress1 = scr.nextInt();
		//System.out.println(buttonPress1);
		if(buttonPress1==1)
		{
		pi.putData("1", p1);
		pi.putData("2", p2);
		pi.putData("3", p3);
		pi.putData("4", p4);
		
		System.out.println(pi.hm);
		}
		else {
			System.out.println("Incorrect Option Selected!!!!! Press 1 to get into ProductDetails ");
		}
		
		System.out.println("Press 2 to Buy the items");
		int buttonPress2 = scr.nextInt();
		if(buttonPress2==2)
		{
		pi.getData("1", p1);
		System.out.println(pi.hm);
		
		System.out.println("Enter CardNumber:");
		long cardNo=scr.nextLong();
		if(cardNo==1234567890123456l) {
			System.out.println("card Number="+cardNo);
			System.out.println("Enter CVV");
			int cvv=scr.nextInt();
			if(cvv==123) {
				System.out.println("cvv:"+cvv);
				System.out.println("Address:mysore");
				/*String addr= scr.nextLine();
				if(addr=="mysore") {
					System.out.println("Address:"+addr);
				}else {System.out.println("check");}*/
			}else {System.out.println("Invalid");}
	
		}else {System.out.println("Invalid Card Number");}
		}
		
		else {System.out.println("Incorrect Option Selected!!!!!! press 2 to buy items");}
	} }
