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

    const docDefinition = {
      pageMargins: [0, 0, 0, 0],
      pageSize: {
        width: 300,
        height: 'auto',
      },
      content: [],
    };

    const firstName = createPdfDto.name.split(' ')[0];
    const lastName = createPdfDto.name.split(' ').slice(1).join(' ');

    docDefinition.content.push(
      {
        image: pages[0],
        fit: [300, 420],
      },
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
        text: createPdfDto.email ? createPdfDto.email : null,
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
    if (pages.length > 1) {
      pages.slice(1).forEach((page, index) => {
        docDefinition.content.push({
          image: page,
          fit: [300, 420],
          pageBreak: 'after',
        });
      });
    }

    // pages.slice(1).forEach((page, index) => {
    //   docDefinition.content.push({
    //     image: page,
    //     fit: [300, 420],
    //     pageBreak: index < pages.length - 1 ? 'after' : null,
    //   });
    // });

    //   // Define document content using orgConfig
    //const docContent = [];
    // pages.forEach((page, index) => {
    //   docDefinition.content.push({
    //     image: page,
    //     fit: [300, 420],
    //     pageBreak: index < pages.length - 1 ? 'after' : null,
    //   });
    // });

    //console.log(docContent, 'docContent');

    // const docDefinition = {
    //   pageMargins: [0, 0, 0, 0],
    //   pageSize: {
    //     width: 300,
    //     height: 'auto',
    //   },
    //   content: docContent,
    // };

    const options = {};
    return printer.createPdfKitDocument(docDefinition, options);
  }
}
