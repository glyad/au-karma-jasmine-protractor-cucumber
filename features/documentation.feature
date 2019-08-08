# "features/documentation.feature"
Feature: Sample feature
  As a user of aurelia.js
  I want to have documentation on aurelia
  So that I can concentrate on building awesome applications

  Scenario: Reading documentation
    Given I am on the aurelia js org web site
    When I click on "Get Started"
    Then I should see "Download the Basic Aurelia Project Setup"
