import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import request from 'request'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test('test proxy mounts response from backend', () => {
	request('http://localhost:3000/', function(error, response, body) {
		expect(response.statusCode).to.equal(200);
	});
})
test('test proxy mounts data as string', () => {	
	request('http://localhost:3000/', function(error, response, body) {
			expect(body).to.be.a('string');
		});
})