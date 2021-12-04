package pages;

import org.openqa.selenium.By;

import java.util.Hashtable;

public class LoginPage extends BasePage {

    public Hashtable<String, By> loginElements;

    public LoginPage() {
        super();
        this.loginElements = new Hashtable<>();
        loginElements.put("email address bar", By.id("txtUserName"));
        loginElements.put("submit login button1", By.cssSelector("#btnLogin"));
        loginElements.put("password bar", By.id("txtPassword"));
        loginElements.put("submit login button2", By.cssSelector("#btnEmailSelect"));
        this.pageElements = loginElements;
    }
}
