import checkClass from './steps/check/checkClass';
import checkContainsAnyText from './steps/check/checkContainsAnyText';
import checkIsEmpty from './steps/check/checkIsEmpty';
import checkContainsText from './steps/check/checkContainsText';
import checkCookieContent from './steps/check/checkCookieContent';
import checkCookieExists from './steps/check/checkCookieExists';
import checkDimension from './steps/check/checkDimension';
import checkEqualsText from './steps/check/checkEqualsText';
import checkFocus from './steps/check/checkFocus';
import checkInURLPath from './steps/check/checkInURLPath';
import checkIsOpenedInNewWindow from './steps/check/checkIsOpenedInNewWindow';
import checkModal from './steps/check/checkModal';
import checkModalText from './steps/check/checkModalText';
import checkNewWindow from './steps/check/checkNewWindow';
import checkOffset from './steps/check/checkOffset';
import checkProperty from './steps/check/checkProperty';
import checkFontProperty from './steps/check/checkFontProperty';
import checkSelected from './steps/check/checkSelected';
import checkTitle from './steps/check/checkTitle';
import checkTitleContains from './steps/check/checkTitleContains';
import checkURL from './steps/check/checkURL';
import checkURLPath from './steps/check/checkURLPath';
import checkWithinViewport from './steps/check/checkWithinViewport';
import compareText from './steps/check/compareText';
import isEnabled from './steps/check/isEnabled';
import isExisting from './steps/check/isExisting';
import isVisible from './steps/check/isDisplayed';
import waitFor from './steps/action/waitFor';
import waitForVisible from './steps/action/waitForDisplayed';
import checkIfElementExists from './steps/lib/checkIfElementExists';

const {
    Then
} = require('cucumber');


Then(
    /^I expect that the title is( not)* "([^"]*)?"$/,
    checkTitle
);

Then(
    /^I expect that the title ( not)* contains "([^"]*)?"$/,
    checkTitleContains
);

Then(
    /^I expect that element "([^"]*)?" does( not)* appear exactly "([^"]*)?" times$/,
    checkIfElementExists
);

Then(
    /^I expect that element "([^"]*)?" is( not)* displayed$/,
    isVisible
);

Then(
    /^I expect that element "([^"]*)?" becomes( not)* displayed$/,
    waitForVisible
);

Then(
    /^I expect that element "([^"]*)?" is( not)* within the viewport$/,
    checkWithinViewport
);

Then(
    /^I expect that element "([^"]*)?" does( not)* exist$/,
    isExisting
);

Then(
    /^I expect that element "([^"]*)?"( not)* contains the same text as element "([^"]*)?"$/,
    compareText
);

Then(
    /^I expect that (button|element) "([^"]*)?"( not)* matches the text "([^"]*)?"$/,
    checkEqualsText
);

Then(
    /^I expect that (button|element|container) "([^"]*)?"( not)* contains the text "([^"]*)?"$/,
    checkContainsText
);

Then(
    /^I expect that (button|element) "([^"]*)?"( not)* contains any text$/,
    checkContainsAnyText
);

Then(
    /^I expect that (button|element) "([^"]*)?" is( not)* empty$/,
    checkIsEmpty
);

Then(
    /^I expect that the url is( not)* "([^"]*)?"$/,
    checkURL
);

Then(
    /^I expect that the path is( not)* "([^"]*)?"$/,
    checkURLPath
);

Then(
    /^I expect the url to( not)* contain "([^"]*)?"$/,
    checkInURLPath
);

Then(
    /^I expect that the( css)* attribute "([^"]*)?" from element "([^"]*)?" is( not)* "([^"]*)?"$/,
    checkProperty
);

Then(
    /^I expect that the font( css)* attribute "([^"]*)?" from element "([^"]*)?" is( not)* "([^"]*)?"$/,
    checkFontProperty
);

Then(
    /^I expect that checkbox "([^"]*)?" is( not)* checked$/,
    checkSelected
);

Then(
    /^I expect that element "([^"]*)?" is( not)* selected$/,
    checkSelected
);

Then(
    /^I expect that element "([^"]*)?" is( not)* enabled$/,
    isEnabled
);

Then(
    /^I expect that cookie "([^"]*)?"( not)* contains "([^"]*)?"$/,
    checkCookieContent
);

Then(
    /^I expect that cookie "([^"]*)?"( not)* exists$/,
    checkCookieExists
);

Then(
    /^I expect that element "([^"]*)?" is( not)* ([\d]+)px (broad|tall)$/,
    checkDimension
);

Then(
    /^I expect that element "([^"]*)?" is( not)* positioned at ([\d+.?\d*]+)px on the (x|y) axis$/,
    checkOffset
);

Then(
    /^I expect that element "([^"]*)?" (has|does not have) the class "([^"]*)?"$/,
    checkClass
);

Then(
    /^I expect a new (window|tab) has( not)* been opened$/,
    checkNewWindow
);

Then(
    /^I expect the url "([^"]*)?" is opened in a new (tab|window)$/,
    checkIsOpenedInNewWindow
);

Then(
    /^I expect that element "([^"]*)?" is( not)* focused$/,
    checkFocus
);

Then(
    /^I wait on element "([^"]*)?"(?: for (\d+)ms)*(?: to( not)* (be checked|be enabled|be selected|be displayed|contain a text|contain a value|exist))*$/, {
        wrapperOptions: {
            retry: 3,
        },
    },
    waitFor
);

Then(
    /^I expect that a (alertbox|confirmbox|prompt) is( not)* opened$/,
    checkModal
);

Then(
    /^I expect that a (alertbox|confirmbox|prompt)( not)* contains the text "([^"]*)?"$/,
    checkModalText
);