FROM oven/bun:1

RUN apt-get update -y && apt-get install -y openssl

WORKDIR /app

COPY packages/server .

RUN bun install

RUN bunx prisma generate

EXPOSE 3000

CMD ["bun", "run", "dev", "--host", "0.0.0.0"] 