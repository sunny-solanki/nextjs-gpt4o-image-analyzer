"use client";
import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "Yup";
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
    });
    
  return (
    <div>
        <h1>Image Analyzer</h1>
        <form>
            <textarea name="text" {...formik.getFieldProps("text")}></textarea>
            <input name="image_url" {...formik.getFieldProps("image_url")}></input>
            <button>Get Response</button>
        </form>
    </div>
  )
};

export default Vision