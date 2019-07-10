// import {
//    Given
// } from 'cucumber'
const {
    Given,
    When,
    Then
} = require('cucumber')

import checkContainsAnyText from './steps/check/checkContainsAnyText';
import checkIsEmpty from './steps/check/checkIsEmpty';
import checkContainsText from './steps/check/checkContainsText';
import checkCookieContent from './steps/check/checkCookieContent';
import checkCookieExists from './steps/check/checkCookieExists';
import checkDimension from './steps/check/checkDimension';
import checkElementExists from './steps/check/checkElementExists';
import checkEqualsText from './steps/check/checkEqualsText';
import checkModal from './steps/check/checkModal';
import checkOffset from './steps/check/checkOffset';
import checkProperty from './steps/check/checkProperty';
import checkSelected from './steps/check/checkSelected';
import checkTitle from './steps/check/checkTitle';
import checkUrl from './steps/check/checkURL';
import closeAllButFirstTab from './steps/action/closeAllButFirstTab';
import compareText from './steps/check/compareText';
import isEnabled from './steps/check/isEnabled';
import isDisplayed from './steps/check/isDisplayed';
import openWebsite from './steps/action/openWebsite';
import setWindowSize from './steps/action/setWindowSize';

Given(
    /^I open the (url|site) "([^"]*)?"$/,
    openWebsite
);

Given(
    /^the element "([^"]*)?" is( not)* displayed$/,
    isDisplayed
);

Given(
    /^the element "([^"]*)?" is( not)* enabled$/,
    isEnabled
);

Given(
    /^the element "([^"]*)?" is( not)* selected$/,
    checkSelected
);

Given(
    /^the checkbox "([^"]*)?" is( not)* checked$/,
    checkSelected
);

Given(
    /^there is (an|no) element "([^"]*)?" on the page$/,
    checkElementExists
);

Given(
    /^the title is( not)* "([^"]*)?"$/,
    checkTitle
);

Given(
    /^the element "([^"]*)?" contains( not)* the same text as element "([^"]*)?"$/,
    compareText
);

Given(
    /^the (button|element) "([^"]*)?"( not)* matches the text "([^"]*)?"$/,
    checkEqualsText
);

Given(
    /^the (button|element|container) "([^"]*)?"( not)* contains the text "([^"]*)?"$/,
    checkContainsText
);

Given(
    /^the (button|element) "([^"]*)?"( not)* contains any text$/,
    checkContainsAnyText
);

Given(
    /^the (button|element) "([^"]*)?" is( not)* empty$/,
    checkIsEmpty
);

Given(
    /^the page url is( not)* "([^"]*)?"$/,
    checkUrl
);

Given(
    /^the( css)* attribute "([^"]*)?" from element "([^"]*)?" is( not)* "([^"]*)?"$/,
    checkProperty
);

Given(
    /^the cookie "([^"]*)?" contains( not)* the value "([^"]*)?"$/,
    checkCookieContent
);

Given(
    /^the cookie "([^"]*)?" does( not)* exist$/,
    checkCookieExists
);

Given(
    /^the element "([^"]*)?" is( not)* ([\d]+)px (broad|tall)$/,
    checkDimension
);

Given(
    /^the element "([^"]*)?" is( not)* positioned at ([\d]+)px on the (x|y) axis$/,
    checkOffset
);

Given(
    /^I have a screen that is ([\d]+) by ([\d]+) pixels$/,
    setWindowSize
);

Given(
    /^I have closed all but the first (window|tab)$/,
    closeAllButFirstTab
);

Given(
    /^a (alertbox|confirmbox|prompt) is( not)* opened$/,
    checkModal
);