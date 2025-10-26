# Deployment steps for AngularPortfolio (nginx)

## 1) Build the production bundle locally

cd AngularPortfolio
npm ci
npm run build -- --configuration production

The build output will be in: `dist/angular-portfolio/`

## 2) Copy build files to your server (examples)

Copy the entire `dist` folder to `/var/www/angular-portfolio` on the server using `scp`:

scp -r dist/angular-portfolio/* user@server:/var/www/angular-portfolio/

Or using `rsync` (recommended):

rsync -avz --delete dist/angular-portfolio/ user@server:/var/www/angular-portfolio/

## 3) nginx configuration

- Copy `deploy/nginx.conf` to your server, e.g. `/etc/nginx/sites-available/angular-portfolio`.
- Edit `server_name` and `root` in the file to reflect your domain and deployment path.
- Create a symlink and reload nginx:

sudo ln -s /etc/nginx/sites-available/angular-portfolio /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx

## 4) Notes on routing and base href

- `index.html` currently contains `<base href="/">`. If you deploy under a subfolder like
   `/myapp/`, update `index.html` to `<base href="/myapp/">` before building and adjust the
   nginx `root` accordingly.
- Because the app uses HTML5 pushState (no hash routing), nginx must return `index.html` for
   non-file routes — the provided `try_files $uri $uri/ /index.html;` line in the nginx config handles that.

## 5) Optional: enable HTTPS

- Use Certbot to obtain certificates and edit the nginx server block for SSL.

## 6) Troubleshooting

- If you see 404 when reloading a route (e.g. `/contact`) verify `try_files` is present and
   `root` points to the correct folder with `index.html`.
- If assets are missing or paths broken, check `<base href>` in `index.html`.

