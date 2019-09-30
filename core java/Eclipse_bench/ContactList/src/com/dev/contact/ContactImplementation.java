package com.dev.contact;
import java.util.HashMap;
import java.util.HashSet;


public class ContactImplementation implements ContactInterface {
	
	HashMap<String,Contact> hm=new HashMap<>();
	
	@Override
	public Contact putData(String k, Contact con) {
		if(k!=null && con!=null) {
			 Contact data=hm.put(k, con);
			 return data;	
		}
		
		return null;
	}

	@Override
	public Contact containsData(String k, Contact con) {
		boolean data=hm.containsKey(k);
		System.out.println(data);
		return null;
	}

	@Override
	public void getData(String k, Contact con) {
		System.out.println(hm);
		
	}

	@Override
	public Contact removeData(String k, Contact con) {
		Contact data=hm.remove(k);
		return null;
	}

}
