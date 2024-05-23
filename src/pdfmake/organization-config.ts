import * as path from 'path';
//const projectRoot = path.resolve(__dirname, '..', '..', 'src');

export const organizationConfig = {
  mediciti: {
    fonts: {
      Roboto: {
        //normal: path.join(__dirname, 'template', 'Roboto-Regular.ttf'),
        normal: path.join(
          __dirname,
          '..',
          '..',
          'src',
          'pdfmake',
          'template',
          'Roboto-Regular.ttf',
        ),
      },
    },
    pages: [
      path.join(
        __dirname,
        '..',
        '..',
        'src',
        'pdfmake',
        'template',
        'medicity',
        'mediciti-01.jpg',
      ),
      path.join(
        __dirname,
        '..',
        '..',
        'src',
        'pdfmake',
        'template',
        'medicity',
        'mediciti-02.jpg',
      ),
      path.join(
        __dirname,
        '..',
        '..',
        'src',
        'pdfmake',
        'template',
        'medicity',
        'mediciti-03.jpg',
      ),
    ],
    textPositions: {
      name: { x: -130, y: 83 },
      lastName: { x: -130, y: 93 },
      location: { x: -130, y: 119 },
      email: { x: -130, y: 151 },
      dob: { x: 150, y: 83 },
      phone: { x: 150, y: 118 },
    },
    //checkMarkPath: 'path/to/black-checkmark.png',
  },
  redcrossbharatpur: {
    fonts: {
      Roboto: {
        normal: path.join(
          __dirname,
          '..',
          '..',
          'src',
          'pdfmake',
          'template',
          'Roboto-Regular.ttf',
        ),
      },
    },
    pages: [
      path.join(
        __dirname,
        '..',
        '..',
        'src',
        'pdfmake',
        'template',
        'redcross-bharatpur',
        'red-cross.jpg',
      ),
    ],
    textPositions: {
      name: { x: -130, y: 82 },
      lastName: { x: -100, y: 82 },
      location: { x: -130, y: 115 },
      email: { x: 80, y: 123 },
      dob: { x: 120, y: 82 },
      phone: { x: 120, y: 93 },
    },
    //checkMarkPath: 'path/to/other-checkmark.png',
  },

  grande: {
    fonts: {
      Roboto: {
        normal: path.join(
          __dirname,
          '..',
          '..',
          'src',
          'pdfmake',
          'template',
          'Roboto-Regular.ttf',
        ),
      },
    },
    pages: [
      path.join(
        __dirname,
        '..',
        '..',
        'src',
        'pdfmake',
        'template',
        'grande',
        'grande-01.png',
      ),

      path.join(
        __dirname,
        '..',
        '..',
        'src',
        'pdfmake',
        'template',
        'grande',
        'grande-02.jpg',
      ),
    ],
    textPositions: {
      name: { x: -130, y: 93 },
      lastName: { x: -130, y: 103 },
      location: { x: -130, y: 119 },
      email: { x: -130, y: 138 },
      dob: { x: 120, y: 93 },
      phone: { x: 120, y: 114 },
    },
    //checkMarkPath: 'path/to/other-checkmark.png',
  },
  frontline: {
    fonts: {
      Roboto: {
        normal: path.join(
          __dirname,
          '..',
          '..',
          'src',
          'pdfmake',
          'template',
          'Roboto-Regular.ttf',
        ),
      },
    },
    pages: [
      path.join(
        __dirname,
        '..',
        '..',
        'src',
        'pdfmake',
        'template',
        'frontline',
        'frontline-1.png',
      ),

      path.join(
        __dirname,
        '..',
        '..',
        'src',
        'pdfmake',
        'template',
        'frontline',
        'frontline-2.png',
      ),
      path.join(
        __dirname,
        '..',
        '..',
        'src',
        'pdfmake',
        'template',
        'frontline',
        'frontline-3.png',
      ),
    ],
    textPositions: {
      name: { x: -130, y: 93 },
      lastName: { x: -130, y: 103 },
      location: { x: -130, y: 119 },
      email: { x: -130, y: 138 },
      dob: { x: 120, y: 93 },
      phone: { x: 120, y: 114 },
    },
    //checkMarkPath: 'path/to/other-checkmark.png',
  },
  redcrosslalitpur: {
    fonts: {
      Roboto: {
        normal: path.join(
          __dirname,
          '..',
          '..',
          'src',
          'pdfmake',
          'template',
          'Roboto-Regular.ttf',
        ),
      },
    },
    pages: [
      path.join(
        __dirname,
        '..',
        '..',
        'src',
        'pdfmake',
        'template',
        'redcross-lalitpur',
        'lalitpur-redcross.png',
      ),
    ],
    textPositions: {
      name: { x: -130, y: 67 },
      lastName: { x: -100, y: 67 },
      location: { x: -130, y: 75 },
      email: { x: 80, y: 97 },
      dob: { x: 120, y: 67 },
      phone: { x: 120, y: 77 },
    },
    //che
  },

  prasuti: {
    fonts: {
      Roboto: {
        normal: path.join(
          __dirname,
          '..',
          '..',
          'src',
          'pdfmake',
          'template',
          'Roboto-Regular.ttf',
        ),
      },
    },
    pages: [
      path.join(
        __dirname,
        '..',
        '..',
        'src',
        'pdfmake',
        'template',
        'prasuti',
        'prasuti.png',
      ),
    ],
    textPositions: {
      name: { x: -180, y: 50 },
      lastName: { x: -150, y: 50 },
      location: { x: -200, y: 58 },
      email: { x: -188, y: 72 },
      dob: { x: -50, y: 45 },
      phone: { x: -188, y: 65 },
    },
  },
};
