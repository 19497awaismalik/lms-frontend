import { styles } from '../../app/styles/styles'
import React, { FC, useEffect, useRef, useState } from 'react'
import toast from 'react-hot-toast'
import { VscWorkspaceTrusted } from 'react-icons/vsc'
import { useSelector } from 'react-redux'
import { useActivationMutation } from '../../../redux/features/auth/authApi'
import { RootState } from '../../../redux/store'

interface Props{
    setroute:(route:string)=>void
}
interface VerifyNumber{
    0:string,
    1:string,
    2:string,
    3:string
}
const Verification:FC<Props> = ({ setroute }) => {
  const {token} = useSelector((state:RootState)=>state.auth);

const[activation,{isSuccess,error}]=useActivationMutation()

    const [active, setactive] = useState(0)
    const [invalidError, setinvalidError] = useState<boolean>(false);
    const [VerifyNumber, setVerifyNumber] = useState<VerifyNumber>({
        0: "",
        1: "",
        2: "",
        3: "",
    })
    const VerificationHandler = async () => {
        
        const verificationCode=Object.values(VerifyNumber).join("");
        if(verificationCode.length !==4){
            setinvalidError(true)

        }else{
            console.log(verificationCode);
            await activation({
                activation_token:token,
                activation_code:verificationCode
            })
            
        }


    }

    let refs  = [
        useRef<HTMLInputElement>(null),
        useRef<HTMLInputElement>(null),
        useRef<HTMLInputElement>(null),
        useRef<HTMLInputElement>(null),
    ];

    const handleInputChange = (index:number,value:string) => {
        setinvalidError(false);
        
        const newNumber={ ...VerifyNumber, [index]: value};
        setVerifyNumber(newNumber)
        
            if (value === "" && index > 0) {
                refs [index - 1].current?.focus();
            
            
        } else if (value.length === 1 && index < 3) {
            refs [index+1].current?.focus();

        }
    }
    useEffect(()=>{
        if(isSuccess){
            toast.success('Account activated Successfully');
            setroute("Login")
        }
        if(error ){
            setinvalidError(true);
            console.log((error as any)?.data?.message);
            toast.error((error as any)?.data?.message);
        }
            },[isSuccess,error,setroute])
    
    return (
        <div>

            <h1 className={`${styles.title}`}>
                Verify Your Account
            </h1>
            <br />
            <div className='w-full   flex items-center justify-center mb-2'>
                <div className=' w-[80px] h-[80px] rounded-full bg-blue-600 items-center flex justify-center'>
                    <VscWorkspaceTrusted size={40} className=' text-white' />
                </div>
            </div>
            <br />
            <div className='1100px:w-[90%] m-auto flex items-center justify-around'>
                {Object.keys(VerifyNumber).map((item) => {
                     const index = Number(item) as keyof VerifyNumber;

                    return (
                        <input type="number" key={index} className={`
                border-black border-4  border-solid  w-[65px] h-[65px] bg-transparent rounded-[10px] flex items-center text-black dark:text-white font-Poppins text-[18px] outline-none text-center  ${invalidError ? "effect border-red-500 " : " dark:border-white dark:border-4 dark:border-solid border-black "} justify-center `}
                            maxLength={1}
                            ref={refs [index]}
                            value={VerifyNumber[index]}
                            onChange={(e) => handleInputChange(index, e.target.value)}
                        />
                    )
                })}
            </div>
            <br />
            <br />
            <div className='w-full flex justify-center'>
                <button className={`${styles.button} text-white mx-2`} onClick={VerificationHandler}>Verify OTP</button>

            </div>
            <br />
            <h1 className=' font-Poppins flex justify-center text-center pt-3 text-black dark:text-white '>
                Go back to sign in? <span className=' text-blue-500 ml-1 cursor-pointer' onClick={() => setroute('Login')}> sign in</span>
            </h1>
            <br />
        </div>
    )
}

export default Verification