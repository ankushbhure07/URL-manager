import './flash-screen.css';
import bank_logo from '../../../assets/bank-logo-dummy.png.png'
const FlasScreen = ({ bank_name }) => {
    return (
        <div className='vh-100 bg-gradient px-20px text-center'>
            <div className='h-100 display-table h-100 w-100'>
                <div className='display-cell h-100 w-100 vertical-middle'>
                    <div className='fs-20px font-weight-bold text-blue'>
                        <div>
                            <img className='h-100px' src={bank_logo} />
                        </div>
                        {bank_name}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FlasScreen;