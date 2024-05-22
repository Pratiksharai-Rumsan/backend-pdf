import * as PdfPrinter from 'pdfmake';
import * as fs from 'fs';
import { Injectable } from '@nestjs/common';
import * as path from 'path';
import { organizationConfig } from './organization-config';

@Injectable()
export class PdfMakeService {
  generatePdf(createPdfDto) {
    const orgConfig = organizationConfig[createPdfDto.OrgName];

    const { fonts, pages, textPositions } = orgConfig;
    console.log(pages[0], 'checkpage');

    const printer = new PdfPrinter(fonts);
    const docContent = [];

    pages.forEach((page, index) => {
      docContent.push({
        image: page,
        fit: [300, 420],
        pageBreak: index < pages.length - 1 ? 'after' : null,
      });

      // Add overlay text only to the first page
      if (index === 0) {
        const firstName = createPdfDto.name.split(' ')[0];
        const lastName = createPdfDto.name.split(' ').slice(1).join(' ');

        docContent.push(
          {
            text: firstName,
            font: 'Roboto',
            alignment: 'center',
            fontSize: 4.5,
            absolutePosition: textPositions.name,
          },
          {
            text: lastName,
            font: 'Roboto',
            alignment: 'center',
            fontSize: 4.5,
            absolutePosition: textPositions.lastName,
          },
          {
            text: createPdfDto.location,
            font: 'Roboto',
            alignment: 'center',
            fontSize: 4.5,
            absolutePosition: textPositions.location,
          },
          {
            text: createPdfDto.email || '',
            font: 'Roboto',
            alignment: 'center',
            fontSize: 4.5,
            absolutePosition: textPositions.email,
          },
          {
            text: createPdfDto.dob,
            font: 'Roboto',
            alignment: 'center',
            fontSize: 4.5,
            absolutePosition: textPositions.dob,
          },
          {
            text: createPdfDto.phone,
            font: 'Roboto',
            alignment: 'center',
            fontSize: 4.5,
            absolutePosition: textPositions.phone,
          },
        );
      }
    });

    console.log('Document Content:', docContent);

    const docDefinition = {
      pageMargins: [0, 0, 0, 0],
      pageSize: {
        width: 300,
        height: 'auto',
      },
      content: docContent,
    };

    const options = {};
    return printer.createPdfKitDocument(docDefinition, options);
  }
}
