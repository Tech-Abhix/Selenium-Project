Feature: Personal Agenda

  Background: Login to Open Personal Agenda
    Given User is on the web application
    When user enters "Abhix" and "12345"
    And clicks login button
    And clicks on Personal Agenda
    Then Personal agenda page should open

  Scenario Outline: Create an Agenda
    When user clicks on any date
    And enters the agenda title
    And enters the agenda description
    And clicks on Add button
    Then agenda should be created

    Examples: 
      |  |  |
      |  |  |

  Scenario Outline: Create an Event
    When user clicks on add event button
    And enters the event name
    And enters the start date
    And ticks the all day option
    And enters the description
    And clicks on Add event
    Then Event should be created

    Examples: 
      |  |  |
      |  |  |
