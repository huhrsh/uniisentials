import { useNavigate } from 'react-router-dom'
import errorImg from '../assets/images/404 error lost in space-cuate.svg'

export default function ErrorPage(){

    const navigate = useNavigate();

    function handleButtonClick(){
        navigate(-1);
    }

    return (
        <body className='w-screen h-screen flex flex-col justify-center items-center gap-12'>
            <img className='h-2/3' src={errorImg} alt='error'/>
            <button className='border rounded px-3 py-1.5 text-lg bg-neutral-100 hover:text-neutral-200 hover:bg-neutral-800 transition-all duration-200' onClick={handleButtonClick}>
                Go back to safety
            </button>
        </body>
    )
}