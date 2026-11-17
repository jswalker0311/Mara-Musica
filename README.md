# Mara Musica — website

A plain HTML/CSS/JS site. No build step. Open `index.html` in a browser to preview.

**Edit content in `config.js`**: booking link, email, socials, accolades, selected work, full discography, press, testimonials. Lines marked `← REPLACE` are placeholders.

---

## 1. Connect your Google Calendar + Zoom (booking)

Pick **one** of these and paste the link into `bookingUrl` in `config.js`.

### Option A: Google Calendar appointment schedule (built into Workspace)
1. Open Google Calendar → **Create** → **Appointment schedule**.
2. Name it "Free chat", choose a call length, and add your availability and buffer time.
3. Under **Booking form**, add a question like *"What are you working on? (links welcome)"*.
4. Under **Location and conferencing**:
   - **Google Meet**: a unique link is created for each booking automatically, or
   - **Zoom**: choose "None / other" and paste your Zoom **Personal Meeting Room** link in the
     description and in the confirmation email. Every booking uses the same Zoom room.
5. Save → **Share** → **Website embed** → copy the `src="…"` URL out of the iframe code.
6. Paste it into `bookingUrl`.

Bookings go straight into your Google Calendar and the artist gets a confirmation email.

### Option B: Zoom Scheduler (if you want a fresh Zoom link per call)
1. In Zoom → **Scheduler**, connect your Google Calendar (Zoom uses it to check when you're busy
   and writes bookings into it).
2. Create an appointment type with Zoom as the location.
3. Copy the booking page URL and paste it into `bookingUrl`.

Option B needs a paid Zoom Scheduler add-on. Option A is free with Workspace.

> If `bookingUrl` is empty, the site shows an "Email James" button instead, so it never looks broken.

## 2. Add your work
In `config.js` → `work`, replace the placeholder tracks. Paste a Spotify track URL into
`spotify` to get a playable embed. The `story` line (what happened in the session) is what
builds trust, so keep it.

## 3. Photos and logo
Your logo and photo live in `images/`. `logo.png` and `logo-mark.png` are cream-on-transparent versions made from `logo-original.png` (your black-on-cream file, used for link previews). Replace `james.jpg` to change the About photo.


## 4. Add testimonials
Add **real** quotes to `testimonials` in `config.js`. The section stays hidden until you do.

## 5. Go live + edit from your browser (GitHub Pages, free)

### One-time setup (about 10 minutes)
1. Sign up or log in at **github.com**.
2. Click **+** (top right) → **New repository**. Name it `mara-musica`, set it to **Public**
   (free GitHub Pages hosting requires this) and click **Create repository**.
3. On the new repo page, click **uploading an existing file**. Drag in **everything inside**
   the `james-walker-site` folder (`index.html`, `styles.css`, `main.js`, `config.js`,
   `README.md` and the `images` folder). Click **Commit changes**.
4. Go to **Settings** → **Pages**. Under "Build and deployment" set Source to
   **Deploy from a branch**, Branch to **main** and folder to **/ (root)**, then click **Save**.
5. After a minute or two the site is live at `https://YOUR-USERNAME.github.io/mara-musica/`
   (the link appears at the top of the Pages settings).

### Editing from any browser (or your phone)
- **Words, tracks, press, accolades, booking link:** open `config.js` on github.com → click the
  **pencil icon** → edit → **Commit changes**. The live site updates in about a minute.
- **Page text (headings, About, FAQ):** same steps, in `index.html`.
- **Photos:** open the `images` folder → **Add file** → **Upload files**. To replace one,
  upload a file with the same name.
- **Made a mistake?** Every save is kept. Open the file → **History** to see or restore an older version.

### Your own domain (e.g. maramusica.com)
Settings → Pages → **Custom domain**, type the domain and save. Then, at your domain
registrar, add the DNS records GitHub shows you. Tick **Enforce HTTPS** once it's available.
