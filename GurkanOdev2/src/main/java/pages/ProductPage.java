package pages;

import org.openqa.selenium.By;

import java.util.Hashtable;

public class ProductPage extends BasePage {

    public Hashtable<String, By> productElements;

    public ProductPage() {
        this.productElements = new Hashtable<>();
        productElements.put("account in title", new By.ByCssSelector("a[title='Hesabım']"));
        productElements.put("all sellers button", new By.ByCssSelector("a[class='optionsLength']"));
        productElements.put("add to cart button", new By.ByCssSelector("span[class='addToCartButton']"));
        productElements.put("continue to cart button", By.xpath("//*[(text()='Sepete Ekle')]//parent::button//parent::div"));
        productElements.put("my cart button", By.xpath("//*[contains(text(),'Sepetim') and (//span [@class='sf-OldMyAccount-2cv9i sf-OldMyAccount-mWelr'])]//parent::a"));
        productElements.put("account button", new By.ByCssSelector("span[class='sf-OldMyAccount-PhY-T']"));
        productElements.put("logout button", By.xpath("//*[contains(text(),'Çıkış Yap')]"));
        this.pageElements = productElements;
    }
}