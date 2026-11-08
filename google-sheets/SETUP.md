# Connect migration applications

Use the Google account that owns the destination sheet.

1. Open your Google Sheet and choose Extensions → Apps Script.
2. Replace the editor contents with Code.gs from this folder and save.
3. Choose Deploy → New deployment → Web app.
4. Set Execute as to Me and Who has access to Anyone. This allows visitors to submit applications through the script; the sheet itself can remain private.
5. Authorize the script to write to your sheet, then deploy.
6. Copy the Web app URL ending in /exec and send it to Codex to finish the website connection.

The script creates an Applications tab with Received, Nickname, Player ID, Power, Message, and Review status columns. Each new application starts as Pending. Confirmation appears in a separate tab only after Google saves the row.

The website has not been connected yet. No application has been submitted or sent during setup.
