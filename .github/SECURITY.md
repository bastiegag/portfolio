# Security Policy

## Supported Versions

This portfolio website is a personal project with rolling releases. Only the latest version deployed to production is actively supported.

| Version | Supported          |
| ------- | ------------------ |
| Latest (main branch) | :white_check_mark: |
| Older versions | :x: |

## Reporting a Vulnerability

We take security vulnerabilities seriously. If you discover a security issue in this project, please follow these steps:

### For Security Issues

1. **DO NOT** open a public GitHub issue for security vulnerabilities
2. Email security concerns to: **bastiegag@gmail.com**
3. Include the following information:
   - Description of the vulnerability
   - Steps to reproduce the issue
   - Potential impact assessment
   - Suggested fix (if available)

### Response Timeline

- **Initial Response**: Within 48 hours of receiving your report
- **Status Update**: Within 7 days with assessment and planned actions
- **Resolution**: Security patches will be deployed as soon as possible, typically within 14 days for critical issues

### What to Expect

- **Acknowledgment**: We will confirm receipt of your vulnerability report
- **Assessment**: We will investigate and assess the severity and impact
- **Fix**: We will develop and test a fix
- **Disclosure**: After the fix is deployed, we may publicly acknowledge your contribution (with your permission)

## Security Measures

This project implements several security measures:

- **FTPS Deployment**: Encrypted file transfer protocol for deployments
- **Automated Dependency Scanning**: Dependabot monitors for known vulnerabilities
- **Regular Security Audits**: Weekly automated npm security audits
- **Content Security Policy**: HTTP security headers to prevent XSS and other attacks
- **Secure Dependencies**: Locked dependency versions with security-focused updates
- **No Production Sourcemaps**: Source code not exposed in production builds

## Security Best Practices for Contributors

If you're contributing to this project:

- Always run `npm audit` before submitting pull requests
- Keep dependencies up to date
- Never commit secrets, API keys, or credentials
- Follow secure coding practices
- Test security headers and CSP configurations

## Third-Party Security

### Reporting Issues in Dependencies

For vulnerabilities in third-party dependencies:
- Report directly to the maintainer of that package
- Notify us at bastiegag@gmail.com so we can track and update accordingly

### Known Security Tools

This project uses:
- **GitHub Dependabot**: Automated dependency updates
- **GitHub Security Advisories**: CVE notifications
- **npm audit**: Vulnerability scanning
- **GitHub Actions Security**: Minimal permissions and secure workflows

## Bug Bounty Program

This is a personal portfolio project and does not currently offer a bug bounty program. However, security researchers who responsibly disclose vulnerabilities will be credited in our changelog and repository (with their permission).

## Contact

For any security-related questions or concerns:
- **Email**: bastiegag@gmail.com
- **GitHub**: [@bastiegag](https://github.com/bastiegag)

---

**Last Updated**: February 2026
