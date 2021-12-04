package pages;

import org.openqa.selenium.By;

import java.util.Hashtable;

public class SearchResultsPage extends BasePage {

    public Hashtable<String, By> searchResultsElements;

    public SearchResultsPage() {
        this.searchResultsElements = new Hashtable<>();
        searchResultsElements.put("account in title", new By.ByCssSelector("a[title='Hesabım']"));
        searchResultsElements.put("product results button", new By.ByCssSelector("li[id='i0']"));
        searchResultsElements.put("all sellers button", new By.ByCssSelector("a[class='optionsLength']"));
        searchResultsElements.put("add button", new By.ByCssSelector("div[class='moria-ProductCard-bUvbGA hdiR sf4uk38zw0v']"));
        searchResultsElements.put("my cart button", By.xpath("//*[contains(text(),'Sepetim') and (//span [@class='sf-OldMyAccount-2cv9i sf-OldMyAccount-mWelr'])]//parent::a"));
        searchResultsElements.put("account button", new By.ByCssSelector("span[class='sf-OldMyAccount-PhY-T']"));
        searchResultsElements.put("my account", new By.ByCssSelector("a[title='Hesabım'] span[class='sf-OldMyAccount-PhY-T']"));
        searchResultsElements.put("logout button", new By.ByCssSelector("li[class='sf-OldMyAccount-1PsmN'] a[rel='nofollow']"));
        this.pageElements = searchResultsElements;
    }
}