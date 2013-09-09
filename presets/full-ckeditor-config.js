/************************ IMPORTANT *************************
*
* If you update this config file. PLEASE always increment
* the CKEDITOR_VERSION_EXTENSION variable, which is set in
* javascripts/ckeditor_haiku/ckeditor_haiku_setup.js
*
************************* IMPORTANT ************************/
CKEDITOR.editorConfig = function( config )
{
    // Define changes to default configuration here.
  config.customConfig = CKEDITOR.basePath + '../ckeditor_haiku/ckeditor_haiku_config.js';
  try {
    config.customConfig += CKEDITOR_VERSION_EXTENSION;
  } catch(err) {
    if(typeof errlog == 'function') {
      errlog(err);
    } else {
      throw(err);
    }
  }
};
