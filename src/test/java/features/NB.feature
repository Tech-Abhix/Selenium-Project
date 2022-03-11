Feature: Notebook

  Background: Login to Open Notebook
    Given User is on the web application
    When user enters "Abhix" and "12345"
    And clicks login button
    Then user navigate to the My Courses tab
    When User clicks on the subscribed course title
    Then Course menu should open
    When User scrolls down
    And clicks on Notebook tab
    Then Notebook dashboard should open

  Scenario Outline: Verify Note Creation
    When User clicks on Add new notebook in my personal notebook
    Then Notes creation page should open
    When user clicks on Note Title textbox
    And enters the title name
    And clicks on Note details textbox
    And enters the notes
    And click on the Create Note button
    Then Note should be created

    Examples: 
      |  |  |
      |  |  |

  Scenario Outline: Verify Note Delete
    When user clicks on delete button of a particular note
    And clicks OK on the Alert
    Then Note should be deleted

    Examples: 
      |  |  |
      |  |  |

  Scenario Outline: Verify Sort by Date Created
    When user clicks on Sort by Date created
    Then All the notes should be sort according to the creation date descendingly
    When user again clicks on Sort by Date created
    Then All the notes should be sort according to the creation date ascendingly

    Examples: 
      |  |  |
      |  |  |

  Scenario Outline: Verify Sort by Date Modified
    When user clicks on Sort by Date modified
    Then All the notes should be sort according to the modification date descendingly
    When user again clicks on Sort by Date modified
    Then All the notes should be sort according to the modification date ascendingly

    Examples: 
      |  |  |
      |  |  |

  Scenario Outline: Verify Sort by Title
    When user clicks on Sort by Title
    Then All the notes should be sort according to the title descendingly
    When user again clicks on Sort by Title
    Then All the notes should be sort according to the title ascendingly

    Examples: 
      |  |  |
      |  |  |