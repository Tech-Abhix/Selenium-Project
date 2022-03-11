package stepdefinition;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;

public class NB_sortT {
	WebDriver driver = hooks.hook1.driver;
	Object srtsuccess = new Object();
	
	@When("user clicks on Sort by Title")
	public void user_clicks_on_Sort_by_Title() {
		try{
		driver.findElement(By.xpath("//img[@title='Sort by title']")).click();}
		catch(Exception e){
			System.out.println("Sort by Title button not working");
		}
	}

	@Then("All the notes should be sort according to the title descendingly")
	public void all_the_notes_should_be_sort_according_to_the_title_descendingly() {
		try{
		srtsuccess = driver.findElement(By.xpath("//div[@class='alert alert-success']")).getText();
		Assert.assertEquals("Notes sorted by title downward", srtsuccess);
		System.out.println("Note Sorted");}
		catch(Exception e){
			System.out.println("Validatiion message error");
		}
	}

	@When("user again clicks on Sort by Title")
	public void user_again_clicks_on_Sort_by_Title() {
		try{
		driver.findElement(By.xpath("//img[@title='Sort by title']")).click();}
		catch(Exception e){
			System.out.println("Sort by Title button not working");
		}
	}

	@Then("All the notes should be sort according to the title ascendingly")
	public void all_the_notes_should_be_sort_according_to_the_title_ascendingly() {
		try{
		srtsuccess = driver.findElement(By.xpath("//div[@class='alert alert-success']")).getText();
		Assert.assertEquals("Notes sorted by title ascendant", srtsuccess);
		System.out.println("Note Sorted");}
		catch(Exception e){
			System.out.println("Validatiion message error");
		}
	}

}
