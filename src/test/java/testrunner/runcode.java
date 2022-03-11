package testrunner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)

@CucumberOptions(
		features = "src/test/java/features",
		//features = "src/test/java/features/NB.feature",
		//features = "src/test/java/features/DB.feature",
	    //features = "src/test/java/features/PA.feature",
		glue = {"stepdefinition","hooks"},
		monochrome = true,
		//dryRun = true,
		plugin = {"pretty","html:reports/cucumber-pretty"})
public class runcode {

}
