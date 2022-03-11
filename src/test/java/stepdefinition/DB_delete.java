package stepdefinition;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;

public class DB_delete {
	
	WebDriver driver = hooks.hook1.driver;
	Object delsuccess = new Object();
	
	@When("user clicks on delete")
	public void user_clicks_on_delete() {
		try{
	    driver.findElement(By.xpath("(//img[@title='Delete'])[2]")).click();}
		catch(Exception e){
			System.out.println("Unable to click Delete Button");
		}
	}

	@Then("the folder should be deleted")
	public void the_folder_should_be_deleted() {
		try{
	    delsuccess = driver.findElement(By.xpath("//div[@class='alert alert-success']")).getText();
	    Assert.assertEquals("The folder has been deleted", delsuccess);
		System.out.println("Folder Deleted");}
		catch(Exception e){
			System.out.println("Validation Message Error");
		}
	}


}
