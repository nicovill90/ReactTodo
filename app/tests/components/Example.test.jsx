const React = require('react');
const ReactDOM = require('react-dom');
const expect = require('expect');
const $ = require('jquery');
const TestUtils = require('react-addons-test-utils');

let Example = require('Example');

describe('Example', () => {
  it('should exist', () => {
    expect(Example).toExist();
  });

  describe('render', () => {
    it('should render Example to output', () => {
      let example = TestUtils.renderIntoDocument(<Example/>);
      let $el = $(ReactDOM.findDOMNode(example));
      let actualText = $el.find('.example-text').text();

      expect(actualText).toBe('Example Controller');
    });
  });
});
