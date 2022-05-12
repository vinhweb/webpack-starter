module.exports = {
  purge: ['./dist/*.html'],
  content: ["./src/**/*.{html,js}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    fontFamily: {
      'sans': ['Poppins', 'sans-serif'],
      'body': ['Poppins', 'sans-serif'],
      'button': ['DM Sans', 'sans-serif'],
      'headline': ['Bungee', 'sans-serif']
    },
    extend: {
      colors: {
        'primary': '#3772FF',
        'neutral_dark': '#23262F',
        'neutral_light': '#FCFCFD',
        'neutral_6': '#E6E8EC',
      },
      spacing: {
        '128': '32rem',
        '140': '35rem',
        '160': '40rem',
      },
      aspectRatio: {
        '4/3': '4 / 3',
        '3/2': '3/2',
      },
    },
  },
  plugins: [],
}
