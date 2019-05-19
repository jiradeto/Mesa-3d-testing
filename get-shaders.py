from selenium import webdriver
from selenium.webdriver.common.keys import Keys


site = "http://glslsandbox.com/"
driver = webdriver.Safari(executable_path = '/usr/bin/safaridriver')  


driver.get(site+ "?page="+str(1))

elem = driver.find_element_by_id("gallery")

ids = elem.find_elements_by_tag_name('a')
for ii in ids:
    #print ii.tag_name
    id = ii.get_attribute('href')
    driver.get(id)

driver.close()