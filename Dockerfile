### STAGE 2: Run ###
FROM nginx:1.17.1-alpine
COPY nginx.conf /etc/nginx/nginx.conf

COPY ./assets /usr/share/nginx/html/assets

COPY *.html /usr/share/nginx/html

COPY INDEX.manifest /usr/share/nginx/html
COPY LICENSE.txt /usr/share/nginx/html
COPY sitemap.xml /usr/share/nginx/html
