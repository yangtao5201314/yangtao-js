
# 拉取 nginx 镜像
FROM nginx

COPY dist /usr/share/nginx/html

COPY Docker/nginx/nginx.conf /etc/nginx/nginx.conf

EXPOSE 5273

CMD ["nginx","-g","daemon off;"]


# docker build -f ./Docker/Dockerfile -t yangtao-js . --no-cache
# docker run -d --name yangtao-js-instance -p 5273:5273 --restart=always yangtao-js