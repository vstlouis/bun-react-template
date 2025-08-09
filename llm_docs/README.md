# LLM Docs Project

![CI/CD Status](https://img.shields.io/badge/CI%2FCD-pending-yellow)
![License](https://img.shields.io/badge/license-MIT-blue)
![Version](https://img.shields.io/badge/version-1.0.0-green)

## Project Purpose

This project is a modern web application built for AI/LLM documentation management and visualization. It provides an intuitive interface for organizing, searching, and displaying large language model documentation with real-time updates and collaborative features.

## Tech Stack

- **Runtime**: [Bun 1.x](https://bun.sh/) - Fast all-in-one JavaScript runtime
- **Frontend Framework**: [React 19](https://react.dev/) - Latest React with concurrent features
- **Language**: [TypeScript](https://www.typescriptlang.org/) - Type-safe JavaScript
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/) - Utility-first CSS framework
- **UI Components**: [Radix UI](https://www.radix-ui.com/) - Low-level UI primitives

## Local Development

### Prerequisites

- [Bun 1.x](https://bun.sh/docs/installation) installed on your system

### Setup & Run

1. **Install dependencies**:
   ```bash
   bun install
   ```

2. **Start development server**:
   ```bash
   bun run dev
   ```

3. **Access the application**:
   Open [http://localhost:3000](http://localhost:3000) in your browser

### Additional Commands

- **Type checking**: `bun run type-check`
- **Linting**: `bun run lint`
- **Testing**: `bun run test`

## Production Build

To create an optimized production build:

```bash
bun run build
```

The built assets will be generated in the `dist/` directory and are ready for deployment.

## Docker Deployment

For containerized deployment, refer to the official Bun Docker guide:

🐳 **[Bun Official Docker Guide](https://bun.sh/docs/bundler/docker)**

This comprehensive guide covers:
- Creating Dockerfile for Bun applications
- Multi-stage builds for optimization
- Best practices for production deployments
- Docker Compose configurations

## Dockerized Workflow (Quick Start)

> **Note**: Detailed Docker setup instructions will be provided in upcoming documentation updates.

Basic workflow overview:
1. Build the Docker image
2. Run container with environment variables
3. Access application on configured port
4. Monitor logs and performance

*Complete Docker workflow documentation coming soon...*

## Development Workflow

### Branch Strategy
- `main` - Production-ready code
- `develop` - Integration branch
- `feature/*` - Feature branches
- `hotfix/*` - Critical fixes

### Commit Convention
We follow conventional commits:
- `feat:` - New features
- `fix:` - Bug fixes
- `docs:` - Documentation changes
- `style:` - Code style changes
- `refactor:` - Code refactoring
- `test:` - Test additions/changes
- `chore:` - Build process or auxiliary tool changes

Example: `docs: add initial README with Docker link`

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Ensure all tests pass
6. Submit a pull request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

- 📧 Email: support@example.com
- 💬 Discord: [Join our community](https://discord.gg/example)
- 📖 Documentation: [Full docs](https://docs.example.com)
- 🐛 Issues: [GitHub Issues](https://github.com/username/repo/issues)

---

*Built with ❤️ using Bun, React 19, and modern web technologies*
