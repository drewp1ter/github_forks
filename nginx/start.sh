#!/bin/sh

echo "setting nginx conf ..."
echo "API_GATEWAY": $API_GATEWAY
echo "API_PLACEHOLDER": $API_PLACEHOLDER

# replace env for nginx conf
envsubst '$API_PLACEHOLDER $API_GATEWAY' < /etc/nginx/conf.d/default.conf.template > /etc/nginx/conf.d/default.conf

# start nginx
nginx -g 'daemon off;'
exec "$@"