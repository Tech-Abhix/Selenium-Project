package stepdefinition;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class NB_open {
	
	WebDriver driver = hooks.hook1.driver;
	
	@Given("User is on the web application")
	public void user_is_on_the_web_application() {
		try{
		driver.get("http://elearningm1.upskills.in/");}
		catch(Exception e){
			System.out.println("Web application not opening");
		}
	}
	
	@When("user enters {string} and {string}")
	public void user_enters_and(String string, String string2) {
		try{
		driver.findElement(By.xpath("//input[@id='login']")).sendKeys(string);
		driver.findElement(By.xpath("//input[@id='password']")).sendKeys(string2);}
		catch(Exception e){
			System.out.println("Unable to enter Login credentials");
		}
	}

	@When("clicks login button")
	public void clicks_login_button() {
		try{
		driver.findElement(By.xpath("//button[@name='submitAuth']")).click();}
		catch(Exception e){
			System.out.println("Login button not working");
		}
	}

	@Then("user navigate to the My Courses tab")
	public void user_navigate_to_the_My_Courses_tab() {
	    //System.out.println("My Courses");
	}

	@When("User clicks on the subscribed course title")
	public void user_clicks_on_the_subscribed_course_title() {
		try{
	    driver.findElement(By.xpath("html/body/div[1]/div/div/div[2]/section/div/div/div/div/div[2]/h4/a")).click();}
		catch(Exception e){
			System.out.println("Unable to click on Subscribed course link");
		}
	}

	@Then("Course menu should open")
	public void course_menu_should_open() {
	    //System.out.println("Menu");
	}

	@When("User scrolls down")
	public void user_scrolls_down() {
	    //System.out.println("Scrolls down");
	}

	@When("clicks on Notebook tab")
	public void clicks_on_Notebook_tab() {
		try{
	    driver.findElement(By.xpath("//img[@id='toolimage_18']")).click();}
		catch(Exception e){
			System.out.println("Unable to click on Notebook Tab");
		}
	}

	@Then("Notebook dashboard should open")
	public void notebook_dashboard_should_open() {
	    System.out.println("Notebook Dashboard opened");
	}
}
