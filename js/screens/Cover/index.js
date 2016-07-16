import React from 'react';
import ReactDOM, { render } from 'react-dom';
import Cover from './components/Cover';

let coverContainer = document.getElementById("cover");

if (coverContainer) {
  render(<Cover />, coverContainer);
}
