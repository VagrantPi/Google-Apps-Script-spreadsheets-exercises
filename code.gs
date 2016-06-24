function onOpen() {
  SpreadsheetApp.getUi().createMenu("記帳本").addItem("編輯記帳本","BTN1").addToUi();  
}

function BTN1(){
  var html = HtmlService.createHtmlOutputFromFile("Index").setSandboxMode(HtmlService.SandboxMode.IFRAME);
  //html.append("<input type='button' value='Close' onClick='google.script.host.close()' />");
  SpreadsheetApp.getUi().showModalDialog(html,"編輯記事本");
}

/*
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

function doGet(i) {
  return HtmlService.createHtmlOutput(i);
}

function getUnreadEmails() {
  return GmailApp.getInboxUnreadCount();
}

function test(){
  var ss = SpreadsheetApp.getActive();
  var sheet = ss.getSheetByName("記帳");
  settingsSheet.activate();
}
*/

function init(){
  var ss = SpreadsheetApp.getActive();
  var sheet = ss.getSheetByName("記帳");
  var range = sheet.getRange(1,1,1,1);
  var data = range.getValue();
  if(data == ''){
    createHeaders();
  }
}

// https://zapier.com/blog/google-apps-script-tutorial/
function createHeaders() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheets()[0];

  // Freezes the first row
  sheet.setFrozenRows(1);

  // Set the values we want for headers
  var values = [
    ["日期", "用途", "金額"]
  ];

  // Set the range of cells
  var range = sheet.getRange("A1:C1");

  // Call the setValues method on range and pass in our values
  range.setValues(values);
}

function addtag(date,aclass,money){
  var ss = SpreadsheetApp.getActive();
  var sheet = ss.getSheetByName("記帳");
  var range = sheet.getRange(sheet.getDataRange().getHeight()+1, 1, 1, 3);
  var values = [[date, aclass, money]];

  //Logger.log(date + " " + aclass + " " + money);
  range.setValues(values);
}

function ckclass(){
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName("記帳")
  var data = sheet.getSheetValues(2,2,sheet.getDataRange().getHeight()-1,2);
  var unique = ArrayLib.unique(data);

  var dataInUnique = new Array(new Array());
  for(var i in unique){
    dataInUnique[i] = unique[i];
    var temp  = dataInUnique[i];
    for(var j in temp){
      dataInUnique[i][j] = temp[j];
    }
  }
  for(var i in dataInUnique){
    Logger.log(dataInUnique[i][0]);
  }
  return dataInUnique;
}

function getMrow(){
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName("記帳")
  var data = sheet.getSheetValues(2,3,sheet.getDataRange().getHeight()-1,3);
  return data;
}
