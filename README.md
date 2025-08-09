# bun-react-tailwind-shadcn-template

To install dependencies:

```bash
bun install
```

To start a development server:

```bash
bun dev
```

To run for production:

```bash
bun start
```

## Docker Development

To run the app in Docker with hot reloading:

```bash
docker compose up --build
```

The Docker setup includes:
- Hot reloading with `bun --hot` - live file changes trigger automatic reload inside the container
- Volume mounting for real-time code changes
- Port 3000 exposed for development

To stop the Docker containers:

```bash
docker compose down
```

This project was created using `bun init` in bun v1.2.19. [Bun](https://bun.com) is a fast all-in-one JavaScript runtime.
