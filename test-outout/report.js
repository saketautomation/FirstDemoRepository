$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("CRMLogin.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: your.email@your.domain.com"
    },
    {
      "line": 2,
      "value": "#Keywords Summary :"
    },
    {
      "line": 3,
      "value": "#Feature: List of scenarios."
    },
    {
      "line": 4,
      "value": "#Scenario: Business rule through list of steps with arguments."
    },
    {
      "line": 5,
      "value": "#Given: Some precondition step"
    },
    {
      "line": 6,
      "value": "#When: Some key actions"
    },
    {
      "line": 7,
      "value": "#Then: To observe outcomes or validation"
    },
    {
      "line": 8,
      "value": "#And,But: To enumerate more Given,When,Then steps"
    },
    {
      "line": 9,
      "value": "#Scenario Outline: List of steps for data-driven as an Examples and \u003cplaceholder\u003e"
    },
    {
      "line": 10,
      "value": "#Examples: Container for s table"
    },
    {
      "line": 11,
      "value": "#Background: List of steps run before each of the scenarios"
    },
    {
      "line": 12,
      "value": "#\"\"\" (Doc Strings)"
    },
    {
      "line": 13,
      "value": "#| (Data Tables)"
    },
    {
      "line": 14,
      "value": "#@ (Tags/Labels):To group Scenarios"
    },
    {
      "line": 15,
      "value": "#\u003c\u003e (placeholder)"
    },
    {
      "line": 16,
      "value": "#\"\""
    },
    {
      "line": 17,
      "value": "## (Comments)"
    },
    {
      "line": 18,
      "value": "#Sample Feature Definition Template"
    }
  ],
  "line": 20,
  "name": "Title of your feature",
  "description": "I want to use this template for my feature file",
  "id": "title-of-your-feature",
  "keyword": "Feature",
  "tags": [
    {
      "line": 19,
      "name": "@tag"
    }
  ]
});
formatter.scenarioOutline({
  "line": 27,
  "name": "Free CRM Create Contact Test",
  "description": "",
  "id": "title-of-your-feature;free-crm-create-contact-test",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 26,
      "name": "@CreateContact"
    }
  ]
});
formatter.step({
  "line": 28,
  "name": "application already opened on the browser",
  "keyword": "Given "
});
formatter.step({
  "line": 29,
  "name": "title of login page is free crm",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "enter username and password",
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "user is on homepage of CRM",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "click on create new contact",
  "keyword": "Then "
});
formatter.step({
  "line": 33,
  "name": "Enter \"\u003cfirstname\u003e\" and \"\u003clastname\u003e\" and \"\u003ccompany\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "close browser",
  "keyword": "Then "
});
formatter.examples({
  "line": 35,
  "name": "",
  "description": "",
  "id": "title-of-your-feature;free-crm-create-contact-test;",
  "rows": [
    {
      "cells": [
        "firstname",
        "lastname",
        "company"
      ],
      "line": 36,
      "id": "title-of-your-feature;free-crm-create-contact-test;;1"
    },
    {
      "cells": [
        "Firstname1",
        "Lastname1",
        "Aress"
      ],
      "line": 37,
      "id": "title-of-your-feature;free-crm-create-contact-test;;2"
    },
    {
      "cells": [
        "Firstname2",
        "Lastname2",
        "Decos"
      ],
      "line": 38,
      "id": "title-of-your-feature;free-crm-create-contact-test;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 37,
  "name": "Free CRM Create Contact Test",
  "description": "",
  "id": "title-of-your-feature;free-crm-create-contact-test;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 19,
      "name": "@tag"
    },
    {
      "line": 26,
      "name": "@CreateContact"
    }
  ]
});
formatter.step({
  "line": 28,
  "name": "application already opened on the browser",
  "keyword": "Given "
});
formatter.step({
  "line": 29,
  "name": "title of login page is free crm",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "enter username and password",
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "user is on homepage of CRM",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "click on create new contact",
  "keyword": "Then "
});
formatter.step({
  "line": 33,
  "name": "Enter \"Firstname1\" and \"Lastname1\" and \"Aress\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "close browser",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateContactsStepsDescription.application_already_opened_on_the_browser()"
});
formatter.result({
  "duration": 10052371343,
  "status": "passed"
});
formatter.match({
  "location": "CreateContactsStepsDescription.title_of_login_page_is_free_crm()"
});
formatter.result({
  "duration": 22030524,
  "status": "passed"
});
formatter.match({
  "location": "CreateContactsStepsDescription.enter_username_and_password()"
});
formatter.result({
  "duration": 10292916564,
  "status": "passed"
});
formatter.match({
  "location": "CreateContactsStepsDescription.user_is_on_homepage_of_CRM()"
});
formatter.result({
  "duration": 219142576,
  "status": "passed"
});
formatter.match({
  "location": "CreateContactsStepsDescription.click_on_create_new_contact()"
});
formatter.result({
  "duration": 1760574293,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Firstname1",
      "offset": 7
    },
    {
      "val": "Lastname1",
      "offset": 24
    },
    {
      "val": "Aress",
      "offset": 40
    }
  ],
  "location": "CreateContactsStepsDescription.enter_value_to_create_new_contact(String,String,String)"
});
formatter.result({
  "duration": 2259985687,
  "status": "passed"
});
formatter.match({
  "location": "CreateContactsStepsDescription.close_browser()"
});
formatter.result({
  "duration": 634320354,
  "status": "passed"
});
formatter.scenario({
  "line": 38,
  "name": "Free CRM Create Contact Test",
  "description": "",
  "id": "title-of-your-feature;free-crm-create-contact-test;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 19,
      "name": "@tag"
    },
    {
      "line": 26,
      "name": "@CreateContact"
    }
  ]
});
formatter.step({
  "line": 28,
  "name": "application already opened on the browser",
  "keyword": "Given "
});
formatter.step({
  "line": 29,
  "name": "title of login page is free crm",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "enter username and password",
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "user is on homepage of CRM",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "click on create new contact",
  "keyword": "Then "
});
formatter.step({
  "line": 33,
  "name": "Enter \"Firstname2\" and \"Lastname2\" and \"Decos\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "close browser",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateContactsStepsDescription.application_already_opened_on_the_browser()"
});
formatter.result({
  "duration": 9435002245,
  "status": "passed"
});
formatter.match({
  "location": "CreateContactsStepsDescription.title_of_login_page_is_free_crm()"
});
formatter.result({
  "duration": 8248720,
  "status": "passed"
});
formatter.match({
  "location": "CreateContactsStepsDescription.enter_username_and_password()"
});
formatter.result({
  "duration": 7959110828,
  "status": "passed"
});
formatter.match({
  "location": "CreateContactsStepsDescription.user_is_on_homepage_of_CRM()"
});
formatter.result({
  "duration": 212751794,
  "status": "passed"
});
formatter.match({
  "location": "CreateContactsStepsDescription.click_on_create_new_contact()"
});
formatter.result({
  "duration": 2087448643,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Firstname2",
      "offset": 7
    },
    {
      "val": "Lastname2",
      "offset": 24
    },
    {
      "val": "Decos",
      "offset": 40
    }
  ],
  "location": "CreateContactsStepsDescription.enter_value_to_create_new_contact(String,String,String)"
});
formatter.result({
  "duration": 2312293515,
  "status": "passed"
});
formatter.match({
  "location": "CreateContactsStepsDescription.close_browser()"
});
formatter.result({
  "duration": 635648353,
  "status": "passed"
});
});