from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver import ActionChains
from time import sleep, strftime, localtime
import os
from dotenv import load_dotenv
import sys

load_dotenv()

chrome_options = webdriver.chrome.options.Options()
chrome_options.add_argument("--mute-audio")
chrome_options.set_headless(True)

driver = webdriver.Chrome(options=chrome_options)
driver.set_window_position(0, 0)

driver.get("https://web.simple-mmo.com/")
element = driver.find_element_by_name('email')
element.send_keys(os.environ['EMAIL'])
element = driver.find_element_by_name('password')
element.send_keys(os.environ['PASSWORD'])
element.submit()

driver.get("https://web.simple-mmo.com/guilds/mine")
my_guild = driver.current_url + "/members"
driver.get(my_guild)

page_cnt = 1
members_list = open("members.list", "w", encoding='utf-8')
sys.stdout = members_list
while True:
    #sleep(1)
    user_list = driver.find_elements_by_xpath('//a[@href="javascript:;"]')
    for user in user_list:
        print(user.text)
    #sleep(0.5)
    next_btn = driver.find_element_by_class_name("btn.btn-primary.next-page")
    if (next_btn.is_enabled()):
        page_cnt += 1
        driver.get(my_guild + "?page=" + str(page_cnt))
    else:
        members_list.close()
        driver.close()
        sys.exit(0)