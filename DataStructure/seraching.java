package DataStructure;

public class seraching {
	
	
	public static void contains(int[] arr, int val) {
		for(int i=0;i<arr.length;i++) {
			if(arr[i]==val) {
				System.out.println(" Value was found at the index  "+i);
			}
			}}
	
	public static boolean containsValue(int[] arr, int val) {
		for(int i=0;i<arr.length;i++) {
		if(arr[i]==val) {
				return true;
		}	}	
		return false;
	} 
	
		
	
	public static void main(String[] args) {
		int arr[] = {1,2,3,4,5};
		 contains(arr,4);
	boolean b1=containsValue(arr,3);
	System.out.println(b1);

	}

}
