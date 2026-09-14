#!/usr/bin/env bash
set -euo pipefail

npm run build
sudo install -d -m 0755 /var/www/html/projects/balikpapan-dev/assets
# Keep content-hashed assets from prior releases: cached HTML may still reference them.
sudo rsync -a dist/ /var/www/html/projects/balikpapan-dev/
