// In Apps Script Project Settings, add a Script Property:
// SPREADSHEET_ID = the ID from your destination Google Sheet URL.
function doPost(e) {
  let lock;
  try {
    const p = e.parameter || {};
    if (p.website) throw new Error('Invalid application.');
    const fields = ['nickname', 'player-id', 'power', 'comment'];
    const values = fields.map(key => String(p[key] || '').trim());
    if (values.slice(0, 3).some(value => !value) || values.some(value => value.length > 2000)) {
      throw new Error('Please complete the required fields.');
    }
    const id = PropertiesService.getScriptProperties().getProperty('SPREADSHEET_ID') || '1vpfnNZc6uHBYc7Sq9qmaAuIE3_F2JmWjCfhjQdTpfUI';
    if (!id) throw new Error('Applications are not configured yet.');
    lock = LockService.getScriptLock();
    lock.waitLock(20000);
    const book = SpreadsheetApp.openById(id);
    const sheet = book.getSheetByName('Applications') || book.insertSheet('Applications');
    if (!sheet.getLastRow()) {
      sheet.appendRow(['Received', 'Nickname', 'Player ID', 'Power', 'Message', 'Review status']);
      sheet.setFrozenRows(1);
      sheet.getRange(1, 1, 1, 6).setBackground('#29211b').setFontColor('#e5c78e').setFontWeight('bold');
    }
    // Treat player input as text, never as a spreadsheet formula.
    const safe = values.map(value => /^[=+\-@]/.test(value) ? "'" + value : value);
    sheet.appendRow([new Date(), ...safe, 'Pending']);
    SpreadsheetApp.flush();
    return confirmation('Application received', 'Your application has reached GUL. Our R4s will review it. You can close this tab and return to the website.');
  } catch (error) {
    return confirmation('Application not sent', 'We could not save your application. Return to the website and try again, or contact an R4 on Discord.');
  } finally {
    if (lock && lock.hasLock()) lock.releaseLock();
  }
}

function confirmation(title, message) {
  return HtmlService.createHtmlOutput('<!doctype html><meta name="viewport" content="width=device-width,initial-scale=1"><title>' + title + '</title><body style="background:#191817;color:#e5c78e;font:20px system-ui;padding:10vh 8vw"><h1>' + title + '</h1><p style="color:#d0c6b8;max-width:650px;line-height:1.6">' + message + '</p></body>');
}

