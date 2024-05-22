import * as path from 'path';
//const projectRoot = path.resolve(__dirname, '..', '..', 'src');

export const organizationConfig = {
  medicity: {
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
      name: { x: -130, y: 93 },
      lastName: { x: -130, y: 103 },
      location: { x: -130, y: 119 },
      email: { x: -130, y: 138 },
      dob: { x: 120, y: 93 },
      phone: { x: 120, y: 114 },
    },
    //checkMarkPath: 'path/to/black-checkmark.png',
  },
  redcross: {
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
        'redcross',
        'red-cross.jpg',
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
  // Add configurations for other organizations with their respective pages
};
