FROM postgres:latest

ENV POSTGRES_USER postgres
ENV POSTGRES_PASSWORD postgres

COPY init/ /docker-entrypoint-initdb.d/
COPY scripts /

VOLUME /var/lib/postgresql/data

EXPOSE 5432
