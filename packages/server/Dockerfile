FROM oven/bun:1

RUN apt-get update -y && apt-get install -y openssl

WORKDIR /app

COPY packages/server/package.json .

RUN bun install

COPY packages/server .

EXPOSE 3000

CMD ["bun", "run", "dev", "--host", "0.0.0.0"] 