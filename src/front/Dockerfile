# Stage 1 - Build frontend
FROM spb99-ubr-up01d.gazprom-neft.local:5000/ubi8/nodejs-14:1-51 as build-deps
LABEL maintainer="GpnDs"

WORKDIR /app
USER 0

# install yarn
RUN npm i -g yarn --registry=http://nexus.gazprom-neft.local:8080/repository/npm-all/

COPY ["package.json", "yarn.lock", ".npmrc", ".yarnrc", "./"]


# install dependencies
RUN yarn install --frozen-lockfile --link-duplicates

# copy source files
COPY ./ .

# build & test
RUN yarn run build

# Stage 2 - the production environment
FROM spb99-ubr-up01d.gazprom-neft.local:5000/ubi8/nginx-118:1-46 as final
ARG APP_VERSION
LABEL maintainer="GpnDs"
EXPOSE 8080

USER 0
WORKDIR /usr/share/nginx/html

## copy app files
COPY nginx/default.conf /etc/nginx/conf.d/default.template
COPY nginx/nginx.conf /etc/nginx/nginx.conf
COPY scripts/entrypoint.sh /
COPY --from=build-deps /app/build /usr/share/nginx/html

RUN ["chmod", "+x", "/entrypoint.sh"]
ENTRYPOINT ["/entrypoint.sh"]

## add permissions for 1001
RUN chown -R 1001:0 /etc/nginx && \
    chown -R 1001:0 /usr/share/nginx/html

USER 1001
CMD nginx -g "daemon off;"