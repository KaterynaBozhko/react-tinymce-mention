import 'babel/polyfill';
import React from 'react';
import TinyMCE from 'react-tinymce';
import Mention from 'mention/Mention';
import dataSourceStatic from 'mention/reducers/__test__/fixtures/dataSourceStatic';

var plugins = [
  'autolink',
  'autoresize',
  'code',
  'image',
  'link',
  'media',
  'mention',
  'tabfocus'
];

React.render(
  <div>
    <TinyMCE
      content=''
      config={{
        browser_spellcheck: true,
        document_base_url: window.location.origin + '/',
        extended_valid_elements: 'blockquote[dir|style|cite|class|dir<ltr?rtl],iframe[src|frameborder|style|scrolling|class|width|height|name|align],pre',
        ie7_compat: false,
        image_description: false,
        image_dimensions: false,
        media_alt_source: false,
        media_poster: false,
        media_dimensions: false,
        menubar: false,
        plugins: plugins.join(','),

        // We always want the _full URL_ - not the relative path.
        relative_urls: false,
        remove_script_host: false,
        skin: 'kindling',
        statusbar: false,

        // Suppress the target option for links.
        target_list: false,
        theme: 'kindling',
        toolbar: 'bold italic underline strikethrough | bullist numlist blockquote | link unlink | image media | removeformat code'
      }}
      onChange={() => {
        //this.handleEditorChange()
      }}
    />

    <Mention
      dataSource={dataSourceStatic}
      delimiter={'@'}
      specialTags={[
        'moderator',
        'moderators',
        'all'
      ]}
    />

  </div>
, document.getElementById('root'));
