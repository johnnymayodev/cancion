FROM oven/bun:1

WORKDIR /app

COPY packages/client/package*.json ./

RUN bun install

COPY packages/client .

EXPOSE 8000

CMD ["bun", "run", "dev", "--host", "0.0.0.0"] 