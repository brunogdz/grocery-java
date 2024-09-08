FROM openjdk:17


WORKDIR /wiremock

COPY wiremock-standalone-2.14.0.jar .
COPY start.sh .


EXPOSE 8081

CMD ["sh", "start.sh"]
