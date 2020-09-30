/**
 * onOpen(e) & onInstall(e)
 * Basic sidebar setup
 */
function onOpen(e) {
  DocumentApp.getUi().createAddonMenu()
      .addItem('Open guidance', 'showSidebar')
      .addToUi();
}
function onInstall(e) {
  onOpen(e);
}
function showSidebar() {
  var ui = HtmlService.createTemplateFromFile('sidebar').evaluate();
  ui.setTitle('Guidance for a Supreme Court petition');
  DocumentApp.getUi().showSidebar(ui);
}
function doGet() {
  return HtmlService.createHtmlOutputFromFile('sidebar');
}

/**
 * include(filename)
 * Allows for multiple html files in script
 */
function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename)
      .getContent();
}

// Change the user's selection to a range that includes every table in the document.
function getPosition(){
  var doc = DocumentApp.getActiveDocument();
  var cursor = doc.getCursor();
  var element = cursor.getElement();
  var ele_type = element.getType();
  Logger.log(ele_type);
  var offset = cursor.getOffset();
}

function headingStyle(){
  var style = {};
  style[DocumentApp.Attribute.HORIZONTAL_ALIGNMENT] = DocumentApp.HorizontalAlignment.CENTER;
  style[DocumentApp.Attribute.FONT_FAMILY] = 'Century Schoolbook';
  style[DocumentApp.Attribute.FONT_SIZE] = 12;
  style[DocumentApp.Attribute.SPACING_AFTER] = 6;
  style[DocumentApp.Attribute.BOLD] = true;
  return style;
}
function paragraphStyle(){
  var style = {};
  style[DocumentApp.Attribute.HORIZONTAL_ALIGNMENT] = DocumentApp.HorizontalAlignment.JUSTIFY;
  style[DocumentApp.Attribute.FONT_FAMILY] = 'Century Schoolbook';
  style[DocumentApp.Attribute.FONT_SIZE] = 12;
  style[DocumentApp.Attribute.SPACING_AFTER] = 6;
  style[DocumentApp.Attribute.BOLD] = false;
  style[DocumentApp.Attribute.INDENT_FIRST_LINE];
  return style;
}

function addQP(){
  var doc = DocumentApp.getActiveDocument();
  var body = doc.getBody();
  var para = body.appendParagraph("\nQUESTION PRESENTED");
  para.setAttributes(headingStyle());
  para = body.appendParagraph("\n");
  para.setAttributes(paragraphStyle());
}
function addLOP(){
  var doc = DocumentApp.getActiveDocument();
  var body = doc.getBody();
  var para = body.appendParagraph("\nLIST OF PARTIES");
  para.setAttributes(headingStyle());
  para = body.appendParagraph("\n");
  para.setAttributes(paragraphStyle());}
function addCD(){
  var doc = DocumentApp.getActiveDocument();
  var body = doc.getBody();
  var para = body.appendParagraph("\nCORPORATE DISCLOSURE");
  para.setAttributes(headingStyle());
  para = body.appendParagraph("\n");
  para.setAttributes(paragraphStyle());}
function addRC(){
  var doc = DocumentApp.getActiveDocument();
  var body = doc.getBody();
  var para = body.appendParagraph("\nRELATED CASES");
  para.setAttributes(headingStyle());
  para = body.appendParagraph("\n");
  para.setAttributes(paragraphStyle());}
function addOB(){
  var doc = DocumentApp.getActiveDocument();
  var body = doc.getBody();
  var para = body.appendParagraph("\nOPINIONS BELOW");
  para.setAttributes(headingStyle());
  para = body.appendParagraph("\n");
  para.setAttributes(paragraphStyle());}
function addJS(){
  var doc = DocumentApp.getActiveDocument();
  var body = doc.getBody();
  var para = body.appendParagraph("\nJURISDICTIONAL STATEMENT");
  para.setAttributes(headingStyle());
  para = body.appendParagraph("\n");
  para.setAttributes(paragraphStyle());
}
function addCSP(){
  var doc = DocumentApp.getActiveDocument();
  var body = doc.getBody();
  var para = body.appendParagraph("\nCONSTITUTIONAL & STATUTORY PROVISIONS");
  para.setAttributes(headingStyle());
  para = body.appendParagraph("\n");
  para.setAttributes(paragraphStyle());
} 
function addSOC(){
  var doc = DocumentApp.getActiveDocument();
  var body = doc.getBody();
  var para = body.appendParagraph("\nSTATEMENT OF THE CASE");
  para.setAttributes(headingStyle());
  para = body.appendParagraph("\n");
  para.setAttributes(paragraphStyle());
}
function addARG(){
  var doc = DocumentApp.getActiveDocument();
  var body = doc.getBody();
  var para = body.appendParagraph("\nARGUMENT");
  para.setAttributes(headingStyle());
  para = body.appendParagraph("\n");
  para.setAttributes(paragraphStyle());
}
function addSIG(){
  var doc = DocumentApp.getActiveDocument();
  var body = doc.getBody();
  var para = body.appendParagraph("\n[Name]\n[Firm]\n[Address]\n[Email]");
}