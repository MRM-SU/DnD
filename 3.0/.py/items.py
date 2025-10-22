import requests
import json

class Item:
    def __init__(self, data):
        if len(data) < 6:data.append('-')
        self.name,self.type,self.rarity,self.decription,self.effect,self.max_quantity = data
    def export(self):
        return {
            'TYPE':self.type.upper(),
            'RARITY':self.rarity,
            'DESCRIPTION':self.decription,
            'EFFECT':self.effect,
            'MAX_QUANTITY':int(self.max_quantity) if self.max_quantity!='-' else 'infinity'
        }

with open('items.py.output','w') as file:
    rq = requests.get('https://sheets.googleapis.com/v4/spreadsheets/120BEvlE_NP6iwyJ0WTg3TTFHfHjsEQeLjyQQEfn64Uc/values/items?key=AIzaSyCPoCo9JcBf6_p7JqlPDZ_6frBODdw4EAI').json()['values'][1:]
    ans = {}
    for r in rq:
        item = Item(r)
        ans[item.name] = item.export()
    json.dump(ans,file,indent=4)