import {React, useRef} from 'react';
import { useReactToPrint } from 'react-to-print';
import logo from 'src/assets/images/blogs/eplusapp-logo1.png';

const AddEmploymentContract = (props) => {
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
            <lable>.... ይህ የስራ ቅጥር ውል ኢጵላሣጵ ንግድ ስራዎች አ.ማ ተብሎ በሚታወቀው አድራሻ ባህርዳር ከተማ
                 ዳ/ሚኒልክ ክ/ከተማ ምድረ ገነት ቀበሌ ፤:-</lable><br></br>
             <lable>የስልክ ቁጥር</lable>
             <input
              type="text"
              class="h-10  mt-1 px-4 w-48 bg-gray-5  border-b-2 focus-within:border-black appearance-none focus:outline-none"
              />
             <lable>ፖ.ሳ.ቁ</lable>
             <input
              type="text"
              class="h-10  mt-1 px-4 w-48 bg-gray-5  border-b-2 focus-within:border-black appearance-none focus:outline-none"
              />
             <lable>እና በአቶ/ወ.ሮ/ወ.ሪት</lable>
             <input
              type="text"
              class="h-10  mt-1 px-4 w-48 bg-gray-5  border-b-2 focus-within:border-black appearance-none focus:outline-none"
              />
             <lable>እድሜ</lable>
             <input
              type="text"
              class="h-10  mt-1 px-4 w-24 bg-gray-5  border-b-2 focus-within:border-black appearance-none focus:outline-none"
              />
             <lable>ጾታ</lable>
             <input
              type="text"
              class="h-10  mt-1 px-4 w-24 bg-gray-5  border-b-2 focus-within:border-black appearance-none focus:outline-none"
              />
             <lable>ዜግነት</lable>
             <input
              type="text"
              class="h-10  mt-1 px-4 w-48 bg-gray-5  border-b-2 focus-within:border-black appearance-none focus:outline-none"
              />
             <lable>ከዚህ በኋላ ተቀጣሪ በመሆን የሚታወቀው አድራሻ ቀበሌ</lable>
             <input
              type="text"
              class="h-10  mt-1 px-4 w-48 bg-gray-5  border-b-2 focus-within:border-black appearance-none focus:outline-none"
              />
             <lable>ክ/ከተማ</lable>
             <input
              type="text"
              class="h-10  mt-1 px-4 w-24 bg-gray-5  border-b-2 focus-within:border-black appearance-none focus:outline-none"
              />
             <lable>የስ.ቁ</lable>
             <input
              type="text"
              class="h-10  mt-1 px-4 w-48 bg-gray-5  border-b-2 focus-within:border-black appearance-none focus:outline-none"
              />
             <lable>የቤትቁጥር</lable>
             <input
              type="text"
              class="h-10  mt-1 px-4 w-24 bg-gray-5  border-b-2 focus-within:border-black appearance-none focus:outline-none"
              />
             <lable>ፖ.ሳ.ቁ</lable>
             <input
              type="text"
              class="h-10  mt-1 px-4 w-48 bg-gray-5  border-b-2 focus-within:border-black appearance-none focus:outline-none"
              />
              <label>መካከል የተደረገ ነው።</label><br></br>
              <label>
              ስም እና አድራሻ ከፍ ብሎ በተገለጸው ከዚህ በታች በዉል ሰጭ እና ተቀባይ እየተባልን የምንጠራው ተዋዋይ ወገኖች በነጻ እና በሙሉ ፈቃዳችን ፈቅደን እና ተስማምተን የሚከተለዉን የስራ ቅጥር ዉል
               በአዋጅ ቁጥር 377/96 አንቀጽ 6 መሰረት ተፈራርመናል ።
              </label><br></br>
              <div className='relative ml-5 mt-3 font-bold text-xl'>
                <h1>2.የውል ሁኔታዎች</h1>
             </div>
             <lable>2.1 ውል ሰጪ ኢጵላሣጵ ባለው የሥራ መደብ </lable>
             <input
              type="text"
              class="h-10  mt-1 px-4 w-48 bg-gray-5  border-b-2 focus-within:border-black appearance-none focus:outline-none"
              />
              <label>ደረጃ</label>
              <input
              type="text"
              class="h-10  mt-1 px-4 w-48 bg-gray-5  border-b-2 focus-within:border-black appearance-none focus:outline-none"
              /><br></br>
              <label>2.2የተቀጣሪው የሥራ ቦታ የሚሆነው</label>
              <input
              type="text"
              class="h-10  mt-1 px-4 w-48 bg-gray-5  border-b-2 focus-within:border-black appearance-none focus:outline-none"
              />
              <label>ነው</label><br></br>
              <label>2.3ተቀጣሪው በየወሩ ያልተጣራ /ጥቅል/ በአሃዝ</label>
              <input
              type="text"
              class="h-10  mt-1 px-4 w-14 bg-gray-5  border-b-2 focus-within:border-black appearance-none focus:outline-none"
              />
              <label>ብር በፊደል</label>
              <input
              type="text"
              class="h-10  mt-1 px-4 w-52 bg-gray-5  border-b-2 focus-within:border-black appearance-none focus:outline-none"
              />
              <label>ብር ደመወዝ በኩንትራት፣ በትርፍ ሰዓት/ፓርት ታይም/ ወይም በቋሚነት ለስራው ይከፈለዋል/ላታል/።</label>
              <br></br>
              <label>2.4ኢጵላሣጵ ለተቀጣሪው ከሚከፈለው ደመወዝ ውጭ ሌሎች የጥቅማጥቅሞችን ክፍያ በኢጵላሣጵ መመሪያ መሰረት የሚከፍል ይሆናል። የጥቅማጥቅም አከፋፈል ሀ/ ከቤት ወደ ሥራ ቦታ ከስራ ቦታ 
                ወደ ቤት የትራንስፖርት አበል በወር</label>
              <input
              type="text"
              class="h-10  mt-1 px-4 w-14 bg-gray-5  border-b-2 focus-within:border-black appearance-none focus:outline-none"
              />
              <label>ብር ነው። ለ/ የሙያና ማበረታቻ አበል በቀን</label>
              <input
              type="text"
              class="h-10  mt-1 px-4 w-14 bg-gray-5  border-b-2 focus-within:border-black appearance-none focus:outline-none"
              />
              <label>ብር በወር</label>
              <input
              type="text"
              class="h-10  mt-1 px-4 w-14 bg-gray-5  border-b-2 focus-within:border-black appearance-none focus:outline-none"
              />
              <label>ብር ነው። መ/ የሞባይል ካርድ እና ኢንተርኔት በወር</label>
              <input
              type="text"
              class="h-10  mt-1 px-4 w-14 bg-gray-5  border-b-2 focus-within:border-black appearance-none focus:outline-none"
              />
              <label>ብር ነው። ሰ/ የትርፍ ሰዓት አበል በሰዓት</label>
              <input
              type="text"
              class="h-10  mt-1 px-4 w-20 bg-gray-5  border-b-2 focus-within:border-black appearance-none focus:outline-none"
              />
              <label>ብር በቀን</label>
              <input
              type="text"
              class="h-10  mt-1 px-4 w-20 bg-gray-5  border-b-2 focus-within:border-black appearance-none focus:outline-none"
              />
              <label>ብር በወር</label>
              <input
              type="text"
              class="h-10  mt-1 px-4 w-48 bg-gray-5  border-b-2 focus-within:border-black appearance-none focus:outline-none"
              />
              <label>ብር ነው። ረ/ የስራ ሁኔታው(Work under pressure) ዝቅተኛ 25%፣ መካከለኛ 40% ወይም ከፍተኛ 60%</label>
              <input
              type="text"
              class="h-10  mt-1 px-4 w-20 bg-gray-5  border-b-2 focus-within:border-black appearance-none focus:outline-none"
              />
              <label>ብር ነው። ሠ/ ጠቅላላ ያልተጣራ ተከፋይ ደመወዝ </label>
              <input
              type="text"
              class="h-10  mt-1 px-4 w-48 bg-gray-5  border-b-2 focus-within:border-black appearance-none focus:outline-none"
              />
              <label>ብር፣ አበል </label>
              <input
              type="text"
              class="h-10  mt-1 px-4 w-48 bg-gray-5  border-b-2 focus-within:border-black appearance-none focus:outline-none"
              />
              <label>ብር ድመር</label>
              <input
              type="text"
              class="h-10  mt-1 px-4 w-20 bg-gray-5  border-b-2 focus-within:border-black appearance-none focus:outline-none"
              />
              <label>ብር ነው።</label>
             <div className='relative ml-5 mt-3 font-bold text-xl'>
                <h1>3.የተዋዋይ ወገኞች መብት እና ግዴታ</h1>
             </div>
             <label>አግባብነት ባለው ህግ የተገለጹት መብትና ግዴታዎች እንደተጠበቁ ሆነው ሀ/ ውል ሰጪ 3.1.1የሚከፈለውን ደመወዝና አበል ቀኑን እና ወሩን ሳያሳልፍ የመከፈል ግዴታ አለበት 
                   ውል ተቀባይ 3.1.2 የተቀጠረበትን የስራ ቦታ የሚጠይቀውን ተግባር እና ውል ሰጪ የሚሰጠውን ህጋዊ ስራ በቅንነት በታማኝነት እና በትጋት የመስራት ግዴታ አለበት 3.1.3የስራ ስዓቱን
                   አክብሮ በስራ ቦታ መገኘት ግዴታ አለበት፡፡ 3.2ተቀጣሪው ሥራውን በሚሰጠው የሥራ ዝርዝርና ከቅርብ ኃላፊው በሚቀበለው እቅድና መመሪያ መሠረት ያከናውናል። በተጨማሪም የኢጵላሣጵን 
                   የሥነ-ምግባርና የሥራ ባህልና ደንቦች፣ እንዲሁም ፖሊሲዎችን ያከብራል። 3.3ተቀጣሪው የራሱን መርጃ መሳሪያ/ኢኩይፕመንት ማለትም ላፕቶፕ ኮምፕዩተር፣ ስማርት ስልክ፣ ዶንግል 4G ተንቀሳቃሽ
                   ዋይፋይ/Wifi በጥንቃቄ ለሥራ ማሳለጫ ማዋል አለበት 3.4ኢጵላሣጵ ሰራተኛ ስራውን በቢሮ እና በራሱ በተቀጣሪው መኖሪያ ቤት እንደ አስፈላጊነቱ የመስራት ግዴታ አለበት 3.5ኢጵላሣጵ ባስቀመጠው
                   የሥራ ሰዓት ማለትም በ24 ሰዓት ውስጥ 12 ሰዓት ወይም በፈረቃ 6 ሰዓት ከቀኑ እና 6 ሰዓት ከሌሊቱ ድምር 12፡00 በ24፡00 ውስጥ በሥራ ሰዓት ኢንተርኔት ላይ የሚገኝና የሚሰራውንና የሰራውን 
                   ሥራ የመግለጽ ግዴታ አለበት 3.6ተያዥ፦ የከተማ ወይም የገጠር ቦታ ማስረጃ ማቅረብ አለበት 3.7ደመወዙን ከግማሽ በላይ በ 8% ወርሃዊና ድርብ ወለድ ኢጵላሣጵ ጋር ከ6 ወር በላይ መቆጠብ አለበት
                   3.8በትብብርና ፉክክር ሚዛን ዝርዝሩን መስራት አለበት</label>

             <div className='relative ml-5 mt-3 font-bold text-xl'>
                <h1>4.የቅጥር ጊዜ</h1>
             </div>
             <label>4.1.1ይህ የኩንትራት፣ በትርፍ ስዓት/ፐር ተይም/ ቅጥር ውል</label>
              <input
              type="text"
              class="h-10  mt-1 px-4 w-48 bg-gray-5  border-b-2 focus-within:border-black appearance-none focus:outline-none"
              />
              <label>ጊዜ ጀምሮ</label>
              <input
              type="text"
              class="h-10  mt-1 px-4 w-48 bg-gray-5  border-b-2 focus-within:border-black appearance-none focus:outline-none"
              /><br></br>
              <label>4.1.2ተቀጣሪው ለተቀጠረበት ሥራ ብቁ ሆኖ ካልተገኘ ኢጵላሣጵ ባለው የአስተዳደር መመሪያ መሠረት ያለማስጠንቀቂያና ያለምንም ካሳ ሊያሰናብተው ይችላል። ቀጣሪውም በዚህ
                 ጊዜ ውስጥ ውሉን ያለማስጠንቀቂያ የማቋረጥ መብት አለው።</label>
                 <div className='relative ml-5 mt-3 font-bold text-xl'>
                <h1>5.ውል ስለማቋረጥና ስለማደስ</h1>
             </div>
             <label>5.1.1ተቀጣሪውም ሆነ ኢጵላሣጵ የ3ዐ ቀን የጽሁፍ ማስጠንቀቂያ ውሉን የሚያቋርጥበትን ምክንያት በመግለጽ መስጠት አለበት፣ 5.1.2ተዋዋዮች ስለማስጠንቀቂያ አሰጣጥ ሥርዓት በስምምነታቸው 
                መሠረት መፈፀም ባይችሉ ውሉን ያፈረሰ አካል ለሌላው ካሣ ይከፍላል። የካሳው መጠንም በሰራተኛው የ15 ቀን ደመወዝ ይሆናል።</label>
                <br></br>
                <label>5.1.3ይህ ውል አስፈላጊ ከሆነ</label>
              <input
              type="text"
              class="h-10  mt-1 px-4 w-48 bg-gray-5  border-b-2 focus-within:border-black appearance-none focus:outline-none"
              />
              <label>ወሩ የሚታደስ ይሆናል።</label>
              <div className='relative ml-5 mt-3 font-bold text-xl'>
                <h1>ሌሎች</h1>
             </div>
             <label>6.1.1በዚህ ውል ያልተካተቱ ጉዳዩች ቢኖሩ ኢጵላሣጵ በአስተዳደር ደንቡ መሠረት ውሳኔ ይሰጥባቸዋል። ይህ ውል</label>
             <input
              type="text"
              class="h-10  mt-1 px-4 w-48 bg-gray-5  border-b-2 focus-within:border-black appearance-none focus:outline-none"
              />
              <label>ጸና ይሆናል ።</label>
         </div>
         <div class="flex flex-wrap justify-end">
               <div class="w-6/12 sm:w-4/12">
                  <img src={logo} alt="..." class="rounded-full w-36 h-36 align-middle border-none" />
               </div>
               </div>
        </form>
        <div class="h-1 mx-20 mt-6 bg-gradient-to-r from-black to-black"></div>
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
export default AddEmploymentContract;