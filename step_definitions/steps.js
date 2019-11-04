const { I } = inject();
// Add in your custom step files

Given('I am on the homepage', () => {
  // From "features/example.feature" {"line":7,"column":5}
  I.amOnPage('/');
});

Then('I should see the title', () => {
  // From "features/example.feature" {"line":10,"column":5}
  I.seeElement('h1');
});
