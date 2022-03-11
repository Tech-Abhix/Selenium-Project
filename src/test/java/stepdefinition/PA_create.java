package stepdefinition;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;

public class PA_create {
	
	WebDriver driver = hooks.hook1.driver;
	Object agndsuccess = new Object();
	
	@When("user clicks on any date")
	public void user_clicks_on_any_date() {
		try{
	    driver.findElement(By.xpath("(//td[@data-date='2022-03-15'])[2]")).click();}
		catch(Exception e){
			System.out.println("Unable to click on Calendar");
		}
	}

	@When("enters the agenda title")
	public void enters_the_agenda_title() throws InterruptedException {
		try{
	    driver.findElement(By.xpath("//input[@id='title']")).sendKeys("Today's Plan");
	    Thread.sleep(5000);}
		catch(Exception e){
			System.out.println("Unable to enter text in Agenda Title textbox");
		}
	}

	@When("enters the agenda description")
	public void enters_the_agenda_description() {
		try{
	    driver.switchTo().frame(0);
	    driver.findElement(By.xpath("html/body/p")).sendKeys("Target XYZ");
	    driver.switchTo().parentFrame();}
		catch(Exception e1){
			System.out.println("Description textbox frame not found or unable to enter text");
		}
	}

	@When("clicks on Add button")
	public void clicks_on_Add_button() {
		try{
	    driver.findElement(By.xpath("//button/span[text()='Add']")).click();}
		catch(Exception e){
			System.out.println("Add button not orking");
		}
	}

	@Then("agenda should be created")
	public void agenda_should_be_created() {
		try{
	    agndsuccess = driver.findElement(By.xpath("//ul/li[text()=' Agenda']")).getText();
	    Assert.assertEquals("Agenda", agndsuccess);}
		catch(Exception e){
			System.out.println("Validation message error");
		}
	}

}
