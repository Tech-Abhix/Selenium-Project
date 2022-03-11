$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/features/DB.feature");
formatter.feature({
  "name": "Dropbox",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Dropbox Folder Create",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user clicks on Add a new folder",
  "keyword": "When "
});
formatter.step({
  "name": "enters the category name",
  "keyword": "And "
});
formatter.step({
  "name": "clicks on Create Category",
  "keyword": "And "
});
formatter.step({
  "name": "ne folder should be created",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "",
        ""
      ]
    },
    {
      "cells": [
        "",
        ""
      ]
    }
  ]
});
formatter.background({
  "name": "Login to Open Dropbox",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on the web application",
  "keyword": "Given "
});
formatter.match({
  "location": "NB_open.user_is_on_the_web_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"Abhix\" and \"12345\"",
  "keyword": "When "
});
formatter.match({
  "location": "NB_open.user_enters_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks login button",
  "keyword": "And "
});
formatter.match({
  "location": "NB_open.clicks_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user navigate to the My Courses tab",
  "keyword": "Then "
});
formatter.match({
  "location": "NB_open.user_navigate_to_the_My_Courses_tab()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on the subscribed course title",
  "keyword": "When "
});
formatter.match({
  "location": "NB_open.user_clicks_on_the_subscribed_course_title()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Course menu should open",
  "keyword": "Then "
});
formatter.match({
  "location": "NB_open.course_menu_should_open()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User scrolls down",
  "keyword": "When "
});
formatter.match({
  "location": "NB_open.user_scrolls_down()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks on Dropbox tab",
  "keyword": "And "
});
formatter.match({
  "location": "DB_open.clicks_on_Dropbox_tab()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Dropbox dashboard should open",
  "keyword": "Then "
});
formatter.match({
  "location": "DB_open.dropbox_dashboard_should_open()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Dropbox Folder Create",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user clicks on Add a new folder",
  "keyword": "When "
});
formatter.match({
  "location": "DB_create.user_clicks_on_Add_a_new_folder()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enters the category name",
  "keyword": "And "
});
formatter.match({
  "location": "DB_create.enters_the_category_name()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks on Create Category",
  "keyword": "And "
});
formatter.match({
  "location": "DB_create.clicks_on_Create_Category()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "ne folder should be created",
  "keyword": "Then "
});
formatter.match({
  "location": "DB_create.ne_folder_should_be_created()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Dropbox Folder Delete",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user clicks on delete",
  "keyword": "When "
});
formatter.step({
  "name": "clicks OK on the Alert",
  "keyword": "And "
});
formatter.step({
  "name": "the folder should be deleted",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "",
        ""
      ]
    },
    {
      "cells": [
        "",
        ""
      ]
    }
  ]
});
formatter.background({
  "name": "Login to Open Dropbox",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on the web application",
  "keyword": "Given "
});
formatter.match({
  "location": "NB_open.user_is_on_the_web_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"Abhix\" and \"12345\"",
  "keyword": "When "
});
formatter.match({
  "location": "NB_open.user_enters_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks login button",
  "keyword": "And "
});
formatter.match({
  "location": "NB_open.clicks_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user navigate to the My Courses tab",
  "keyword": "Then "
});
formatter.match({
  "location": "NB_open.user_navigate_to_the_My_Courses_tab()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on the subscribed course title",
  "keyword": "When "
});
formatter.match({
  "location": "NB_open.user_clicks_on_the_subscribed_course_title()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Course menu should open",
  "keyword": "Then "
});
formatter.match({
  "location": "NB_open.course_menu_should_open()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User scrolls down",
  "keyword": "When "
});
formatter.match({
  "location": "NB_open.user_scrolls_down()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks on Dropbox tab",
  "keyword": "And "
});
formatter.match({
  "location": "DB_open.clicks_on_Dropbox_tab()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Dropbox dashboard should open",
  "keyword": "Then "
});
formatter.match({
  "location": "DB_open.dropbox_dashboard_should_open()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Dropbox Folder Delete",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user clicks on delete",
  "keyword": "When "
});
formatter.match({
  "location": "DB_delete.user_clicks_on_delete()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks OK on the Alert",
  "keyword": "And "
});
formatter.match({
  "location": "NB_delete.clicks_OK_on_the_Alert()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the folder should be deleted",
  "keyword": "Then "
});
formatter.match({
  "location": "DB_delete.the_folder_should_be_deleted()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/java/features/NB.feature");
formatter.feature({
  "name": "Notebook",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Verify Note Creation",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User clicks on Add new notebook in my personal notebook",
  "keyword": "When "
});
formatter.step({
  "name": "Notes creation page should open",
  "keyword": "Then "
});
formatter.step({
  "name": "user clicks on Note Title textbox",
  "keyword": "When "
});
formatter.step({
  "name": "enters the title name",
  "keyword": "And "
});
formatter.step({
  "name": "clicks on Note details textbox",
  "keyword": "And "
});
formatter.step({
  "name": "enters the notes",
  "keyword": "And "
});
formatter.step({
  "name": "click on the Create Note button",
  "keyword": "And "
});
formatter.step({
  "name": "Note should be created",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "",
        ""
      ]
    },
    {
      "cells": [
        "",
        ""
      ]
    }
  ]
});
formatter.background({
  "name": "Login to Open Notebook",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on the web application",
  "keyword": "Given "
});
formatter.match({
  "location": "NB_open.user_is_on_the_web_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"Abhix\" and \"12345\"",
  "keyword": "When "
});
formatter.match({
  "location": "NB_open.user_enters_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks login button",
  "keyword": "And "
});
formatter.match({
  "location": "NB_open.clicks_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user navigate to the My Courses tab",
  "keyword": "Then "
});
formatter.match({
  "location": "NB_open.user_navigate_to_the_My_Courses_tab()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on the subscribed course title",
  "keyword": "When "
});
formatter.match({
  "location": "NB_open.user_clicks_on_the_subscribed_course_title()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Course menu should open",
  "keyword": "Then "
});
formatter.match({
  "location": "NB_open.course_menu_should_open()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User scrolls down",
  "keyword": "When "
});
formatter.match({
  "location": "NB_open.user_scrolls_down()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks on Notebook tab",
  "keyword": "And "
});
formatter.match({
  "location": "NB_open.clicks_on_Notebook_tab()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Notebook dashboard should open",
  "keyword": "Then "
});
formatter.match({
  "location": "NB_open.notebook_dashboard_should_open()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify Note Creation",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User clicks on Add new notebook in my personal notebook",
  "keyword": "When "
});
formatter.match({
  "location": "NB_create.user_clicks_on_Add_new_notebook_in_my_personal_notebook()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Notes creation page should open",
  "keyword": "Then "
});
formatter.match({
  "location": "NB_create.notes_creation_page_should_open()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on Note Title textbox",
  "keyword": "When "
});
formatter.match({
  "location": "NB_create.user_clicks_on_Note_Title_textbox()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enters the title name",
  "keyword": "And "
});
formatter.match({
  "location": "NB_create.enters_the_title_name()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks on Note details textbox",
  "keyword": "And "
});
formatter.match({
  "location": "NB_create.clicks_on_Note_details_textbox()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enters the notes",
  "keyword": "And "
});
formatter.match({
  "location": "NB_create.enters_the_notes()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on the Create Note button",
  "keyword": "And "
});
formatter.match({
  "location": "NB_create.click_on_the_Create_Note_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Note should be created",
  "keyword": "Then "
});
formatter.match({
  "location": "NB_create.note_should_be_created()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Verify Note Delete",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user clicks on delete button of a particular note",
  "keyword": "When "
});
formatter.step({
  "name": "clicks OK on the Alert",
  "keyword": "And "
});
formatter.step({
  "name": "Note should be deleted",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "",
        ""
      ]
    },
    {
      "cells": [
        "",
        ""
      ]
    }
  ]
});
formatter.background({
  "name": "Login to Open Notebook",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on the web application",
  "keyword": "Given "
});
formatter.match({
  "location": "NB_open.user_is_on_the_web_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"Abhix\" and \"12345\"",
  "keyword": "When "
});
formatter.match({
  "location": "NB_open.user_enters_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks login button",
  "keyword": "And "
});
formatter.match({
  "location": "NB_open.clicks_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user navigate to the My Courses tab",
  "keyword": "Then "
});
formatter.match({
  "location": "NB_open.user_navigate_to_the_My_Courses_tab()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on the subscribed course title",
  "keyword": "When "
});
formatter.match({
  "location": "NB_open.user_clicks_on_the_subscribed_course_title()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Course menu should open",
  "keyword": "Then "
});
formatter.match({
  "location": "NB_open.course_menu_should_open()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User scrolls down",
  "keyword": "When "
});
formatter.match({
  "location": "NB_open.user_scrolls_down()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks on Notebook tab",
  "keyword": "And "
});
formatter.match({
  "location": "NB_open.clicks_on_Notebook_tab()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Notebook dashboard should open",
  "keyword": "Then "
});
formatter.match({
  "location": "NB_open.notebook_dashboard_should_open()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify Note Delete",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user clicks on delete button of a particular note",
  "keyword": "When "
});
formatter.match({
  "location": "NB_delete.user_clicks_on_delete_button_of_a_particular_note()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks OK on the Alert",
  "keyword": "And "
});
formatter.match({
  "location": "NB_delete.clicks_OK_on_the_Alert()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Note should be deleted",
  "keyword": "Then "
});
formatter.match({
  "location": "NB_delete.note_should_be_deleted()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Verify Sort by Date Created",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user clicks on Sort by Date created",
  "keyword": "When "
});
formatter.step({
  "name": "All the notes should be sort according to the creation date descendingly",
  "keyword": "Then "
});
formatter.step({
  "name": "user again clicks on Sort by Date created",
  "keyword": "When "
});
formatter.step({
  "name": "All the notes should be sort according to the creation date ascendingly",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "",
        ""
      ]
    },
    {
      "cells": [
        "",
        ""
      ]
    }
  ]
});
formatter.background({
  "name": "Login to Open Notebook",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on the web application",
  "keyword": "Given "
});
formatter.match({
  "location": "NB_open.user_is_on_the_web_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"Abhix\" and \"12345\"",
  "keyword": "When "
});
formatter.match({
  "location": "NB_open.user_enters_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks login button",
  "keyword": "And "
});
formatter.match({
  "location": "NB_open.clicks_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user navigate to the My Courses tab",
  "keyword": "Then "
});
formatter.match({
  "location": "NB_open.user_navigate_to_the_My_Courses_tab()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on the subscribed course title",
  "keyword": "When "
});
formatter.match({
  "location": "NB_open.user_clicks_on_the_subscribed_course_title()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Course menu should open",
  "keyword": "Then "
});
formatter.match({
  "location": "NB_open.course_menu_should_open()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User scrolls down",
  "keyword": "When "
});
formatter.match({
  "location": "NB_open.user_scrolls_down()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks on Notebook tab",
  "keyword": "And "
});
formatter.match({
  "location": "NB_open.clicks_on_Notebook_tab()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Notebook dashboard should open",
  "keyword": "Then "
});
formatter.match({
  "location": "NB_open.notebook_dashboard_should_open()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify Sort by Date Created",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user clicks on Sort by Date created",
  "keyword": "When "
});
formatter.match({
  "location": "NB_sortC.user_clicks_on_Sort_by_Date_created()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "All the notes should be sort according to the creation date descendingly",
  "keyword": "Then "
});
formatter.match({
  "location": "NB_sortC.all_the_notes_should_be_sort_according_to_the_creation_date_descendingly()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user again clicks on Sort by Date created",
  "keyword": "When "
});
formatter.match({
  "location": "NB_sortC.user_again_clicks_on_Sort_by_Date_created()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "All the notes should be sort according to the creation date ascendingly",
  "keyword": "Then "
});
formatter.match({
  "location": "NB_sortC.all_the_notes_should_be_sort_according_to_the_creation_date_ascendingly()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Verify Sort by Date Modified",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user clicks on Sort by Date modified",
  "keyword": "When "
});
formatter.step({
  "name": "All the notes should be sort according to the modification date descendingly",
  "keyword": "Then "
});
formatter.step({
  "name": "user again clicks on Sort by Date modified",
  "keyword": "When "
});
formatter.step({
  "name": "All the notes should be sort according to the modification date ascendingly",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "",
        ""
      ]
    },
    {
      "cells": [
        "",
        ""
      ]
    }
  ]
});
formatter.background({
  "name": "Login to Open Notebook",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on the web application",
  "keyword": "Given "
});
formatter.match({
  "location": "NB_open.user_is_on_the_web_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"Abhix\" and \"12345\"",
  "keyword": "When "
});
formatter.match({
  "location": "NB_open.user_enters_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks login button",
  "keyword": "And "
});
formatter.match({
  "location": "NB_open.clicks_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user navigate to the My Courses tab",
  "keyword": "Then "
});
formatter.match({
  "location": "NB_open.user_navigate_to_the_My_Courses_tab()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on the subscribed course title",
  "keyword": "When "
});
formatter.match({
  "location": "NB_open.user_clicks_on_the_subscribed_course_title()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Course menu should open",
  "keyword": "Then "
});
formatter.match({
  "location": "NB_open.course_menu_should_open()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User scrolls down",
  "keyword": "When "
});
formatter.match({
  "location": "NB_open.user_scrolls_down()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks on Notebook tab",
  "keyword": "And "
});
formatter.match({
  "location": "NB_open.clicks_on_Notebook_tab()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Notebook dashboard should open",
  "keyword": "Then "
});
formatter.match({
  "location": "NB_open.notebook_dashboard_should_open()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify Sort by Date Modified",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user clicks on Sort by Date modified",
  "keyword": "When "
});
formatter.match({
  "location": "NB_sortM.user_clicks_on_Sort_by_Date_modified()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "All the notes should be sort according to the modification date descendingly",
  "keyword": "Then "
});
formatter.match({
  "location": "NB_sortM.all_the_notes_should_be_sort_according_to_the_modification_date_descendingly()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user again clicks on Sort by Date modified",
  "keyword": "When "
});
formatter.match({
  "location": "NB_sortM.user_again_clicks_on_Sort_by_Date_modified()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "All the notes should be sort according to the modification date ascendingly",
  "keyword": "Then "
});
formatter.match({
  "location": "NB_sortM.all_the_notes_should_be_sort_according_to_the_modification_date_ascendingly()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Verify Sort by Title",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user clicks on Sort by Title",
  "keyword": "When "
});
formatter.step({
  "name": "All the notes should be sort according to the title descendingly",
  "keyword": "Then "
});
formatter.step({
  "name": "user again clicks on Sort by Title",
  "keyword": "When "
});
formatter.step({
  "name": "All the notes should be sort according to the title ascendingly",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "",
        ""
      ]
    },
    {
      "cells": [
        "",
        ""
      ]
    }
  ]
});
formatter.background({
  "name": "Login to Open Notebook",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on the web application",
  "keyword": "Given "
});
formatter.match({
  "location": "NB_open.user_is_on_the_web_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"Abhix\" and \"12345\"",
  "keyword": "When "
});
formatter.match({
  "location": "NB_open.user_enters_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks login button",
  "keyword": "And "
});
formatter.match({
  "location": "NB_open.clicks_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user navigate to the My Courses tab",
  "keyword": "Then "
});
formatter.match({
  "location": "NB_open.user_navigate_to_the_My_Courses_tab()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on the subscribed course title",
  "keyword": "When "
});
formatter.match({
  "location": "NB_open.user_clicks_on_the_subscribed_course_title()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Course menu should open",
  "keyword": "Then "
});
formatter.match({
  "location": "NB_open.course_menu_should_open()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User scrolls down",
  "keyword": "When "
});
formatter.match({
  "location": "NB_open.user_scrolls_down()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks on Notebook tab",
  "keyword": "And "
});
formatter.match({
  "location": "NB_open.clicks_on_Notebook_tab()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Notebook dashboard should open",
  "keyword": "Then "
});
formatter.match({
  "location": "NB_open.notebook_dashboard_should_open()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify Sort by Title",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user clicks on Sort by Title",
  "keyword": "When "
});
formatter.match({
  "location": "NB_sortT.user_clicks_on_Sort_by_Title()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "All the notes should be sort according to the title descendingly",
  "keyword": "Then "
});
formatter.match({
  "location": "NB_sortT.all_the_notes_should_be_sort_according_to_the_title_descendingly()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user again clicks on Sort by Title",
  "keyword": "When "
});
formatter.match({
  "location": "NB_sortT.user_again_clicks_on_Sort_by_Title()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "All the notes should be sort according to the title ascendingly",
  "keyword": "Then "
});
formatter.match({
  "location": "NB_sortT.all_the_notes_should_be_sort_according_to_the_title_ascendingly()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/java/features/PA.feature");
formatter.feature({
  "name": "Personal Agenda",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Create an Agenda",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user clicks on any date",
  "keyword": "When "
});
formatter.step({
  "name": "enters the agenda title",
  "keyword": "And "
});
formatter.step({
  "name": "enters the agenda description",
  "keyword": "And "
});
formatter.step({
  "name": "clicks on Add button",
  "keyword": "And "
});
formatter.step({
  "name": "agenda should be created",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "",
        ""
      ]
    },
    {
      "cells": [
        "",
        ""
      ]
    }
  ]
});
formatter.background({
  "name": "Login to Open Personal Agenda",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on the web application",
  "keyword": "Given "
});
formatter.match({
  "location": "NB_open.user_is_on_the_web_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"Abhix\" and \"12345\"",
  "keyword": "When "
});
formatter.match({
  "location": "NB_open.user_enters_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks login button",
  "keyword": "And "
});
formatter.match({
  "location": "NB_open.clicks_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks on Personal Agenda",
  "keyword": "And "
});
formatter.match({
  "location": "PA_open.clicks_on_Personal_Agenda()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Personal agenda page should open",
  "keyword": "Then "
});
formatter.match({
  "location": "PA_open.personal_agenda_page_should_open()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Create an Agenda",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user clicks on any date",
  "keyword": "When "
});
formatter.match({
  "location": "PA_create.user_clicks_on_any_date()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enters the agenda title",
  "keyword": "And "
});
formatter.match({
  "location": "PA_create.enters_the_agenda_title()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enters the agenda description",
  "keyword": "And "
});
formatter.match({
  "location": "PA_create.enters_the_agenda_description()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks on Add button",
  "keyword": "And "
});
formatter.match({
  "location": "PA_create.clicks_on_Add_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "agenda should be created",
  "keyword": "Then "
});
formatter.match({
  "location": "PA_create.agenda_should_be_created()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Create an Event",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user clicks on add event button",
  "keyword": "When "
});
formatter.step({
  "name": "enters the event name",
  "keyword": "And "
});
formatter.step({
  "name": "enters the start date",
  "keyword": "And "
});
formatter.step({
  "name": "ticks the all day option",
  "keyword": "And "
});
formatter.step({
  "name": "enters the description",
  "keyword": "And "
});
formatter.step({
  "name": "clicks on Add event",
  "keyword": "And "
});
formatter.step({
  "name": "Event should be created",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "",
        ""
      ]
    },
    {
      "cells": [
        "",
        ""
      ]
    }
  ]
});
formatter.background({
  "name": "Login to Open Personal Agenda",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on the web application",
  "keyword": "Given "
});
formatter.match({
  "location": "NB_open.user_is_on_the_web_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"Abhix\" and \"12345\"",
  "keyword": "When "
});
formatter.match({
  "location": "NB_open.user_enters_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks login button",
  "keyword": "And "
});
formatter.match({
  "location": "NB_open.clicks_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks on Personal Agenda",
  "keyword": "And "
});
formatter.match({
  "location": "PA_open.clicks_on_Personal_Agenda()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Personal agenda page should open",
  "keyword": "Then "
});
formatter.match({
  "location": "PA_open.personal_agenda_page_should_open()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Create an Event",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user clicks on add event button",
  "keyword": "When "
});
formatter.match({
  "location": "PA_event.user_clicks_on_add_event_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enters the event name",
  "keyword": "And "
});
formatter.match({
  "location": "PA_event.enters_the_event_name()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enters the start date",
  "keyword": "And "
});
formatter.match({
  "location": "PA_event.enters_the_start_date()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "ticks the all day option",
  "keyword": "And "
});
formatter.match({
  "location": "PA_event.ticks_the_all_day_option()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enters the description",
  "keyword": "And "
});
formatter.match({
  "location": "PA_event.enters_the_description()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks on Add event",
  "keyword": "And "
});
formatter.match({
  "location": "PA_event.clicks_on_Add_event()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Event should be created",
  "keyword": "Then "
});
formatter.match({
  "location": "PA_event.event_should_be_created()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});