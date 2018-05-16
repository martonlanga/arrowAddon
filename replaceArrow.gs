function onOpen(e) {
  DocumentApp.getUi().createAddonMenu()
      .addItem('Replace', 'replace')
      .addToUi();
}

function replace() {
  var body = DocumentApp.getActiveDocument()
  body.replaceText('->', '→');
}
