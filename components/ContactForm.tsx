import axios from 'axios';
import { VFC } from 'react';
import { useForm } from 'react-hook-form';
import router from 'next/router'

import SubmitButton from './SubmitButton';

interface InputForm {
    title: string;
    name: string;
    email: string;
    text: string;
}

const ContactForm: VFC<{}> = () => {
    const { register, handleSubmit, errors } = useForm<InputForm>();
    
    const onSubmit = async (data: Record<string, string>) => {
        data['form-name'] = 'contact-form';
        await axios.post('/', new URLSearchParams(data))
            .then(() => router.push('/success'))
            .catch(err => console.log(err))
    }

    return (
        <article className='flex h-auto py-24 bg-gradient-to-b from-navy-300 via-navy-200 to-navy-500 dark:from-gray-800 dark:via-gray-600 dark:to-gray-700'>
            <form 
                className='flex flex-col p-10 sm:w-3/4 mx-auto mt-6 space-y-5 text-center bg-gray-100 border-0.2 border-white rounded-lg shadow-xl bg-opacity-30'
                method='post'
                data-netlify='true'
                onSubmit={handleSubmit(onSubmit)}
            >
                <input type="hidden" name="form-name" value="contact" />
                <h1 className='text-2xl font-semibold text-navy-800 dark:text-gray-200'>お問い合わせ</h1>
                <input 
                    className='p-2 border-2 border-gray-600 rounded-md dark:bg-gray-300'
                    name='name'
                    placeholder='名前'
                    ref={register({ required: true })}
                />
                {errors.name && <span className='text-red-600'>必須項目です！</span>}
                <input 
                    className='p-2 border-2 border-gray-600 rounded-md dark:bg-gray-300'
                    name='email'
                    placeholder='Eメールアドレス'
                    ref={register({ required: true })}
                />
                {errors.email && <span className='text-red-600'>必須項目です！</span>}
                <input
                    className='p-2 border-2 border-gray-600 rounded-md dark:bg-gray-300'
                    name='title'
                    placeholder='タイトル'
                    ref={register({ required: true })}
                />
                {errors.title && <span className='text-red-600'>必須項目です！</span>}
                <textarea
                    className='p-2 border-2 border-gray-600 rounded-md dark:bg-gray-300' 
                    name='text'
                    placeholder='本文'
                    rows={10}
                    ref={register({ required: true })}
                />
                {errors.text && <span className='text-red-600'>必須項目です！</span>}

                <SubmitButton 
                    text='送信'
                />
            </form>
        </article>
    );
}
export default ContactForm;