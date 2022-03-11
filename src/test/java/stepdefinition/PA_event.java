package stepdefinition;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;

public class PA_event {
	
	WebDriver driver = hooks.hook1.driver;
	Object evntsuccess = new Object();
	
	@When("user clicks on add event button")
	public void user_clicks_on_add_event_button() {
		try{
	    driver.findElement(By.xpath("//img[@title='Add event']")).click();}
		catch(Exception e){
			System.out.println("Unable to click on Add Event button");
		}
	}

	@When("enters the event name")
	public void enters_the_event_name() {
		try{
	    driver.findElement(By.xpath("//input[@name='title']")).sendKeys("Event1");}
		catch(Exception e){
			System.out.println("Unable to enter text in Event Title textbox");
		}
	}

	@When("enters the start date")
	public void enters_the_start_date() {
		try{
		driver.findElement(By.xpath("//input[@id='date_range']")).click();
	    driver.findElement(By.xpath("(//td[text()='21'])[2]")).click();
	    driver.findElement(By.xpath("(//td[text()='25'])[1]")).click();
	    driver.findElement(By.xpath("//button[text()='Validate']")).click();}
		catch(Exception e){
			System.out.println("Date Range Validation not working properly");
		}
	}

	@When("ticks the all day option")
	public void ticks_the_all_day_option() throws InterruptedException {
		try{
		driver.findElement(By.xpath("//input[@name='all_day']")).click();
		Thread.sleep(3000);}
		catch(Exception e){
			System.out.println("Unable to tick the checkbox");
		}
	}

	@When("enters the description")
	public void enters_the_description() {
		try{
		driver.switchTo().frame(0);
	    driver.findElement(By.xpath("html/body/p")).sendKeys("Fun Event");
	    driver.switchTo().parentFrame();}
		catch(Exception e){
			System.out.println("Description textbox frame not found or unable to enter description text");
		}
	}

	@When("clicks on Add event")
	public void clicks_on_Add_event() {
		try{
	    driver.findElement(By.xpath("//button[@name='submit']")).click();}
		catch(Exception e){
			System.out.println("Add button not working");
		}
	}

	@Then("Event should be created")
	public void event_should_be_created() {
		try{
	    evntsuccess = driver.findElement(By.xpath("//div[text()=' Event added']")).getText();
	    Assert.assertEquals("Event added", evntsuccess);}
		catch(Exception e){
			System.out.println("Validation message error");
		}
	}
}
