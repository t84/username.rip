import unicodedata
import json

def contains_emoji(s):
    for char in s:
        if unicodedata.category(char).startswith('So'):  
            return True
    return False

with open('emojis.txt', 'r', encoding='utf-8', errors='ignore') as f:
    f = f.readlines()

    l = []
    for line in f:
        line = line.strip()
        
        if contains_emoji(line) and 'U0001' not in line: 
            l.append(line)

print("Filtered list:", l)

with open('emojis.json', 'w', encoding='utf-8') as json_file:
    json.dump(l, json_file, ensure_ascii=False, indent=4)  

print("JSON file 'output.json' has been created.")
