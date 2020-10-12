/**
 * onOpen(e) & onInstall(e)
 * Basic sidebar setup
 */
function pullData() {
  var page = UrlFetchApp.fetch('https://storage.googleapis.com/scotus-notes/lg.json');
  var content = page.getContentText();
  Logger.log(page.getContent());
}
function logTest(){
  Logger.log("LOGGING");
}

function addSectionBelowCurrentParagraph(){
  var doc = DocumentApp.getActiveDocument();
  var body = doc.getBody();
  var cursor = doc.getCursor();
  var element = cursor.getElement();
  var parent = element.getParent();
  
  var text = "TEST TEXT";
  body.insertParagraph(parent.getChildIndex(element) + 1, text)
  
  cursor.insertText(text)
}

function addTextAtCursor(){
  var doc = DocumentApp.getActiveDocument();
  var body = doc.getBody();
  var cursor = doc.getCursor();
  var element = cursor.getElement();
  var parent = element.getParent();
  var text = "TEST TEXT";
  Logger.log("parent.getChildIndex(element) " + parent.getChildIndex(element));
  //body.insertParagraph(parent.getChildIndex(element) + 1, text)
  
  cursor.insertText(text)
}

function pocket() {
  // Try to get the current selection in the document. If this fails (e.g.,
  // because nothing is selected), show an alert and exit the function.
  var doc = DocumentApp.getActiveDocument();
  var selection = doc.getSelection();
  var body = doc.getBody();
  if (!selection) {
      DocumentApp.getUi().alert('Cannot find a selection in the document.');
      return;
  }
  var selectedElements = selection.getSelectedElements();
  var selectedElement = selectedElements[0];
  //holds the paragraph
  var paragraph = selectedElement.getElement();
  //get the index of the paragraph in the body
  var paragraphIndex = body.getChildIndex(paragraph);
  //remove the paragraph from the document
  //to use the insertParagraph() method the paragraph to be inserted must be detached from the doc
  paragraph.removeFromParent();
  body.insertParagraph(paragraphIndex, paragraph).setHeading(DocumentApp.ParagraphHeading.HEADING1);
};



function onOpen(e) {
  DocumentApp
      .getUi()
      .createAddonMenu()
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


/**
 *
 */
function getIndexFromBucket(){
  return UrlFetchApp.fetch('https://storage.googleapis.com/scotus-notes/lg_brief.html').getContentText();
}
function getBriefFromBucket(){
  return UrlFetchApp.fetch('https://storage.googleapis.com/scotus-notes/lg_index.html').getContentText();
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
  var cursor = doc.getCursor();
  Logger.log("cursor: " + cursor)
  var element = cursor.getElement();
  Logger.log("element: " + element)
  var parent = element.getParent();
  Logger.log("parent: " + parent);
  var text = "CONSTITUTIONAL & STATUTORY PROVISIONS";
  var para = body.insertParagraph(cursor.getElement().getParent().getChildIndex(child) + 1, text);
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