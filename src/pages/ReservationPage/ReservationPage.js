import Separator from '../../shared/ui/Separator/Separator';
import ReservationForm from './ui/ReservationForm/ReservationForm';

function ReservationPage({ availableTimes, dispatch }) {
    return (
        <>
            <Separator />
            <ReservationForm availableTimes={availableTimes} dispatch={dispatch} />
            <Separator />
        </>
    )
}

export default ReservationPage;