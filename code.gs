function onOpen() {
  SpreadsheetApp.getUi().createMenu("記事本").addItem("編輯記事本","BTN1").addToUi();  
}

function BTN1(){
  var html = HtmlService.createHtmlOutputFromFile("Index").setSandboxMode(HtmlService.SandboxMode.IFRAME);
  //html.append("<input type='button' value='Close' onClick='google.script.host.close()' />");
  SpreadsheetApp.getUi().showModalDialog(html,"編輯記事本");
}

function getDate() {
  ss = SpreadsheetApp.getActive();
  var sheet = ss.getSheetByName("記帳");
  var range = sheet.getRange(2, 1, sheet.getDataRange().getHeight()-1,1);
  var data = range.getValues();
  
  for (var i = 0; i < data.length; i++) {
    Logger.log('date: ' + data[i]);
  }
  return data;
}

function test() {
  var output = HtmlService.createHtmlOutput('<b>Hello world!</b>');
  //return doGet('WTF');
  return 'WTF';
}

function doGet(i) {
  return HtmlService.createHtmlOutput(i);
}

function getUnreadEmails() {
  return GmailApp.getInboxUnreadCount();
}