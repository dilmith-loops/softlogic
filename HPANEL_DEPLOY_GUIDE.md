# Hostinger (hPanel) Deployment Guide for `ai.loopsintegrated.co/softlogic`

This build is pre-configured to be placed directly under **`public_html/softlogic/`** on **`ai.loopsintegrated.co`**.

---

## Step 1: Open File Manager in hPanel

1. Log in to [Hostinger hPanel](https://hpanel.hostinger.com/).
2. Under **Websites**, select **ai.loopsintegrated.co** (or `loopsintegrated.co`) and click **Manage**.
3. Click **File Manager** (under Files) -> **Access files**.

---

## Step 2: Open `public_html`

In File Manager, double-click into:
```
public_html/
```

---

## Step 3: Create or Open `softlogic` Folder

1. Inside `public_html/`, click **New Folder** (or check if `softlogic` already exists).
2. Name the folder: `softlogic`
3. Double-click to open `public_html/softlogic/`.

---

## Step 4: Upload & Extract `softlogic_build.zip`

1. Click the **Upload** icon (upward arrow) in the top bar -> select **File**.
2. Select [`softlogic_build.zip`](file:///Users/dilmith/Downloads/web/softlogic_build.zip) from `/Users/dilmith/Downloads/web`.
3. Once uploaded, right-click `softlogic_build.zip` inside File Manager and select **Extract**.
4. Set the destination path to `.` (the current `public_html/softlogic/` folder) and click **Extract**.
5. *(Optional)* Delete `softlogic_build.zip` after extracting to save hosting storage.

---

## Step 5: Test the Live URL

Open your browser and visit:
👉 **`https://ai.loopsintegrated.co/softlogic/`**

### What is verified & working:
- Automatically redirects `ai.loopsintegrated.co/softlogic` to `/softlogic/` with trailing slash.
- Full video streaming (`.mp4` / `.webm`) with byte-range header support via `.htaccess`.
- Age gate modal with the **"NOT READY"** button.
- Dynamic WhatsApp / X / Telegram sharing links with `https://ai.loopsintegrated.co/softlogic/`.
