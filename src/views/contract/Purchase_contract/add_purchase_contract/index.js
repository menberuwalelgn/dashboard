import {React, useRef} from 'react';
import { useReactToPrint } from 'react-to-print';
import logo from 'src/assets/images/blogs/eplusapp-logo1.png';
const AddPurchaseContract = (props) => {
  const LetterRef= useRef();

  const handlePrint = useReactToPrint({
      content: () => LetterRef.current,
      documentTitle: 'current-letter',
      onAfterPrint: () => alert('print success') 
  });
    return(
    <>

<div ref={LetterRef} class="min-h-screen flex justify-self-auto">
    <div class="w-full xl:w-10/12 lg:w-10/12 md:w-11/12 mx-auto xl:mt-10 md:mt-10 mt-2">
     <div  class="bg-white rounded mb-6 h-full">
      <div class="container m-auto grid grid-cols-3 gap-4">
        <div class="tile">
           <h1 className='text-center py-4 text-xl'>ኢጵላሣጵ ንግድ ሥራዎች
           <h1 className='text-center text-xl'> አ.ማ</h1>
           </h1>
        </div>
        <div class="tile">
          <img class="w-28 h-28 rounded-full mx-7" src={logo} alt="eplusapp-logo"/>
        </div>
        <div class="tile">
          <h1 className='py-4 text-xl'>EplusApp commercial 
          <h1 className='px-10 text-xl'> S.c</h1>
          </h1>
        </div>
      </div>
        <div class="h-1 mx-16 bg-gradient-to-r from-black to-black"></div>

      <form>
             <div className='relative pl-14 xl:ml-72 mt-3 text-xl font-bold underline underline-offset-8'>
                <h1>የግዥ ውል</h1>
             </div>
             <div className='relative ml-5 mt-3 font-bold text-xl'>
                <h1>1.ጠቅላላ</h1>
             </div>
        <div className='relative w-full px-10 font-bold text-base break-words'>
            <lable>በአንድ በኩል፡- ኢጵላሣጵ ንግድ ሥራዎች አ.ማ አድራሻ ባህር ዳር ከተማ ቀበሌ 14 ስልክ ቁጥር ስልክ፡-0918484782/0912854923 ኢሜል፡-eplusapp8@gmail.com 
                    ከዚህ በኋላ ገዥ (ውል ሰጭ) እየተባለ የሚጠራው እና በሌላ በኩል :-</lable>
            <input
            type="text"
              class="h-10  mt-1 px-4 w-48 bg-gray-5  border-b-2 focus-within:border-black appearance-none focus:outline-none"
            //   placeholder=" "
            //   {...register("name", {
            //     required: true,
            //   })}
          />
          <lable>የግብር ከፋይ <br></br>
            መለያ ቁጥር</lable>
         <input
            type="text"
              class="h-10  mt-1 px-4 w-48 bg-gray-5  border-b-2 focus-within:border-black appearance-none focus:outline-none"
            //   placeholder=" "
            //   {...register("name", {
            //     required: true,
            //   })}
          />
         <lable>አድራሻ፡-ከተማ</lable>
         <input
            type="text"
              class="h-10  mt-1 px-4 w-48 bg-gray-5  border-b-2 focus-within:border-black appearance-none focus:outline-none"
            //   placeholder=" "
            //   {...register("name", {
            //     required: true,
            //   })}
          />
         <lable>ቀበሌ</lable>
         <input
            type="text"
              class="h-10  mt-1 px-4 w-44 bg-gray-5  border-b-2 focus-within:border-black appearance-none focus:outline-none"
            //   placeholder=" "
            //   {...register("name", {
            //     required: true,
            //   })}
          />
         <lable>ስልክ ቁጥር</lable>
         <input
            type="text"
              class="h-10  mt-1 px-4 w-48 bg-gray-5  border-b-2 focus-within:border-black appearance-none focus:outline-none"
            //   placeholder=" "
            //   {...register("name", {
            //     required: true,
            //   })}
          />
         <lable>የግብር ከፋይ መለያ ቁጥር</lable>
         <input
            type="text"
              class="h-10  mt-1 px-4 w-52 bg-gray-5  border-b-2 focus-within:border-black appearance-none focus:outline-none"
            //   placeholder=" "
            //   {...register("name", {
            //     required: true,
            //   })}
          />
         <lable className='pr-12'>ከዚህ በኋላ አቅራቢ (ውል ተቀባይ) እየተባለ በሚጠራው መካከል ዛሬ ቀን</lable>
         <input
            type="text"
              class="h-10  mt-1 px-4 w-44 bg-gray-5  border-b-2 focus-within:border-black appearance-none focus:outline-none"
            //   placeholder=" "
            //   {...register("name", {
            //     required: true,
            //   })}
          />
         <lable>ዓ.ም በ</lable>
         <input
            type="text"
              class="h-10  mt-1 px-4 w-52 bg-gray-5  border-b-2 focus-within:border-black appearance-none focus:outline-none"
            //   placeholder=" "
            //   {...register("name", {
            //     required: true,
            //   })}
          />
          <label>ከተማ ስምምነት ተደረጓል።</label>
           <br></br>
          <lable>2. የውል ዓይነት</lable>
         <input
            type="text"
              class="h-10  mt-1 px-4 w-10/12 bg-gray-5  border-b-2 focus-within:border-black appearance-none focus:outline-none"
            //   placeholder=" "
            //   {...register("name", {
            //     required: true,
            //   })}
          />
          <label>ለቅናት ተስማምቷል።</label>
            <div className='relative pl-14 xl:ml-32 mt-3 text-xl font-bold break-words'>
                <h1>አንቀጽ 1 የክፍያ አፈፃፀም</h1>
             </div>
             <lable>ውል ተቀባይ</lable>
            <input
            type="text"
              class="h-10  mt-1 px-4 w-52 bg-gray-5  border-b-2 focus-within:border-black appearance-none focus:outline-none"
            //   placeholder=" "
            //   {...register("name", {
            //     required: true,
            //   })}
            />
             <lable>ምርት ለውልሰጭ በማቅረብ</lable>
           <input
            type="text"
              class="h-10  mt-1 px-4 w-52 bg-gray-5  border-b-2 focus-within:border-black appearance-none focus:outline-none"
            //   placeholder=" "
            //   {...register("name", {
            //     required: true,
            //   })}
          />
            <label>ብር ዋጋ መጠየቅ ይችላል።</label>

             <div className='relative pl-14 xl:ml-32 mt-3 text-xl font-bold break-words'>
                <h1>አንቀጽ 2 ርክክብ</h1>
             </div>
             <lable>ውል ተቀባዩ በውሉ ላይ የተጠቀሰቀውን ምርት</lable>
           <input
            type="text"
              class="h-10  mt-1 px-4 w-52 bg-gray-5  border-b-2 focus-within:border-black appearance-none focus:outline-none"
            //   placeholder=" "
            //   {...register("name", {
            //     required: true,
            //   })}
          />
            <label>ዓ.ም ላይ ለማስረከብ ተስማምቷል።</label>
            <div className='relative  pl-14 xl:ml-32 mt-3 text-2xl font-bold break-words'>
                <h1>አንቀጽ 3 የተዋዋዮች መብትና ግዴታዎች፤</h1>
             </div>
             <div className='relative pl-14 xl:ml-32 mt-3 text-xl font-bold break-words'>
                <h1>ሀ የውል ሰጭ ግዴታዎች</h1>
             </div>
             <lable className='pt-3'>
                   ውል ሰጭው በዚህ ውል መሰረት በተሰጠው ጊዜ ገደብ ውስጥ ምርቱ በውሉ በተገለፀው ዓይነትና በዝርዝር መሰረት በተገለፀው ቦታ በመገኘት ውል
                   ተቀባይ ባለበት ተሟልቶ የቀረበ መሆኑን በማረጋገጥ መርምሮ ይረከባል፤<br></br>
                   በርክክብ ወቅትና ከርክክብ በኋላ የሚታዩ የጥራት መጓደል ወይም ለተገቢው ሥራ ያለመዋል ችግር ካጋጠመው በውል ተቀባይ ወጭ ጉድለት ያለበት
                   ሥራ እንዲስተካከል የመጠየቅ መብት አለው፤</lable>
             <div className='relative pl-14 xl:ml-32 mt-3 text-xl font-bold break-words'>
                <h1>የውል ተቀባይ ግዴታዎች</h1>
             </div>
             <lable>ውል ተቀባይ ውል የፈፀመበትን ምርት በውሉ መሰረት በ</lable>
             <input
              type="text"
              class="h-10  mt-1 px-4 w-52 bg-gray-5  border-b-2 focus-within:border-black appearance-none focus:outline-none"
            //   placeholder=" "
            //   {...register("name", {
            //     required: true,
            //   })}
          />
             <lable>ቀናት ውስጥ እስከ</lable>
             <input
              type="text"
              class="h-10  mt-1 px-4 w-52 bg-gray-5  border-b-2 focus-within:border-black appearance-none focus:outline-none"
            //   placeholder=" "
            //   {...register("name", {
            //     required: true,
            //   })}
            />
            <label>ዓ.ም ድረስ አጠናቆ ያስረክባል።</label>
            <label className='pr-12'>
                   ውል ተቀባይ ለውል ሰጭ በሚያስረክበው ምርት ላይ ለሚፈለገው አገልግሎት የሚያበቃ የጥራት መጓደል ወይም የመስራት ችግር ቢስተዋልባቸው ውል ተቀባይ ኃላፊ ሆኖ ይቆያል፤
                   የጥራት ጉድለት ወይም የመስራት ችግር የታየበት ምርት በውል ሰጭ እንደተገለፀለት በማነኛውም ቀናት ውስጥ ያስተካክላል።
                   ውል ተቀባይ በውሉ በተመለከተው ጊዜ ምርቱን ለውል ሰጭ ለማስረከብ የማያስችል በፍታብሔር ህጉ የተመለከተው ዓይነት ከአቅም በላይ የሆነ ምክንያት ሲያጋጥም ወዲያውኑ
                   ችግሩ በተከሰተበት 2 ተከታታይ የስራ ቀናት ለውል ሰጭ ማሳወቅ ይኖርበታል፤
            </label>
             <div className='relative pl-14 xl:ml-32 mt-3 text-xl font-bold'>
                <h1>አንቀጽ 4 የአቅርቦት መዘግየትና ቅጣት፤</h1>
             </div>
             <label className='pr-10'>
                ውል ተቀባይ በውሉ ላይ በተገለፀው ጊዜ ውስጥ ለገዥ ምቱን አጠቃሎ ባያስረክብ ቀን ጀምሮ ለዘገየበት በውሉ ላይ የተመለከተውን የውሉን ጠቅላላ ዋጋ 8% ወርሃዊ ድርርብ ወለድ ለመክፈል 
                የተስማማ ሲሆን የውሉ አፈፃፀም መዘግየት በስራው እንቅስቃሴ ላይ ችግር የሚያስከትል ከሆነ ገዥ በ10 ቀናት ውስጥ ማስጠንቀቂያ በመስጠት ውሉን መሠረዝ ይችላል ።
             </label>
             <div className='relative  xl:ml-32 mt-3 text-xl font-bold break-words'>
                <h1>አንቀጽ 5 ከአቅም በላይ የሆነ ሁኔታ ስለማሳወቅ</h1>
             </div>
             <label className='pr-14 break-words'>
                ውል ተቀባይ ከአቅም በላይ በሆነ ምክንያት ውሉን ተግባራዊ ለማድረግ ካልቻለ ይኸው ከአቅም በላይ የሆነ ምክንያት እንደተከሰተ ወዲዉኑ ለውል ሰጭ በጽሑፍ በማሳወቅ 
                ሁኔታው በአግባቡ እልባት እንዲያገኝ ያመቻቻል፤ ውል ተቀባይ ይህንን ባለማድረጉ ለሚደርሰው ኪሳራ ኃላፊ ይሆናል።
             </label>

             <div className='relative  xl:ml-32 mt-3 text-xl font-bold break-words'>
                <h1>አንቀጽ 6 ስለድርድርና ዳኝነት</h1>
             </div>
             <label>
             በዚህ ውል አፈፃፀም ሂደት በውል ሰጭና ተቀባይ መካከል አለመግባባት ከተፈጠረ ተዋዋይ ወገኖች የተፈጠረውን ችግር በቀጥታ ወይም 3ኛ ወገን ባለበት በድርድርና በመግባባት ለመፍታት 
             ጥረት ያደርጋሉ፤ የተፈጠረው ችግር በዚህ ውል መሰረት በድርድር መፍታት ካልተቻለ ጉዳዩ የሚታየው በውልሰጭ አድራሻ በየደረጃው ባሉ ፍ/ቤቶች ይሆናል።
             </label>
             <div className='relative  xl:ml-32 mt-3 text-xl font-bold break-words'>
                <h1>አንቀጽ 7 ስለ መለኪያ የጊዜ አቆጣጠርና የገንዘብ ምንዛሬ</h1>
             </div>
             <label>
             በውሉ ውስጥ የተመለከቱ መለኪያዎች የጊዜ አቆጣጠር እና የገንዘብ ምንዛሬ በኢትዮጵያ የመለኪያ የጊዜ አቆጣጠርና የገንዘብ ምንዛሬ መሰረት ይሆናል።
             </label>
             <div className='relative  xl:ml-32 mt-3 text-xl font-bold break-words'>
                <h1>አንቀጽ 8 የውል አካል ስለሚሆኑ ሰነዶች</h1>
             </div>
             <label>
             ከዚህ በታች የተዘረዘሩት ሰነዶች የዚህ ውል አካል ናቸው፡-<br></br>
              በውል ሰጭና ተቀባይ መካከል የተፈረመ ይህ የግዥ ውል፣<br></br>
              ደረሰኝና የውልተቀባይ ንግድ ስራ ፈቃድ
             </label>
             <div className='relative  xl:ml-32 mt-3 text-xl font-bold break-words'>
                <h1>አንቀጽ 9 ተፈጻሚነት ስላላቸው ህጐች</h1>
             </div>
             <label>
                 ውሉን በተመለከተ የሚነሱ ውዝግቦችን ለመፍታት የአማራ ክልል ወይም የፌደራሉ መንግስት አግባብነት ያላቸው ህጐች ተፈጻሚ 
                 ይሆናሉ፤ ሆኖም የክልሉ ህጐች ተፈጻሚነት ቅድሚያ ይሰጣቸዋል።
             </label>
             <div className='relative  xl:ml-32 mt-3 text-xl font-bold break-words'>
                <h1>አንቀጽ 10 የውል መጽናት</h1>
             </div>
             <label>
             ይህ ውል ሁለቱ ተዋዋይ ወገኖች እና ምስክሮች ከፈረሙበት ከዛሬ
             </label>
             <input
              type="text"
              class="h-10  mt-1 px-4 w-52 bg-gray-5  border-b-2 focus-within:border-black appearance-none focus:outline-none"
            //   placeholder=" "
            //   {...register("name", {
            //     required: true,
            //   })}
              />
          <label>ዓ.ም ጀምሮ የፀና ይሆናል፤ የውሉ ቅጅም ለተዋዋይ ወገኖችና ሌላው ቅጅ በሚመለከታቸው የሥራ ክፍሎች የሚቀመጥ ይሆናል።</label>
           <br></br>
          <label className='pl-24 pt-5 text-xl font-bold'>ውል ሰጭ /ኢጵላሣጵ/</label>
          <label className='pl-44 text-xl font-bold'>ውል ተቀባይ</label>
          <br></br>
          <label className='pl-24'>ስም</label>
          <input
              type="text"
              class="h-10  mt-1 px-4 w-48 bg-gray-5  border-b-2 focus-within:border-black appearance-none focus:outline-none"
            //   placeholder=" "
            //   {...register("name", {
            //     required: true,
            //   })}
              />
          <label className='pl-14'>ስም</label>
          <input
              type="text"
              class="h-10  mt-1 px-4 w-48 bg-gray-5  border-b-2 focus-within:border-black appearance-none focus:outline-none"
            //   placeholder=" "
            //   {...register("name", {
            //     required: true,
            //   })}
              />
              <br></br>
          <label className='pl-24'>ፊርማ</label>
          <input
              type="text"
              class="h-10  mt-1 px-4 w-48 bg-gray-5  border-b-2 focus-within:border-black appearance-none focus:outline-none"
            //   placeholder=" "
            //   {...register("name", {
            //     required: true,
            //   })}
              />
          <label className='pl-12'>ፊርማ</label>
          <input
              type="text"
              class="h-10  mt-1 px-4 w-48 bg-gray-5  border-b-2 focus-within:border-black appearance-none focus:outline-none"
            //   placeholder=" "
            //   {...register("name", {
            //     required: true,
            //   })}
              />
              <br></br>
          <label className='pl-24'>ቀን</label>
          <input
              type="text"
              class="h-10  mt-1 px-4 w-48 bg-gray-5  border-b-2 focus-within:border-black appearance-none focus:outline-none"
            //   placeholder=" "
            //   {...register("name", {
            //     required: true,
            //   })}
              />
          <label className='pl-14'>ቀን</label>
          <input
              type="text"
              class="h-10  mt-1 px-4 w-48 bg-gray-5  border-b-2 focus-within:border-black appearance-none focus:outline-none"
            //   placeholder=" "
            //   {...register("name", {
            //     required: true,
            //   })}
              />
            <br></br>
            <label className='pt-10 pl-60'>እማኞች</label>
            <br></br>
            <label className='pt-2 pl-32'>ስም</label>
            <label className='pt-2 pl-52'>ፊርማ</label>
            <br></br>
            <label className='pl-24'>1</label>
          <input
              type="text"
              class="h-10  mt-1 px-4 w-48 bg-gray-5  border-b-2 focus-within:border-black appearance-none focus:outline-none"
            //   placeholder=" "
            //   {...register("name", {
            //     required: true,
            //   })}
              />
              
          <input
              type="text"
              className="h-10  mt-1 ml-10 w-48 bg-gray-5  border-b-2 focus-within:border-black appearance-none focus:outline-none"
            //   placeholder=" "
            //   {...register("name", {
            //     required: true,
            //   })}
              />

           <br></br>
            <label className='pl-24'>2</label>
          <input
              type="text"
              class="h-10  mt-1 px-4 w-48 bg-gray-5  border-b-2 focus-within:border-black appearance-none focus:outline-none"
            //   placeholder=" "
            //   {...register("name", {
            //     required: true,
            //   })}
              />
          <input
              type="text"
              class="h-10  mt-1 ml-10 px-4 pl-14 w-48 bg-gray-5  border-b-2 focus-within:border-black appearance-none focus:outline-none"
            //   placeholder=" "
            //   {...register("name", {
            //     required: true,
            //   })}
              />
            <br></br>
            <label className='pl-24'>3</label>
          <input
              type="text"
              class="h-10  mt-1 px-4 w-48 bg-gray-5  border-b-2 focus-within:border-black appearance-none focus:outline-none"
            //   placeholder=" "
            //   {...register("name", {
            //     required: true,
            //   })}
              />
          <input
              type="text"
              class="h-10  mt-1 ml-10 px-4 pl-14 w-48 bg-gray-5  border-b-2 focus-within:border-black appearance-none focus:outline-none"
            //   placeholder=" "
            //   {...register("name", {
            //     required: true,
            //   })}
              />
      
       </div>
            <div class="flex flex-wrap justify-end">
               <div class="w-6/12 sm:w-4/12">
                  <img src={logo} alt="..." class="rounded-full w-36 h-36 align-middle border-none" />
               </div>
            </div>
      </form>

          <div class="h-1 mx-20 mt-3 bg-gradient-to-r from-black to-black"></div>
          <div className='relative pt-2'>
            <h1 className='text-xl pl-24'>አድራሻ ባህርዳር ከተማ ዳ/ምኒሊክ ክ/ከተማ ቀበሌ 14 ጮልፊት ህንጻ ላይ ቤሮ ቁጥር 06</h1>
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
export default AddPurchaseContract;