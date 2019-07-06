import React from 'react'
import Enzyme, { shallow, render, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { createSerializer } from 'enzyme-to-json'
import sinon from 'sinon'

Enzyme.configure({
	adapter: new Adapter(),
	disableLifecycleMethods: true
});

expect.addSnapshotSerializer(createSerializer({ mode: 'deep' }))

global.React = React
global.shallow = shallow
global.render = render
global.mount = mount
global.sinon = sinon