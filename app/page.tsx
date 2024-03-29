import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <body>
      <header className='bg-transparent z-10'>
      <nav className="text-xs flex justify-between flex-row text-center no-underline text-blue-500 h-16 items-center">
        <div className='flex-grow w-1/4 flex flex-row gap-16 justify-center'>
          <Link href='/'>Home</Link>
          <Link href='/about'>About</Link>
          <Link href='/contact'>Contact</Link>
        </div>
        <div className='flex justify-center'>
          <Image src='/logo.svg' alt='Logo' width={79} height={38} />
        </div>
        <div className='flex-grow w-1/4'>
          <button className='text-white bg-blue-950 w-36 h-7 rounded-sm'>Buy Now</button>
        </div>
      </nav>
    </header>
    <main>
      <section className='relative h-screen'>
        <div className='w-2/6 ml-40 mt-56'>
          <div className='text-5xl font-medium mb-11'>Introduce Your Product Quickly & Effectively</div>
          <div className='text-blue-500 mb-14'><p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus <br /><br />mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p></div>
          <div className='text-base'>
            <button className='text-white w-48 h-9 bg-blue-950 rounded-sm mr-7'>Purchase UI Kit</button>
            <button className='text-black w-48 h-9 border-solid border-blue-950 border-2 rounded-sm'>Learn More</button>
          </div>
        </div>
        <div className='absolute right-0 transform h-screen top-0 -translate-y-16 -z-10 -mt-56'>
          <Image src='/hero_right.png' alt='right' width={1490} height={1161} className='h-screen w-auto'/>
        </div>
      </section>
      <section className='h-screen flex flex-row'>
        <div className='ml-56 my-auto mr-auto w-2/6'>
          <div className='text-4xl font-medium mb-11'>Introduce Your Product Quickly & Effectively</div>
          <div className='text-blue-500 mb-14 text-base'><p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus <br /><br />mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p></div>
          <div className='flex flex-row'>
            <div className='mr-10'>
              <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M35.6226 22.2396C35.3938 22.1487 35.1326 22.2056 34.9626 22.3835L32.4001 25.0769V9.07898H32.4031L34.8481 6.43916C35.073 6.19611 35.0582 5.81629 34.8148 5.59136L34.8143 5.59081L33.9343 4.77184L35.1571 3.45193C35.3817 3.2086 35.3666 2.82905 35.1233 2.6044L32.4833 0.15957C32.2402 -0.0653583 31.8606 -0.0508025 31.6357 0.192527L27.3697 4.79848H6.60004C6.59811 3.14241 5.25613 1.80053 3.59995 1.79861H3.00009C1.3439 1.80053 0.00192261 3.14241 0 4.79848V30.5966C0 30.9278 0.268616 31.1964 0.600128 31.1964H9.6828L8.42267 32.7094C8.21091 32.9642 8.24551 33.3424 8.50012 33.5542L11.2668 35.8575C11.5214 36.0696 11.8998 36.035 12.1119 35.7804L12.1122 35.7801L15.1831 32.0909C15.3951 31.8355 15.5316 31.5254 15.5767 31.1964H26.571L22.965 34.9828C22.7368 35.2229 22.7464 35.6027 22.9864 35.8309C23.0979 35.9369 23.246 35.9962 23.4001 35.996H35.3999C35.7314 35.996 36 35.7274 36 35.3962V22.7971C36 22.5516 35.8506 22.3308 35.6226 22.2396ZM33.5597 6.05832L32.3998 7.31286V6.43045L33.1197 5.65048L33.5597 6.05832ZM31.2 5.96V5.95149H31.2071L32.2385 4.8381L30.4763 3.20785L24.3635 9.81344L26.1257 11.4437L31.2 5.96ZM24.9732 12.011L23.593 12.4136L23.8877 11.0061L24.9732 12.011ZM33.8683 3.07595L32.107 1.44653L31.2915 2.32729L33.0532 3.95836L33.8683 3.07595ZM3.00049 2.99851H3.60034C4.5946 2.99851 5.40045 3.8043 5.40045 4.79849V27.6124C4.88409 27.2153 4.25156 26.9988 3.60034 26.9966H3.00049C2.349 26.9988 1.71674 27.2153 1.20038 27.6124V4.79849C1.20038 3.8043 2.00623 2.99851 3.00049 2.99851ZM3.60034 28.1966H3.00049C2.00623 28.1966 1.20038 29.0027 1.20038 29.9966H5.40045C5.40045 29.0027 4.5946 28.1966 3.60034 28.1966ZM14.2611 31.3235L13.8771 31.7843L12.0328 30.2491L12.4162 29.7877C12.6282 29.5331 13.0064 29.4985 13.261 29.7105C13.2613 29.7105 13.2613 29.7108 13.2616 29.7108L14.1836 30.4765C14.4385 30.6883 14.4734 31.0664 14.2616 31.3213L14.2611 31.3218V31.3235ZM9.72949 33.0162L11.5741 34.5514L13.1094 32.7066L11.2651 31.1711L9.72949 33.0162ZM15.3247 29.9966C15.225 29.8304 15.099 29.6818 14.9515 29.5563L14.0294 28.789C13.2654 28.1529 12.1305 28.2564 11.4944 29.0205L10.6803 29.9966H6.60022V5.99843H26.2597L23.0756 9.43909C23.03 9.49045 22.9937 9.54977 22.9688 9.61376C22.9616 9.63106 22.9561 9.64726 22.9501 9.66539C22.9479 9.67226 22.9451 9.67917 22.9424 9.68616C22.938 9.69735 22.9336 9.70876 22.9308 9.72059L22.2145 13.1451C22.147 13.4694 22.3552 13.7872 22.6795 13.8547C22.7759 13.8748 22.8756 13.8709 22.9698 13.8435L26.33 12.8644C26.3384 12.8617 26.346 12.8579 26.3536 12.8541C26.3602 12.8508 26.3668 12.8476 26.3737 12.8451C26.3888 12.8397 26.4044 12.832 26.4207 12.824C26.4879 12.7935 26.5489 12.7504 26.6006 12.6974L31.2003 7.72672V26.3367L27.7143 29.9966H15.3247ZM24.7997 34.796H34.8V24.2968L24.7997 34.796ZM28.8005 33.5962C28.5577 33.5962 28.3388 33.4501 28.246 33.226C28.1532 33.0019 28.2045 32.7437 28.3762 32.572L32.5763 28.3726C32.6886 28.26 32.8413 28.1968 33.0003 28.1968C33.3316 28.1968 33.6005 28.4651 33.6005 28.7966V32.9964C33.6005 33.3276 33.3318 33.5962 33.0003 33.5962H28.8005ZM32.4003 32.3962V30.2447L30.2486 32.3962H32.4003ZM22.2001 22.7971H26.3999C26.7314 22.7971 27 23.0656 27 23.3969C27 23.7283 26.7314 23.9969 26.4001 23.9969H9.60013C9.26862 23.9969 9 23.7283 9 23.3969C9 23.0656 9.26862 22.7971 9.60013 22.7971H13.7999V16.1975C13.8005 16.0385 13.8634 15.8858 13.9752 15.7726L17.5751 12.173C17.8094 11.9387 18.1892 11.9387 18.4235 12.173L22.0235 15.7726C22.1358 15.8855 22.1992 16.0382 22.2001 16.1975V22.7971ZM20.1521 15.5974L18.0004 13.4459L15.8488 15.5974H20.1521ZM14.9999 16.7974H21.0001V22.7971H14.9999V16.7974ZM17.3997 9.59816H18.6V10.7981H17.3997V9.59816ZM18.6 25.1969H17.3997V26.3968H18.6V25.1969Z" fill="black"/>
              </svg>
              <h1 className='text-base font-medium'>
                Title Goes Here
              </h1>
              <p className='text-xs'>
                Lorem ipsum dolor sit amet, consectetuer <br />adipiscing elit. Aenean commodo ligula eget <br />dolor. 
              </p>
            </div>
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M35.6226 22.2396C35.3938 22.1487 35.1326 22.2056 34.9626 22.3835L32.4001 25.0769V9.07898H32.4031L34.8481 6.43916C35.073 6.19611 35.0582 5.81629 34.8148 5.59136L34.8143 5.59081L33.9343 4.77184L35.1571 3.45193C35.3817 3.2086 35.3666 2.82905 35.1233 2.6044L32.4833 0.15957C32.2402 -0.0653583 31.8606 -0.0508025 31.6357 0.192527L27.3697 4.79848H6.60004C6.59811 3.14241 5.25613 1.80053 3.59995 1.79861H3.00009C1.3439 1.80053 0.00192261 3.14241 0 4.79848V30.5966C0 30.9278 0.268616 31.1964 0.600128 31.1964H9.6828L8.42267 32.7094C8.21091 32.9642 8.24551 33.3424 8.50012 33.5542L11.2668 35.8575C11.5214 36.0696 11.8998 36.035 12.1119 35.7804L12.1122 35.7801L15.1831 32.0909C15.3951 31.8355 15.5316 31.5254 15.5767 31.1964H26.571L22.965 34.9828C22.7368 35.2229 22.7464 35.6027 22.9864 35.8309C23.0979 35.9369 23.246 35.9962 23.4001 35.996H35.3999C35.7314 35.996 36 35.7274 36 35.3962V22.7971C36 22.5516 35.8506 22.3308 35.6226 22.2396ZM33.5597 6.05832L32.3998 7.31286V6.43045L33.1197 5.65048L33.5597 6.05832ZM31.2 5.96V5.95149H31.2071L32.2385 4.8381L30.4763 3.20785L24.3635 9.81344L26.1257 11.4437L31.2 5.96ZM24.9732 12.011L23.593 12.4136L23.8877 11.0061L24.9732 12.011ZM33.8683 3.07595L32.107 1.44653L31.2915 2.32729L33.0532 3.95836L33.8683 3.07595ZM3.00049 2.99851H3.60034C4.5946 2.99851 5.40045 3.8043 5.40045 4.79849V27.6124C4.88409 27.2153 4.25156 26.9988 3.60034 26.9966H3.00049C2.349 26.9988 1.71674 27.2153 1.20038 27.6124V4.79849C1.20038 3.8043 2.00623 2.99851 3.00049 2.99851ZM3.60034 28.1966H3.00049C2.00623 28.1966 1.20038 29.0027 1.20038 29.9966H5.40045C5.40045 29.0027 4.5946 28.1966 3.60034 28.1966ZM14.2611 31.3235L13.8771 31.7843L12.0328 30.2491L12.4162 29.7877C12.6282 29.5331 13.0064 29.4985 13.261 29.7105C13.2613 29.7105 13.2613 29.7108 13.2616 29.7108L14.1836 30.4765C14.4385 30.6883 14.4734 31.0664 14.2616 31.3213L14.2611 31.3218V31.3235ZM9.72949 33.0162L11.5741 34.5514L13.1094 32.7066L11.2651 31.1711L9.72949 33.0162ZM15.3247 29.9966C15.225 29.8304 15.099 29.6818 14.9515 29.5563L14.0294 28.789C13.2654 28.1529 12.1305 28.2564 11.4944 29.0205L10.6803 29.9966H6.60022V5.99843H26.2597L23.0756 9.43909C23.03 9.49045 22.9937 9.54977 22.9688 9.61376C22.9616 9.63106 22.9561 9.64726 22.9501 9.66539C22.9479 9.67226 22.9451 9.67917 22.9424 9.68616C22.938 9.69735 22.9336 9.70876 22.9308 9.72059L22.2145 13.1451C22.147 13.4694 22.3552 13.7872 22.6795 13.8547C22.7759 13.8748 22.8756 13.8709 22.9698 13.8435L26.33 12.8644C26.3384 12.8617 26.346 12.8579 26.3536 12.8541C26.3602 12.8508 26.3668 12.8476 26.3737 12.8451C26.3888 12.8397 26.4044 12.832 26.4207 12.824C26.4879 12.7935 26.5489 12.7504 26.6006 12.6974L31.2003 7.72672V26.3367L27.7143 29.9966H15.3247ZM24.7997 34.796H34.8V24.2968L24.7997 34.796ZM28.8005 33.5962C28.5577 33.5962 28.3388 33.4501 28.246 33.226C28.1532 33.0019 28.2045 32.7437 28.3762 32.572L32.5763 28.3726C32.6886 28.26 32.8413 28.1968 33.0003 28.1968C33.3316 28.1968 33.6005 28.4651 33.6005 28.7966V32.9964C33.6005 33.3276 33.3318 33.5962 33.0003 33.5962H28.8005ZM32.4003 32.3962V30.2447L30.2486 32.3962H32.4003ZM22.2001 22.7971H26.3999C26.7314 22.7971 27 23.0656 27 23.3969C27 23.7283 26.7314 23.9969 26.4001 23.9969H9.60013C9.26862 23.9969 9 23.7283 9 23.3969C9 23.0656 9.26862 22.7971 9.60013 22.7971H13.7999V16.1975C13.8005 16.0385 13.8634 15.8858 13.9752 15.7726L17.5751 12.173C17.8094 11.9387 18.1892 11.9387 18.4235 12.173L22.0235 15.7726C22.1358 15.8855 22.1992 16.0382 22.2001 16.1975V22.7971ZM20.1521 15.5974L18.0004 13.4459L15.8488 15.5974H20.1521ZM14.9999 16.7974H21.0001V22.7971H14.9999V16.7974ZM17.3997 9.59816H18.6V10.7981H17.3997V9.59816ZM18.6 25.1969H17.3997V26.3968H18.6V25.1969Z" fill="black"/>
              </svg>
              <h1 className='text-base font-medium'>
                Title Goes Here
              </h1>
              <p className='text-xs'>
                Lorem ipsum dolor sit amet, consectetuer <br />adipiscing elit. Aenean commodo ligula eget <br />dolor. 
              </p>
            </div>
          </div>
        </div>
        <div className='my-auto ml-auto mr-56'><Image src='/1.png' alt='right' width={540} height={524} className=''/></div>
      </section>
      <section className='h-screen flex flex-row'>
        <div className='my-auto mr-auto ml-56'><Image src='/2.png' alt='left' width={480} height={315} className=''/></div>
        <div className='my-auto ml-auto mr-56 w-2/6'>
          <h1 className='text-4xl font-medium mb-4'>Light, Fast & Powerful</h1>
          <p className='font-normal text-base text-blue-400'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus 
<br /><br />mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>
        </div>
      </section>
      <section className='h-screen flex flex-row'>
        <div className='my-auto mr-auto ml-56'><Image src='/3.png' alt='left' width={480} height={315} className=''/></div>
        <div className='my-auto ml-auto mr-56 w-2/6'>
          <h1 className='text-4xl font-medium mb-4'>Light, Fast & Powerful</h1>
          <p className='font-normal text-base text-blue-400'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus 
<br /><br />mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>
        </div>
      </section>
      <section className='h-screen flex flex-row'>
        <div className='my-auto mr-auto ml-56'><Image src='/4.png' alt='left' width={480} height={315} className=''/></div>
        <div className='my-auto ml-auto mr-56 w-2/6'>
          <h1 className='text-4xl font-medium mb-4'>Light, Fast & Powerful</h1>
          <p className='font-normal text-base text-blue-400'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus 
<br /><br />mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>
          <button className='text-white w-48 h-9 bg-blue-950 rounded-sm mr-7 mt-8'>Purchase Now</button>
        </div>
      </section>
      <section className='relative h-screen'>
        <Image src='/price.png' alt='right' width={2546} height={938} className='absolute -z-10 -top-2/4'/>
        <div className='mx-auto mt-56 w-fit h-fit text-center'>
          <h1 className='text-4xl font-medium mb-4'>A Price To Suit Everyone</h1>
          <p className='font-normal text-blue-400 mb-9'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula <br />eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient <br />montes, nascetur ridiculus </p>
          <h1 className='text-5xl font-medium'>$40</h1>
          <h1 className='text-blue-900 mb-14'>UI Design Kit</h1>
          <p className='text-gray-600 mb-8'>See, One price. Simple.</p>
          <button className='text-white w-48 h-9 bg-blue-950 rounded-sm'>Purchase Now</button>
        </div>
      </section>
    </main>
    <footer className='h-56 bg-blue-100'>
      <div className='flex flex-row justify-between pt-8'>
      <p className='w-1/4 text-right'>©2023 Yourcompany</p>
      <Image src='/logo.svg' alt='Logo' width={79} height={38} />
      <div className='w-1/4'><button className='text-white w-36 h-9 bg-blue-950 rounded-sm mr-64'>Purchase Now</button></div>
      </div>
      <div className='w-3/4 border-gray-500 border-2 mx-auto my-8'></div>
      <div className='flex flex-row justify-between'>
      <div className='w-3/4 text-right mr-96'>
        <div><Link href='/'>Home</Link>
          <Link href='/about'>About</Link>
          <Link href='/contact'>Contact</Link></div>
      </div>
      <div className='w-3/4 ml-96'>
        <Image src='/footer.png' alt='Logo' width={200} height={16} />
      </div>
      </div>
    </footer>
    </body>
  )
}
