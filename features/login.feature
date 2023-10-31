Feature: Test Login Functionality

  Scenario Outline: check login with valid credentials
    Given user is on the login page
    When user enters <username> and password
    And clicks on login button
    Then user sees the Products title

Examples:

| username | 
| standard_user |
| problem_user |
| performance_glitch_user |