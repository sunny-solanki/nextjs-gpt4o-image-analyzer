"use client";
import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { FaSpinnner, FaCheckCircle, FaExclamationCircle } from "react-icons/fa";

const Vision = () => {
    const [loading, setLoading ] = useState(false);
    const [error, setError ] = useState(null);
    const [response, setResponse ] = useState(null);
    
    const formik = useFormik({
        initialValues:{
            text: "",
            image_url: "",
        },
        validationSchema:Yup.object({
            text: Yup.string().required("Text is required"),
            image_url:Yup.string().url("Invalid URL").required("Image URL is required"),
        }),
        onSubmit: (values) => {
            console.log(values);
        },
    });
    
  return (
    <div>
        <h1>Image Analyzer</h1>
        <form onSubmit={formik.handleSubmit}>
            <textarea name="text" placeholder="Enter Text here" {...formik.getFieldProps("text")}></textarea>
            <input name="image_url" {...formik.getFieldProps("image_url")} placeholder="Enter image URL"/>
            <button type="submit">Get Response</button>
        </form>
    </div>
  )
};

export default Vision