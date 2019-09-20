package DataStructure;

public class BinarySearchRecursion {
	
	public static int binarySearch(int a[], int start, int end, int key) {
		int mid=(start+end)/2;
		if(start<=end) {
			if(key==a[mid]) {
				return mid;
				
			}
			else if(key<a[mid])
			{
				return binarySearch(a,start,mid-1,key);	
		}
			else {
				return binarySearch(a,mid+1,end,key);
				}
			}
		return -1;
	}
	public static void main(String[] args) {
		//BinarySearchRecursion b1=new BinarySearchRecursion();
		
		int a[]= {1,2,3,4,5};
		int ref=binarySearch(a,0,a.length,4);
		System.out.println("Mid position :"+ref);
	}

}
