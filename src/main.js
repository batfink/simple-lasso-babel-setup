'use strict';

import add from './add.js';
import $ from 'jquery';

$(() => {
    $(document.body).append( '2 + 2 = ', add(2, 2));
});
