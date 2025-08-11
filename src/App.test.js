import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { updateTimes, initializeTimes } from './App';
import ReservationForm from './pages/ReservationPage/ReservationPage';

beforeAll(() => {
	jest.spyOn(console, 'warn').mockImplementation(() => {});
    window.matchMedia = window.matchMedia || function() {
        return {
            matches: false,
            addListener: function() {},
            removeListener: function() {},
            addEventListener: function() {},
            removeEventListener: function() {},
            dispatchEvent: function() {},
        };
    };
});

test("Renders the reservation form date", () => {
	render(
      <Router>
        <ReservationForm />
      </Router>
    );

  const date = screen.getByLabelText("Date");
  expect(date).toBeInTheDocument();
})

test("initializeTimes returns correct times", () => {
	render(
      <Router>
        <ReservationForm />
      </Router>
    );

	const times = initializeTimes();
	expect(times).toEqual([
		{value: '17:00', label: '17:00'},
		{value: '18:00', label: '18:00'},
		{value: '19:00', label: '19:00'},
		{value: '20:00', label: '20:00'},
		{value: '21:00', label: '21:00'},
		{value: '22:00', label: '22:00'}
	]);
})

test("updateTimes removes correct time", () => {
	render(
		<Router>
			<ReservationForm />
		</Router>
	);

	const initial = initializeTimes();
	const action = { type: 'update', payload: '18:00' };
	const result = updateTimes(initial, action);

	expect(result).not.toContainEqual({ value: '18:00', label: '18:00' });
});