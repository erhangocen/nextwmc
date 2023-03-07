"use client"
import { useFormik } from 'formik';
import {React, useState, useEffect} from 'react'
import * as Yup from 'yup';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styles from "../styles/Contact.module.css"
import Zoom from 'react-reveal/Zoom';
import { Fade } from 'react-reveal';
import { FaArrowRight, FaFacebookF, FaLinkedinIn, FaTwitter, FaPaperPlane } from 'react-icons/fa';

export default function Contact() {

    useEffect(() => {
        emailjs.init("UZ-eKuYAITBeAmIdC")
    }, []);

    const formik = useFormik({
        initialValues : {
            name:"",
            email:"",
            message:""
        },
        validationSchema: Yup.object({
            name: Yup.string()
                .max(30, 'Must be 30 characters or less')
                .required('Required Field'),
            email: Yup.string()
                .email('Invalid email address')
                .required('Required Field'),
            message: Yup.string()
                .required('Required Field'),
        }),
        onSubmit: values => {
            var obje = Object.assign({},values)
            const id = toast.loading("Your message is sending",
                {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                    style : {fontSize: "13.5px"},
                }
            )
            emailjs.send("service_g50jkpb","template_1i8e1xh",obje).then(
                res => {
                    formik.resetForm()
                    toast.update(id,{
                        type: "success",
                        render: 'Your message has been sent',
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "dark",
                        style : {fontSize: "13.5px"},
                        isLoading: false
                        }
                    )

                },
                er => {
                    console.log(er)
                    toast.update(id, {
                        render: er.text,
                        type: "error",
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "dark",
                        style : {fontSize: "13.5px"},
                        isLoading: false
                        }
                    )
                }
            ) 
        }
    })
    

  return (
    <section className={`${styles.contact} section`} id="contact">
        <Fade>
        <h2 className={`${styles.contacts__title} section__title`}>Contact Us</h2>
        <div className={`${styles.contact__container} container grid`}>
            <div className={styles.contact__content}>
                <div className={styles.contact__info}>
                    <div className={styles.contact__card}>
                        <FaFacebookF className={`${styles.contact__card_icon}`}/>
                        <h3 className={styles.contact__card_title}>Facebook</h3>
                        <span className={styles.contact__card_data}>westernmoneyconsulting</span>

                        <a href="https://www.facebook.com/westernmoneyconsulting/"
                            target="_blank" className={styles.contact__button}>
                            <div className={styles.contact__write_us}>
                                <span>Contact Us </span>
                                <FaArrowRight  className={`${styles.contact__button_icon}`}/>
                            </div>
                        </a>
                    </div>
                    <div className={styles.contact__card}>
                        <FaLinkedinIn className={`${styles.contact__card_icon}`}/>
                        <h3 className={styles.contact__card_title}>Linkedin</h3>
                        <span className={styles.contact__card_data}>company/western-money-consulting</span>

                        <a href="https://www.linkedin.com/company/western-money-consulting" target="_blank"
                            className={styles.contact__button}>
                            <div className={styles.contact__write_us}>
                                <span>Contact Us </span>
                                <FaArrowRight  className={`${styles.contact__button_icon}`}/>
                            </div>
                             
                        </a>
                    </div>
                    <div className={styles.contact__card}>
                        <FaTwitter className={`${styles.contact__card_icon}`}/>
                        <h3 className={styles.contact__card_title}>Twitter</h3>
                        <span className={styles.contact__card_data}>@WMC_Agency</span>
                        <a href="https://twitter.com/WMC_Agency" target="_blank" className={styles.contact__button}>
                        <div className={styles.contact__write_us}>
                                <span>Contact Us </span>
                                <FaArrowRight  className={`${styles.contact__button_icon}`}/>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
            
            <div className={styles.contact__content}>
                <h3 className={styles.s}>Write us your idea!</h3>
                <form action="" className={styles.contact__form} onSubmit={formik.handleSubmit}>
                    <div className={styles.contact__form_div}>
                        <label className={styles.contact__form_tag}>
                            <span>Name and Surname</span>
                        </label>
                        <input 
                            type="text" 
                            placeholder="Insert your name" 
                            className={styles.contact__form_input} 
                            id='name'
                            name='name'
                            onChange={formik.handleChange}
                            value={formik.values.name}
                            onBlur={formik.handleBlur}
                        />
                        {formik.touched.name && formik.errors.name ? (           
                        <div className={styles.contact__form_error}>{formik.errors.name}</div>
                        ):null}
                    </div>
                    <div className={styles.contact__form_div}>
                        <label htmlFor="email" className={styles.contact__form_tag}>Mail</label>
                        <input 
                            type="email" 
                            placeholder="Insert your email" 
                            className={styles.contact__form_input} 
                            id='email'
                            name='email'
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.email}
                        />
                        {formik.touched.email && formik.errors.email ? (           
                        <div className={styles.contact__form_error }>{formik.errors.email}</div>
                        ):null}
                    </div>
                    <div className={`${styles.contact__form_area} ${styles.contact__form_div}`}>
                        <label className={styles.contact__form_tag}>
                            <span>Message</span> </label>
                        <textarea 
                            name="message" 
                            placeholder="How can we help you -?" 
                            cols="30" 
                            rows="10" 
                            id='message' 
                            className={styles.contact__form_input}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.message}
                        />
                        {formik.touched.message && formik.errors.message ? (           
                        <div className={`${styles.contact__form_error} ${styles.contact__form_error_textarea}` }>
                            {formik.errors.message}
                        </div>
                        ):null}
                    </div>
                    <span>
                        <button type='submit' className={"button"} id='contact-button'>
                            <div style={{display:"flex"}}>
                            <span>Send Mail</span>
                            <FaArrowRight className={"button__icon button__flex mt-2"}/>
                            </div>
                        </button>
                    </span> 
                </form>
            </div>
        </div>
        </Fade>
    </section>
  )
}
