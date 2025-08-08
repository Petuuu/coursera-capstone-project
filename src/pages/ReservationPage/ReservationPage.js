import Separator from '../../shared/ui/Separator/Separator';
import ReservationForm from './ui/ReservationForm/ReservationForm';

function ReservationPage({ availableTimes }) {
    return (
        <>
            <Separator />
            <ReservationForm availableTimes={availableTimes} />
            <Separator />
        </>
    )
}

export default ReservationPage;