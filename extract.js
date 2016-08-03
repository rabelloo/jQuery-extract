/*
    Extract objects to forms
    
    Author: André Luiz Rabêllo
    Version: 1.0.0
*/

;(function($) {
  'use strict';

  $.fn.extract = function (object, extra) {
      var $this = $(this);

      $.each(object, function (key, value) {
          var $key = $this.find('[name="' + key + '"]');

          // Try with id if name not found
          if (!$key.length)
              $key = $this.find('#' + key);

          // Allow for extra function to be passed
          if (extra && $.isFunction(extra))
              extra(key, value);

          // All checks
          else if ($key.is(':checkbox'))
              $key.prop('checked', value);

          else if ($key.is(':radio'))
              $key.filter('[value="' + value + '"]').prop('checked', true);

          // Select2 integration
          else if ($key.is('.select2') && $.isFunction($().select2)) {
              if ($key.is(':visible'))
                  $key.select2(value);
          }

          else if (!value && $key.is('select'))
              $key.val($key.find('option').val());

          else if ($key.is('input, textarea, select'))
              $key.val(value);

          else
              $key.html(value);
      });

      return this;
  };
})(jQuery);
