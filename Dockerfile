FROM node:8.12.0
COPY app app/
COPY entrypoint.sh app/
WORKDIR app/
ENTRYPOINT ["/app/entrypoint.sh"]
