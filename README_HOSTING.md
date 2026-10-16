# Hosting Guide for `ai.loopsintegrated.co/softlogic`

This build is configured to run under the subpath `/softlogic/` at **`https://ai.loopsintegrated.co/softlogic/`**.

---

## 1. Quick Deploy

### Option A: Upload the Zip
- Upload `softlogic_build.zip` to your web server.
- Extract into your public web folder for the `/softlogic` path:
  ```bash
  unzip softlogic_build.zip -d /var/www/softlogic/
  ```

### Option B: Deploy `dist/` Folder
- Copy all files from the `dist/` directory to the server path mounted to `/softlogic`.

---

## 2. Server Configuration

### If using Nginx (`ai.loopsintegrated.co`)
Add the contents of [`nginx-softlogic.conf`](file:///Users/dilmith/Downloads/web/nginx-softlogic.conf) to your server configuration block:

```nginx
# 1. Enforce trailing slash
location = /softlogic {
    return 301 https://$host/softlogic/;
}

# 2. Serve static files
location /softlogic/ {
    alias /var/www/softlogic/;
    index index.html;
    try_files $uri $uri/ /softlogic/index.html;

    # Video streaming support
    location ~* ^/softlogic/.*\.(mp4|webm)$ {
        alias /var/www/softlogic/;
        mp4;
        mp4_buffer_size 1m;
        mp4_max_buffer_size 5m;
        add_header Cache-Control "public, max-age=2592000, immutable";
    }

    # Static assets caching
    location ~* ^/softlogic/.*\.(css|js|jpg|jpeg|png|gif|svg|ico|woff2?)$ {
        alias /var/www/softlogic/;
        expires 7d;
        add_header Cache-Control "public, max-age=604800";
    }
}
```

### If using Apache / cPanel / LiteSpeed
The generated [`.htaccess`](file:///Users/dilmith/Downloads/web/.htaccess) is already placed inside `dist/` and configured with:
- `RewriteBase /softlogic/`
- Trailing slash redirection
- Gzip compression & browser cache headers for videos/images

---

## 3. Rebuilding

To rebuild the distribution and zip package after making changes:
```bash
npm run build
```
