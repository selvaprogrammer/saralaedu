import MetaTag from '@/components/templates/MetaTag'
import { Asses_Respiration, Question } from '@/helpers/image'
import React, { Fragment } from 'react'
import { VscServerProcess } from 'react-icons/vsc'
import DocViewer from "react-doc-viewer";

export default function Evaluation() {
  return (
    <Fragment>
          <MetaTag title="Evaluation" />
          <div className='p-2'>
            <div className="flex-between border-bottom text-brand-primary">
              <span className="font-size-20">Evaluation</span>
              <VscServerProcess />
            </div>
            <div className='mt-3 border rounded-3 shadow w-100 vh-80'>
              <DocViewer
                documents={[{uri:Asses_Respiration}]}
                style={{ border: "none" }}
                className='border rounded-3 shadow w-100 vh-80'
              />
            </div>
          </div>
        </Fragment>
  )
}
