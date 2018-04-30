jQuery(document).ready(function ($) {
    $('.RBACode').each(function () {

        var $this = $(this),
            $code = $this.html(),
            $unescaped = $('<div/>').html($code).text();

        $this.empty();

        CodeMirror(this, {
            value: $unescaped,
            mode: 'javascript',
            lineNumbers: !$this.is('.inline'),
            readOnly: true,
            theme: 'material'
        });

    });
});