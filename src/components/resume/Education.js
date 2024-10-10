import React from 'react'
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="B.Tech."
            subTitle="SRKR Engineering college(2022 -present)"
            result="8.82/10"
            des="Information Technology   ,   Bhimavaram"
          />
          <ResumeCard
            title="Intermediate"
            subTitle="Sri Chaitanya Junior College (2020 - 2022)"
            result="943/1000"
            des="Palakol"
          />
          <ResumeCard
            title="Secondary School Education"
            subTitle="Sun Shine School (2000)"
            result="507/600"
            des="Palakol"
          />
        </div>
      </div>
      {/* part Two */}

      
    </motion.div>
  );
}

export default Education