var $j = jQuery.noConflict();

var error_messages = {
    unknown_response: 'Unknown response!'
};
var error_box;

var mgGetBaseURL = function() {
    var url = location.href;
    var baseURL = url.substring(0, url.indexOf('/', 14));

    if (/^https?:\/\/(localhost|\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3})/.test(baseURL)) {
        var url = location.href;
        var pathname = location.pathname;
        var index1 = url.indexOf(pathname);
        var index2 = url.indexOf("/", index1 + 1);
        var baseLocalUrl = url.substr(0, index2);

        return baseLocalUrl + "/";
    }
    else {
        return baseURL + "/";
    }
}

$j(document).ready(function() {

    /**
     * ---------------------
     * MAILIGEN WIDGET
     * ---------------------
     */
    var mg_widget_forms = $j('.mg-widget-form');
    $j(".mg-error-box", mg_widget_forms).hide();

    $j(mg_widget_forms).submit(function() {
        var mg_widget_form = $j(this),
            error_box = $j(".mg-error-box", mg_widget_form);

        error_box.hide();

        var data = $j(this).serialize(),
                $btn = $j('.mailigen-submit', mg_widget_form);

        error_box.fadeOut();
        $j('.mg-error', mg_widget_form).remove();

        changeBtnState($btn, 'inactive');

        $j.post(mgGetBaseURL() + 'wp-content/plugins/mailigen-widget/ajax.php', data, function(response) {
            response = JSON.parse(response);

            if (!response) {
                error_box.html('<p>' + error_messages.unknown_response + '</p>').fadeIn();

            } else if (response.success) {
                if (response.success == 'redirect') {
                    window.location = response.message;
                    return;
                }
                if (response.message.content) {
                    try {
                        mg_widget_form.closest(".MailigenWidget").html(response.message.content);
                    } catch (e) {
                    }
                } else {
                    alert(response.message);
                }

            } else {
                error_box.html('<p>' + response.message + '</p>').fadeIn();
                if (response.errors) {
                    $j.each(response.errors, function(key, val) {
                        $j('.' + key, mg_widget_form).before($j('<div class="mg-error">' + val + '</div>'));
                    });
                }
            }
            return false;
        }).always(function() {
            changeBtnState($btn, 'active');
        });

        return false;
    });

    function changeBtnState($btn, state) {
        if ('inactive' === state) {
            $btn.attr('disabled', 'disabled').css('opacity', '0.7');
            $btn.find('.mg_waiting').css('display', 'block');
        } else {
            $btn.removeAttr('disabled').css('opacity', '1');
            $btn.find('.mg_waiting').hide();
        }
    }

    /**
     * ---------------------
     * MAILIGEN OPTIONS
     * ---------------------
     */

    var mg_options_form = $j('#mg-options-form');

    $j('#mg-fields-list', mg_options_form).change(function()
    {
        var fields = $j('#mg-fields-container', mg_options_form);

        fields.html('').show();

        $j('<div class="mg-preloader">').appendTo(fields);

        var data = {
            action: 'reload_fields',
            mg_list: $j(this).val()
        };

        $j.post(ajaxurl, data, function(response)
        {
            fields.html(response);
        });
        return false;
    });
});
