package com.dev.flipkart;

public class ProductInfo {
	
	@Override
	public String toString() {
		return "ProductInfo [productID=" + productID + ", productName=" + productName + ", productCost=" + productCost
				+ ", productColor=" + productColor + ", description=" + description + "]";
	}
	private int productID;
	private String productName;
	private double productCost;
	private String productColor;
	private String description;
	public int getProductID() {
		return productID;
	}
	public void setProductID(int productID) {
		this.productID = productID;
	}
	public String getProductName() {
		return productName;
	}
	public void setProductName(String productName) {
		this.productName = productName;
	}
	public double getProductCost() {
		return productCost;
	}
	public void setProductCost(double productCost) {
		this.productCost = productCost;
	}
	public String getProductColor() {
		return productColor;
	}
	public void setProductColor(String productColor) {
		this.productColor = productColor;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
}
