package stepdefinition;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;

public class NB_create {
	
	WebDriver driver = hooks.hook1.driver;
	Object crsuccess = new Object();
	
	@When("User clicks on Add new notebook in my personal notebook")
	public void user_clicks_on_Add_new_notebook_in_my_personal_notebook() {
		try{
	    driver.findElement(By.xpath("//img[@title='Add new note in my personal notebook']")).click();}
		catch(Exception e){
			System.out.println("Add new note button is not working");
		}
	}

	@Then("Notes creation page should open")
	public void notes_creation_page_should_open() {
	    //System.out.println("Create new note page");
	}

	@When("user clicks on Note Title textbox")
	public void user_clicks_on_Note_Title_textbox() {
	    // Write code here that turns the phrase above into concrete actions
	}

	@When("enters the title name")
	public void enters_the_title_name() {
		try{
		driver.findElement(By.xpath("//input[@id='note_title']")).sendKeys("Note3");}
		catch(Exception e){
			System.out.println("Unable to enter NoteTitle text");
		}
	}

	@When("clicks on Note details textbox")
	public void clicks_on_Note_details_textbox() throws InterruptedException {
		Thread.sleep(5000);
	}

	@When("enters the notes")
	public void enters_the_notes() {
		try{
	    driver.switchTo().frame(0);
	    driver.findElement(By.xpath("html/body/p")).sendKeys("This is a note");
	    driver.switchTo().parentFrame();}
		catch(Exception e){
			System.out.println("Notes textbox frame not found or unable to enter notes text");
		}
	}

	@When("click on the Create Note button")
	public void click_on_the_Create_Note_button() {
		try{
	    driver.findElement(By.xpath("//button[@name='SubmitNote']")).click();}
		catch(Exception e){
			System.out.println("Create note button not working");
		}
	}
	

	@Then("Note should be created")
	public void note_should_be_created() {
		try{
	    crsuccess = driver.findElement(By.xpath("//div[@class='alert alert-success']")).getText();
	    Assert.assertEquals("Note added", crsuccess);
	    System.out.println("Note Created");}
		catch(Exception e){
			System.out.println("Validatiion message error");
		}
	}

}
