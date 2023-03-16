import {React, useRef} from 'react';
import { useState } from "react";
import  {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer,toast } from 'react-toastify';
import BaseUrl from "../../../utils/base_url";
import { viewLetter } from "../../../actions/letterAction";
import 'react-toastify/dist/ReactToastify.css';
import { useReactToPrint } from 'react-to-print';
// import DateTimePicker from 'react-datetime-picker';
import logo from 'src/assets/images/blogs/eplusapp-logo1.png';
import logo1 from 'src/assets/images/blogs/eplus-logo.jpg';
import Sign_Aman from 'src/assets/images/sign/Sign-Aman.png';
const Addletter = (props) => {

    const LetterRef= useRef();
    const handlePrint = useReactToPrint({
        content: () => LetterRef.current,
        documentTitle: 'current-letter',
        onAfterPrint: () => alert('print success') 
    });
  // dispatch
  const dispatch = useDispatch();
  // hooks
  const letter = useSelector(
    (state) => state.letter
  );
  
  console.log(letter);

  // use effect
  useEffect(() => {
    dispatch(viewLetter());
  }, []);

    let numberOfLetters=letter.letter?.numberOfLetters;
    let sum=numberOfLetters+1;

    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
    const date2 = `${current.getDate()}  ${current.getMonth()+1}  ${current.getFullYear()}`;
    return(
    <>

   <div ref={LetterRef} class="min-h-screen flex justify-self-auto">
    <div class="w-full xl:w-10/12 lg:w-10/12 md:w-11/12 mx-auto xl:mt-10 md:mt-10 mt-2">
     <div class="bg-white rounded mb-6 h-full">
      <div class="container m-auto grid grid-cols-3 gap-4">
        <div class="tile ml-10">
           <h1 className='text-center py-4 text-xl'>ኢጵላሣጵ ንግድ ሥራዎች
           <h1 className='text-center text-xl'> አ.ማ</h1>
           </h1>
        </div>
        <div class="tile">
          <img class="w-24 h-24 rounded-full mx-7" src={logo1} alt="eplusapp-logo"/>
        </div>
        <div class="tile mx-[-80px]">
          <h1 className='py-4 text-xl'>EplusApp commercial 
          <h1 className='px-10 text-xl'> S.c</h1>
          </h1>
        </div>
      </div>
        <div class="h-1 mx-16 bg-gradient-to-r from-black to-black"></div>
     <form>
        <div className='relative w-52 float-right mt-3 text-lg'>
            <p>ቀን : {date} ዓ.ም</p>
            <p>ቁጥር:- 888/00{sum}</p>
        </div>

        <div className='relative pt-14'>
         <h1 className='pl-24 text-lg'>ባህር ዳር</h1>
         <label className='pl-24 text-lg'>ጉዳዩ :- </label>
         <input
            type="text"
              class="h-10  mt-1 px-4 w-52 bg-gray-5  border-b-2 focus-within:border-black appearance-none focus:outline-none"
              placeholder=" "
              // {...register("name", {
              //   required: true,
              // })}
          />
          <br></br>
             <label className='pl-24 text-lg'>ለ :- </label>
             <input
                type="text"
                class="h-10  mt-1 px-4 w-52 bg-gray-5  border-b-2 focus-within:border-black appearance-none focus:outline-none"
                placeholder=" "
                // {...register("to", {
                //   required: true,
                // })}
               />
          </div>
    
          <div className='relative'>
            <p className='px-20 text-lg'>
            ኢጵላሣጵ የዲጂታል መረጃ ምጥቀቶች(አጠቃቀም፣ ደኅንነት፣ ልውውጥና ክምችት ቴክኖዎች) 
            እና የአክሲዮን ገበያ ላይ ትኩር፤ ከሳምንት እስከ ሳምንት 24 ሰዓት ያለቅድመ ሁኔታ ትግት፤ ለከተሞች 
            የዲጂታል አድራሻ፣ ማስታወቂያና ገበያ ዐውድ ልምት (ፍልግ፣ ጥንት፣ ንድፍ፣ ቅምር፣ ሙክር፣ ትግብር፣ ጥግንና ቅንት) ነው። 
            <br></br>
             ኢጵላሣጵ በ5 ሆሄዎች ('ኢ'፣ 'ጵ'፣ 'ላ'፣ 'ሣ'፣ 'ጵ) የተቀረፀ የከንፈር ብርቅየ ድምፀት ወይም በተመሣሣይ ‘EplusApp’ በ8 ሌተሮች
              ('E', 'p', 'l', u', 's', 'A', 'p', 'p') የተቀረፀ e+up ድምፀት ወይም  የሒሳብ ቀመርና በቀጣይነት (ኢጵላሣጵ2015, ኢጵላሣጵ2016, . . . ኢጵላሣጵ2020, . . .) 
              መሻሻል ያለው ዲጂታል ዐውድ ነው።
           </p>
          </div>

             <div class="px-20 py-4 bg-white rounded-t-lg dark:bg-gray-800">
               <label for="comment" class="sr-only">መልዕክት ያስቀምጡ 1</label>
               <textarea id="comment" rows="2" class="w-full px-0 text-sm text-gray-900 bg-white border-0
                dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400" placeholder="መልዕክት ያስቀምጡ..."
                ></textarea>
             </div>
             <div class="px-20 bg-white rounded-t-lg dark:bg-gray-800">
               <label for="comment" class="sr-only">መልዕክት ያስቀምጡ 2</label>
               <textarea id="comment" rows="2" class="w-full px-0 text-sm text-gray-900 bg-white border-0
                dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400" placeholder="መልዕክት ያስቀምጡ..."
                ></textarea>
             </div>
          
  <section class="overflow-hidden">
  <div class="container mx-auto">
    <div class=" flex flex-wrap justify-end">
       <div class="w-6/12 sm:w-4/12 pl-20">
             <img src={logo} alt="..." class="rounded-full w-36 h-36 align-middle border-none" />
       </div>
        <div class="w-6/12 sm:w-4/12">
        <h1 className=''>ከሰላምታ ጋር</h1>
           <img src={Sign_Aman} alt="..." class="rounded-full w-36 h-36 align-middle border-none mt-[-40px]" />
             <h1 className='mt-[-48px] ml-8'>አማን ወርቁ</h1>
             <h1 className='ml-5'> የምሕንድስና ዘርፍ ሥራአስኪያጅ</h1>
        </div>
    </div>
  </div>
</section>

     </form>
         <div className='relative'>
            <h1 className='font-bold pl-20 text-lg'>ለበለጠ መረጃ</h1>
            <h1 className='font-bold pl-20 text-base'>ስልክ 0907688818 / 0907688848 / 0907688858 / 0907688878 /</h1>
            <h1 className='font-bold pl-20 text-lg'>ዌብሳይት፡- @eplusapp.et</h1>
          </div>
          <div class="h-1 mx-20 mt-6 bg-gradient-to-r from-black to-black"></div>
          <div className='relative pt-2'>
            <h1 className='text-xl pl-24'>አድራሻ ባህርዳር ከተማ ዳ/ምኒሊክ ክ/ከተማ ቀበሌ 14 ጮልፊት ህንጻ ላይ ቤሮ ቁጥር 006/220</h1>
            <h1 className='text-xl pl-24'>ስልክ:-09-18-48-47-82// 09-12-85-49-23 ኢሜል:-eplusapp8@gmail.com</h1>
          </div>

             <div className='float-right pr-20'>
               <button onClick={handlePrint}>print</button>
             </div>
             
     </div>
   </div>
</div>

    </>
    )
}
export default Addletter;