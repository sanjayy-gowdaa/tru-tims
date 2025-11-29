<h1 align="center">
<img src="public/img/defaultLogoLight.png" width="400" />
<br />Keptel TIMS
</h1>
<p align="center">
<a href="https://github.com/sanjayy-gowdaa/tru-tims"><img src="https://img.shields.io/badge/license-APACHE%202-green.svg?style=flat-square" /></a>
<a href="https://github.com/sanjayy-gowdaa/tru-tims/releases"><img src="https://img.shields.io/badge/version-1.0.0-blue.svg?style=flat-square" /></a>
<br />
<sub>© 2025 Keptel. Based on Trudesk by Chris Brame.</sub>
</p>
<br />

### Enterprise Ticket & Issue Management System

**Keptel TIMS** is an enterprise-grade, web-based platform designed to streamline internal support operations across IT, HR, Facilities, and other business units. It provides a centralized system for ticket creation, assignment, tracking, and reporting, built to improve service efficiency and transparency within organizations.

#### Key Features
- 🎫 Centralized ticket management
- 👥 Multi-department support (IT, HR, Facilities)
- 📊 Advanced analytics and reporting
- 🔐 Two-factor authentication (2FA)
- 🔔 Real-time notifications

#### Requirements
- Docker & Docker Compose (Recommended)
- **OR** Manual Setup:
  - Node.js 16+
  - MongoDB 5.0+
  - Elasticsearch 8 (optional)

### Quick Start with Docker

```bash
# Clone the repository
git clone https://github.com/sanjayy-gowdaa/tru-tims.git
cd tru-tims

# Start the application
docker-compose up -d

# Access at http://localhost:8118
```

### Troubleshooting

If the application doesn't start properly, try rebuilding:

```bash
# Stop and remove containers
docker-compose down

# Rebuild and start
docker-compose up -d --build

# View logs
docker-compose logs -f trudesk
```

### Contributing
We welcome contributions! You can help by:
+ Reporting bugs
+ Requesting features
+ Submitting pull requests
+ Improving documentation

### Open-Source Attribution

This project includes modified components from the open-source project **Trudesk**.

Original software developed by:
- **Trudesk, Inc.** (Chris Brame)
- Copyright © 2014-2022 Trudesk, Inc.
- Licensed under Apache License 2.0
- Source: https://github.com/polonel/trudesk

### License

    Copyright © 2025 Keptel
    
    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at
    
    http://www.apache.org/licenses/LICENSE-2.0
    
    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
    
---

**Keptel TIMS** - Enhancing collaboration, ensuring SLA compliance, and providing detailed analytics for performance optimization.
