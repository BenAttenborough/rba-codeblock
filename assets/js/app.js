jQuery(document).ready(function ($) {
    $('.RBACode').each(function () {

        var $this = $(this),
            $code = $this.html(),
            $unescaped = $('<div/>').html($code).text(),
            $mode = this.dataset.mode,
            $lineNumbers = this.dataset.linenumbers == "true";

        $this.empty();

        CodeMirror(this, {
            value: $unescaped,
            mode: $mode,
            lineNumbers: !$this.is('.inline'),
            //lineNumbers: $lineNumbers,
            readOnly: true,
            theme: 'material'
        });

    });
});