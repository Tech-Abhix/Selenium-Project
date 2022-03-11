package stepdefinition;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class PA_open {
	
	WebDriver driver = hooks.hook1.driver;
	

	@When("clicks on Personal Agenda")
	public void clicks_on_Personal_Agenda() {
		try{
		driver.findElement(By.xpath("//a[text()='Personal agenda']")).click();}
		catch(Exception e){
			System.out.println("Unable to click on Personal Agenda Link");
		}
	}	
	

	@Then("Personal agenda page should open")
	public void personal_agenda_page_should_open() {
	    System.out.println("Personal Agenda opened");
	}

}
