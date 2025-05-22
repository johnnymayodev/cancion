FROM oven/bun:1

WORKDIR /app

COPY packages/client .

RUN bun install

EXPOSE 8000

CMD ["bun", "run", "dev", "--host", "0.0.0.0"] 