package stepsDescription;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;

public class CreateContactsStepsDescription 
{
	WebDriver driver;
	Actions action;
	
	@Given("^application already opened on the browser$")
	public void application_already_opened_on_the_browser()
	{
		System.setProperty("webdriver.chrome.driver", "D:\\Selenium\\chromedriver_win32_2.41\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.manage().window().maximize();
		driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
		driver.get("https://www.freecrm.com");
	}
	
	@SuppressWarnings("deprecation")
	@And("^title of login page is free crm$")
	public void title_of_login_page_is_free_crm()
	{
		String title = driver.getTitle();
		System.out.println("Title of login page is :"+title);
		Assert.assertEquals("#1 Free CRM software in the cloud for sales and service", title);
	}
	
	@When("^enter username and password$")
	public void enter_username_and_password()
	{
		driver.findElement(By.xpath("//input[@name='username']")).sendKeys("saketkumar");
		driver.findElement(By.xpath("//input[@name='password']")).sendKeys("Saket@1992");
		WebElement loginbtn = driver.findElement(By.xpath("//input[@type='submit']"));
		JavascriptExecutor js = (JavascriptExecutor)driver;
		js.executeScript("arguments[0].click();", loginbtn);
	}
	
	@And("^user is on homepage of CRM$")
	public void user_is_on_homepage_of_CRM()
	{
		driver.switchTo().frame("mainpanel");
		String text1 = driver.findElement(By.xpath("//td[contains(text(),'User: Saket kumar')]")).getText();
		if(text1.contains("Saket"))
		{
			System.out.println("Home Page is Verified");
		}
	}
	@Then("^click on create new contact$")
	public void click_on_create_new_contact()
	{ 
		action= new Actions(driver);
		action.moveToElement(driver.findElement(By.xpath("//a[contains(text(), 'Contacts')]"))).build().perform();
		driver.findElement(By.xpath("//a[@title='New Contact']")).click();
	}
	@And("^Enter \"(.*)\" and \"(.*)\" and \"(.*)\"$")
	public void enter_value_to_create_new_contact(String firstname, String lastname, String company)
	{
		driver.findElement(By.xpath("//input[@id='first_name']")).sendKeys(firstname);
		driver.findElement(By.xpath("//input[@id='surname']")).sendKeys(lastname);
		driver.findElement(By.xpath("//input[@name='client_lookup']")).sendKeys(company);
		driver.findElement(By.xpath("//input[@value='Save and Create Another (same company)']")).click();
	}
	@Then("^close browser$")
	public void close_browser()
	{
		driver.quit();
	}
			

}
