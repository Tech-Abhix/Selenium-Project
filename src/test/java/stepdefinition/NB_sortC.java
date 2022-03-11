package stepdefinition;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;

public class NB_sortC {
	WebDriver driver = hooks.hook1.driver;
	Object srtsuccess = new Object();
	
	@When("user clicks on Sort by Date created")
	public void user_clicks_on_Sort_by_Date_created() {
		try{
	    driver.findElement(By.xpath("//img[@title='Sort by date created']")).click();}
		catch(Exception e){
			System.out.println("Sort by Creation Date button not working");
		}
	}
	
	@Then("All the notes should be sort according to the creation date descendingly")
	public void all_the_notes_should_be_sort_according_to_the_creation_date_descendingly() {
		try{
		srtsuccess = driver.findElement(By.xpath("//div[@class='alert alert-success']")).getText();
		Assert.assertEquals("Notes sorted by creation date downward", srtsuccess);
		System.out.println("Note Sorted");}
		catch(Exception e){
			System.out.println("Validatiion message error");
		}
	}

	@When("user again clicks on Sort by Date created")
	public void user_again_clicks_on_Sort_by_Date_created() {
		try{
	    driver.findElement(By.xpath("//img[@title='Sort by date created']")).click();}
		catch(Exception e){
			System.out.println("Sort by Creation Date button not working");
		}
	}
	
	@Then("All the notes should be sort according to the creation date ascendingly")
	public void all_the_notes_should_be_sort_according_to_the_creation_date_ascendingly() {
		try{
		srtsuccess = driver.findElement(By.xpath("//div[@class='alert alert-success']")).getText();
		Assert.assertEquals("Notes sorted by creation date ascendant", srtsuccess);
		System.out.println("Note Sorted");}
		catch(Exception e){
			System.out.println("Validatiion message error");
		}
	}

}
