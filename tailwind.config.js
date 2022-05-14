module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      textColor: {
        primary: 'var(--primery-color)',
        secondary: 'var(--second-color)',
        nav:{
          text: 'var(--nav-text-color)'
        },
        small: 'var(--text-color)',
        'black-three': 'var(--black-three)'
      },
      backgroundColor: {
        primary: 'var(--primery-color)',
        secondary: 'var(--second-color)',
        nav:{
          text: 'var(--nav-text-color)'
        },
      },
      borderColor: {
        primary: 'var(--primery-color)',
        secondary: 'var(--second-color)',
        nav:{
          text: 'var(--nav-text-color)'
        },
        divide: 'var(--divide-color)'
      },
      dropShadow: {
        '3xl': '0 35px 35px rgba(0, 0, 0, 0.25)',
        '4xl': [
           ' rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px'
        ]
      }

    },
  },
  plugins: [],
}
