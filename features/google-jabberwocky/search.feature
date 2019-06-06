Feature: Google search
  As a search user
  I want to be able to search for terms
  So that I can find information about topics

  @jabberwocky
  Scenario: can find information about Jabberwocky
    Given the Google search page loaded
    When I search for 'jabberwocky'
    Then I should see 'Lewis Carroll' in the search results
