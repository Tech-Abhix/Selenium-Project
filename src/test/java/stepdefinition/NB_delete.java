package stepdefinition;

import org.openqa.selenium.Alert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;

public class NB_delete {
	WebDriver driver = hooks.hook1.driver;
	Object delsuccess = new Object();
	

	@When("user clicks on delete button of a particular note")
	public void user_clicks_on_delete_button_of_a_particular_note() throws InterruptedException {
		try{
		driver.findElement(By.xpath("(//img[@title='Delete'])[2]")).click();}
		catch(Exception e){
			System.out.println("Delete button not working");
		}
	}

	@When("clicks OK on the Alert")
	public void clicks_OK_on_the_Alert() {
		try{
		Alert alert = driver.switchTo().alert();
    	alert.accept();}
		catch(Exception e){
			System.out.println("Alert popup not showing");
		}
	}

	@Then("Note should be deleted")
	public void note_should_be_deleted() {
		try{
		delsuccess = driver.findElement(By.xpath("//div[@class='alert alert-success']")).getText();
		Assert.assertEquals("Note deleted", delsuccess);
		System.out.println("Note Deleted");}
		catch(Exception e){
			System.out.println("Validatiion message error");
		}
	}
}
