import urllib.request
import re

req = urllib.request.Request('https://vit.ac.in/about/infrastructure/silver-jubilee-tower', headers={'User-Agent': 'Mozilla/5.0'})
try:
    html = urllib.request.urlopen(req).read().decode('utf-8', errors='ignore')
    imgs = re.findall(r'<img[^>]+src=["\']([^"\']+)["\']', html)
    for img in imgs:
        print("IMG:", img)
    # also search for background-image or wp-content/uploads
    uploads = re.findall(r'https?://[^\s"\'<>]+\.(?:jpg|jpeg|png|webp)', html)
    for u in set(uploads):
        print("MEDIA:", u)
except Exception as e:
    print("Error:", e)
