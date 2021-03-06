import { VFC } from 'react';
import Markdown from 'markdown-to-jsx';

import { MyInfo, Stack } from '../types';
import SubTitle from './SubTitle';
import Title from './Title';

interface AboutMeProps {
    myInfo: MyInfo;
    skill: Stack[];
}

const AboutMe: VFC<AboutMeProps> = ({ myInfo, skill }) => {
    return (
        <div className='h-auto py-24 bg-gray-100 dark:bg-gray-900'>
            <section className='grid lg:grid-cols-2'>
                <section className='hidden max-w-2xl my-5 lg:block lg:mx-auto lg:mt-14'>
                    <img 
                        src={myInfo.image.url} 
                        alt="自己紹介の画像"
                        width='auto'
                        height='auto'
                        className='object-cover h-1/2'
                        loading='lazy'
                    />
                </section>
                <section>
                    <div className='mb-10 text-center'>
                        <Title title='About Me'/>
                    </div>
                    <SubTitle subTitle='出身地' />
                    <h2 className='py-4 mb-5 text-2xl text-center lg:text-left dark:text-gray-300'>
                        {myInfo.from}
                    </h2>
                    <SubTitle subTitle='説明' />
                    <Markdown className='mx-3 mb-5 prose-sm text-center whitespace-pre-wrap lg:text-left sm:prose-lg dark:text-gray-300'>
                        {myInfo.description}
                    </Markdown>
                    <SubTitle subTitle='趣味' />
                    <Markdown className='mx-3 mb-5 prose-sm text-center whitespace-pre-wrap lg:text-left sm:prose-lg dark:text-gray-300'>
                        {myInfo.hobby}
                    </Markdown>
                    <SubTitle subTitle='技術スタック'/>
                    <section className='text-center md:mt-5 lg:text-left'>
                        {skill.map(skill => (
                            <span 
                                key={skill.id}
                                className='inline-block p-2 mx-2 mt-3 mr-3 font-light tracking-widest text-gray-600 break-words bg-gray-200 rounded-lg dark:text-navy-900 dark:bg-gray-400'
                            >{skill.stack}</span>
                        ))}
                    </section>
                </section>
            </section>
        </div>
    );
}
export default AboutMe;