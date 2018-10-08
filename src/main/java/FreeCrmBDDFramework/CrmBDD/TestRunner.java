package FreeCrmBDDFramework.CrmBDD;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features = {"features"},
glue={"stepsDescription"},
tags={"@CreateContact"},
plugin= {"html:target/cucumber-html-report","json:json_output/cucumber.json", "junit:junit_xml/cucumber.xml"},
format= {"pretty","html:test-outout", "json:json_output/cucumber.json", "junit:junit_xml/cucumber.xml"},
monochrome=true,
dryRun=false)


public class TestRunner {

}
