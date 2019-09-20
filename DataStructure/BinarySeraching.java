package DataStructure;

public class BinarySeraching {
	
	public static int binarySerach(int a[], int key) {
		int start=0;
		int end= a.length-1;
		while(start<=end) {
			int mid=(start+end)/2;
			if(key==a[mid])
			{    
				return mid;
			}
			
			if(key<a[mid]) {
				end=mid-1;
				System.out.println(end);
			}
			else {
				start=mid+1;
				System.out.println(start);
			}
		}
		return -1;
	}

	public static void main(String[] args) {
		
		int a[]= {10,20,30,40,50,60};
		int ref=binarySerach(a,30);
		System.out.println("Position:"+ref);
	
		
	
	}

}
