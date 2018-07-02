'use strict';

// material
import { MDCTemporaryDrawer } from '@material/drawer';
const drawer = new MDCTemporaryDrawer(document.querySelector('.mdc-drawer'));
document.querySelector('.menu').addEventListener('click', () => drawer.open = true);

require('modules/book');
require('modules/bookcase');
require('modules/home');
require('modules/character');
require('modules/relay');

