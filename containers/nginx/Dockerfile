FROM nginx:1.23.4
RUN apt-get update && apt-get install -y apt-transport-https \
  && apt-get install --no-install-recommends --no-install-suggests -y \
    && apt-get install mc -y \
  curl netcat

COPY ./rootfs/nginx/nginx.conf /etc/nginx
COPY ./rootfs/nginx/conf.d/default.conf /etc/nginx/conf.d/

HEALTHCHECK --interval=5s --timeout=3s \
  CMD curl -f http://localhost:80/ || exit 1