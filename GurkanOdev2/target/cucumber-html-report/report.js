$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/e-commerce.feature");
formatter.feature({
  "name": "E-commerce",
  "description": "",
  "keyword": "Feature"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I initialize chrome driver",
  "keyword": "Given "
});
formatter.match({
  "location": "MySteps.initializeChromeDriver(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I go to \"https://www.hepsiburada.com/\" url",
  "keyword": "When "
});
formatter.match({
  "location": "MySteps.gotoURL(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I see home page",
  "keyword": "Then "
});
formatter.match({
  "location": "MySteps.seePage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "1 - Add product to cart with user login",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@gurkan"
    }
  ]
});
formatter.step({
  "name": "I focus sign in title element",
  "keyword": "When "
});
formatter.match({
  "location": "MySteps.mouseHover(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click element: login button index: 1",
  "keyword": "When "
});
formatter.match({
  "location": "MySteps.clickElement(String,int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I see login page",
  "keyword": "Then "
});
formatter.match({
  "location": "MySteps.seePage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter \"grkn_gk@hotmail.com\" text to email address bar text area",
  "keyword": "When "
});
formatter.match({
  "location": "MySteps.enterText(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click element: submit login button1 index: 1",
  "keyword": "Then "
});
formatter.match({
  "location": "MySteps.clickElement(String,int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter \"beykoz08\" text to password bar text area",
  "keyword": "When "
});
formatter.match({
  "location": "MySteps.enterText(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click element: submit login button2 index: 1",
  "keyword": "Then "
});
formatter.match({
  "location": "MySteps.clickElement(String,int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I see home page",
  "keyword": "When "
});
formatter.match({
  "location": "MySteps.seePage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I wait for 2 seconds",
  "keyword": "Then "
});
formatter.match({
  "location": "MySteps.waitForNSeconds(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter \"kedi maması\" text to search input box text area",
  "keyword": "When "
});
formatter.match({
  "location": "MySteps.enterText(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click \"ENTER\" keyboard button",
  "keyword": "Then "
});
formatter.match({
  "location": "MySteps.clickKeyboard(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I see search results page",
  "keyword": "And "
});
formatter.match({
  "location": "MySteps.seePage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I focus product results button element",
  "keyword": "When "
});
formatter.match({
  "location": "MySteps.mouseHover(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click element: product results button index: 1",
  "keyword": "Then "
});
formatter.match({
  "location": "MySteps.clickElement(String,int)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});