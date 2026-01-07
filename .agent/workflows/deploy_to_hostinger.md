---
description: How to deploy the React app to Hostinger
---

# Deploying to Hostinger

Follow these steps to host your website on Hostinger:

1.  **Build the Project**:
    Run the following command in your terminal to create the production build. This will create a `dist` folder containing all your website files.
    ```bash
    npm run build
    ```

2.  **Prepare for Upload**:
    - Locate the `dist` folder in your project directory: `c:\Users\Hp\Desktop\MYPROJECTS\iptv\dist`
    - (Optional) Zip the contents of the `dist` folder (select all files inside `dist` -> Right click -> Compress to ZIP) to make uploading faster.

3.  **Upload to Hostinger**:
    - Log in to your Hostinger Account.
    - Go to **Websites** -> **Manage** (for the domain you want to use).
    - Open the **File Manager**.
    - Navigate to the `public_html` folder.
    - Delete any default files (like `default.php`) if they exist.
    - Upload the contents of your `dist` folder (or the ZIP file you created) into `public_html`.
    - If you uploaded a ZIP file, right-click it and select **Extract**. Make sure the files are directly in `public_html`, not inside a subfolder.

4.  **Verify Routing**:
    - We have already added an `.htaccess` file to your project (in the `public` folder), which handles page navigation (so refreshing pages like `/packages` doesn't give a 404 error).
    - Ensure this `.htaccess` file is present in your `public_html` folder on Hostinger. (Note: It might be hidden; check settings to show hidden files).

5.  **Done!**:
    - Visit your domain name to see your live website.
