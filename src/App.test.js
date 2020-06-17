import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import Counter from './Counter';
import { shallow, mount } from 'enzyme';

describe("Counter Testing", () => {
  let appComponent;
  beforeEach(() => {
    appComponent = mount(<App />);
    
  })

  test("render counter title", () => {    
    expect(appComponent.find("h5").text()).toBe("My Counter App");
  });

  test("render subtitle", () => {
    expect(appComponent.find("p").text()).toBe("This is a demo for Jest-Enzyme");
  });

  test("render counter Value", () => {    
    expect(appComponent.find("h6").text()).toBe("0");
  });

  test("render increment button",() => {
    expect(appComponent.find("#increment_btn").text()).toBe("Increment");
  });

  test("render decrement button",() => {
    expect(appComponent.find("#decrement_btn").text()).toBe("Decrement");
  });

  test("test increment button action", () => {
    appComponent.find("#increment_btn").simulate("click");
    appComponent.find("#increment_btn").simulate("click");
    expect(appComponent.find('#counterValue').text()).toBe("2");
  });

  test("test decrement button action", () => {
    appComponent.find("#decrement_btn").simulate("click");    
    expect(appComponent.find('#counterValue').text()).toBe("-1");
  });

  test("test counter", () => {
    appComponent.find("#increment_btn").simulate("click");
    expect(appComponent.find('#counterValue').text()).toBe("1");
    appComponent.find("#decrement_btn").simulate("click");    
    expect(appComponent.find('#counterValue').text()).toBe("0");
  })
});