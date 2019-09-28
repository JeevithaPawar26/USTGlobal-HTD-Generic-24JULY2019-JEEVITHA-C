package com.dev.contact;

import java.util.HashSet;
import java.util.Scanner;

public class ContactMainClass {

	public static void main(String[] args) {
		ContactImplementation ci= new ContactImplementation();
		HashSet<Contact> hs= new HashSet<Contact>();

		Scanner scr=new Scanner(System.in);
		
		Contact c1 =new Contact();
		c1.setName("Jaby");
		c1.setNumber(8899995599l);
		c1.setGroup("group-A");
		
		Contact c2 =new Contact();
		c2.setName("Smith");
		c2.setNumber(2233445599l);
		c2.setGroup("group-B");

		Contact c3 =new Contact();
		c3.setName("Miller");
		c3.setNumber(9988445997l);
		c3.setGroup("group-C");
		
		Contact c4 =new Contact();
		c4.setName("Borack");
		c4.setNumber(9900005997l);
		c4.setGroup("group-D");
	
		Contact c5 =new Contact();
		c5.setName("Donald");
		c5.setNumber(9900445110l);
		c5.setGroup("group-E");
	
		
		System.out.println("*******************************************************");
		System.out.println("Press 1 to list all the contact");
		int buttonPress1 = scr.nextInt();
		
		if(buttonPress1==1)
		{
		ci.putData("1", c1);
		ci.putData("2", c2);
		ci.putData("3", c3);
		System.out.println(ci.hm);
		}
		else {
			System.out.println("Incorrect Option Selected!!!!! Press 1 to list all the contact");
			//goto first;
		}
		System.out.println("--------------------------------------------------------------------------------------------------------------------------------------------");
		System.out.println("Press 2 to search the contact");
		int buttonPress2 = scr.nextInt();
		if(buttonPress2==2) {
			System.out.println("Contains()---> contact-1");
			ci.containsData("1",c2);
			System.out.println("Press 1 to call");
			int press1 = scr.nextInt();
			if(press1==1) {
				System.out.println("call");
				
			}else {
				System.out.println("invalid!!!");
			}
			
			System.out.println("Press 2 to message");
			int press2 = scr.nextInt();
			if(press2==2) {
				System.out.println("message");
				
			}else {
				System.out.println("invalid!!!");
			}
			
			System.out.println("Press 3 to go back to main menu");
			int press3 = scr.nextInt();
			if(press3==3) {
				System.out.println("back to menu");
				
			}else {
				System.out.println("invalid!!!");
			}
		}
		else {
			System.out.println("Invalid Option selected!!!!!!!!!!!!!!!!!");
		}
		
		System.out.println("------------------------------------------------------------------------------------------------------");
		System.out.println("Press 3 to perform operation------>");
		int buttonPress3 = scr.nextInt();
		if(buttonPress3==3) {
			System.out.println("press 1 to add contact");
			int p1 = scr.nextInt();
			if(p1==1) {
				System.out.println("Adding Contacts----->");
				ci.putData("1", c1);
				ci.putData("2", c2);
				ci.putData("3", c3);
				ci.putData("4", c4);
				ci.putData("5", c5);
				System.out.println(ci.hm);
				}else {
					System.out.println("Invalid....");
				}
			System.out.println("press 2 to delete contact");
			int p2 = scr.nextInt();
			if(p2==2) {
				System.out.println("Deleting Contacts----->");
				ci.removeData("2", c2);
				ci.removeData("3", c3);
				ci.removeData("4", c3);
				ci.removeData("5", c3);
				System.out.println(ci.hm);
				}else {
					System.out.println("Invalid....");
				}
			System.out.println("press 3 to edit contact");
			int p3 = scr.nextInt();
			if(p3==3) {
				System.out.println("Editing Contacts----->");
				c1.setName("David");
				c1.setNumber(8899995599l);
				c1.setGroup("group-M");
				
				c5.setName("Jack");
				c5.setNumber(9900445110l);
				c5.setGroup("group-Z");
				
				ci.putData("1", c1);
				ci.putData("5", c5);
				System.out.println(ci.hm);
			
				}else {
					System.out.println("Invalid....");
				}
			}else {
				System.out.println("invalid!!!");
			}
	}

}
