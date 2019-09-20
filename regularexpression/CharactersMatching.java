package com.dev.regularexpression;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class CharactersMatching {

	public static void main(String[] args) {
		System.out.println("for email id's.");
		Pattern pat = Pattern.compile("\\w+\\@\\w+\\.\\w+"); // for email id's.
		Matcher mat = pat.matcher("qwerty@email.com");
		System.out.println(mat.matches());

		System.out.println("for first, middle, and last name");
		pat = Pattern.compile("\\w+\\s\\w+\\s\\w+"); // for first, middle, and last name
		mat = pat.matcher("Jeevitha Pawar C");
		System.out.println(mat.matches());

		System.out.println("for names with limited chars");
		pat = Pattern.compile("[A-Za-z]{1,25}\\s[A-Za-z]{1,25}"); // for names with limited chars
		mat = pat.matcher("Ivan Shishkin");
		System.out.println(mat.matches());

		System.out.println("for alphanumeric passwords");
		pat = Pattern.compile("\\w+\\W+\\w+"); // for alphanumeric passwords
		mat = pat.matcher("afimf#4df");
		System.out.println(mat.matches());

		/*
		 * {1,25} ----> Atleast 1 and maximum 25
		 */

	}
}