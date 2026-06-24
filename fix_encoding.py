content = open('index.html', encoding='utf-8').read()
content = content.replace('â˜¥', '&#9733;')   # star
content = content.replace('â€“', '&mdash;')   # em dash
content = content.replace('â„¢', '&trade;')   # trademark
content = content.replace('â€™', '&rsquo;')   # right single quote
open('index.html', 'w', encoding='utf-8').write(content)
print('done')
