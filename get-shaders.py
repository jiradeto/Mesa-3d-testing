from selenium import webdriver
from selenium.webdriver.common.keys import Keys
import os
from shutil import copyfile
import requests


site = "http://glslsandbox.com/"
driver = webdriver.Safari(executable_path = '/usr/bin/safaridriver')  

if not (os.path.exists('downloads')):
    os.mkdir('downloads')
if not (os.path.exists('downloads/300es')):
    os.mkdir('downloads/300es')
if not (os.path.exists('downloads/donors')):
    os.mkdir('downloads/donors')

for page in range(1, 21):
    driver.get(site+ "?page="+ str(page))
    elem = driver.find_element_by_id("gallery")
    ids = elem.find_elements_by_tag_name('a')
    print ("start fetching page:" + str(page))

    for ii in ids:        
        shader_id = ii.get_attribute('href')
        shader_id = shader_id.split("e#",1)[1] 
        item_url = "http://glslsandbox.com/item/" + shader_id
        shader_id = shader_id[:5]

        resp = requests.get(item_url)
        data = resp.json() 

        # validation
        
        if "varying" in data['code']:
            continue
        if "const" in data['code']:
            continue
        if "texture2D" in data['code']:
            continue

        raw_data = data['code']
        raw_data = raw_data.replace("#extension GL_OES_standard_derivatives : enable", "\n")
        if "#ifdef GL_ES" in raw_data:
            raw_data = raw_data[0 : raw_data.find("#ifdef GL_ES") : ] + raw_data[raw_data.find("#endif") +6 : :]

        # shader 
        fragment_name = str(page) + "_" + shader_id
        fragment_data = "#version 300 es \n\nprecision highp float; \n\nlayout(location = 0) out vec4 _GLF_color; \n\nuniform vec2 injectionSwitch;"+ raw_data
        fragment_data = fragment_data.replace("gl_FragColor", "_GLF_color")

        copyfile('sample_uniform.json', 'downloads/300es/' +fragment_name+'.json')
        with open('downloads/300es/'+ fragment_name+ '.frag', 'a') as the_file:
            the_file.write(fragment_data)

        # # donor 
        copyfile('sample_uniform.json', 'downloads/donors/'+fragment_name+'.json')
        with open('downloads/donors/'+ fragment_name+ '.frag', 'a') as the_file:
            the_file.write(raw_data)
        
        print("Finish shader id: " + item_url)

print ("Success!")
driver.quit()