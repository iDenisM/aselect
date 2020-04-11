import { getSelect } from '../src/aselect.utils';

// Mock the select
document.body.innerHTML = `<select name="day" class="select-month" id="day">
    <option selected="selected" value>Day</option>
    <option value="01">01</option>
    <option value="02">02</option>
    <option value="03">03</option>
    <option value="04">04</option>
    <option value="05">05</option>
    <option value="06">06</option>
    <option value="07">07</option>
    <option value="08">08</option>
    <option value="09">09</option>
    <option value="10">10</option>
  </select>
  <select name="month" class="select-month" id="month">
    <option selected="selected" value>Day</option>
    <option value="01">01</option>
    <option value="02">02</option>
    <option value="03">03</option>
    <option value="04">04</option>
    <option value="05">05</option>
    <option value="06">06</option>
    <option value="07">07</option>
    <option value="08">08</option>
    <option value="09">09</option>
    <option value="10">10</option>
    <option value="11">11</option>
    <option value="12">12</option>
  </select>
  <select name="year" class="select-month" id="year">
    <option selected="selected" value>Day</option>
    <option value="2001">2001</option>
    <option value="2002">2002</option>
    <option value="2003">2003</option>
    <option value="2004">2004</option>
    <option value="2005">2005</option>
    <option value="2006">2006</option>
    <option value="2007">2007</option>
    <option value="2008">2008</option>
    <option value="2009">2009</option>
    <option value="2010">2010</option>
    <option value="2011">2011</option>
    <option value="2012">2012</option>
  </select>`;

test('Get select by passing class name', () => {
  expect(getSelect('.select-month')).toBeDefined();
})

test('Get select by passing id name', () => {
  expect(getSelect('#month')).toBeDefined();
})

test('Get select by passing DOM element', () => {
  const domElement = document.getElementById('month');
  expect(getSelect(domElement)).toBeDefined();
})

test('Get select by passing tagname', () => {
  expect(getSelect('select')).toBeDefined();
})