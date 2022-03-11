package stepdefinition;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;

public class DB_create {
	
	WebDriver driver = hooks.hook1.driver;
	Object crtsuccess = new Object();
	
	@When("user clicks on Add a new folder")
	public void user_clicks_on_Add_a_new_folder() {
		try{
	    driver.findElement(By.xpath("//img[@title='Add a new folder']")).click();}
		catch(Exception e){
			System.out.println("Unable to click on Add New Folder button");
		}		
	}

	@When("enters the category name")
	public void enters_the_category_name() {
		try{
	    driver.findElement(By.xpath("//input[@name='category_name']")).sendKeys("F2");}
		catch(Exception e){
			System.out.println("Unable to write anything in the textbox");
		}
	}

	@When("clicks on Create Category")
	public void clicks_on_Create_Category() {
		try{
	    driver.findElement(By.xpath("//button[@name='StoreCategory']")).click();}
		catch(Exception e){
			System.out.println("Create button not working");
		}
	}

	@Then("ne folder should be created")
	public void ne_folder_should_be_created() {
		try{
		crtsuccess = driver.findElement(By.xpath("//div[@class='alert alert-success']")).getText();
		Assert.assertEquals("The folder has been created", crtsuccess);
		System.out.println("Folder Created");}
		catch(Exception e){
			System.out.println("Validation message error");
		}
	}


}
