import MetaTag from '@/components/templates/MetaTag'
import { Biology_English, Biology_Tamil, Zoology_English, Zoology_Tamil } from '@/helpers/image';
import React, { Fragment, useState } from 'react'
import { SlNotebook } from 'react-icons/sl';
import { HStack, SegmentedControl } from 'rsuite';
const bookTab = [
  {
    label: (
      <HStack>
        <SlNotebook />
        <span>Biology - Tamil</span>
      </HStack>
    ),
    value: 'biotamil'
  },
  {
    label: (
      <HStack>
        <SlNotebook />
        <span>Biology - English</span>
      </HStack>
    ),
    value: 'bioenglish'
  },
  {
    label: (
      <HStack>
        <SlNotebook />
        <span>Zoology - Tamil</span>
      </HStack>
    ),
    value: 'ziotamil'
  },
  {
    label: (
      <HStack>
        <SlNotebook />
        <span>Zoology - English</span>
      </HStack>
    ),
    value: 'zioenglish'
  },
];
export default function Ebook() {
  const [book, setBook] = useState('biotamil');
  return (
    <Fragment>
      <MetaTag title="Ebook" />
      <div className='p-2'>
        <div className="flex-between border-bottom text-brand-primary">
          <span className="font-size-20">Ebook</span>
          <SegmentedControl
            value={book}
            data={bookTab}
            onChange={(e: any) => { setBook(e) }}
          />
        </div>
        <div className='mt-3 border rounded-3 shadow w-100 vh-80'>
          <iframe
            src={
              book == 'biotamil' ? Biology_Tamil :
                book == 'bioenglish' ? Biology_English :
                  book == 'ziotamil' ? Zoology_Tamil : Zoology_English}
            title="Ebook"
            width="100%"
            height="100%"
            style={{ border: "none" }}
            className='border rounded-3 shadow w-100 vh-80'
          />
        </div>
      </div>
    </Fragment>
  )
}
