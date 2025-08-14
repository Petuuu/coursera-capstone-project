import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { updateTimes, initializeTimes } from './pages/ReservationPage/ui/ReservationForm/ReservationForm';
import { fetchAPI } from './shared/utils/api/api';
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

	const date = new Date('2025-08-15');
	const times = fetchAPI(date);
	const expectedTimes = ["17:00", "17:30", "20:30", "22:30"];

	expect(times).toEqual(expectedTimes);
})

test("updateTimes removes correct time", () => {
	render(
		<Router>
			<ReservationForm />
		</Router>
	);

	const initial = initializeTimes();
	const action = { type: 'update', payload: initial[0] };
	const result = updateTimes(initial, action);

	expect(result).not.toContainEqual(initial[0]);
});