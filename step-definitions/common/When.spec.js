import clearInputField from './steps/action/clearInputField';
import clickElement from './steps/action/clickElement';
import closeLastOpenedWindow from './steps/action/closeLastOpenedWindow';
import deleteCookies from './steps/action/deleteCookies';
import dragElement from './steps/action/dragElement';
import focusLastOpenedWindow from './steps/action/focusLastOpenedWindow';
import handleModal from './steps/action/handleModal';
import moveTo from './steps/action/moveTo';
import pause from './steps/action/pause';
import pressButton from './steps/action/pressButton';
import scroll from './steps/action/scroll';
import selectOption from './steps/action/selectOption';
import selectOptionByIndex from './steps/action/selectOptionByIndex';
import setCookie from './steps/action/setCookie';
import setInputField from './steps/action/setInputField';
import setPromptText from './steps/action/setPromptText';

const {
    When
} = require('cucumber');


When(
    /^I (click|doubleclick) on the (link|button|element) "([^"]*)?"$/,
    clickElement
);

When(
    /^I (add|set) "([^"]*)?" to the inputfield "([^"]*)?"$/,
    setInputField
);

When(
    /^I clear the inputfield "([^"]*)?"$/,
    clearInputField
);

When(
    /^I drag element "([^"]*)?" to element "([^"]*)?"$/,
    dragElement
);

When(
    /^I pause for (\d+)ms$/,
    pause
);

When(
    /^I set a cookie "([^"]*)?" with the content "([^"]*)?"$/,
    setCookie
);

When(
    /^I delete the cookie "([^"]*)?"$/,
    deleteCookies
);

When(
    /^I press "([^"]*)?"$/,
    pressButton
);

When(
    /^I (accept|dismiss) the (alertbox|confirmbox|prompt)$/,
    handleModal
);

When(
    /^I enter "([^"]*)?" into the prompt$/,
    setPromptText
);

When(
    /^I scroll to element "([^"]*)?"$/,
    scroll
);

When(
    /^I close the last opened (window|tab)$/,
    closeLastOpenedWindow
);

When(
    /^I focus the last opened (window|tab)$/,
    focusLastOpenedWindow
);

When(
    /^I select the (\d+)(st|nd|rd|th) option for element "([^"]*)?"$/,
    selectOptionByIndex
);

When(
    /^I select the option with the (name|value|text) "([^"]*)?" for element "([^"]*)?"$/,
    selectOption
);

When(
    /^I move to element "([^"]*)?"(?: with an offset of (\d+),(\d+))*$/,
    moveTo
);