# Deployment Instructions for Tulsio Client

## Server Details
- **Server IP**: 89.221.216.23
- **User**: dimi
- **Project Path**: /opt/tulsio/client
- **Port**: 3011
- **Domain**: tulsio.com

## Prerequisites
1. Node.js 18.x or 20.x installed
2. PM2 installed globally: `npm install -g pm2`
3. Nginx installed
4. Project files uploaded to `/opt/tulsio/client`

## Deployment Steps

### 1. Prepare the Server

```bash
# Create logs directory
mkdir -p /opt/tulsio/client/logs

# Set proper permissions
sudo chown -R dimi:dimi /opt/tulsio/client
chmod -R 755 /opt/tulsio/client
```

### 2. Install Dependencies and Build

```bash
cd /opt/tulsio/client

# Install dependencies
npm install --production

# Build Next.js application
npm run build
```

### 3. Configure PM2

```bash
cd /opt/tulsio/client

# Start application with PM2
pm2 start ecosystem.config.js --env production

# Save PM2 process list
pm2 save

# Setup PM2 to start on system boot
pm2 startup systemd -u dimi --hp /home/dimi
# Run the command that PM2 outputs (it will be something like):
# sudo env PATH=$PATH:/usr/bin pm2 startup systemd -u dimi --hp /home/dimi
```

### 4. Configure Nginx

```bash
# Add WebSocket upgrade mapping to nginx.conf (if not already present)
sudo nano /etc/nginx/nginx.conf
```

Add this to the `http` block in `/etc/nginx/nginx.conf`:

```nginx
map $http_upgrade $connection_upgrade {
    default upgrade;
    '' close;
}
```

```bash
# Copy site configuration
sudo cp /opt/tulsio/client/nginx.conf /etc/nginx/sites-available/tulsio-client

# Enable the site
sudo ln -sf /etc/nginx/sites-available/tulsio-client /etc/nginx/sites-enabled/tulsio-client

# Remove default site if needed
sudo rm -f /etc/nginx/sites-enabled/default

# Test nginx configuration
sudo nginx -t

# Reload nginx
sudo systemctl reload nginx
```

### 5. Configure SSL with Certbot

```bash
# Install certbot (if not already installed)
sudo apt update
sudo apt install certbot python3-certbot-nginx

# Obtain SSL certificate
sudo certbot --nginx -d tulsio.com -d www.tulsio.com

# Certbot will automatically modify your nginx config to add SSL
```

### 6. Configure Firewall

```bash
# Allow Nginx traffic
sudo ufw allow 'Nginx Full'
sudo ufw status
```

## PM2 Commands

```bash
# View application status
pm2 status

# View logs
pm2 logs tulsio-client

# View only error logs
pm2 logs tulsio-client --err

# Monitor application
pm2 monit

# Restart application
pm2 restart tulsio-client

# Stop application
pm2 stop tulsio-client

# Reload application (zero-downtime)
pm2 reload tulsio-client

# Delete application from PM2
pm2 delete tulsio-client
```

## Updating the Application

```bash
cd /opt/tulsio/client

# Pull latest changes (if using git)
git pull

# Install new dependencies
npm install --production

# Rebuild application
npm run build

# Reload with PM2 (zero-downtime)
pm2 reload tulsio-client
```

## Monitoring and Logs

### Application Logs
- **Error logs**: `/opt/tulsio/client/logs/error.log`
- **Output logs**: `/opt/tulsio/client/logs/out.log`

### Nginx Logs
- **Access logs**: `/var/log/nginx/tulsio-client-access.log`
- **Error logs**: `/var/log/nginx/tulsio-client-error.log`

### View logs in real-time
```bash
# Application logs
tail -f /opt/tulsio/client/logs/error.log
tail -f /opt/tulsio/client/logs/out.log

# Nginx logs
sudo tail -f /var/log/nginx/tulsio-client-access.log
sudo tail -f /var/log/nginx/tulsio-client-error.log

# PM2 logs
pm2 logs tulsio-client --lines 100
```

## Performance Tuning

### PM2 Configuration
The current PM2 config uses:
- **Fork mode**: Single instance for optimal Next.js performance
- **Memory limit**: 1GB (app will restart if exceeded)
- **Auto-restart**: Enabled with max 10 restarts
- **Min uptime**: 10s before considering restart successful

### Nginx Configuration
Optimizations included:
- **Gzip compression**: Level 6 for optimal balance
- **Static file caching**: 1 year for immutable assets
- **HTML caching**: 5 minutes with stale-while-revalidate
- **Rate limiting**: 10 req/s for general, 20 req/s for API
- **Connection pooling**: Keepalive connections to backend
- **Security headers**: XSS protection, frame options, etc.

## Troubleshooting

### Application won't start
```bash
# Check PM2 logs
pm2 logs tulsio-client --err

# Check if port 3011 is in use
sudo netstat -tulpn | grep 3011

# Manually start to see errors
cd /opt/tulsio/client
NODE_ENV=production node node_modules/next/dist/bin/next start -p 3011
```

### Nginx errors
```bash
# Test configuration
sudo nginx -t

# Check error logs
sudo tail -f /var/log/nginx/tulsio-client-error.log

# Restart nginx
sudo systemctl restart nginx
```

### Application is slow
```bash
# Check memory usage
pm2 monit

# Check if app is swapping
free -h

# Check CPU usage
top -p $(pgrep -f "tulsio-client")
```

## Security Checklist

- [ ] Firewall configured (ufw)
- [ ] SSL certificate installed
- [ ] Security headers enabled
- [ ] Rate limiting configured
- [ ] Log rotation configured
- [ ] Backup strategy in place
- [ ] Environment variables secured
- [ ] Non-root user running application

## Environment Variables

Create `.env.production` file in `/opt/tulsio/client/`:

```bash
NODE_ENV=production
PORT=3011
APP_API=your_api_url
ECOMAIL=your_ecomail_key
MEILISEARCH_PREFIX=your_prefix
MEILISEARCH_TOKEN=your_token
APP_DOMAIN=https://tulsio.com
MEILISEARCH_DOMAIN=your_meilisearch_domain
```

Ensure proper permissions:
```bash
chmod 600 /opt/tulsio/client/.env.production
```
