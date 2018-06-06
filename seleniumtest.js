/**
 * @fileoverview An example WebDriver script.
 *
 * Before running this script, ensure that Mozilla's geckodriver is present on
 * your system PATH: <https://github.com/mozilla/geckodriver/releases>
 *
 * Usage:
 *   // Default behavior
 *   node selenium-webdriver/example/google_search.js
 *
 *   // Target Chrome locally; the chromedriver must be on your PATH
 *   SELENIUM_BROWSER=chrome node selenium-webdriver/example/google_search.js
 *
 *   // Use a local copy of the standalone Selenium server
 *   SELENIUM_SERVER_JAR=/path/to/selenium-server-standalone.jar \
 *     node selenium-webdriver/example/google_search.js
 *
 *   // Target a remote Selenium server
 *   SELENIUM_REMOTE_URL=http://www.example.com:4444/wd/hub \
 *     node selenium-webdriver/example/google_search.js
 */

const {Builder, By, Key, until} = require('selenium-webdriver');

var driver = new Builder()
    .forBrowser('firefox')
    .build();

driver.get('http://www.google.com/ncr')
    .then(() =>
        driver.findElement(By.name('q')).sendKeys('webdriver', Key.RETURN))
    .then(() => driver.wait(until.titleIs('webdriver - Google Search'), 1000))
    .then(() => driver.quit());

var chromedriver = new Builder()
    .forBrowser('chrome')
    .build();

chromedriver.get('http://www.google.com/ncr')
    .then(() =>
        driver.findElement(By.name('q')).sendKeys('webdriver', Key.RETURN))
    .then(() => driver.wait(until.titleIs('webdriver - Google Search'), 1000))
    .then(() => driver.quit());
