 /** @type {import('tailwindcss').Config} */
export default {
    content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,html}",
    ],
   theme: {
     extend: {
       screens: {
        'max-x1': { 'max': '375px' },
        'max-x2': { 'max': '320px' }, 
      },
       gridTemplateColumns: {
        // Simple 16 column grid
        '16': 'repeat(16, minmax(0, 1fr))',

        // Complex site-specific column configuration
        'footer': 'repeat(1, minmax(900px, 1fr))',
      },

      fontFamily: {
        netflix: ['"Netflix Sans"', 'sans-serif'],
        bebas: ['"Bebas Neue"', 'sans-serif'],
      },
      fontSize: {
        // Regular
        caption2: ['11px', { letterSpacing: '0px' }],
        caption1: ['13px', { letterSpacing: '0.25px' }],
        smallbody: ['14px', { letterSpacing: '-0.25px' }],
        body: ['16px', { letterSpacing: '0px' }],
        headline2: ['17px', { letterSpacing: '0px' }],
        headline1: ['18px', { letterSpacing: '0px' }],
        title4: ['20px', { letterSpacing: '0px' }],
        title3: ['21px', { letterSpacing: '0px' }],
        title2: ['24px', { letterSpacing: '0px' }],
        title1: ['27px', { letterSpacing: '0px' }],
        largeTitle: ['50px', { letterSpacing: '0px' }],

        // Medium
        mcaption2: ['12px', { letterSpacing: '0px' }],
        mcaption1: ['13px', { letterSpacing: '0px' }],
        msmallbody: ['14px', { letterSpacing: '0px' }],
        mbody: ['16px', { letterSpacing: '-0.5px' }],
        mheadline2: ['20px', { letterSpacing: '0px' }],
        mheadline1: ['21px', { letterSpacing: '0px' }],
        mtitle4: ['22px', { letterSpacing: '0px' }],
        mtitle3: ['24px', { letterSpacing: '-0.5px' }],
        mtitle2: ['28px', { letterSpacing: '0px' }],
        mtitle1: ['30px', { letterSpacing: '0px' }],
        mlargeTitle: ['32px', { letterSpacing: '0px' }],

        // Bold
        btitle2: ['20px', { letterSpacing: '0px' }],
        btitle1: ['48px', { letterSpacing: '0px' }],
        blargeTitle: ['55px', { letterSpacing: '0px' }],
      },
     },
   },
   plugins: [],
 }