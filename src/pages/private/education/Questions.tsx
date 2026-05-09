import MetaTag from '@/components/templates/MetaTag'
import { Question } from '@/helpers/image'
import React, { Fragment } from 'react'
import { LiaQuestionSolid } from 'react-icons/lia'

export default function Questions() {
  return (
    <Fragment>
      <MetaTag title="Questions" />
      <div className='p-2'>
        <div className="flex-between border-bottom text-brand-primary">
          <span className="font-size-20">Questions</span>
          <LiaQuestionSolid />
        </div>
        <div className='mt-3 border rounded-3 shadow w-100 vh-80'>
          <iframe
            src={Question}
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
