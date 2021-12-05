Feature: E-commerce

  Background:
    Given I initialize chrome driver
    When I go to "https://www.hepsiburada.com/" url
    Then I see home page

  @gurkan
  Scenario: 1 - Add product to cart with user login
    When I focus sign in title element
    When I click element: login button index: 1
    Then I see login page

    When I enter "grkn_gk@hotmail.com" text to email address bar text area
    Then I click element: submit login button1 index: 1

    When I enter "" text to password bar text area
    Then I click element: submit login button2 index: 1

    When I see home page
    Then I wait for 2 seconds

    When I enter "kedi maması" text to search input box text area
                Then I click "ENTER" keyboard button
                And I see search results page

        When I focus product results button element
        Then I click element: product results button index: 1













