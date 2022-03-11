Feature: Dropbox

  Background: Login to Open Dropbox
    Given User is on the web application
    When user enters "Abhix" and "12345"
    And clicks login button
    Then user navigate to the My Courses tab
    When User clicks on the subscribed course title
    Then Course menu should open
    When User scrolls down
    And clicks on Dropbox tab
    Then Dropbox dashboard should open

  Scenario Outline: Dropbox Folder Create
    When user clicks on Add a new folder
    And enters the category name
    And clicks on Create Category
    Then ne folder should be created

    Examples: 
      |  |  |
      |  |  |

  Scenario Outline: Dropbox Folder Delete
    When user clicks on delete
    And clicks OK on the Alert
    Then the folder should be deleted

    Examples: 
      |  |  |
      |  |  |
