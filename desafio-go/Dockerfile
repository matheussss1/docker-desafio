FROM golang:alpine3.18 AS bulder

WORKDIR /go/delivery

COPY ./hello-world.go .

RUN go mod init hello-world
RUN go build


FROM scratch
COPY --from=bulder /go/delivery/hello-world /
CMD ["./hello-world"]