Feature: Google search
  As a search user
  I want to be able to search for terms
  So that I can find information about topics

  @jabberwocky
  Scenario: can find information about Jabberwocky
    # Given the Google search page loaded
    Given I open the url "https://www.google.com"
    # When I search for 'jabberwocky'
    When I add "jabberwocky" to the inputfield ".a4bIc"
    Then I should see 'Lewis Carroll' in the search results
