var webdriver = require('selenium-webdriver'),
    chrome    = require('selenium-webdriver/chrome')
    By        = webdriver.By,
    until     = webdriver.until,
    options   = new chrome.Options();
    options.addArguments('headless'); // note: without dashes
    options.addArguments('disable-gpu')
var path = require('chromedriver').path;
var service = new chrome.ServiceBuilder(path).build();
    chrome.setDefaultService(service);
var driver = new webdriver.Builder()
    .forBrowser('chrome')
    .withCapabilities(webdriver.Capabilities.chrome()) 
    .setChromeOptions(options)                         // note this
    .build();
var path = require('chromedriver').path;
var qs = require(`querystring`);
var qs = require(`qs`);
var url = require(`url-parse`);

pullID(`test the button`);
pullID(`test the button`);

function pullID(query){
    var dateTime = new Date();
    var encodedData = encodeURI(query);
    driver.get(`https://www.youtube.com/results?search_query=` + encodedData);
    driver.findElement(By.xpath(`//*[@id="thumbnail"]`))
        .then(function(element){
            element.getAttribute('href')
                .then(function(href){
                    var yt = new url(href);
                    var parse = qs.parse(yt.query.replace('?', ''), true);
                    var dateTime2 = new Date();
                    console.log(dateTime);
                    console.log(dateTime2);
                })
                .catch(function(err2){

                });
        })
        .catch(function(err){

        });
}
//*[@id="thumbnail"]
