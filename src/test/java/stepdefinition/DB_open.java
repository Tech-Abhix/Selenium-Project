package stepdefinition;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class DB_open {
	
	WebDriver driver = hooks.hook1.driver;

	@When("clicks on Dropbox tab")
	public void clicks_on_Dropbox_tab() {
		try{
		driver.findElement(By.xpath("//img[@id='toolimage_9']")).click();}
		catch(Exception e){
			System.out.println("Unable to click on Dropbox Tab");
		}
	}

	@Then("Dropbox dashboard should open")
	public void dropbox_dashboard_should_open() {
		System.out.println("Dropbox opened");
	}
}
